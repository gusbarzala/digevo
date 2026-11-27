import React, { useState } from 'react';
import { PARTNERS } from '../data/digimonData';
import { useGame } from '../context/GameContext';
import { ContextualHeader, DigimonImage, StatusFooter, TopIconMenu } from '../components/ArcadeShell';

export const CompanerosScreen: React.FC = () => {
  const {
    partnerStages,
    setPartnerStage,
    activePartnerId,
    setActivePartnerId,
    navigate,
    sfx,
  } = useGame();
  const [status, setStatus] = useState('Toca el botón de cualquier evolución para transformar.');

  return (
    <div className="min-h-screen w-full max-w-md mx-auto px-6 py-4 flex flex-col justify-between gap-4">
      <ContextualHeader badge="NIÑOS ELEGIDOS · 08" backTo="inicio" backLabel="Volver a inicio" />
      <TopIconMenu active="companeros" />

      <main className="flex-1 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h1 className="font-headline text-[18px] leading-[26px] text-[#1A1600] uppercase">
              DIGIEVOLUCIONES
            </h1>
            <p className="font-body text-[14px] leading-[20px] font-medium text-[#3B2F00] text-pretty">
              Toca cualquier evolución para transformar a cada compañero.
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate('lineas')}
            className="shrink-0 px-2.5 py-1.5 bg-[#FF6B00] text-[#1A0800] border-2 border-[#1A1600] rounded arcade-shadow-sm font-label text-[11px] font-bold uppercase whitespace-nowrap"
          >
            Líneas
          </button>
        </div>

        <section className="flex flex-col gap-4">
          {PARTNERS.map((partner) => {
            const currentStage = partnerStages[partner.id] || 1;
            const activeEvo =
              partner.evolutions.find((e) => e.stage === currentStage) || partner.evolutions[0];
            const isSelected = activePartnerId === partner.id;

            return (
              <article
                key={partner.id}
                className="bg-[#FFF0C6] text-[#1A1600] border-4 border-[#1A1600] rounded arcade-shadow p-4 flex flex-col gap-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-12 h-12 shrink-0 overflow-hidden rounded-sm border-2 border-[#1A1600] bg-[#FFD400]">
                      <DigimonImage
                        src={activeEvo.img}
                        alt={`${activeEvo.form} de ${partner.tamer}`}
                        className="w-full h-full object-cover block"
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <h2 className="font-title text-[16px] leading-[22px] font-bold text-[#1A1600] truncate">
                        {activeEvo.form}
                      </h2>
                      <p className="font-body text-[14px] leading-[20px] font-medium text-[#3B2F00]">
                        {partner.tamerTitle}: {partner.tamer}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        sfx('tap');
                        setActivePartnerId(partner.id);
                        setStatus(`${activeEvo.form} (${partner.tamer}) seleccionado para batalla.`);
                      }}
                      className={`px-2 py-1 border-2 border-[#1A1600] rounded-sm font-mono text-[11px] font-semibold uppercase ${
                        isSelected
                          ? 'bg-[#005CBA] text-white'
                          : 'bg-[#FFF0C6] text-[#1A1600] hover:bg-[#FFE177]'
                      }`}
                    >
                      {isSelected ? 'ACTIVO' : 'ELEGIR'}
                    </button>
                    <span className="px-2 py-1 bg-[#FFE177] border-2 border-[#1A1600] rounded-sm font-mono text-[13px] leading-[18px] font-semibold text-[#1A1600] tabular-nums">
                      FASE {currentStage}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-1">
                  {partner.evolutions.map((evo) => {
                    const active = evo.stage === currentStage;
                    return (
                      <button
                        key={evo.stage}
                        type="button"
                        onClick={() => {
                          setPartnerStage(partner.id, evo.stage);
                          setActivePartnerId(partner.id);
                          setStatus(`${partner.tamer}: ¡Transformado en ${evo.form} (FASE ${evo.stage})!`);
                        }}
                        className={`px-2 py-1 border-2 border-[#1A1600] rounded font-label text-[12px] leading-[16px] font-bold text-center transition-transform duration-100 active:translate-x-0.5 active:translate-y-0.5 ${
                          evo.stage === 5 ? 'col-span-2' : ''
                        } ${
                          active
                            ? 'bg-[#005CBA] text-white'
                            : 'bg-[#FFE177] text-[#1A1600] hover:bg-[#FFD400]'
                        }`}
                      >
                        {evo.label}
                      </button>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </section>
      </main>

      <StatusFooter message={status} />
    </div>
  );
};
