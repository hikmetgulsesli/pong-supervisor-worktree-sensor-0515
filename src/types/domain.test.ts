import { describe, it, expect, beforeEach } from 'vitest';
import {
  createInitialBall,
  createInitialGameState,
  COURT_WIDTH,
  COURT_HEIGHT,
  BALL_SIZE,
  PADDLE_HEIGHT,
  PADDLE_WIDTH,
  DEFAULT_SETTINGS,
} from './domain';

describe('domain', () => {
  beforeEach(() => {
    // Reset Math.random seed behavior is not needed; just assert ranges
  });

  it('createInitialBall centers ball within court', () => {
    const ball = createInitialBall('medium');
    expect(ball.x).toBe(COURT_WIDTH / 2);
    expect(ball.y).toBe(COURT_HEIGHT / 2);
    expect(ball.speed).toBe(DEFAULT_SETTINGS.ballSpeed);
  });

  it('createInitialBall speed scales with difficulty', () => {
    const easy = createInitialBall('easy');
    const medium = createInitialBall('medium');
    const hard = createInitialBall('hard');
    expect(easy.speed).toBeLessThan(medium.speed);
    expect(hard.speed).toBeGreaterThan(medium.speed);
  });

  it('createInitialGameState has zero scores and not playing', () => {
    const state = createInitialGameState('medium');
    expect(state.playerScore).toBe(0);
    expect(state.aiScore).toBe(0);
    expect(state.isPlaying).toBe(false);
    expect(state.isPaused).toBe(false);
    expect(state.lastWinner).toBeNull();
  });

  it('paddles are positioned at center vertically', () => {
    const state = createInitialGameState('medium');
    expect(state.playerPaddle.y).toBe(COURT_HEIGHT / 2 - PADDLE_HEIGHT / 2);
    expect(state.aiPaddle.y).toBe(COURT_HEIGHT / 2 - PADDLE_HEIGHT / 2);
    expect(state.playerPaddle.width).toBe(PADDLE_WIDTH);
    expect(state.playerPaddle.height).toBe(PADDLE_HEIGHT);
  });
});
