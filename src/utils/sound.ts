// Retro 8-bit Web Audio API sound synthesizer for DIG.MON arcade feedback

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctx) return null;
  if (!audioCtx) {
    audioCtx = new Ctx();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

export type SoundEffect = 'tap' | 'attack' | 'evolve' | 'shield' | 'heal' | 'villain' | 'victory';

export function playArcadeSound(effect: SoundEffect, muted: boolean): void {
  if (muted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  const playTone = (freq: number, start: number, duration: number, type: OscillatorType = 'square', gainVal = 0.06) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now + start);
    gain.gain.setValueAtTime(gainVal, now + start);
    gain.gain.exponentialRampToValueAtTime(0.001, now + start + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now + start);
    osc.stop(now + start + duration);
  };

  switch (effect) {
    case 'tap':
      playTone(660, 0, 0.055, 'square', 0.045);
      break;
    case 'attack':
      playTone(320, 0, 0.06, 'sawtooth', 0.07);
      playTone(180, 0.05, 0.1, 'square', 0.06);
      break;
    case 'evolve':
      playTone(440, 0, 0.08, 'square', 0.05);
      playTone(554, 0.07, 0.08, 'square', 0.05);
      playTone(659, 0.14, 0.08, 'square', 0.05);
      playTone(880, 0.21, 0.16, 'square', 0.06);
      break;
    case 'shield':
      playTone(523, 0, 0.08, 'triangle', 0.07);
      playTone(784, 0.07, 0.14, 'triangle', 0.06);
      break;
    case 'heal':
      playTone(587, 0, 0.07, 'sine', 0.07);
      playTone(784, 0.06, 0.11, 'sine', 0.07);
      break;
    case 'villain':
      playTone(220, 0, 0.09, 'sawtooth', 0.06);
      playTone(165, 0.08, 0.14, 'sawtooth', 0.06);
      break;
    case 'victory':
      playTone(523, 0, 0.09, 'square', 0.055);
      playTone(659, 0.09, 0.09, 'square', 0.055);
      playTone(784, 0.18, 0.09, 'square', 0.055);
      playTone(1046, 0.27, 0.22, 'square', 0.065);
      break;
  }
}
