// Pure browser synthesized sound utilities for presentation engagement

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Plays a gentle, classical bell/chime resonance (like a temple bell or soft gong chime)
 */
export function playClassicalChime(frequency = 528, duration = 1.2) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // Main tone
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Harmonic overtone
    const oscHarmonic = ctx.createOscillator();
    const gainHarmonic = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequency, now);
    osc.frequency.exponentialRampToValueAtTime(frequency * 0.98, now + duration);

    oscHarmonic.type = 'sine';
    oscHarmonic.frequency.setValueAtTime(frequency * 2.02, now);

    // Envelope for main tone
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.12, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    // Envelope for harmonic
    gainHarmonic.gain.setValueAtTime(0.001, now);
    gainHarmonic.gain.linearRampToValueAtTime(0.04, now + 0.03);
    gainHarmonic.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.7);

    osc.connect(gain);
    gain.connect(ctx.destination);

    oscHarmonic.connect(gainHarmonic);
    gainHarmonic.connect(ctx.destination);

    osc.start(now);
    oscHarmonic.start(now);

    osc.stop(now + duration);
    oscHarmonic.stop(now + duration);
  } catch {
    // Gracefully ignore audio issues
  }
}

/**
 * Text-to-speech for poem recitation using browser SpeechSynthesis
 */
export function speakVietnamese(text: string, onEnd?: () => void) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'vi-VN';
  utterance.rate = 0.88; // Slightly slower, measured cadence for poetry
  utterance.pitch = 1.0;

  if (onEnd) {
    utterance.onend = onEnd;
    utterance.onerror = onEnd;
  }

  window.speechSynthesis.speak(utterance);
}

export function stopSpeech() {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
}
