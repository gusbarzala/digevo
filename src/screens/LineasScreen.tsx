import React, { useState } from 'react';
import { OTHER_LINES } from '../data/digimonData';
import { useGame } from '../context/GameContext';
import { ContextualHeader, DigimonImage, StatusFooter } from '../components/ArcadeShell';

const LINE_KEYS = Object.keys(OTHER_LINES);

export const LineasScreen: React.FC = () => {
  const { sfx } = useGame();
  const [currentLineKey, setCurrentLineKey] = useState('gabumon');
  const [stageIdx, setStageIdx] = useState(2);

  const line = OTHER_LINES[currentLineKey];
  const item = line.stages[stageIdx] || line.stages[2];

  const [status, setStatus] = useState('Línea de Gabumon (Niño: Matt). Toca cualquier etapa.');

  const handleSelectLine = (key: string) => {
    sfx('tap');
    setCurrentLineKey(key);
    setStageIdx(2);
    const nextLine = OTHER_LINES[key];
    const nextItem = nextLine.stages[2];
    setStatus(`${nextItem.name} (${nextLine.kid}): ${nextItem.atk}.`);
  };

  const handleSelectStage = (idx: number) => {
    sfx('evolve');
    setStageIdx(idx);
    const nextItem = line.stages[idx];
    setStatus(`${nextItem.name} (${line.kid}): ${nextItem.atk}.`);
  };

  return (
    <div className="min-h-screen w-full max-w-md mx-auto px-6 py-4 flex flex-col justify-between gap-4">
      <ContextualHeader badge="LÍNEAS · DIGIMON" backTo="digevol" backLabel="Volver a línea Agumon" />

      <main className="flex-1 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-headline text-[18px] leading-[26px] text-[#1A1600] uppercase">
            OTRAS LÍNEAS
          </h1>
          <p className="font-body text-[14px] leading-[20px] font-medium text-[#3B2F00] text-pretty">
            Explora la línea de Gabumon, Palmon, Biyomon, Tentomon, Gomamon, Patamon y Gatomon.
          </p>
        </div>

        {/* Partner Selector Tabs */}
        <nav aria-label="Elegir línea evolutiva" className="flex flex-wrap gap-1">
          {LINE_KEYS.map((key) => {
            const active = key === currentLineKey;
            return (
              <button
                key={key}
                type="button"
                onClick={() => handleSelectLine(key)}
                className={`px-2 py-1 border-2 border-[#1A1600] rounded font-label text-[12px] leading-[16px] font-bold transition-colors ${
                  active
                    ? 'bg-[#005CBA] text-white'
                    : 'bg-[#FFF0C6] text-[#1A1600] hover:bg-[#FFE177]'
                }`}
              >
                {OTHER_LINES[key].label}
              </button>
            );
          })}
        </nav>

        {/* Active Preview Card */}
        <article className="bg-[#FFF0C6] text-[#1A1600] border-4 border-[#1A1600] rounded arcade-shadow p-4 flex items-center gap-4">
          <div className="w-20 h-20 shrink-0 overflow-hidden rounded-sm border-2 border-[#1A1600] bg-[#FFD400]">
            <DigimonImage src={item.img} alt={item.name} className="w-full h-full object-cover block" />
          </div>
          <div className="flex flex-col gap-1 min-w-0">
            <span className="font-mono text-[13px] leading-[18px] font-semibold text-[#005CBA] uppercase tabular-nums">
              {item.stage}
            </span>
            <h2 className="font-headline text-[16px] leading-[24px] text-[#1A1600] truncate">
              {item.name}
            </h2>
            <p className="font-body text-[14px] leading-[20px] font-medium text-[#3B2F00]">
              Ataque: {item.atk}
            </p>
          </div>
        </article>

        {/* 6-Stage Evolution Grid */}
        <section aria-label="Etapas evolutivas" className="grid grid-cols-2 gap-2">
          {line.stages.map((st, idx) => {
            const active = idx === stageIdx;
            return (
              <button
                key={st.name}
                type="button"
                onClick={() => handleSelectStage(idx)}
                className={`px-2 py-2 border-4 border-[#1A1600] rounded arcade-shadow-sm font-label text-[12px] leading-[16px] font-bold text-left transition-colors ${
                  active
                    ? 'bg-[#005CBA] text-white'
                    : 'bg-[#FFF0C6] text-[#1A1600] hover:bg-[#FFE177]'
                }`}
              >
                {idx + 1}. {st.name}
              </button>
            );
          })}
        </section>
      </main>

      <StatusFooter message={status} />
    </div>
  );
};
