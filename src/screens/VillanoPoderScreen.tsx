import React, { useState } from 'react';
import { VILLAINS } from '../data/digimonData';
import { useGame } from '../context/GameContext';
import { ContextualHeader, DigimonImage, Icon, StatusFooter } from '../components/ArcadeShell';

type MonsterState = 'activo' | 'eliminado' | 'congelado';

const TAB_ORDER = ['myotismon', 'devimon', 'etemon', 'amos-oscuros', 'apocalymon'];

export const VillanoPoderScreen: React.FC = () => {
  const { sfx } = useGame();
  const [selectedId, setSelectedId] = useState('myotismon');
  const [states, setStates] = useState<MonsterState[]>(['activo', 'activo', 'activo']);
  const [status, setStatus] = useState('Elige un villano y pulsa ELIMINAR, RESTAURAR o PAUSAR.');

  const villain = VILLAINS.find((v) => v.id === selectedId) || VILLAINS[2];

  const handleSelectVillain = (id: string) => {
    sfx('tap');
    const nextV = VILLAINS.find((v) => v.id === id) || VILLAINS[2];
    setSelectedId(id);
    setStates(['activo', 'activo', 'activo']);
    setStatus(`${nextV.name} seleccionado: ${nextV.subPower}.`);
  };

  const handleEliminar = () => {
    sfx('villain');
    setStates(['eliminado', 'eliminado', states[2] || 'activo']);
    setStatus(
      `¡${villain.name} usó ELIMINAR contra ${villain.targets[0].name} y ${villain.targets[1].name}!`
    );
  };

  const handleRestaurar = () => {
    sfx('heal');
    setStates(['activo', 'activo', 'activo']);
    setStatus('¡Mujer Murciélago (LadyDevimon) restauró a todos los monstruos!');
  };

  const handlePausar = () => {
    sfx('shield');
    setStates((prev) => prev.map((s) => (s === 'eliminado' ? 'eliminado' : 'congelado')));
    setStatus('¡Monstruos digitales congelados y pausados!');
  };

  return (
    <div className="min-h-screen w-full max-w-md mx-auto px-6 py-4 flex flex-col justify-between gap-4">
      <ContextualHeader badge="PODER · VILLANO" backTo="villanos" backLabel="Volver a villanos" />

      <main className="flex-1 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-headline text-[18px] leading-[26px] text-[#1A1600] uppercase">
            CONTROL VILLANO
          </h1>
          <p className="font-body text-[14px] leading-[20px] font-medium text-[#3B2F00] text-pretty">
            Myotismon y Mujer Murciélago controlan a los monstruos digitales.
          </p>
        </div>

        {/* Villain Selector Tabs */}
        <nav aria-label="Villanos" className="flex flex-wrap gap-1">
          {TAB_ORDER.map((id) => {
            const v = VILLAINS.find((item) => item.id === id)!;
            const active = id === selectedId;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => handleSelectVillain(v.id)}
                className={`px-2 py-1 border-2 border-[#1A1600] rounded font-label text-[12px] leading-[16px] font-bold transition-colors ${
                  active
                    ? 'bg-[#005CBA] text-white'
                    : 'bg-[#FFF0C6] text-[#1A1600] hover:bg-[#FFE177]'
                }`}
              >
                {v.name}
              </button>
            );
          })}
        </nav>

        {/* Villain Duo Banner */}
        <article className="bg-[#FFF0C6] text-[#1A1600] border-4 border-[#1A1600] rounded arcade-shadow p-2 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-12 h-12 shrink-0 overflow-hidden rounded-sm border-2 border-[#1A1600] bg-[#FFD400]">
              <DigimonImage
                src={villain.img}
                alt={villain.name}
                className="w-full h-full object-cover block"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <h2 className="font-title text-[16px] leading-[22px] font-bold text-[#1A1600]">
                {villain.name}
              </h2>
              <p className="font-body text-[14px] leading-[20px] font-medium text-[#3B2F00] text-pretty">
                {villain.subPower}
              </p>
            </div>
          </div>
          <div className="px-2 py-1 bg-[#FFE177] border-2 border-[#1A1600] rounded-sm shrink-0">
            <span className="font-mono text-[13px] leading-[18px] font-semibold text-[#1A1600] uppercase">
              {villain.level}
            </span>
          </div>
        </article>

        {/* Target Digital Monsters List */}
        <section className="flex flex-col gap-1" aria-label="Monstruos digitales">
          {villain.targets.map((target, idx) => {
            const st = states[idx] || 'activo';
            const badgeStyle =
              st === 'eliminado'
                ? 'bg-[#BA1A1A] text-white'
                : st === 'congelado'
                ? 'bg-[#FFDBCC] text-[#351000]'
                : 'bg-[#D7E3FF] text-[#001B3E]';
            const badgeLabel =
              st === 'eliminado' ? 'ELIMINADO' : st === 'congelado' ? 'CONGELADO' : 'ACTIVO';

            return (
              <article
                key={target.name}
                className={`bg-[#FFF0C6] text-[#1A1600] border-4 border-[#1A1600] rounded arcade-shadow-sm px-4 py-2 flex items-center justify-between gap-2 transition-opacity ${
                  st === 'eliminado' ? 'opacity-60' : ''
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-11 h-11 shrink-0 overflow-hidden rounded-sm border-2 border-[#1A1600] bg-[#FFD400]">
                    <DigimonImage
                      src={target.img}
                      alt={target.name}
                      className="w-full h-full object-cover block"
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span
                      className={`font-title text-[16px] leading-[22px] font-bold text-[#1A1600] ${
                        st === 'eliminado' ? 'line-through' : ''
                      }`}
                    >
                      {target.name}
                    </span>
                    <span className="font-mono text-[13px] leading-[18px] font-semibold text-[#3B2F00]">
                      {target.meta}
                    </span>
                  </div>
                </div>
                <span
                  className={`shrink-0 px-2 py-1 border-2 border-[#1A1600] rounded-sm font-mono text-[13px] leading-[18px] font-semibold uppercase ${badgeStyle}`}
                >
                  {badgeLabel}
                </span>
              </article>
            );
          })}
        </section>

        {/* 3 Villain Power Buttons: Eliminar, Restaurar, Pausar */}
        <section className="flex flex-col gap-2">
          <button
            type="button"
            onClick={handleEliminar}
            className="w-full inline-flex items-center justify-between gap-2 px-4 py-2 bg-[#BA1A1A] text-white border-4 border-[#1A1600] rounded arcade-shadow transition-transform duration-100 active:translate-x-0.5 active:translate-y-0.5"
          >
            <span className="inline-flex items-center gap-2 shrink-0">
              <Icon name="delete_forever" />
              <span className="font-headline text-[14px] leading-[20px] uppercase">ELIMINAR</span>
            </span>
            <span className="font-label text-[12px] leading-[16px] font-bold text-right truncate">
              {villain.name} · {villain.targets[0].name} y {villain.targets[1].name}
            </span>
          </button>

          <button
            type="button"
            onClick={handleRestaurar}
            className="w-full inline-flex items-center justify-between gap-2 px-4 py-2 bg-[#005CBA] text-white border-4 border-[#1A1600] rounded arcade-shadow transition-transform duration-100 active:translate-x-0.5 active:translate-y-0.5"
          >
            <span className="inline-flex items-center gap-2 shrink-0">
              <Icon name="restart_alt" />
              <span className="font-headline text-[14px] leading-[20px] uppercase">RESTAURAR</span>
            </span>
            <span className="font-label text-[12px] leading-[16px] font-bold text-right truncate">
              Mujer Murciélago (LadyDevimon)
            </span>
          </button>

          <button
            type="button"
            onClick={handlePausar}
            className="w-full inline-flex items-center justify-between gap-2 px-4 py-2 bg-[#FF6B00] text-[#1A0800] border-4 border-[#1A1600] rounded arcade-shadow transition-transform duration-100 active:translate-x-0.5 active:translate-y-0.5"
          >
            <span className="inline-flex items-center gap-2 shrink-0">
              <Icon name="ac_unit" />
              <span className="font-headline text-[14px] leading-[20px] uppercase">PAUSAR</span>
            </span>
            <span className="font-label text-[12px] leading-[16px] font-bold text-right truncate">
              Congelar monstruos digitales
            </span>
          </button>
        </section>

        {/* Registro de Derrotas de Villanos */}
        <section
          aria-label="Registro de derrotas"
          className="bg-[#FFF0C6] text-[#1A1600] border-4 border-[#1A1600] rounded arcade-shadow p-4 flex flex-col gap-2"
        >
          <div className="flex items-center justify-between gap-1 border-b-2 border-[#1A1600] pb-1">
            <h2 className="font-headline text-[14px] leading-[20px] text-[#1A1600] uppercase">
              DERROTAS
            </h2>
            <span className="font-mono text-[13px] leading-[18px] font-semibold text-[#3B2F00] uppercase">
              TEMP. 1
            </span>
          </div>

          <ul className="flex flex-col gap-1 font-body text-[14px] leading-[20px] font-medium text-[#1A1600]">
            <li className="bg-[#FFE177] border-2 border-[#1A1600] rounded-sm px-2 py-1">
              <span className="font-title font-bold">Devimon:</span> Eliminado por Angemon.
            </li>
            <li className="bg-[#FFE177] border-2 border-[#1A1600] rounded-sm px-2 py-1">
              <span className="font-title font-bold">Etemon:</span> Eliminado por MetalGreymon.
            </li>
            <li className="bg-[#FFE177] border-2 border-[#1A1600] rounded-sm px-2 py-1 flex flex-col gap-1">
              <span className="font-title font-bold uppercase">Amos Oscuros:</span>
              <span>
                • <span className="font-bold">MetalSeadramon:</span> Eliminado por WarGreymon en el océano.
              </span>
              <span>
                • <span className="font-bold">Puppetmon (Pinochimon):</span> Derrotado por MetalGarurumon.
              </span>
              <span>
                • <span className="font-bold">Machinedramon (Mugendramon):</span> Eliminado por WarGreymon.
              </span>
              <span>
                • <span className="font-bold">Piedmon:</span> Derrotado por WarGreymon y MetalGarurumon tras ser enviado al portal de la oscuridad por Angemon y MagnaAngemon.
              </span>
            </li>
            <li className="bg-[#FFE177] border-2 border-[#1A1600] rounded-sm px-2 py-1">
              <span className="font-title font-bold">Apocalymon:</span> Eliminó las joyas de Digimon; lograron recuperarlas y es derrotado por los niños de Digimon.
            </li>
          </ul>
        </section>
      </main>

      <StatusFooter message={status} />
    </div>
  );
};
