import { useState, useCallback, useRef, useEffect } from 'react';
import type { Screen, GameState, GameSettings, Difficulty, Ball, Paddle } from '../types/domain';
import {
  createInitialGameState,
  createInitialBall,
  DEFAULT_SETTINGS,
  DIFFICULTY_CONFIG,
  COURT_WIDTH,
  COURT_HEIGHT,
  PADDLE_HEIGHT,
  PADDLE_WIDTH,
  PADDLE_OFFSET,
  BALL_SIZE,
} from '../types/domain';
import {
  loadSettings,
  saveSettings,
  saveHighScore,
  loadPersistedGame,
  savePersistedGame,
  clearPersistedGame,
} from '../utils/storage';

export interface AppState {
  screen: Screen;
  previousScreen: Screen | null;
  settings: GameSettings;
  game: GameState;
  highScoresAvailable: boolean;
  canResume: boolean;
}

export interface AppActions {
  startGame: () => void;
  resumeGame: () => void;
  pauseGame: () => void;
  unpauseGame: () => void;
  restartGame: () => void;
  goToMenu: () => void;
  goToOptions: () => void;
  goToControls: () => void;
  goToLeaderboard: () => void;
  saveOptions: (opts: Partial<GameSettings>) => void;
  resetOptions: () => void;
  closeOptions: () => void;
  setDifficulty: (d: Difficulty) => void;
  movePlayerUp: () => void;
  movePlayerDown: () => void;
  stopPlayer: () => void;
  tick: () => void;
}

function buildInitialState(): AppState {
  const persisted = loadPersistedGame();
  const settings = loadSettings();
  return {
    screen: 'menu',
    previousScreen: null,
    settings,
    game: persisted
      ? {
          ...createInitialGameState(settings.difficulty),
          playerScore: persisted.playerScore,
          aiScore: persisted.aiScore,
          isPaused: persisted.isPaused,
          isPlaying: false,
        }
      : createInitialGameState(settings.difficulty),
    highScoresAvailable: false,
    canResume: persisted !== null,
  };
}

function updateBall(ball: Ball, player: Paddle, ai: Paddle, speed: number): { ball: Ball; scored: 'player' | 'ai' | null } {
  let nx = ball.x + ball.dx;
  let ny = ball.y + ball.dy;
  let ndx = ball.dx;
  let ndy = ball.dy;
  let scored: 'player' | 'ai' | null = null;

  if (ny <= 0 || ny >= COURT_HEIGHT - BALL_SIZE) {
    ndy = -ndy;
    ny = ny <= 0 ? 0 : COURT_HEIGHT - BALL_SIZE;
  }

  const playerRect = { x: PADDLE_OFFSET, y: player.y, w: PADDLE_WIDTH, h: player.height };
  const aiRect = { x: COURT_WIDTH - PADDLE_OFFSET - PADDLE_WIDTH, y: ai.y, w: PADDLE_WIDTH, h: ai.height };

  if (
    ndx < 0 &&
    nx <= playerRect.x + playerRect.w &&
    nx >= playerRect.x &&
    ny + BALL_SIZE >= playerRect.y &&
    ny <= playerRect.y + playerRect.h
  ) {
    ndx = Math.abs(ndx) * 1.02;
    const hitPos = (ny - playerRect.y) / playerRect.h - 0.5;
    ndy += hitPos * speed * 0.5;
    nx = playerRect.x + playerRect.w + 1;
  }

  if (
    ndx > 0 &&
    nx + BALL_SIZE >= aiRect.x &&
    nx + BALL_SIZE <= aiRect.x + aiRect.w &&
    ny + BALL_SIZE >= aiRect.y &&
    ny <= aiRect.y + aiRect.h
  ) {
    ndx = -Math.abs(ndx) * 1.02;
    const hitPos = (ny - aiRect.y) / aiRect.h - 0.5;
    ndy += hitPos * speed * 0.5;
    nx = aiRect.x - BALL_SIZE - 1;
  }

  if (nx < -BALL_SIZE) {
    scored = 'ai';
    nx = COURT_WIDTH / 2;
    ny = COURT_HEIGHT / 2;
    const angle = (Math.random() * Math.PI / 2) - Math.PI / 4;
    ndx = Math.cos(angle) * speed;
    ndy = Math.sin(angle) * speed;
  } else if (nx > COURT_WIDTH) {
    scored = 'player';
    nx = COURT_WIDTH / 2;
    ny = COURT_HEIGHT / 2;
    const angle = (Math.random() * Math.PI / 2) - Math.PI / 4;
    ndx = -Math.cos(angle) * speed;
    ndy = Math.sin(angle) * speed;
  }

  return {
    ball: { x: nx, y: ny, dx: ndx, dy: ndy, speed },
    scored,
  };
}

