// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pause Overlay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play, Settings } from "lucide-react";


export type PauseOverlayActionId = "resume-game-1" | "restart-2" | "options-3" | "main-menu-4";

export interface PauseOverlayProps {
  actions?: Partial<Record<PauseOverlayActionId, () => void>>;
}

export function PauseOverlay({ actions }: PauseOverlayProps) {
  return (
    <>
      {/* Simulated Game Background (Level 1 Surface/Court) */}
      <div className="absolute inset-0 flex items-center justify-center p-gutter md:p-margin-sm z-0">
      <div className="w-full max-w-[1200px] aspect-video border border-outline-variant bg-surface relative flex items-center justify-center overflow-hidden">
      {/* Center Dashed Line */}
      <div className="absolute top-0 bottom-0 left-1/2 -ml-[1px] w-[2px] bg-transparent border-l-2 border-dashed border-outline-variant/50"></div>
      {/* Simulated Scoreboard */}
      <div className="absolute top-margin-sm w-full flex justify-between px-margin-lg opacity-40">
      <div className="font-display-score text-display-score text-primary w-1/2 text-center">11</div>
      <div className="font-display-score text-display-score text-primary w-1/2 text-center">08</div>
      </div>
      {/* Simulated Paddles & Ball */}
      <div className="absolute left-court-padding top-[40%] w-4 h-32 bg-primary"></div>
      <div className="absolute right-court-padding top-[20%] w-4 h-32 bg-primary"></div>
      <div className="absolute left-[60%] top-[45%] w-6 h-6 bg-primary rounded-none"></div>
      </div>
      </div>
      {/* Pause Overlay (60% opacity with backdrop blur per style guide rules for menus over game) */}
      <div className="absolute inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center p-gutter transition-colors duration-300">
      {/* Modal Container */}
      <div className="w-full max-w-sm bg-surface/40 border border-outline-variant p-margin-sm md:p-margin-lg flex flex-col gap-margin-sm backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center mb-2">
      <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-2 opacity-80">System Status</span>
      <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary uppercase tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                          Paused
                      </h1>
      </div>
      {/* Action Buttons Stack */}
      <div className="flex flex-col gap-3 w-full">
      {/* Primary Action: Resume Game */}
      <button className="h-touch-target w-full bg-primary text-background font-button-text text-button-text uppercase tracking-widest border border-primary flex items-center justify-center gap-3 transition-colors duration-200 hover:shadow-[0_0_12px_theme(colors.primary)] active:scale-[0.98]" type="button" data-action-id="resume-game-1" onClick={actions?.["resume-game-1"]}>
      <Play  data-weight="fill" className="text-[20px]" aria-hidden={true} focusable="false" />
                          Resume Game
                      </button>
      {/* Secondary Action: Restart */}
      <button className="h-touch-target w-full bg-surface-variant text-primary font-button-text text-button-text uppercase tracking-widest border border-outline-variant flex items-center justify-center gap-3 transition-colors duration-200 hover:bg-primary hover:text-background hover:border-primary hover:shadow-[0_0_12px_theme(colors.primary)] active:scale-[0.98]" type="button" data-action-id="restart-2" onClick={actions?.["restart-2"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
                          Restart
                      </button>
      {/* Secondary Action: Options */}
      <button className="h-touch-target w-full bg-surface-variant text-primary font-button-text text-button-text uppercase tracking-widest border border-outline-variant flex items-center justify-center gap-3 transition-colors duration-200 hover:bg-primary hover:text-background hover:border-primary hover:shadow-[0_0_12px_theme(colors.primary)] active:scale-[0.98]" type="button" data-action-id="options-3" onClick={actions?.["options-3"]}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
                          Options
                      </button>
      {/* Divider */}
      <div className="w-full h-px bg-outline-variant my-2"></div>
      {/* Destructive/Exit Action: Return to Main Menu */}
      <button className="h-touch-target w-full bg-surface-variant text-error font-button-text text-button-text uppercase tracking-widest border border-outline-variant flex items-center justify-center gap-3 transition-colors duration-200 hover:bg-error hover:text-background hover:border-error hover:shadow-[0_0_12px_theme(colors.error)] active:scale-[0.98]" type="button" data-action-id="main-menu-4" onClick={actions?.["main-menu-4"]}>
      <Circle className="text-[20px]" aria-hidden={true} focusable="false" />
                          Main Menu
                      </button>
      </div>
      </div>
      </div>
    </>
  );
}
