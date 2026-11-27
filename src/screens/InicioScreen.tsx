import React, { useState } from 'react';
import { IMAGES } from '../data/digimonData';
import { useGame } from '../context/GameContext';
import { DigimonImage, Icon, TopIconMenu } from '../components/ArcadeShell';

export const InicioScreen: React.FC = () => {
  const { muted, toggleMute, loginTamer, navigate, loggedIn, tamerName, sfx } = useGame();
  const [username, setUsername] = useState(loggedIn ? tamerName : '');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState(
    loggedIn ? `BIENVENIDO, ${tamerName.toUpperCase()}!` : 'INGRESA USUARIO Y CONTRASEÑA'
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = username.trim();
    const pass = password.trim();
    if (!user || !pass) {
      sfx('villain');
      setStatus('COMPLETA USUARIO Y CONTRASEÑA');
      return;
    }
    loginTamer(user);
    setStatus(`BIENVENIDO, ${user.toUpperCase()}!`);
    setTimeout(() => {
      navigate('jugar');
    }, 350);
  };

  return (
    <div className="min-h-screen w-full max-w-md mx-auto px-6 py-6 flex flex-col justify-between gap-6">
      {/* Top utility bar */}
      <header className="flex items-center justify-between">
        <div className="inline-flex items-center gap-1 px-2 py-1 bg-[#FFF0C6] border-2 border-[#1A1600] rounded-sm">
          <span className="font-mono text-[13px] leading-[18px] font-semibold text-[#1A1600] tabular-nums">
            VER 1.0
          </span>
        </div>

        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? 'Activar sonido' : 'Silenciar sonido'}
          className="inline-flex items-center justify-center w-12 h-12 bg-[#FFF0C6] text-[#1A1600] border-4 border-[#1A1600] rounded arcade-shadow transition-transform duration-100 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1A1600]"
        >
          <Icon name={muted ? 'volume_off' : 'volume_up'} />
        </button>
      </header>

      {/* Top Icon Menu */}
      <TopIconMenu active="inicio" />

      {/* Center hero: Title + Tai & Agumon */}
      <main className="flex-1 flex flex-col items-center justify-center gap-6 text-center">
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-display text-[28px] leading-[36px] md:text-[40px] md:leading-[52px] text-[#1A1600] arcade-title-shadow tracking-wider text-balance">
            DIG.MON
          </h1>
          <p className="font-body text-[14px] leading-[20px] font-medium text-[#3B2F00] text-pretty">
            Aventura Arcade · Tai &amp; Agumon
          </p>
        </div>

        <figure className="w-full max-w-xs bg-[#FFF0C6] border-4 border-[#1A1600] rounded arcade-shadow-lg p-2">
          <div className="overflow-hidden rounded-sm border-2 border-[#1A1600] bg-[#FFD400]">
            <DigimonImage
              src={IMAGES.taiAgumonHero}
              alt="Tai y Agumon listos para la aventura en DIG.MON"
              className="w-full aspect-square max-h-56 object-cover block"
            />
          </div>
          <figcaption className="pt-1 flex items-center justify-between px-1">
            <span className="font-label text-[12px] leading-[16px] font-bold text-[#1A1600] uppercase">
              TAI &amp; AGUMON
            </span>
            <span className="font-mono text-[13px] leading-[18px] font-semibold text-[#3B2F00] tabular-nums">
              NV. 01
            </span>
          </figcaption>
        </figure>
      </main>

      {/* Login Form + Primary Action */}
      <footer className="flex flex-col items-center gap-2 pb-1 w-full">
        <form onSubmit={handleSubmit} className="w-full max-w-xs flex flex-col gap-2" noValidate>
          <div className="flex flex-col gap-1 text-left">
            <label
              htmlFor="username"
              className="font-label text-[12px] leading-[16px] font-bold text-[#1A1600] uppercase"
            >
              Usuario
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Tai_01"
              className="w-full px-4 py-2 bg-[#FFF0C6] text-[#1A1600] placeholder:text-[#3B2F00]/70 border-4 border-[#1A1600] rounded font-body text-[14px] leading-[20px] font-medium focus:outline-none focus:ring-2 focus:ring-[#005CBA]"
            />
          </div>

          <div className="flex flex-col gap-1 text-left">
            <label
              htmlFor="password"
              className="font-label text-[12px] leading-[16px] font-bold text-[#1A1600] uppercase"
            >
              Contraseña
            </label>
            <div className="relative flex items-center">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-4 pr-12 py-2 bg-[#FFF0C6] text-[#1A1600] placeholder:text-[#3B2F00]/70 border-4 border-[#1A1600] rounded font-body text-[14px] leading-[20px] font-medium focus:outline-none focus:ring-2 focus:ring-[#005CBA]"
              />
              <button
                type="button"
                onClick={() => {
                  sfx('tap');
                  setShowPassword((v) => !v);
                }}
                aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                className="absolute right-2 inline-flex items-center justify-center w-8 h-8 text-[#3B2F00] hover:text-[#1A1600] focus-visible:outline-none"
              >
                <Icon name={showPassword ? 'visibility_off' : 'visibility'} />
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#005CBA] text-white border-4 border-[#1A1600] rounded arcade-shadow-lg font-headline text-[14px] leading-[20px] uppercase tracking-wider transition-transform duration-100 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1A1600] whitespace-nowrap"
          >
            <Icon name="login" />
            <span>ENTRAR</span>
          </button>
        </form>

        <p className="font-mono text-[13px] leading-[18px] font-semibold text-[#3B2F00] text-center min-h-5">
          {status}
        </p>
      </footer>
    </div>
  );
};
