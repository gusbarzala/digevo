import React, { useState } from 'react';
import { ATTACK_MODES, IMAGES } from '../data/digimonData';
import { useGame } from '../context/GameContext';
import { ContextualHeader, DigimonImage, Icon, StatusFooter } from '../components/ArcadeShell';

export const AtacarScreen: React.FC = () => {
  const { applyExternalAttack, sfx, getActiveEnemy, enemyHp } = useGame();
  const enemy = getActiveEnemy();

  const [selectedId, setSelectedId] = useState<'BASE' | 'META' | 'WAR'>('BASE');
  const [display, setDisplay] = useState<{
    name: string;
    modeLabel: string;
    move: string;
    dmg: number;
    img: string;
  }>({
    name: ATTACK_MODES[0].name,
    modeLabel: ATTACK_MODES[0].modeLabel,
    move: ATTACK_MODES[0].move,
    dmg: ATTACK_MODES[0].dmg,
    img: ATTACK_MODES[0].img,
  });
  const [status, setStatus] = useState('Elige BASE, META o WAR y pulsa ATACAR.');

  const handleSelectMode = (mode: (typeof ATTACK_MODES)[number]) => {
    sfx('evolve');
    setSelectedId(mode.id as 'BASE' | 'META' | 'WAR');
    setDisplay({
      name: mode.name,
      modeLabel: mode.modeLabel,
      move: mode.move,
      dmg: mode.dmg,
      img: mode.img,
    });
    setStatus(`Transformado en ${mode.name}. ¡Listo para atacar!`);
  };

  const handleLaunchAttack = () => {
    if (selectedId === 'BASE') {
      const evoAttack = {
        name: 'GREYMON',
        modeLabel: 'EVO · ATQ 65',
        move: 'Mega Flama',
        dmg: 65,
        img: IMAGES.greymonEvo,
      };
      setDisplay(evoAttack);
      applyExternalAttack(evoAttack.name, evoAttack.move, evoAttack.dmg);
      setStatus(
        `¡Transformado en GREYMON! Lanzó Mega Flama e hizo 65 de daño a ${enemy.name}.`
      );
    } else {
      applyExternalAttack(display.name, display.move, display.dmg);
      setStatus(
        `¡${display.name} lanzó ${display.move} e hizo ${display.dmg} de daño a ${enemy.name}!`
      );
    }
  };

  return (
    <div className="min-h-screen w-full max-w-md mx-auto px-6 py-4 flex flex-col justify-between gap-4">
      <ContextualHeader badge="ATACAR · META / WAR" backTo="batalla" backLabel="Volver a batalla" />

      <main className="flex-1 flex flex-col justify-center gap-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h1 className="font-headline text-[18px] leading-[26px] text-[#1A1600] uppercase">
              MODO ATAQUE
            </h1>
            <p className="font-body text-[14px] leading-[20px] font-medium text-[#3B2F00] text-pretty">
              Un solo Digimon: transforma a Agumon en Meta o War para atacar.
            </p>
          </div>
          <span className="shrink-0 px-2 py-1 bg-[#FFF0C6] border-2 border-[#1A1600] rounded-sm font-mono text-[12px] font-semibold text-[#1A1600] tabular-nums">
            {enemy.name}: {enemyHp} PS
          </span>
        </div>

        {/* Featured Digimon Card */}
        <article className="bg-[#FFF0C6] text-[#1A1600] border-4 border-[#1A1600] rounded arcade-shadow p-4 flex flex-col items-center gap-4 text-center">
          <div className="w-40 h-40 overflow-hidden rounded-sm border-4 border-[#1A1600] bg-[#FFD400]">
            <DigimonImage
              src={display.img}
              alt={display.name}
              className="w-full h-full object-cover block"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <span className="font-mono text-[13px] leading-[18px] font-semibold text-[#005CBA] uppercase tabular-nums">
              {display.modeLabel}
            </span>
            <h2 className="font-headline text-[16px] leading-[24px] text-[#1A1600]">
              {display.name}
            </h2>
            <p className="font-body text-[14px] leading-[20px] font-medium text-[#3B2F00]">
              Técnica: {display.move}
            </p>
          </div>

          {/* Transform into Meta / War */}
          <div className="grid grid-cols-3 gap-1 w-full">
            {ATTACK_MODES.map((m) => {
              const active = selectedId === m.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => handleSelectMode(m)}
                  className={`px-1 py-2 border-2 border-[#1A1600] rounded font-label text-[12px] leading-[16px] font-bold uppercase transition-colors ${
                    active
                      ? 'bg-[#005CBA] text-white'
                      : 'bg-[#FFE177] text-[#1A1600] hover:bg-[#FFD400]'
                  }`}
                >
                  {m.label}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleLaunchAttack}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#FF6B00] text-[#1A0800] border-4 border-[#1A1600] rounded arcade-shadow-sm font-headline text-[14px] leading-[20px] uppercase tracking-wider transition-transform duration-100 active:translate-x-0.5 active:translate-y-0.5"
          >
            <Icon name="bolt" />
            <span>ATACAR</span>
          </button>
        </article>
      </main>

      <StatusFooter message={status} />
    </div>
  );
};
