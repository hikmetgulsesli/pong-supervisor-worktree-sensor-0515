import { describe, it, expect, beforeEach } from 'vitest';
import {
  loadHighScores,
  saveHighScore,
  loadSettings,
  saveSettings,
  clearAllData,
  loadPersistedGame,
  savePersistedGame,
  clearPersistedGame,
} from './storage';
import { DEFAULT_SETTINGS } from '../types/domain';

describe('storage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('loadHighScores returns empty array by default', () => {
    expect(loadHighScores()).toEqual([]);
  });

  it('saveHighScore persists and loads', () => {
    saveHighScore({ playerScore: 5, aiScore: 3, difficulty: 'medium', date: '2024-01-01' });
    const scores = loadHighScores();
    expect(scores).toHaveLength(1);
    expect(scores[0].playerScore).toBe(5);
  });

  it('loadSettings returns defaults when empty', () => {
    const settings = loadSettings();
    expect(settings.difficulty).toBe(DEFAULT_SETTINGS.difficulty);
    expect(settings.soundEnabled).toBe(DEFAULT_SETTINGS.soundEnabled);
    expect(settings.ballSpeed).toBe(DEFAULT_SETTINGS.ballSpeed);
    expect(settings.winningScore).toBe(DEFAULT_SETTINGS.winningScore);
  });

  it('saveSettings and loadSettings roundtrip', () => {
    const custom = { difficulty: 'hard' as const, soundEnabled: false, ballSpeed: 8, winningScore: 15 };
    saveSettings(custom);
    const loaded = loadSettings();
    expect(loaded).toEqual(custom);
  });

  it('clearAllData removes all keys', () => {
    saveHighScore({ playerScore: 1, aiScore: 0, difficulty: 'easy', date: '2024-01-01' });
    saveSettings(DEFAULT_SETTINGS);
    clearAllData();
    expect(loadHighScores()).toEqual([]);
    expect(loadSettings().difficulty).toBe(DEFAULT_SETTINGS.difficulty);
  });

  it('savePersistedGame and loadPersistedGame roundtrip', () => {
    const state = { playerScore: 2, aiScore: 1, difficulty: 'medium' as const, isPaused: true };
    savePersistedGame(state);
    const loaded = loadPersistedGame();
    expect(loaded).toEqual(state);
  });

  it('clearPersistedGame removes game state', () => {
    savePersistedGame({ playerScore: 0, aiScore: 0, difficulty: 'easy', isPaused: false });
    clearPersistedGame();
    expect(loadPersistedGame()).toBeNull();
  });
});
