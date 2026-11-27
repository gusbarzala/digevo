import React from 'react';
import { useGame } from '../context/GameContext';
import { ContextualHeader, DigimonImage, Icon, TopIconMenu } from '../components/ArcadeShell';

export const BatallaScreen: React.FC = () => {
  const {
    navigate,
    turn,
    enemyHp,
    enemyMaxHp,
    playerHp,
    playerMaxHp,
    playerEp,
    playerEpMax,
    playerShield,
    battleLog,
    getActiveEnemy,
    getActivePartner,
    getPartnerCurrentEvo,
    executeQuickBattleMove,
    resetBattle,
  } = useGame();

  const enemy = getActiveEnemy();
  const partner = getActivePartner();
  const evo = getPartnerCurrentEvo(partner.id);

  const turnFormatted = turn < 10 ? `0${turn}` : `${turn}`;
  const enemyPct = Math.max(0, Math.min(100, (enemyHp / enemyMaxHp) * 100));
  const playerHpPct = Math.max(0, Math.min(100, (playerHp / playerMaxHp) * 100));
  const playerEpPct = Math.max(0, Math.min(100, (playerEp / playerEpMax) * 100));

  return (
    <div className="min-h-screen w-full max-w-md mx-auto px-6 py-4 flex flex-col justify-between gap-4">
      <ContextualHeader badge={`BATALLA · TURNO ${turnFormatted}`} backTo="inicio" backLabel="Volver a inicio" />
      <TopIconMenu active="batalla" />

      <main className="flex-1 flex flex-col justify-center gap-4">
        {/* Enemy Card */}
        <article className="bg-[#FFF0C6] text-[#1A1600] border-4 border-[#1A1600] rounded arcade-shadow p-4 grid grid-cols-12 items-center gap-4">
          <div className="col-span-8 flex flex-col gap-1">
            <div className="flex items-center justify-between gap-1">
              <h2 className="font-headline text-[15px] leading-[22px] text-[#1A1600] uppercase truncate">
                {enemy.name}
              </h2>
              <span className="font-mono text-[13px] leading-[18px] font-semibold text-[#3B2F00] tabular-nums shrink-0">
                {enemy.level}
              </span>
            </div>
            <p className="font-label text-[12px] leading-[16px] font-bold text-[#3B2F00] uppercase truncate">
              {enemy.shortArc}
            </p>

            <div className="flex flex-col gap-1 pt-1">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[13px] leading-[18px] font-semibold text-[#1A1600] tabular-nums">
                  PS
                </span>
                <span className="font-mono text-[13px] leading-[18px] font-semibold text-[#1A1600] tabular-nums">
                  {enemyHp} / {enemyMaxHp}
                </span>
              </div>
              <div className="w-full h-3 bg-[#FFE177] border-2 border-[#1A1600] rounded-sm overflow-hidden">
                <div
                  className="h-full bg-[#BA1A1A] transition-transform duration-200 origin-left"
                  style={{ transform: `scaleX(${enemyPct / 100})` }}
                />
              </div>
            </div>
          </div>

          <div className="col-span-4 overflow-hidden rounded-sm border-2 border-[#1A1600] bg-[#FFF0C6]">
            <DigimonImage
              src={enemy.img}
              alt={`${enemy.name} en posición de batalla`}
              className="w-full aspect-square object-cover block"
            />
          </div>
        </article>

        {/* Player Partner Card */}
        <article className="bg-[#FFF0C6] text-[#1A1600] border-4 border-[#1A1600] rounded arcade-shadow p-4 grid grid-cols-12 items-center gap-4">
          <div className="col-span-4 overflow-hidden rounded-sm border-2 border-[#1A1600] bg-[#FFF0C6]">
            <DigimonImage
              src={evo.img}
              alt={`${evo.form} listo para atacar`}
              className="w-full aspect-square object-cover block"
            />
          </div>

          <div className="col-span-8 flex flex-col gap-1">
            <div className="flex items-center justify-between gap-1">
              <h2 className="font-headline text-[15px] leading-[22px] text-[#1A1600] uppercase truncate">
                {evo.form}
              </h2>
              <span className="font-mono text-[13px] leading-[18px] font-semibold text-[#3B2F00] tabular-nums shrink-0">
                NV. 0{evo.stage + 1}
              </span>
            </div>
            <p className="font-label text-[12px] leading-[16px] font-bold text-[#3B2F00] uppercase truncate">
              {partner.tamerTitle}: {partner.tamer} · Monstruo{playerShield > 0 ? ` · DEF +${playerShield}` : ''}
            </p>

            <div className="flex flex-col gap-1 pt-1">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[13px] leading-[18px] font-semibold text-[#1A1600] tabular-nums">
                  PS
                </span>
                <span className="font-mono text-[13px] leading-[18px] font-semibold text-[#1A1600] tabular-nums">
                  {playerHp} / {playerMaxHp}
                </span>
              </div>
              <div className="w-full h-3 bg-[#FFE177] border-2 border-[#1A1600] rounded-sm overflow-hidden">
                <div
                  className="h-full bg-[#005CBA] transition-transform duration-200 origin-left"
                  style={{ transform: `scaleX(${playerHpPct / 100})` }}
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="font-mono text-[13px] leading-[18px] font-semibold text-[#3B2F00] tabular-nums">
                  PE
                </span>
                <span className="font-mono text-[13px] leading-[18px] font-semibold text-[#3B2F00] tabular-nums">
                  {playerEp} / {playerEpMax}
                </span>
              </div>
              <div className="w-full h-2.5 bg-[#FFE177] border-2 border-[#1A1600] rounded-sm overflow-hidden">
                <div
                  className="h-full bg-[#FF6B00] transition-transform duration-200 origin-left"
                  style={{ transform: `scaleX(${playerEpPct / 100})` }}
                />
              </div>
            </div>
          </div>
        </article>

        {/* Combat Log Banner + Quick Turn Action */}
        <section
          aria-live="polite"
          className="bg-[#FFF0C6] border-4 border-[#1A1600] rounded arcade-shadow-sm px-4 py-2 flex items-center justify-between gap-2"
        >
          <p className="font-body text-[14px] leading-[20px] font-medium text-[#1A1600] text-pretty">
            {battleLog}
          </p>
          {enemyHp === 0 ? (
            <button
              type="button"
              onClick={resetBattle}
              className="shrink-0 px-3 py-1.5 bg-[#005CBA] text-white border-2 border-[#1A1600] rounded font-label text-[12px] font-bold uppercase whitespace-nowrap"
            >
              Revancha
            </button>
          ) : (
            <button
              type="button"
              onClick={() => executeQuickBattleMove('attack')}
              className="shrink-0 px-3 py-1.5 bg-[#FF6B00] text-[#1A0800] border-2 border-[#1A1600] rounded font-label text-[12px] font-bold uppercase whitespace-nowrap"
            >
              Golpe
            </button>
          )}
        </section>
      </main>

      {/* 2x2 Arcade Action Grid */}
      <footer className="grid grid-cols-2 gap-2 pb-1">
        <button
          type="button"
          onClick={() => navigate('digevol')}
          className="inline-flex items-center justify-center gap-1 px-2 py-4 bg-[#005CBA] text-white border-4 border-[#1A1600] rounded arcade-shadow font-headline text-[12px] leading-[16px] uppercase tracking-wide transition-transform duration-100 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1A1600] whitespace-nowrap"
        >
          <Icon name="auto_awesome" />
          <span>DIGIEVOL</span>
        </button>

        <button
          type="button"
          onClick={() => navigate('atacar')}
          className="inline-flex items-center justify-center gap-1 px-2 py-4 bg-[#FF6B00] text-[#1A0800] border-4 border-[#1A1600] rounded arcade-shadow font-headline text-[12px] leading-[16px] uppercase tracking-wide transition-transform duration-100 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1A1600] whitespace-nowrap"
        >
          <Icon name="bolt" />
          <span>ATACAR</span>
        </button>

        <button
          type="button"
          onClick={() => navigate('escudo')}
          className="inline-flex items-center justify-center gap-1 px-2 py-4 bg-[#FFF0C6] text-[#1A1600] border-4 border-[#1A1600] rounded arcade-shadow font-headline text-[12px] leading-[16px] uppercase tracking-wide transition-transform duration-100 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1A1600] whitespace-nowrap"
        >
          <Icon name="shield" />
          <span>ESCUDO</span>
        </button>

        <button
          type="button"
          onClick={() => navigate('especial')}
          className="inline-flex items-center justify-center gap-1 px-2 py-4 bg-[#FFF0C6] text-[#1A1600] border-4 border-[#1A1600] rounded arcade-shadow font-headline text-[12px] leading-[16px] uppercase tracking-wide transition-transform duration-100 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1A1600] whitespace-nowrap"
        >
          <Icon name="swap_horiz" />
          <span>ESPECIAL</span>
        </button>
      </footer>
    </div>
  );
};
