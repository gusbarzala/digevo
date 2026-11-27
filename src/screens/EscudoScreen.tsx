import React, { useState } from 'react';
import { CRESTS, IMAGES } from '../data/digimonData';
import { useGame } from '../context/GameContext';
import { ContextualHeader, DigimonImage, StatusFooter } from '../components/ArcadeShell';

export const EscudoScreen: React.FC = () => {
  const { activeCrest, activateCrest } = useGame();
  const [status, setStatus] = useState(
    activeCrest
      ? `Joya de ${activeCrest} activa en batalla.`
      : 'Selecciona cualquiera de las 8 joyas para activar el escudo.'
  );

  return (
    <div className="min-h-screen w-full max-w-md mx-auto px-6 py-4 flex flex-col justify-between gap-4">
      <ContextualHeader badge="ESCUDO · 8 JOYAS" backTo="batalla" backLabel="Volver a batalla" />

      <main className="flex-1 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-headline text-[18px] leading-[26px] text-[#1A1600] uppercase">
            LAS 8 JOYAS
          </h1>
          <p className="font-body text-[14px] leading-[20px] font-medium text-[#3B2F00] text-pretty">
            Emblemas de los 8 Niños Elegidos. Toca una joya para activar su escudo.
          </p>
        </div>

        {/* Uploaded Crests Showcase */}
        <figure className="bg-[#FFFBFF] border-4 border-[#1A1600] rounded arcade-shadow p-2">
          <DigimonImage
            src={IMAGES.crestsShowcase}
            alt="Joyas y emblemas de los 8 Niños Elegidos"
            className="w-full h-44 object-contain block rounded-sm"
          />
        </figure>

        <section className="grid grid-cols-2 gap-2">
          {CRESTS.map((crest) => {
            const isActive = activeCrest === crest.crest;
            return (
              <button
                key={crest.crest}
                type="button"
                onClick={() => {
                  activateCrest(crest);
                  setStatus(`¡Joya de ${crest.crest} (${crest.child}) activada! ${crest.boost}.`);
                }}
                className={`border-4 border-[#1A1600] rounded arcade-shadow p-2 flex flex-col items-start gap-1 text-left transition-transform duration-100 active:translate-x-0.5 active:translate-y-0.5 ${
                  isActive ? 'bg-[#D7E3FF]' : 'bg-[#FFF0C6] hover:bg-[#FFE177]'
                }`}
              >
                <div className="flex items-center justify-between w-full gap-1">
                  <div className="w-10 h-10 shrink-0 overflow-hidden rounded-sm border-2 border-[#1A1600] bg-[#FFD400]">
                    <DigimonImage
                      src={crest.img}
                      alt={`Emblema de ${crest.crest}`}
                      className="w-full h-full object-cover block"
                    />
                  </div>
                  <span className="font-mono text-[13px] leading-[18px] font-semibold text-[#3B2F00] uppercase">
                    {crest.child}
                  </span>
                </div>
                <span className="font-title text-[16px] leading-[22px] font-bold text-[#1A1600]">
                  {crest.crest}
                </span>
                <span className="font-label text-[12px] leading-[16px] font-bold text-[#005CBA] uppercase">
                  {crest.boost}
                </span>
              </button>
            );
          })}
        </section>
      </main>

      <StatusFooter message={status} />
    </div>
  );
};
