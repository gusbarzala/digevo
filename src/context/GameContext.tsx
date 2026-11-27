import React, { createContext, useContext, useState, useCallback } from 'react';
import {
  ScreenId,
  PARTNERS,
  VILLAINS,
  INITIAL_INVENTORY,
  INITIAL_SWAP_PAIRS,
  InventoryItem,
  SwapPair,
  CrestData,
  PartnerData,
  PartnerEvolutionOption,
  VillainData,
} from '../data/digimonData';
import { playArcadeSound, SoundEffect } from '../utils/sound';

export type GameMode = 'Historia' | 'Arcade' | 'Jefe';

interface GameContextValue {
  screen: ScreenId;
  navigate: (next: ScreenId) => void;
  goBack: (fallback: ScreenId) => void;
  muted: boolean;
  toggleMute: () => void;
  sfx: (effect: SoundEffect) => void;

  tamerName: string;
  loggedIn: boolean;
  loginTamer: (username: string) => void;

  gameMode: GameMode;
  setGameMode: (mode: GameMode) => void;

  activePartnerId: string;
  setActivePartnerId: (id: string) => void;
  partnerStages: Record<string, number>;
  setPartnerStage: (partnerId: string, stage: number) => void;
  getActivePartner: () => PartnerData;
  getPartnerCurrentEvo: (partnerId: string) => PartnerEvolutionOption;

  activeEnemyId: string;
  enemyHp: number;
  enemyMaxHp: number;
  playerHp: number;
  playerMaxHp: number;
  playerEp: number;
  playerEpMax: number;
  playerShield: number;
  turn: number;
  battleLog: string;
  getActiveEnemy: () => VillainData;
  challengeVillain: (villainId: string) => void;
  executeQuickBattleMove: (moveType: 'attack' | 'special' | 'defend' | 'evolve') => void;
  applyExternalAttack: (attackerName: string, moveName: string, baseDmg: number) => void;
  resetBattle: () => void;

  activeCrest: string | null;
  activateCrest: (crest: CrestData) => void;

  inventory: InventoryItem[];
  totalBagItems: number;
  useItem: (itemId: string) => { ok: boolean; message: string };
  toggleEquipItem: (itemId: string) => { equipped: boolean; message: string };
  atkChipBonus: number;
  crestReady: boolean;

  swapPairs: SwapPair[];
  swapRow: (pairId: string) => { leftName: string; rightName: string };
}

