import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { ContextualHeader, Icon, StatusFooter, TopIconMenu } from '../components/ArcadeShell';

type FilterType = 'all' | 'heal' | 'gear';

export const InventarioScreen: React.FC = () => {
  const { inventory, totalBagItems, useItem, toggleEquipItem, sfx, getActivePartner, getPartnerCurrentEvo } =
    useGame();
  const [filter, setFilter] = useState<FilterType>('all');
  const [status, setStatus] = useState('Toca un objeto para usarlo o equiparlo.');

  const partner = getActivePartner();
  const evo = getPartnerCurrentEvo(partner.id);

  const filtered = inventory.filter((item) => filter === 'all' || item.category === filter);

  return (
    <div className="min-h-screen w-full max-w-md mx-auto px-6 py-4 flex flex-col justify-between gap-4">
      <ContextualHeader
        badge={`MOCHILA · ${totalBagItems}/20`}
        backTo="batalla"
        backLabel="Volver a batalla"
      />
      <TopIconMenu active="inventario" />

      <main className="flex-1 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-headline text-[18px] leading-[26px] text-[#1A1600] uppercase">
            OBJETOS
          </h1>
          <p className="font-body text-[14px] leading-[20px] font-medium text-[#3B2F00]">
            Equipa o usa objetos para ayudar a {evo.form}.
          </p>
        </div>

        {/* Category Filter Row */}
        <nav aria-label="Categorías de objetos" className="grid grid-cols-3 gap-2">
          {(
            [
              { id: 'all', label: 'TODOS' },
              { id: 'heal', label: 'CURA' },
              { id: 'gear', label: 'EQUIPO' },
            ] as const
          ).map((tab) => {
            const active = filter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  sfx('tap');
                  setFilter(tab.id);
                }}
                className={`px-2 py-2 border-4 border-[#1A1600] rounded arcade-shadow-sm font-label text-[12px] leading-[16px] font-bold uppercase text-center transition-transform duration-100 active:translate-x-0.5 active:translate-y-0.5 ${
                  active ? 'bg-[#005CBA] text-white' : 'bg-[#FFF0C6] text-[#1A1600] hover:bg-[#FFE177]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Inventory Item Cards */}
        <section className="flex flex-col gap-2">
          {filtered.map((item) => {
            const isHeal = item.category === 'heal';
            const disabled = isHeal && item.qty <= 0;

            return (
              <article
                key={item.id}
                className="bg-[#FFF0C6] text-[#1A1600] border-4 border-[#1A1600] rounded arcade-shadow p-4 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div
                    className={`w-12 h-12 shrink-0 flex items-center justify-center border-2 border-[#1A1600] rounded-sm ${
                      item.iconBg === 'primary'
                        ? 'bg-[#D7E3FF] text-[#001B3E]'
                        : 'bg-[#FFDBCC] text-[#351000]'
                    }`}
                  >
                    <Icon name={item.icon} />
                  </div>
                  <div className="flex flex-col gap-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h2 className="font-title text-[16px] leading-[22px] font-bold text-[#1A1600] truncate">
                        {item.name}
                      </h2>
                      <span className="font-mono text-[13px] leading-[18px] font-semibold text-[#3B2F00] tabular-nums">
                        x{item.qty}
                      </span>
                    </div>
                    <p className="font-body text-[14px] leading-[20px] font-medium text-[#3B2F00]">
                      {item.description}
                    </p>
                  </div>
                </div>

                {isHeal ? (
                  <button
                    type="button"
                    disabled={disabled}
                    onClick={() => {
                      const res = useItem(item.id);
                      setStatus(res.message);
                    }}
                    className={`shrink-0 px-4 py-2 bg-[#005CBA] text-white border-2 border-[#1A1600] rounded font-label text-[12px] leading-[16px] font-bold uppercase transition-transform duration-100 active:translate-x-0.5 active:translate-y-0.5 ${
                      disabled ? 'opacity-60 cursor-not-allowed' : ''
                    }`}
                  >
                    USAR
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      const res = toggleEquipItem(item.id);
                      setStatus(res.message);
                    }}
                    className={`shrink-0 px-4 py-2 border-2 border-[#1A1600] rounded font-label text-[12px] leading-[16px] font-bold uppercase transition-transform duration-100 active:translate-x-0.5 active:translate-y-0.5 ${
                      item.equipped
                        ? 'bg-[#005CBA] text-white'
                        : 'bg-[#FF6B00] text-[#1A0800]'
                    }`}
                  >
                    {item.equipped ? 'LISTO' : 'EQUIPAR'}
                  </button>
                )}
              </article>
            );
          })}
        </section>
      </main>

      <StatusFooter message={status} />
    </div>
  );
};
