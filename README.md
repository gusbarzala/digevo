# DIG.MON — Aventura Arcade

Aplicación web interactiva y juego arcade por turnos inspirado en **Digimon Adventure (Temporada 1)**, desarrollado con React, TypeScript, Vite y Tailwind CSS.

- **Demo en línea (GitHub Pages):** https://gusbarzala.github.io/digevo/
- **Documentación Word (Trabajo Práctico):** [`public/TP_DIGMON.docx`](./public/TP_DIGMON.docx)

---

## Características Principales

- **12 pantallas conectadas** con estado global compartido (`src/context/GameContext.tsx`).
- **Combate por turnos** con barras de PS/PE, escudo defensivo, ataques especiales y registro de batalla en vivo.
- **Los 8 Niños Elegidos y sus Digimon** con múltiples fases de digievolución (incluyendo la línea completa de Agumon de 9 etapas hasta Omnimon y las líneas de Gabumon, Palmon, Biyomon, Tentomon, Gomamon, Patamon y Gatomon).
- **Modo Ataque (Base / Meta / War)** con transformaciones ofensivas directas en combate.
- **Escudo de los 8 Emblemas** (Valor, Amistad, Amor, Conocimiento, Pureza, Sinceridad, Esperanza y Luz).
- **Especial (Reemplazo)** para intercambiar compañeros activos en tiempo real.
- **Inventario interactivo** con filtros (*Todos*, *Cura*, *Equipo*), consumibles y chips de combate.
- **Villanos de la Temporada 1** (Devimon, Etemon, Myotismon, Amos Oscuros y Apocalymon) + panel de control (*Eliminar*, *Restaurar*, *Pausar*) y registro histórico de derrotas.
- **Audio arcade retro 8-bit** sintetizado con Web Audio API (`src/utils/sound.ts`) y control de silencio global.

---

## Pantallas del Proyecto

| N.º | Pantalla | Archivo |
| --- | --- | --- |
| 01 | Inicio | `src/screens/InicioScreen.tsx` |
| 02 | Jugar | `src/screens/JugarScreen.tsx` |
| 03 | Pantalla de Batalla | `src/screens/BatallaScreen.tsx` |
| 04 | Compañeros y Digievolución | `src/screens/CompanerosScreen.tsx` |
| 05 | Digevol: Línea Agumon | `src/screens/DigevolScreen.tsx` |
| 06 | Otras Líneas | `src/screens/LineasScreen.tsx` |
| 07 | Atacar: Meta y War | `src/screens/AtacarScreen.tsx` |
| 08 | Escudo: 8 Emblemas | `src/screens/EscudoScreen.tsx` |
| 09 | Especial: Reemplazo | `src/screens/EspecialScreen.tsx` |
| 10 | Inventario de Objetos | `src/screens/InventarioScreen.tsx` |
| 11 | Villanos (Temporada 1) | `src/screens/VillanosScreen.tsx` |
| 12 | Control de Villano | `src/screens/VillanoPoderScreen.tsx` |

---

## Stack Tecnológico

- **React 19** + **TypeScript**
- **Vite 8** (`base: './'` configurado para subrutas como `/digevo/`)
- **Tailwind CSS v4**
- **Web Audio API** (efectos sonoros 8-bit)
- **Google Fonts** (`Press Start 2P`, `Poppins`, `Spline Sans Mono`) + **Material Symbols Outlined**
- **GitHub Actions** (despliegue automático en `.github/workflows/deploy.yml`)

---

## Instalación y Uso Local

```bash
npm install
npm run dev
npm run lint
npm run build
```

---

## Despliegue en GitHub Pages

1. Sube los archivos del proyecto a tu rama principal (`main` o `master`) en GitHub.
2. En tu repositorio de GitHub, ve a **Settings → Pages → Build and deployment → Source**.
3. Selecciona **GitHub Actions** para que compile `dist/` y publique `https://gusbarzala.github.io/digevo/`.

---

## Autor

**Gustavo Barzala** — `barzalaleonice@gmail.com`
