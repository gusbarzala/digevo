import React from 'react';
import { IMAGES, ScreenId } from '../data/digimonData';
import { useGame, GameMode } from '../context/GameContext';
import { ContextualHeader, DigimonImage, Icon, StatusFooter, TopIconMenu } from '../components/ArcadeShell';

const MODES: { id: GameMode; label: string; desc: string }[] = [
  {
    id: 'Historia',
    label: 'Historia',
    desc: 'Sigue la aventura de la Temporada 1 desde la Isla File.',
  },
  {
    id: 'Arcade',
    label: 'Arcade',
    desc: 'Combates rápidos contra Digimon salvajes y jefes.',
  },
  {
    id: 'Jefe',
    label: 'Jefe Final',
    desc: 'Desafía directo a Devimon, Myotismon o Apocalymon.',
  },
];

const QUICK_ZONES: { id: ScreenId; title: string; subtitle: string; icon: string; iconColor: string }[] = [
  { id: 'batalla', title: 'Batalla', subtitle: 'Digevol y ataques', icon: 'swords', iconColor: 'text-[#005CBA]' },
  { id: 'companeros', title: 'Compañeros', subtitle: '8 niños elegidos', icon: 'groups', iconColor: 'text-[#005CBA]' },
  { id: 'inventario', title: 'Inventario', subtitle: 'Joyas y objetos', icon: 'backpack', iconColor: 'text-[#005CBA]' },
  { id: 'villanos', title: 'Villanos', subtitle: 'Temporada 1', icon: 'skull', iconColor: 'text-[#BA1A1A]' },
];

export const JugarScreen: React.FC = () => {
  const { gameMode, setGameMode, navigate, sfx, getActivePartner, getPartnerCurrentEvo, challengeVillain } = useGame();
  const activeModeObj = MODES.find((m) => m.id === gameMode) || MODES[0];
  const partner = getActivePartner();
  const evo = getPartnerCurrentEvo(partner.id);

  const handlePlay = () => {
    if (gameMode === 'Jefe') {
      challengeVillain('apocalymon');
    } else {
      navigate('batalla');
    }
  };

  return (
    <div className="min-h-screen w-full max-w-md mx-auto px-6 py-4 flex flex-col justify-between gap-4">
      <ContextualHeader badge="MODO · JUGAR" backTo="inicio" backLabel="Volver al inicio" />
      <TopIconMenu active="jugar" />

      <main className="flex-1 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-headline text-[18px] leading-[26px] text-[#1A1600] uppercase">JUGAR</h1>
          <p className="font-body text-[14px] leading-[20px] font-medium text-[#3B2F00] text-pretty">
            Elige tu modo de aventura y salta al Mundo Digital con Tai y Agumon.
          </p>
        </div>

        {/* Active Partner Card */}
        <article className="bg-[#FFF0C6] text-[#1A1600] border-4 border-[#1A1600] rounded arcade-shadow p-2 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-14 h-14 shrink-0 overflow-hidden rounded-sm border-2 border-[#1A1600] bg-[#FFD400]">
              <DigimonImage
                src={evo.stage === 1 && partner.id === 'agumon' ? IMAGES.taiAgumonHero : evo.img}
                alt={`${partner.tamer} y ${evo.form} listos para jugar`}
                className="w-full h-full object-cover block"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <h2 className="font-title text-[16px] leading-[22px] font-bold text-[#1A1600] truncate">
                {partner.tamer} &amp; {evo.form}
              </h2>
              <p className="font-body text-[14px] leading-[20px] font-medium text-[#3B2F00] truncate">
                Equipo activo · Isla File
              </p>
            </div>
          </div>
          <div className="px-2 py-1 bg-[#FFE177] border-2 border-[#1A1600] rounded-sm shrink-0">
            <span className="font-mono text-[13px] leading-[18px] font-semibold text-[#1A1600] tabular-nums uppercase">
              NV. 0{evo.stage}
            </span>
          </div>
        </article>

        {/* Mode Selector Tabs */}
        <nav aria-label="Modos de juego" className="grid grid-cols-3 gap-1">
          {MODES.map((m) => {
            const isActive = m.id === gameMode;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => {
                  sfx('tap');
                  setGameMode(m.id);
                }}
                className={`px-2 py-1.5 border-2 border-[#1A1600] rounded font-label text-[12px] leading-[16px] font-bold transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-[#005CBA] text-white'
                    : 'bg-[#FFF0C6] text-[#1A1600] hover:bg-[#FFE177]'
                }`}
              >
                {m.label}
              </button>
            );
          })}
        </nav>

        {/* Primary Play CTA */}
        <button
          type="button"
          onClick={handlePlay}
          className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FF6B00] text-[#1A0800] border-4 border-[#1A1600] rounded arcade-shadow-lg font-headline text-[14px] leading-[20px] uppercase tracking-wider transition-transform duration-100 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1A1600] whitespace-nowrap"
        >
          <Icon name="play_arrow" />
          <span>¡A JUGAR!</span>
        </button>

        {/* Quick Access Destinations Grid */}
        <section aria-label="Zonas del juego" className="grid grid-cols-2 gap-2">
          {QUICK_ZONES.map((z) => (
            <button
              key={z.id}
              type="button"
              onClick={() => navigate(z.id)}
              className="bg-[#FFF0C6] text-[#1A1600] border-4 border-[#1A1600] rounded arcade-shadow-sm p-2 flex flex-col items-start gap-1 text-left transition-transform duration-100 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
            >
              <Icon name={z.icon} className={z.iconColor} />
              <span className="font-title text-[16px] leading-[22px] font-bold text-[#1A1600]">
                {z.title}
              </span>
              <span className="font-label text-[12px] leading-[16px] font-bold text-[#3B2F00]">
                {z.subtitle}
              </span>
            </button>
          ))}
        </section>
      </main>

      <StatusFooter message={`Modo ${activeModeObj.label}: ${activeModeObj.desc}`} />
    </div>
  );
};
