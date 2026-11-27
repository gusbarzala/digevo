import React, { useState } from 'react';
import { AGUMON_FORMS, IMAGES } from '../data/digimonData';
import { useGame } from '../context/GameContext';
import { ContextualHeader, DigimonImage, StatusFooter } from '../components/ArcadeShell';

const KIDS = [
  { kid: 'Tai', partner: 'Agumon', img: IMAGES.taiKid, alt: 'Tai Kamiya' },
  { kid: 'Mimi', partner: 'Palmon', img: IMAGES.mimiKid, alt: 'Mimi Tachikawa' },
  { kid: 'Sora', partner: 'Biyomon', img: IMAGES.soraKid, alt: 'Sora Takenouchi' },
];

export const DigevolScreen: React.FC = () => {
  const { navigate, sfx, setActivePartnerId, setPartnerStage } = useGame();
  const [selectedKid, setSelectedKid] = useState('Tai');
  const [selectedForm, setSelectedForm] = useState(AGUMON_FORMS[2]); // AGUMON
  const [status, setStatus] = useState('Agumon seleccionado. Toca otra evolución para cambiar.');

  return (
    <div className="min-h-screen w-full max-w-md mx-auto px-6 py-4 flex flex-col justify-between gap-4">
      <ContextualHeader badge="DIGEVOL · AGUMON" backTo="batalla" backLabel="Volver a batalla" />

      <main className="flex-1 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h1 className="font-headline text-[18px] leading-[26px] text-[#1A1600] uppercase">
              LÍNEA AGUMON
            </h1>
            <p className="font-body text-[14px] leading-[20px] font-medium text-[#3B2F00] text-pretty">
              Todos los nombres y evoluciones de Agumon. Toca uno para verlo.
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate('lineas')}
            className="shrink-0 px-2.5 py-1.5 bg-[#FF6B00] text-[#1A0800] border-2 border-[#1A1600] rounded arcade-shadow-sm font-label text-[11px] font-bold uppercase whitespace-nowrap"
          >
            Otras líneas
          </button>
        </div>

        {/* Niños Elegidos: Tai, Mimi, Sora */}
        <section aria-label="Niños elegidos" className="grid grid-cols-3 gap-1">
          {KIDS.map((k) => {
            const active = selectedKid === k.kid;
            return (
              <button
                key={k.kid}
                type="button"
                onClick={() => {
                  sfx('tap');
                  setSelectedKid(k.kid);
                  setStatus(`Niño elegido: ${k.kid} (Compañero: ${k.partner}).`);
                }}
                className={`border-4 border-[#1A1600] rounded arcade-shadow-sm p-1 flex flex-col items-center gap-1 transition-colors ${
                  active ? 'bg-[#005CBA] text-white' : 'bg-[#FFF0C6] text-[#1A1600]'
                }`}
              >
                <div className="w-14 h-14 overflow-hidden rounded-sm border-2 border-[#1A1600] bg-[#FFD400]">
                  <DigimonImage src={k.img} alt={k.alt} className="w-full h-full object-cover block" />
                </div>
                <span className="font-label text-[12px] leading-[16px] font-bold uppercase">
                  {k.kid}
                </span>
              </button>
            );
          })}
        </section>

        {/* Active Preview Card */}
        <article className="bg-[#FFF0C6] text-[#1A1600] border-4 border-[#1A1600] rounded arcade-shadow p-4 flex items-center gap-4">
          <div className="w-20 h-20 shrink-0 overflow-hidden rounded-sm border-2 border-[#1A1600] bg-[#FFD400]">
            <DigimonImage
              src={selectedForm.img}
              alt={selectedForm.name}
              className="w-full h-full object-cover block"
            />
          </div>
          <div className="flex flex-col gap-1 min-w-0">
            <span className="font-mono text-[13px] leading-[18px] font-semibold text-[#005CBA] uppercase tabular-nums">
              {selectedForm.stage}
            </span>
            <h2 className="font-headline text-[16px] leading-[24px] text-[#1A1600] truncate">
              {selectedForm.name}
            </h2>
            <p className="font-body text-[14px] leading-[20px] font-medium text-[#3B2F00]">
              Ataque: {selectedForm.atk}
            </p>
          </div>
        </article>

        {/* All Agumon Forms Grid */}
        <section className="grid grid-cols-2 gap-2">
          {AGUMON_FORMS.map((form) => {
            const active = selectedForm.name === form.name;
            return (
              <button
                key={form.name}
                type="button"
                onClick={() => {
                  setSelectedForm(form);
                  setActivePartnerId('agumon');
                  // Sync stage if in main 5 stages
                  const stageMap: Record<string, number> = {
                    AGUMON: 1,
                    GREYMON: 2,
                    METALGREYMON: 3,
                    WARGREYMON: 4,
                    OMNIMON: 5,
                  };
                  if (stageMap[form.name]) {
                    setPartnerStage('agumon', stageMap[form.name]);
                  } else {
                    sfx('evolve');
                  }
                  setStatus(`¡Digievolución lista: ${form.name}!`);
                }}
                className={`px-2 py-2 border-4 border-[#1A1600] rounded arcade-shadow-sm font-label text-[12px] leading-[16px] font-bold transition-transform duration-100 active:translate-x-0.5 active:translate-y-0.5 ${
                  form.colSpan ? 'col-span-2 text-center' : 'text-left'
                } ${
                  active
                    ? 'bg-[#005CBA] text-white'
                    : 'bg-[#FFF0C6] text-[#1A1600] hover:bg-[#FFE177]'
                }`}
              >
                {form.label}
              </button>
            );
          })}
        </section>
      </main>

      <StatusFooter message={status} />
    </div>
  );
};