const GameContext = createContext<GameContextValue | null>(null);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [screen, setScreen] = useState<ScreenId>('inicio');
  const [history, setHistory] = useState<ScreenId[]>([]);
  const [muted, setMuted] = useState(false);

  const [tamerName, setTamerName] = useState('Tai_01');
  const [loggedIn, setLoggedIn] = useState(false);
  const [gameMode, setGameMode] = useState<GameMode>('Historia');

  const [activePartnerId, setActivePartnerId] = useState('gabumon');
  const [partnerStages, setPartnerStages] = useState<Record<string, number>>(() => {
    const map: Record<string, number> = {};
    PARTNERS.forEach((p) => {
      map[p.id] = 1;
    });
    return map;
  });

  const [activeEnemyId, setActiveEnemyId] = useState('devimon');
  const [enemyHp, setEnemyHp] = useState(120);
  const [enemyMaxHp, setEnemyMaxHp] = useState(120);
  const [playerHp, setPlayerHp] = useState(95);
  const [playerMaxHp, setPlayerMaxHp] = useState(100);
  const [playerEp, setPlayerEp] = useState(40);
  const [playerEpMax, setPlayerEpMax] = useState(50);
  const [playerShield, setPlayerShield] = useState(0);
  const [turn, setTurn] = useState(1);
  const [battleLog, setBattleLog] = useState('¡Gabumon está listo! Elige tu próximo movimiento.');

  const [activeCrest, setActiveCrest] = useState<string | null>(null);
  const [inventory, setInventory] = useState<InventoryItem[]>(INITIAL_INVENTORY);
  const [swapPairs, setSwapPairs] = useState<SwapPair[]>(INITIAL_SWAP_PAIRS);

  const sfx = useCallback(
    (effect: SoundEffect) => {
      playArcadeSound(effect, muted);
    },
    [muted]
  );

  const toggleMute = useCallback(() => {
    setMuted((prev) => {
      const next = !prev;
      if (!next) {
        playArcadeSound('tap', false);
      }
      return next;
    });
  }, []);

  const navigate = useCallback(
    (next: ScreenId) => {
      setScreen((curr) => {
        if (curr === next) return curr;
        setHistory((h) => [...h.slice(-12), curr]);
        return next;
      });
      playArcadeSound('tap', muted);
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      }
    },
    [muted]
  );

  const goBack = useCallback(
    (fallback: ScreenId) => {
      playArcadeSound('tap', muted);
      if (history.length > 0) {
        const prev = history[history.length - 1];
        setHistory((h) => h.slice(0, -1));
        setScreen(prev);
      } else {
        setScreen(fallback);
      }
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      }
    },
    [history, muted]
  );

  const loginTamer = useCallback(
    (username: string) => {
      setTamerName(username);
      setLoggedIn(true);
      playArcadeSound('victory', muted);
    },
    [muted]
  );

  const getActivePartner = useCallback(() => {
    return PARTNERS.find((p) => p.id === activePartnerId) || PARTNERS[1];
  }, [activePartnerId]);

  const getPartnerCurrentEvo = useCallback(
    (partnerId: string) => {
      const partner = PARTNERS.find((p) => p.id === partnerId) || PARTNERS[0];
      const stage = partnerStages[partnerId] || 1;
      return partner.evolutions.find((e) => e.stage === stage) || partner.evolutions[0];
    },
    [partnerStages]
  );

  const setPartnerStage = useCallback(
    (partnerId: string, stage: number) => {
      setPartnerStages((prev) => ({ ...prev, [partnerId]: stage }));
      playArcadeSound('evolve', muted);
    },
    [muted]
  );

  const getActiveEnemy = useCallback(() => {
    return VILLAINS.find((v) => v.id === activeEnemyId) || VILLAINS[0];
  }, [activeEnemyId]);

  const atkChipBonus = inventory.find((i) => i.id === 'chip-fuerza')?.equipped ? 15 : 0;
  const crestReady = Boolean(inventory.find((i) => i.id === 'emblema-amistad')?.equipped);

  const challengeVillain = useCallback(
    (villainId: string) => {
      const v = VILLAINS.find((item) => item.id === villainId) || VILLAINS[0];
      const p = getActivePartner();
      const evo = getPartnerCurrentEvo(p.id);
      setActiveEnemyId(v.id);
      setEnemyMaxHp(v.maxHp);
      setEnemyHp(v.maxHp);
      setPlayerMaxHp(p.maxHp);
      setPlayerHp(p.maxHp);
      setPlayerEpMax(p.maxEp);
      setPlayerEp(p.maxEp);
      setPlayerShield(0);
      setTurn(1);
      setBattleLog(`¡${evo.form} desafía a ${v.name} (${v.arc})!`);
      playArcadeSound('villain', muted);
      setHistory((h) => [...h.slice(-12), screen]);
      setScreen('batalla');
    },
    [getActivePartner, getPartnerCurrentEvo, muted, screen]
  );

  const resetBattle = useCallback(() => {
    const enemy = getActiveEnemy();
    const partner = getActivePartner();
    setEnemyHp(enemy.maxHp);
    setEnemyMaxHp(enemy.maxHp);
    setPlayerHp(partner.maxHp);
    setPlayerMaxHp(partner.maxHp);
    setPlayerEp(partner.maxEp);
    setPlayerEpMax(partner.maxEp);
    setPlayerShield(0);
    setTurn(1);
    setBattleLog(`¡Nueva ronda! ${enemy.name} regresa al combate.`);
    playArcadeSound('tap', muted);
  }, [getActiveEnemy, getActivePartner, muted]);

  const executeQuickBattleMove = useCallback(
    (moveType: 'attack' | 'special' | 'defend' | 'evolve') => {
      const enemy = getActiveEnemy();
      const partner = getActivePartner();
      const evo = getPartnerCurrentEvo(partner.id);

      if (enemyHp <= 0) {
        resetBattle();
        return;
      }

      if (moveType === 'defend') {
        const nextEp = Math.min(playerEpMax, playerEp + 10);
        setPlayerEp(nextEp);
        setPlayerShield((s) => s + 15);
        setTurn((t) => t + 1);
        setBattleLog(`${evo.form} activó Escudo (+15 DEF) y recuperó +10 PE.`);
        playArcadeSound('shield', muted);
        return;
      }

      let dmg = 18 + atkChipBonus;
      let epCost = 0;
      let msg = `¡${evo.form} usó Golpe Rápido e hizo ${dmg} de daño!`;

      if (moveType === 'special') {
        dmg = evo.atk + 16 + atkChipBonus;
        epCost = 15;
        msg = `¡${evo.move} impactó con fuerza! ${dmg} de daño.`;
      } else if (moveType === 'evolve') {
        dmg = evo.atk + 27 + atkChipBonus;
        epCost = crestReady ? 15 : 25;
        msg = `¡Energía Digivice al máximo! Ataque crítico de ${dmg}.`;
      }

      if (playerEp < epCost) {
        setBattleLog('¡Sin energía suficiente! Usa ATACAR o ESCUDO.');
        playArcadeSound('villain', muted);
        return;
      }

      const nextEnemyHp = Math.max(0, enemyHp - dmg);
      setEnemyHp(nextEnemyHp);
      setPlayerEp(Math.max(0, playerEp - epCost));
      setTurn((t) => t + 1);

      if (nextEnemyHp === 0) {
        setBattleLog(`¡Victoria! ${evo.form} derrotó a ${enemy.name}.`);
        playArcadeSound('victory', muted);
      } else {
        // Enemy counterattack mitigated by shield
        const rawCounter = Math.max(4, Math.floor(enemy.atk * 0.55));
        const absorbed = Math.min(playerShield, rawCounter);
        const netCounter = rawCounter - absorbed;
        setPlayerShield((s) => Math.max(0, s - absorbed));
        setPlayerHp((hp) => Math.max(10, hp - netCounter));
        setBattleLog(`${msg} ${enemy.name} contraatacó (-${netCounter} PS).`);
        playArcadeSound(moveType === 'evolve' ? 'evolve' : 'attack', muted);
      }
    },
    [
      atkChipBonus,
      crestReady,
      enemyHp,
      getActiveEnemy,
      getActivePartner,
      getPartnerCurrentEvo,
      muted,
      playerEp,
      playerEpMax,
      playerShield,
      resetBattle,
    ]
  );

  const applyExternalAttack = useCallback(
    (attackerName: string, moveName: string, baseDmg: number) => {
      const enemy = getActiveEnemy();
      const totalDmg = baseDmg + atkChipBonus;
      const nextEnemyHp = Math.max(0, enemyHp - totalDmg);
      setEnemyHp(nextEnemyHp);
      setTurn((t) => t + 1);
      if (nextEnemyHp === 0) {
        setBattleLog(`¡Victoria! ${attackerName} usó ${moveName} (${totalDmg} daño) y derrotó a ${enemy.name}.`);
        playArcadeSound('victory', muted);
      } else {
        setBattleLog(`¡${attackerName} lanzó ${moveName} e hizo ${totalDmg} de daño a ${enemy.name}!`);
        playArcadeSound('attack', muted);
      }
    },
    [atkChipBonus, enemyHp, getActiveEnemy, muted]
  );

  const activateCrest = useCallback(
    (crest: CrestData) => {
      setActiveCrest(crest.crest);
      if (crest.defBonus > 0) {
        setPlayerShield((s) => s + crest.defBonus);
      }
      if (crest.hpBonus > 0) {
        setPlayerHp((hp) => Math.min(playerMaxHp, hp + crest.hpBonus));
      }
      if (crest.epBonus > 0) {
        setPlayerEp((ep) => Math.min(playerEpMax, ep + crest.epBonus));
      }
      setBattleLog(`¡Joya de ${crest.crest} (${crest.child}) activada! ${crest.boost}.`);
      playArcadeSound('shield', muted);
    },
    [muted, playerEpMax, playerMaxHp]
  );

  const useItem = useCallback(
    (itemId: string) => {
      const item = inventory.find((i) => i.id === itemId);
      if (!item || item.qty <= 0) {
        return { ok: false, message: `No te quedan unidades de ${item?.name || 'objeto'}.` };
      }
      setInventory((prev) =>
        prev.map((i) => (i.id === itemId ? { ...i, qty: Math.max(0, i.qty - 1) } : i))
      );
      if (item.hpHeal) {
        setPlayerHp((hp) => Math.min(playerMaxHp, hp + item.hpHeal!));
      }
      if (item.epHeal) {
        setPlayerEp((ep) => Math.min(playerEpMax, ep + item.epHeal!));
      }
      playArcadeSound('heal', muted);
      return { ok: true, message: `${item.name}: ${item.effectText}.` };
    },
    [inventory, muted, playerEpMax, playerMaxHp]
  );

  const toggleEquipItem = useCallback(
    (itemId: string) => {
      const item = inventory.find((i) => i.id === itemId);
      if (!item) return { equipped: false, message: '' };
      const nextEquipped = !item.equipped;
      setInventory((prev) =>
        prev.map((i) => (i.id === itemId ? { ...i, equipped: nextEquipped } : i))
      );
      playArcadeSound(nextEquipped ? 'shield' : 'tap', muted);
      return {
        equipped: nextEquipped,
        message: nextEquipped ? `${item.name}: ${item.effectText}.` : `${item.name} guardado en mochila.`,
      };
    },
    [inventory, muted]
  );

  const totalBagItems = inventory.reduce((sum, item) => sum + item.qty, 0);

  const swapRow = useCallback(
    (pairId: string) => {
      let result = { leftName: '', rightName: '' };
      setSwapPairs((prev) =>
        prev.map((row) => {
          if (row.id !== pairId) return row;
          result = { leftName: row.right.name, rightName: row.left.name };
          // Also swap active partner if one of them is currently active
          if (activePartnerId === row.left.partnerId) {
            setActivePartnerId(row.right.partnerId);
          } else if (activePartnerId === row.right.partnerId) {
            setActivePartnerId(row.left.partnerId);
          }
          return {
            ...row,
            left: row.right,
            right: row.left,
          };
        })
      );
      playArcadeSound('evolve', muted);
      return result;
    },
    [activePartnerId, muted]
  );

  return (
    <GameContext.Provider
      value={{
        screen,
        navigate,
        goBack,
        muted,
        toggleMute,
        sfx,
        tamerName,
        loggedIn,
        loginTamer,
        gameMode,
        setGameMode,
        activePartnerId,
        setActivePartnerId,
        partnerStages,
        setPartnerStage,
        getActivePartner,
        getPartnerCurrentEvo,
        activeEnemyId,
        enemyHp,
        enemyMaxHp,
        playerHp,
        playerMaxHp,
        playerEp,
        playerEpMax,
        playerShield,
        turn,
        battleLog,
        getActiveEnemy,
        challengeVillain,
        executeQuickBattleMove,
        applyExternalAttack,
        resetBattle,
        activeCrest,
        activateCrest,
        inventory,
        totalBagItems,
        useItem,
        toggleEquipItem,
        atkChipBonus,
        crestReady,
        swapPairs,
        swapRow,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export function useGame(): GameContextValue {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be used inside GameProvider');
  return ctx;
}
