import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useAppState } from './useAppState';
import { clearAllData, clearPersistedGame } from '../utils/storage';

describe('useAppState', () => {
  beforeEach(() => {
    clearAllData();
  });

  it('starts on menu screen', () => {
    const { result } = renderHook(() => useAppState());
    expect(result.current.state.screen).toBe('menu');
  });

  it('startGame transitions to game screen', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    expect(result.current.state.screen).toBe('game');
    expect(result.current.state.game.isPlaying).toBe(true);
    expect(result.current.state.canResume).toBe(true);
  });

  it('pauseGame transitions to pause screen', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    act(() => result.current.actions.pauseGame());
    expect(result.current.state.screen).toBe('pause');
    expect(result.current.state.game.isPaused).toBe(true);
    expect(result.current.state.canResume).toBe(true);
  });

  it('unpauseGame returns to game screen', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    act(() => result.current.actions.pauseGame());
    act(() => result.current.actions.unpauseGame());
    expect(result.current.state.screen).toBe('game');
    expect(result.current.state.game.isPaused).toBe(false);
  });

  it('restartGame resets scores and keeps playing', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    act(() => {
      result.current.state.game.playerScore = 3;
      result.current.state.game.aiScore = 2;
    });
    act(() => result.current.actions.restartGame());
    expect(result.current.state.screen).toBe('game');
    expect(result.current.state.game.playerScore).toBe(0);
    expect(result.current.state.game.aiScore).toBe(0);
    expect(result.current.state.game.isPlaying).toBe(true);
  });

  it('goToMenu returns to menu', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    act(() => result.current.actions.goToMenu());
    expect(result.current.state.screen).toBe('menu');
    expect(result.current.state.game.isPlaying).toBe(false);
  });

  it('goToOptions transitions to options', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.goToOptions());
    expect(result.current.state.screen).toBe('options');
  });

  it('goToControls transitions to controls', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.goToControls());
    expect(result.current.state.screen).toBe('controls');
  });

  it('setDifficulty updates settings', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.setDifficulty('hard'));
    expect(result.current.state.settings.difficulty).toBe('hard');
  });

  it('saveOptions updates multiple settings', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.saveOptions({ ballSpeed: 7, winningScore: 15 }));
    expect(result.current.state.settings.ballSpeed).toBe(7);
    expect(result.current.state.settings.winningScore).toBe(15);
  });

  it('resetOptions restores defaults', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.saveOptions({ ballSpeed: 99 }));
    act(() => result.current.actions.resetOptions());
    expect(result.current.state.settings.ballSpeed).toBe(5);
  });

  it('closeOptions returns to previous screen', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.goToOptions());
    act(() => result.current.actions.closeOptions());
    expect(result.current.state.screen).toBe('menu');
  });

  it('goToLeaderboard shows gameover screen', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.goToLeaderboard());
    expect(result.current.state.screen).toBe('gameover');
  });

  it('resumeGame works when canResume is true', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    act(() => result.current.actions.pauseGame());
    act(() => result.current.actions.goToMenu());
    act(() => result.current.actions.resumeGame());
    expect(result.current.state.screen).toBe('game');
  });

  it('tick updates ball position when playing', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.actions.startGame());
    const beforeX = result.current.state.game.ball.x;
    act(() => result.current.actions.tick());
    expect(result.current.state.game.ball.x).not.toBe(beforeX);
  });

  it('window.app is set after render', () => {
    const { result } = renderHook(() => useAppState());
    // Simulating the App effect
    (window as any).app = { state: result.current.state, actions: result.current.actions };
    expect((window as any).app.state.screen).toBe('menu');
  });
});
