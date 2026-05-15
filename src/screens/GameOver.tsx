// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Over
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Home } from "lucide-react";


export type GameOverActionId = "play-again-1" | "share-score-2" | "leaderboard-3" | "main-menu-4";

export interface GameOverProps {
  actions?: Partial<Record<GameOverActionId, () => void>>;
}

export function GameOver({ actions }: GameOverProps) {
  return (
    <>
      {/* TopNavBar (Hidden on Mobile, Visible on Web if needed, but Game Over usually hides global nav for focus. Keeping it as per "Semantic Shell" mandate rules for top-level if it was, but this is a transactional/modal screen. SUPPRESSING NAVBARS as per instruction: "Automatic Suppression: You MUST exclude the navigation shell if the page intent is: Linear/Transactional... or Success/Confirmation splash screens.") */}
      {/* Background Game Court Context (Blurred) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center p-gutter pointer-events-none opacity-40 blur-md">
      <div className="w-full max-w-5xl aspect-video border border-surface-variant flex items-center justify-between p-court-padding relative">
      {/* Center Line */}
      <div className="absolute inset-y-0 left-1/2 -ml-[1px] w-[2px] bg-surface-variant border-dashed border-y-[20px] border-background"></div>
      {/* Paddles */}
      <div className="h-1/3 w-4 bg-primary"></div>
      <div className="h-1/3 w-4 bg-primary"></div>
      {/* Ball */}
      <div className="absolute top-1/2 left-3/4 w-4 h-4 bg-primary rounded-full"></div>
      </div>
      </div>
      {/* Main Game Over Modal Canvas */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-gutter">
      {/* Game Over Card */}
      <div className="bg-surface/80 backdrop-blur-xl border border-outline-variant w-full max-w-lg rounded-xl flex flex-col items-center p-margin-sm shadow-2xl relative overflow-hidden">
      {/* Glow Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-tertiary-container blur-sm opacity-50"></div>
      {/* Header */}
      <div className="text-center mb-margin-sm w-full">
      <span className="font-label-caps text-label-caps text-tertiary-container uppercase block mb-2 tracking-widest">Victory</span>
      <h1 className="font-display-score text-display-score text-primary tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">YOU WIN</h1>
      </div>
      {/* Stats Grid */}
      <div className="w-full grid grid-cols-2 gap-4 mb-margin-lg border-y border-outline-variant py-margin-sm">
      {/* Final Score */}
      <div className="flex flex-col items-center justify-center border-r border-outline-variant">
      <span className="font-label-caps text-label-caps text-surface-tint uppercase mb-1">Final Score</span>
      <div className="flex items-baseline gap-2">
      <span className="font-headline-lg text-headline-lg text-primary">11</span>
      <span className="font-body-md text-body-md text-surface-tint">-</span>
      <span className="font-headline-lg text-headline-lg text-surface-tint">8</span>
      </div>
      </div>
      {/* Match Duration */}
      <div className="flex flex-col items-center justify-center">
      <span className="font-label-caps text-label-caps text-surface-tint uppercase mb-1">Duration</span>
      <span className="font-headline-lg text-headline-lg text-primary">03:42</span>
      </div>
      </div>
      {/* High Score Highlight (Conditional) */}
      <div className="bg-surface-variant/50 border border-tertiary-container/30 px-4 py-2 rounded-full flex items-center gap-2 mb-margin-lg">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-tertiary-container" aria-hidden={true} focusable="false" />
      <span className="font-button-text text-button-text text-tertiary-container uppercase tracking-wider">New High Score!</span>
      </div>
      {/* Action Buttons */}
      <div className="w-full flex flex-col gap-3">
      <button className="h-touch-target w-full bg-outline-variant text-primary hover:bg-primary hover:text-background active:scale-95 transition-colors duration-200 font-button-text text-button-text uppercase rounded flex items-center justify-center gap-2 glow-focus" type="button" data-action-id="play-again-1" onClick={actions?.["play-again-1"]}>
      <Circle aria-hidden={true} focusable="false" />
                          Play Again
                      </button>
      <div className="grid grid-cols-2 gap-3 w-full">
      <button className="h-touch-target bg-surface text-primary border border-outline-variant hover:bg-primary hover:text-background active:scale-95 transition-colors duration-200 font-button-text text-button-text uppercase rounded flex items-center justify-center gap-2 glow-focus" type="button" data-action-id="share-score-2" onClick={actions?.["share-score-2"]}>
      <Circle aria-hidden={true} focusable="false" />
                              Share Score
                          </button>
      <button className="h-touch-target bg-surface text-primary border border-outline-variant hover:bg-primary hover:text-background active:scale-95 transition-colors duration-200 font-button-text text-button-text uppercase rounded flex items-center justify-center gap-2 glow-focus" type="button" data-action-id="leaderboard-3" onClick={actions?.["leaderboard-3"]}>
      <Circle aria-hidden={true} focusable="false" />
                              Leaderboard
                          </button>
      </div>
      <button className="h-touch-target w-full mt-2 bg-transparent text-surface-tint hover:text-primary transition-colors duration-200 font-button-text text-button-text uppercase rounded flex items-center justify-center gap-2 glow-focus" type="button" data-action-id="main-menu-4" onClick={actions?.["main-menu-4"]}>
      <Home aria-hidden={true} focusable="false" />
                          Main Menu
                      </button>
      </div>
      </div>
      </main>
    </>
  );
}
