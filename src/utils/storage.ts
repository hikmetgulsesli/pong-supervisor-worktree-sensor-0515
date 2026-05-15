import type { HighScore, AppSettings, Difficulty } from '../types/domain';
import { DEFAULT_SETTINGS } from '../types/domain';

const STORAGE_KEYS = {
  highScores: 'pong_high_scores',
  settings: 'pong_settings',
  gameState: 'pong_game_state',
} as const;

export function loadHighScores(): HighScore[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.highScores);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed as HighScore[];
    return [];
  } catch {
    return [];
  }
}

export function saveHighScore(score: HighScore): void {
  const scores = loadHighScores();
  scores.push(score);
  scores.sort((a, b) => b.playerScore - a.playerScore);
  const top = scores.slice(0, 10);
  localStorage.setItem(STORAGE_KEYS.highScores, JSON.stringify(top));
}

export function loadSettings(): AppSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.settings);
    if (!raw) return { ...DEFAULT_SETTINGS };
    const parsed = JSON.parse(raw) as Partial<AppSettings>;
    return {
      difficulty: parsed.difficulty ?? DEFAULT_SETTINGS.difficulty,
      soundEnabled: parsed.soundEnabled ?? DEFAULT_SETTINGS.soundEnabled,
      ballSpeed: parsed.ballSpeed ?? DEFAULT_SETTINGS.ballSpeed,
      winningScore: parsed.winningScore ?? DEFAULT_SETTINGS.winningScore,
    };
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

export function saveSettings(settings: AppSettings): void {
  localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settings));
}

export function clearAllData(): void {
  localStorage.removeItem(STORAGE_KEYS.highScores);
  localStorage.removeItem(STORAGE_KEYS.settings);
  localStorage.removeItem(STORAGE_KEYS.gameState);
}

export interface PersistedGameState {
  playerScore: number;
  aiScore: number;
  difficulty: Difficulty;
  isPaused: boolean;
}

export function loadPersistedGame(): PersistedGameState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.gameState);
    if (!raw) return null;
    return JSON.parse(raw) as PersistedGameState;
  } catch {
    return null;
  }
}

export function savePersistedGame(state: PersistedGameState): void {
  localStorage.setItem(STORAGE_KEYS.gameState, JSON.stringify(state));
}

export function clearPersistedGame(): void {
  localStorage.removeItem(STORAGE_KEYS.gameState);
}
