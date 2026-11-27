import React, { useState } from 'react';
import { VILLAINS } from '../data/digimonData';
import { useGame } from '../context/GameContext';
import { ContextualHeader, DigimonImage, StatusFooter, TopIconMenu } from '../components/ArcadeShell';

export const VillanosScreen: React.FC = () => {
  const { challengeVillain, navigate } = useGame();
  const [status] = useState('Elige un villano de la Temporada 1 para iniciar el duelo.');

  return (
    <div className="min-h-screen w-full max-w-md mx-auto px-6 py-4 flex flex-col justify-between gap-4">
      <ContextualHeader badge="TEMP. 01 · JEFES" backTo="inicio" backLabel="Volver a inicio" />
      <TopIconMenu active="villanos" />

      <main className="flex-1 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h1 className="font-headline text-[18px] leading-[26px] text-[#1A1600] uppercase">
              VILLANOS · T1
            </h1>
            <p className="font-body text-[14px] leading-[20px] font-medium text-[#3B2F00] text-pretty">
              Jefes principales de cada arco de Digimon Adventure (Temporada 1).
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate('villano-poder')}
            className="shrink-0 px-2.5 py-1.5 bg-[#BA1A1A] text-white border-2 border-[#1A1600] rounded arcade-shadow-sm font-label text-[11px] font-bold uppercase whitespace-nowrap"
          >
            Poderes
          </button>
        </div>

        <section className="flex flex-col gap-2">
          {VILLAINS.map((v) => (
            <article
              key={v.id}
              className="bg-[#FFF0C6] text-[#1A1600] border-4 border-[#1A1600] rounded arcade-shadow p-4 flex items-center justify-between gap-2"
            >
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-11 h-11 shrink-0 overflow-hidden rounded-sm border-2 border-[#1A1600] bg-[#FFD400]">
                  <DigimonImage
                    src={v.img}
                    alt={v.name}
                    className="w-full h-full object-cover block"
                  />
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h2 className="font-title text-[16px] leading-[22px] font-bold text-[#1A1600] truncate">
                      {v.name}
                    </h2>
                    <span className="font-mono text-[13px] leading-[18px] font-semibold text-[#3B2F00] tabular-nums shrink-0">
                      {v.level}
                    </span>
                  </div>
                  <p className="font-body text-[14px] leading-[20px] font-medium text-[#3B2F00] text-pretty">
                    {v.arc}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => challengeVillain(v.id)}
                className={`shrink-0 px-4 py-2 border-2 border-[#1A1600] rounded font-label text-[12px] leading-[16px] font-bold uppercase transition-transform duration-100 active:translate-x-0.5 active:translate-y-0.5 ${
                  v.primaryButton
                    ? 'bg-[#005CBA] text-white'
                    : 'bg-[#FF6B00] text-[#1A0800]'
                }`}
              >
                RETAR
              </button>
            </article>
          ))}
        </section>
      </main>

      <StatusFooter message={status} />
    </div>
  );
};
