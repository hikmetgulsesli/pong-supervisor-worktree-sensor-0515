export type Difficulty = 'easy' | 'medium' | 'hard';
export type Screen = 'menu' | 'game' | 'options' | 'gameover' | 'pause' | 'controls';

export interface Ball {
  x: number;
  y: number;
  dx: number;
  dy: number;
  speed: number;
}

export interface Paddle {
  y: number;
  height: number;
  width: number;
}

export interface GameSettings {
  difficulty: Difficulty;
  soundEnabled: boolean;
  ballSpeed: number;
  winningScore: number;
}

export interface GameState {
  ball: Ball;
  playerPaddle: Paddle;
  aiPaddle: Paddle;
  playerScore: number;
  aiScore: number;
  isPlaying: boolean;
  isPaused: boolean;
  lastWinner: 'player' | 'ai' | null;
}

export interface HighScore {
  playerScore: number;
  aiScore: number;
  difficulty: Difficulty;
  date: string;
}

export interface AppSettings {
  difficulty: Difficulty;
  soundEnabled: boolean;
  ballSpeed: number;
  winningScore: number;
}

export const DEFAULT_SETTINGS: GameSettings = {
  difficulty: 'medium',
  soundEnabled: true,
  ballSpeed: 5,
  winningScore: 10,
};

export const DIFFICULTY_CONFIG: Record<Difficulty, { aiSpeed: number; ballSpeedMultiplier: number }> = {
  easy: { aiSpeed: 2.5, ballSpeedMultiplier: 0.8 },
  medium: { aiSpeed: 4.0, ballSpeedMultiplier: 1.0 },
  hard: { aiSpeed: 6.5, ballSpeedMultiplier: 1.3 },
};

export const COURT_WIDTH = 800;
export const COURT_HEIGHT = 500;
export const PADDLE_WIDTH = 12;
export const PADDLE_HEIGHT = 80;
export const BALL_SIZE = 10;
export const PADDLE_OFFSET = 20;

export function createInitialBall(difficulty: Difficulty): Ball {
  const speed = DEFAULT_SETTINGS.ballSpeed * DIFFICULTY_CONFIG[difficulty].ballSpeedMultiplier;
  const angle = (Math.random() * Math.PI / 2) - Math.PI / 4;
  const direction = Math.random() > 0.5 ? 1 : -1;
  return {
    x: COURT_WIDTH / 2,
    y: COURT_HEIGHT / 2,
    dx: Math.cos(angle) * speed * direction,
    dy: Math.sin(angle) * speed,
    speed,
  };
}

export function createInitialGameState(difficulty: Difficulty): GameState {
  return {
    ball: createInitialBall(difficulty),
    playerPaddle: { y: COURT_HEIGHT / 2 - PADDLE_HEIGHT / 2, height: PADDLE_HEIGHT, width: PADDLE_WIDTH },
    aiPaddle: { y: COURT_HEIGHT / 2 - PADDLE_HEIGHT / 2, height: PADDLE_HEIGHT, width: PADDLE_WIDTH },
    playerScore: 0,
    aiScore: 0,
    isPlaying: false,
    isPaused: false,
    lastWinner: null,
  };
}
