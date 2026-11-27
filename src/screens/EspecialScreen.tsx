import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { ContextualHeader, DigimonImage, Icon, StatusFooter } from '../components/ArcadeShell';

export const EspecialScreen: React.FC = () => {
  const { swapPairs, swapRow, activePartnerId, setActivePartnerId, sfx } = useGame();
  const [status, setStatus] = useState('Toca las flechas para reemplazar un compañero por otro.');

  return (
    <div className="min-h-screen w-full max-w-md mx-auto px-6 py-4 flex flex-col justify-between gap-4">
      <ContextualHeader badge="ESPECIAL · CAMBIO" backTo="batalla" backLabel="Volver a batalla" />

      <main className="flex-1 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-headline text-[18px] leading-[26px] text-[#1A1600] uppercase">
            REEMPLAZO DIGI
          </h1>
          <p className="font-body text-[14px] leading-[20px] font-medium text-[#3B2F00] text-pretty">
            Intercambia un compañero por otro (ej. Agumon por Palmon).
          </p>
        </div>

        <section className="flex flex-col gap-2">
          {swapPairs.map((row) => {
            const leftActive = activePartnerId === row.left.partnerId;
            const rightActive = activePartnerId === row.right.partnerId;

            return (
              <article
                key={row.id}
                className="bg-[#FFF0C6] text-[#1A1600] border-4 border-[#1A1600] rounded arcade-shadow p-2 grid grid-cols-[1fr_auto_1fr] items-center gap-1"
              >
                <button
                  type="button"
                  onClick={() => {
                    sfx('tap');
                    setActivePartnerId(row.left.partnerId);
                    setStatus(`${row.left.name} (${row.left.kid}) elegido como compañero activo.`);
                  }}
                  className={`flex items-center gap-1 min-w-0 p-1 rounded text-left transition-colors ${
                    leftActive ? 'bg-[#D7E3FF] ring-2 ring-[#005CBA]' : 'hover:bg-[#FFE177]'
                  }`}
                >
                  <div className="w-9 h-9 shrink-0 overflow-hidden rounded-sm border-2 border-[#1A1600] bg-[#FFD400]">
                    <DigimonImage
                      src={row.left.img}
                      alt={row.left.name}
                      className="w-full h-full object-cover block"
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-title text-[12px] leading-[16px] font-bold text-[#1A1600] truncate">
                      {row.left.name}
                    </span>
                    <span className="font-mono text-[12px] leading-[16px] font-semibold text-[#3B2F00] truncate">
                      {row.left.kid}
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const res = swapRow(row.id);
                    setStatus(`¡Reemplazo hecho! ${res.leftName} ↔ ${res.rightName}.`);
                  }}
                  aria-label={`Intercambiar ${row.left.name} y ${row.right.name}`}
                  className={`shrink-0 inline-flex items-center justify-center w-9 h-9 border-2 border-[#1A1600] rounded arcade-shadow-sm transition-transform duration-100 active:translate-x-0.5 active:translate-y-0.5 ${
                    row.btnColor === 'primary'
                      ? 'bg-[#005CBA] text-white'
                      : 'bg-[#FF6B00] text-[#1A0800]'
                  }`}
                >
                  <Icon name="swap_horiz" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    sfx('tap');
                    setActivePartnerId(row.right.partnerId);
                    setStatus(`${row.right.name} (${row.right.kid}) elegido como compañero activo.`);
                  }}
                  className={`flex items-center justify-end gap-1 min-w-0 p-1 rounded text-right transition-colors ${
                    rightActive ? 'bg-[#D7E3FF] ring-2 ring-[#005CBA]' : 'hover:bg-[#FFE177]'
                  }`}
                >
                  <div className="flex flex-col items-end min-w-0">
                    <span className="font-title text-[12px] leading-[16px] font-bold text-[#1A1600] truncate">
                      {row.right.name}
                    </span>
                    <span className="font-mono text-[12px] leading-[16px] font-semibold text-[#3B2F00] truncate">
                      {row.right.kid}
                    </span>
                  </div>
                  <div className="w-9 h-9 shrink-0 overflow-hidden rounded-sm border-2 border-[#1A1600] bg-[#FFD400]">
                    <DigimonImage
                      src={row.right.img}
                      alt={row.right.name}
                      className="w-full h-full object-cover block"
                    />
                  </div>
                </button>
              </article>
            );
          })}
        </section>
      </main>

      <StatusFooter message={status} />
    </div>
  );
};