function updateAI(ai: Paddle, ballY: number, difficulty: Difficulty): Paddle {
  const center = ai.y + ai.height / 2;
  const diff = ballY - center;
  const speed = DIFFICULTY_CONFIG[difficulty].aiSpeed;
  const move = Math.max(-speed, Math.min(speed, diff * 0.15));
  const newY = Math.max(0, Math.min(COURT_HEIGHT - ai.height, ai.y + move));
  return { ...ai, y: newY };
}

export function useAppState() {
  const [state, setState] = useState<AppState>(buildInitialState);
  const playerVelocityRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  const startGame = useCallback(() => {
    setState((prev) => {
      const game = createInitialGameState(prev.settings.difficulty);
      game.isPlaying = true;
      game.isPaused = false;
      return {
        ...prev,
        screen: 'game',
        previousScreen: 'menu',
        game,
        canResume: true,
      };
    });
  }, []);

  const resumeGame = useCallback(() => {
    setState((prev) => {
      if (!prev.canResume) return prev;
      return {
        ...prev,
        screen: 'game',
        previousScreen: 'menu',
        game: {
          ...prev.game,
          isPlaying: true,
          isPaused: false,
        },
      };
    });
  }, []);

  const pauseGame = useCallback(() => {
    setState((prev) => {
      if (prev.screen !== 'game' || !prev.game.isPlaying) return prev;
      savePersistedGame({
        playerScore: prev.game.playerScore,
        aiScore: prev.game.aiScore,
        difficulty: prev.settings.difficulty,
        isPaused: true,
      });
      return {
        ...prev,
        screen: 'pause',
        previousScreen: 'game',
        game: { ...prev.game, isPaused: true },
        canResume: true,
      };
    });
  }, []);

  const unpauseGame = useCallback(() => {
    setState((prev) => {
      if (prev.screen !== 'pause') return prev;
      return {
        ...prev,
        screen: 'game',
        previousScreen: 'pause',
        game: { ...prev.game, isPaused: false },
      };
    });
  }, []);

  const restartGame = useCallback(() => {
    setState((prev) => {
      const game = createInitialGameState(prev.settings.difficulty);
      game.isPlaying = true;
      game.isPaused = false;
      return {
        ...prev,
        screen: 'game',
        previousScreen: prev.screen,
        game,
        canResume: true,
      };
    });
  }, []);

  const goToMenu = useCallback(() => {
    setState((prev) => ({
      ...prev,
      screen: 'menu',
      previousScreen: prev.screen,
      game: { ...prev.game, isPlaying: false },
    }));
  }, []);

  const goToOptions = useCallback(() => {
    setState((prev) => ({
      ...prev,
      screen: 'options',
      previousScreen: prev.screen,
    }));
  }, []);

  const goToControls = useCallback(() => {
    setState((prev) => ({
      ...prev,
      screen: 'controls',
      previousScreen: prev.screen,
    }));
  }, []);

  const goToLeaderboard = useCallback(() => {
    setState((prev) => ({
      ...prev,
      screen: 'gameover',
      previousScreen: prev.screen,
      highScoresAvailable: true,
    }));
  }, []);

  const saveOptions = useCallback((opts: Partial<GameSettings>) => {
    setState((prev) => {
      const next = { ...prev.settings, ...opts };
      saveSettings(next);
      return { ...prev, settings: next };
    });
  }, []);

  const resetOptions = useCallback(() => {
    setState((prev) => {
      saveSettings({ ...DEFAULT_SETTINGS });
      return { ...prev, settings: { ...DEFAULT_SETTINGS } };
    });
  }, []);

  const closeOptions = useCallback(() => {
    setState((prev) => ({
      ...prev,
      screen: prev.previousScreen ?? 'menu',
      previousScreen: null,
    }));
  }, []);

  const setDifficulty = useCallback((d: Difficulty) => {
    setState((prev) => {
      const next = { ...prev.settings, difficulty: d };
      saveSettings(next);
      return { ...prev, settings: next };
    });
  }, []);

  const movePlayerUp = useCallback(() => {
    playerVelocityRef.current = -6;
  }, []);

  const movePlayerDown = useCallback(() => {
    playerVelocityRef.current = 6;
  }, []);

  const stopPlayer = useCallback(() => {
    playerVelocityRef.current = 0;
  }, []);

  const tick = useCallback(() => {
    setState((prev) => {
      if (!prev.game.isPlaying || prev.game.isPaused || prev.screen !== 'game') {
        return prev;
      }

      let game = prev.game as GameState;
      let player = { ...game.playerPaddle };
      player.y = Math.max(0, Math.min(COURT_HEIGHT - player.height, player.y + playerVelocityRef.current));

      const speed = prev.settings.ballSpeed * DIFFICULTY_CONFIG[prev.settings.difficulty].ballSpeedMultiplier;
      const { ball, scored } = updateBall(
        { ...game.ball, speed },
        player,
        game.aiPaddle,
        speed
      );

      const ai = updateAI(game.aiPaddle, ball.y, prev.settings.difficulty);

      let playerScore = game.playerScore;
      let aiScore = game.aiScore;
      let lastWinner = game.lastWinner;
      let isPlaying = game.isPlaying;
      let screen: Screen = prev.screen;

      if (scored === 'player') {
        playerScore += 1;
      } else if (scored === 'ai') {
        aiScore += 1;
      }

      if (playerScore >= prev.settings.winningScore || aiScore >= prev.settings.winningScore) {
        lastWinner = playerScore >= prev.settings.winningScore ? 'player' : 'ai';
        isPlaying = false;
        screen = 'gameover';
        saveHighScore({
          playerScore,
          aiScore,
          difficulty: prev.settings.difficulty,
          date: new Date().toISOString(),
        });
        clearPersistedGame();
      }

      return {
        ...prev,
        screen,
        game: {
          ...game,
          ball,
          playerPaddle: player,
          aiPaddle: ai,
          playerScore,
          aiScore,
          isPlaying,
          lastWinner,
        },
      };
    });
  }, []);

  useEffect(() => {
    if (state.screen !== 'game' || !state.game.isPlaying || state.game.isPaused) {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTimeRef.current = 0;
      return;
    }

    const loop = (time: number) => {
      if (lastTimeRef.current === 0) lastTimeRef.current = time;
      const delta = time - lastTimeRef.current;
      if (delta >= 16) {
        lastTimeRef.current = time;
        tick();
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [state.screen, state.game.isPlaying, state.game.isPaused, tick]);

  const actions: AppActions = {
    startGame,
    resumeGame,
    pauseGame,
    unpauseGame,
    restartGame,
    goToMenu,
    goToOptions,
    goToControls,
    goToLeaderboard,
    saveOptions,
    resetOptions,
    closeOptions,
    setDifficulty,
    movePlayerUp,
    movePlayerDown,
    stopPlayer,
    tick,
  };

  return { state, actions } as const;
}
