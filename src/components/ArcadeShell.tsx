import React, { useState } from 'react';
import { ScreenId } from '../data/digimonData';
import { useGame } from '../context/GameContext';

export const Icon: React.FC<{ name: string; className?: string }> = ({ name, className = '' }) => (
  <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
    {name}
  </span>
);

export const DigimonImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className = '' }) => {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-[#FFE177] text-[#1A1600] p-1 text-center ${className}`}
      >
        <Icon name="pets" className="text-xl text-[#005CBA]" />
        <span className="font-mono text-[10px] leading-tight truncate max-w-full">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
};

const NAV_ITEMS: { id: ScreenId; label: string; icon: string }[] = [
  { id: 'inicio', label: 'Inicio', icon: 'home' },
  { id: 'jugar', label: 'Jugar', icon: 'play_arrow' },
  { id: 'batalla', label: 'Batalla', icon: 'swords' },
  { id: 'companeros', label: 'Compañeros', icon: 'groups' },
  { id: 'inventario', label: 'Inventario', icon: 'backpack' },
  { id: 'villanos', label: 'Villanos', icon: 'skull' },
];

export const TopIconMenu: React.FC<{ active: ScreenId }> = ({ active }) => {
  const { navigate } = useGame();

  return (
    <nav aria-label="Menú principal" className="grid grid-cols-6 gap-1">
      {NAV_ITEMS.map((item) => {
        const isActive = item.id === active;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => navigate(item.id)}
            aria-label={item.label}
            title={item.label}
            aria-current={isActive ? 'page' : undefined}
            className={`inline-flex items-center justify-center h-10 border-2 border-[#1A1600] rounded arcade-shadow-sm transition-transform duration-100 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1A1600] ${
              isActive
                ? 'bg-[#005CBA] text-white'
                : 'bg-[#FFF0C6] text-[#1A1600] hover:bg-[#FFE177]'
            }`}
          >
            <Icon name={item.icon} />
          </button>
        );
      })}
    </nav>
  );
};

export const ContextualHeader: React.FC<{
  badge: string;
  backTo: ScreenId;
  backLabel: string;
}> = ({ badge, backTo, backLabel }) => {
  const { navigate, muted, toggleMute } = useGame();

  return (
    <header className="flex items-center justify-between gap-2">
      <button
        type="button"
        onClick={() => navigate(backTo)}
        aria-label={backLabel}
        className="inline-flex items-center justify-center w-11 h-11 bg-[#FFF0C6] text-[#1A1600] border-4 border-[#1A1600] rounded arcade-shadow-sm transition-transform duration-100 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1A1600]"
      >
        <Icon name="arrow_back" />
      </button>

      <div className="inline-flex items-center gap-1 px-4 py-1 bg-[#FFF0C6] border-4 border-[#1A1600] rounded arcade-shadow-sm">
        <span className="font-mono text-[13px] leading-[18px] font-semibold text-[#1A1600] tabular-nums uppercase whitespace-nowrap">
          {badge}
        </span>
      </div>

      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? 'Activar sonido' : 'Silenciar sonido'}
        className="inline-flex items-center justify-center w-11 h-11 bg-[#FFF0C6] text-[#1A1600] border-4 border-[#1A1600] rounded arcade-shadow-sm transition-transform duration-100 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1A1600]"
      >
        <Icon name={muted ? 'volume_off' : 'volume_up'} />
      </button>
    </header>
  );
};

export const StatusFooter: React.FC<{ message: string }> = ({ message }) => (
  <footer
    aria-live="polite"
    className="bg-[#FFF0C6] border-4 border-[#1A1600] rounded arcade-shadow-sm px-4 py-2"
  >
    <p className="font-body text-[14px] leading-[20px] font-medium text-[#1A1600] text-pretty">
      {message}
    </p>
  </footer>
);
