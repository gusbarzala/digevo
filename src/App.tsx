/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { GameProvider, useGame } from './context/GameContext';
import { InicioScreen } from './screens/InicioScreen';
import { JugarScreen } from './screens/JugarScreen';
import { BatallaScreen } from './screens/BatallaScreen';
import { CompanerosScreen } from './screens/CompanerosScreen';
import { DigevolScreen } from './screens/DigevolScreen';
import { LineasScreen } from './screens/LineasScreen';
import { AtacarScreen } from './screens/AtacarScreen';
import { EscudoScreen } from './screens/EscudoScreen';
import { EspecialScreen } from './screens/EspecialScreen';
import { InventarioScreen } from './screens/InventarioScreen';
import { VillanosScreen } from './screens/VillanosScreen';
import { VillanoPoderScreen } from './screens/VillanoPoderScreen';

const ScreenRouter: React.FC = () => {
  const { screen } = useGame();

  switch (screen) {
    case 'inicio':
      return <InicioScreen />;
    case 'jugar':
      return <JugarScreen />;
    case 'batalla':
      return <BatallaScreen />;
    case 'companeros':
      return <CompanerosScreen />;
    case 'digevol':
      return <DigevolScreen />;
    case 'lineas':
      return <LineasScreen />;
    case 'atacar':
      return <AtacarScreen />;
    case 'escudo':
      return <EscudoScreen />;
    case 'especial':
      return <EspecialScreen />;
    case 'inventario':
      return <InventarioScreen />;
    case 'villanos':
      return <VillanosScreen />;
    case 'villano-poder':
      return <VillanoPoderScreen />;
    default:
      return <InicioScreen />;
  }
};

export default function App() {
  return (
    <GameProvider>
      <ScreenRouter />
    </GameProvider>
  );
}
