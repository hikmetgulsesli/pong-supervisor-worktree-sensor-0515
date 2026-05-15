import { useEffect, useCallback } from 'react';
import { AppContext } from './contexts/AppContext';
import { useAppState } from './hooks/useAppState';
import {
  MainMenu,
  GameBoard,
  GameOptions,
  GameOver,
  PauseOverlay,
  ControlsHelp,
} from './screens';
import './App.css';

declare global {
  interface Window {
    app?: {
      state: ReturnType<typeof useAppState>['state'];
      actions: ReturnType<typeof useAppState>['actions'];
    };
  }
}

export default function App() {
  const { state, actions } = useAppState();

  useEffect(() => {
    window.app = { state, actions };
  }, [state, actions]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
        actions.movePlayerUp();
      } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
        actions.movePlayerDown();
      } else if (e.key === 'Escape' && state.screen === 'game') {
        actions.pauseGame();
      } else if (e.key === 'Escape' && state.screen === 'pause') {
        actions.unpauseGame();
      }
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (
        e.key === 'ArrowUp' || e.key === 'ArrowDown' ||
        e.key === 'w' || e.key === 'W' || e.key === 's' || e.key === 'S'
      ) {
        actions.stopPlayer();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, [actions, state.screen]);

  const mainMenuActions = useCallback(
    () => ({
      'start-new-game-5': actions.startGame,
      'resume-6': actions.resumeGame,
      'easy-7': () => actions.setDifficulty('easy'),
      'medium-8': () => actions.setDifficulty('medium'),
      'hard-9': () => actions.setDifficulty('hard'),
      'leaderboard-10': actions.goToLeaderboard,
      'settings-11': actions.goToOptions,
      'how-to-play-12': actions.goToControls,
    }),
    [actions]
  );

  const gameBoardActions = useCallback(
    () => ({
      'button-1-1': actions.pauseGame,
      'button-2-2': actions.goToOptions,
      'button-3-3': actions.movePlayerUp,
      'button-4-4': actions.movePlayerDown,
    }),
    [actions]
  );

  const gameOverActions = useCallback(
    () => ({
      'play-again-1': actions.startGame,
      'share-score-2': () => {
        const text = `Pong skoru: ${state.game.playerScore} - ${state.game.aiScore}`;
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text).catch(() => {});
        }
      },
      'leaderboard-3': actions.goToLeaderboard,
      'main-menu-4': actions.goToMenu,
    }),
    [actions, state.game]
  );

  const pauseOverlayActions = useCallback(
    () => ({
      'resume-game-1': actions.unpauseGame,
      'restart-2': actions.restartGame,
      'options-3': actions.goToOptions,
      'main-menu-4': actions.goToMenu,
    }),
    [actions]
  );

  const gameOptionsActions = useCallback(
    () => ({
      'reset-to-default-3': actions.resetOptions,
      'save-and-close-4': actions.closeOptions,
    }),
    [actions]
  );

  const controlsHelpActions = useCallback(
    () => ({
      'back-to-menu-3': actions.goToMenu,
    }),
    [actions]
  );

  return (
    <AppContext.Provider value={{ state, actions }}>
      <div className="app-root" data-screen={state.screen}>
        {state.screen === 'menu' && (
          <MainMenu actions={mainMenuActions()} />
        )}
        {state.screen === 'game' && (
          <>
            <GameBoard actions={gameBoardActions()} />
            <div className="game-hud" aria-live="polite">
              <span className="score player">{state.game.playerScore}</span>
              <span className="score ai">{state.game.aiScore}</span>
            </div>
          </>
        )}
        {state.screen === 'gameover' && (
          <GameOver actions={gameOverActions()} />
        )}
        {state.screen === 'pause' && (
          <>
            <GameBoard actions={gameBoardActions()} />
            <PauseOverlay actions={pauseOverlayActions()} />
          </>
        )}
        {state.screen === 'options' && (
          <GameOptions actions={gameOptionsActions()} />
        )}
        {state.screen === 'controls' && (
          <ControlsHelp actions={controlsHelpActions()} />
        )}
      </div>
    </AppContext.Provider>
  );
}
