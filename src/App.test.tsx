import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';
import { clearAllData } from './utils/storage';

describe('App', () => {
  beforeEach(() => {
    clearAllData();
    delete (window as any).app;
  });

  it('renders MainMenu on mount', () => {
    render(<App />);
    expect(document.querySelector('[data-screen="menu"]')).toBeInTheDocument();
  });

  it('exposes window.app after mount', () => {
    render(<App />);
    expect((window as any).app).toBeDefined();
    expect((window as any).app.state.screen).toBe('menu');
    expect((window as any).app.actions).toBeDefined();
  });

  it('transitions to game screen when startGame action is triggered via window.app', () => {
    render(<App />);
    act(() => (window as any).app.actions.startGame());
    expect(document.querySelector('[data-screen="game"]')).toBeInTheDocument();
  });

  it('transitions to pause on Escape during game', () => {
    render(<App />);
    act(() => (window as any).app.actions.startGame());
    act(() => fireEvent.keyDown(window, { key: 'Escape' }));
    expect(document.querySelector('[data-screen="pause"]')).toBeInTheDocument();
  });

  it('transitions to options and back', () => {
    render(<App />);
    act(() => (window as any).app.actions.goToOptions());
    expect(document.querySelector('[data-screen="options"]')).toBeInTheDocument();
    act(() => (window as any).app.actions.closeOptions());
    expect(document.querySelector('[data-screen="menu"]')).toBeInTheDocument();
  });

  it('transitions to controls and back', () => {
    render(<App />);
    act(() => (window as any).app.actions.goToControls());
    expect(document.querySelector('[data-screen="controls"]')).toBeInTheDocument();
    act(() => (window as any).app.actions.goToMenu());
    expect(document.querySelector('[data-screen="menu"]')).toBeInTheDocument();
  });

  it('game over screen appears after tick reaches winning score', () => {
    render(<App />);
    act(() => (window as any).app.actions.startGame());
    act(() => (window as any).app.actions.saveOptions({ winningScore: 1 }));
    let ticks = 0;
    while ((window as any).app.state.screen !== 'gameover' && ticks < 5000) {
      act(() => (window as any).app.actions.tick());
      ticks++;
    }
    expect((window as any).app.state.screen).toBe('gameover');
    expect(document.querySelector('[data-screen="gameover"]')).toBeInTheDocument();
  });

  it('keyboard up/down controls move paddle', () => {
    render(<App />);
    act(() => (window as any).app.actions.startGame());
    const beforeY = (window as any).app.state.game.playerPaddle.y;
    act(() => fireEvent.keyDown(window, { key: 'ArrowDown' }));
    act(() => (window as any).app.actions.tick());
    act(() => fireEvent.keyUp(window, { key: 'ArrowDown' }));
    expect((window as any).app.state.game.playerPaddle.y).toBeGreaterThanOrEqual(beforeY);
  });
});
