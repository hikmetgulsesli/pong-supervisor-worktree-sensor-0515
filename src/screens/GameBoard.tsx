// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ChevronDown, ChevronUp, Pause, Settings } from "lucide-react";


export type GameBoardActionId = "button-1-1" | "button-2-2" | "button-3-3" | "button-4-4";

export interface GameBoardProps {
  actions?: Partial<Record<GameBoardActionId, () => void>>;
}

export function GameBoard({ actions }: GameBoardProps) {
  return (
    <>
      {/* TopNavBar */}
      <header className="flex justify-between items-center w-full px-margin-sm md:px-margin-lg h-touch-target bg-background border-b border-outline-variant docked full-width top-0 z-10 shrink-0">
      <div className="flex items-center">
      <h1 className="font-display-score text-headline-lg-mobile md:text-headline-lg text-primary uppercase tracking-tighter">PONG ARCADE</h1>
      </div>
      <div className="flex items-center gap-4">
      <button aria-label="Pause Game" className="w-touch-target h-touch-target flex items-center justify-center text-primary bg-surface-variant rounded hover:bg-primary hover:text-background transition-colors duration-200 active:scale-95" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Pause  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="Settings" className="w-touch-target h-touch-target flex items-center justify-center text-primary bg-surface-variant rounded hover:bg-primary hover:text-background transition-colors duration-200 active:scale-95" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Game Area */}
      <main className="flex-grow flex flex-col items-center justify-center p-gutter relative w-full h-full overflow-hidden">
      {/* Game Container (16:9 Aspect Ratio Focus) */}
      <div className="relative w-full max-w-[1200px] aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/9] bg-surface border border-outline-variant flex flex-col items-center justify-center shrink-0">
      {/* HUD / Scoreboard (Absolute within Court) */}
      <div className="absolute top-8 left-0 w-full flex justify-center items-center gap-16 z-10 pointer-events-none">
      <div className="flex flex-col items-center">
      <span className="font-label-caps text-label-caps text-on-surface-variant mb-2">PLAYER 1</span>
      <span className="font-display-score text-display-score text-primary">04</span>
      </div>
      <div className="w-px h-16 bg-outline-variant"></div>
      <div className="flex flex-col items-center">
      <span className="font-label-caps text-label-caps text-on-surface-variant mb-2">AI CPU</span>
      <span className="font-display-score text-display-score text-primary">02</span>
      </div>
      </div>
      {/* Court Line */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 border-l-2 border-dashed border-outline-variant h-full w-px opacity-50 z-0"></div>
      {/* Game Elements Layer */}
      <div className="absolute inset-court-padding z-10">
      {/* Left Paddle */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-32 bg-primary rounded-sm shadow-[0_0_8px_rgba(255,255,255,0.2)]"></div>
      {/* Right Paddle (AI) */}
      <div className="absolute right-0 top-1/3 -translate-y-1/2 w-4 h-32 bg-primary rounded-sm"></div>
      {/* Ball */}
      <div className="absolute left-1/3 top-1/2 w-4 h-4 bg-primary rounded-full glow-ball"></div>
      </div>
      {/* Side Panels (Status overlay within court bounds for tight framing) */}
      <div className="absolute bottom-4 left-4 flex flex-col gap-2 z-10 pointer-events-none">
      <div className="bg-surface-variant/80 backdrop-blur-sm border border-outline-variant px-3 py-1 rounded">
      <span className="font-label-caps text-label-caps text-primary">LEVEL 1</span>
      </div>
      </div>
      <div className="absolute bottom-4 right-4 flex flex-col gap-2 z-10 pointer-events-none">
      <div className="bg-surface-variant/80 backdrop-blur-sm border border-outline-variant px-3 py-1 rounded">
      <span className="font-label-caps text-label-caps text-primary">SPEED: NORMAL</span>
      </div>
      </div>
      </div>
      {/* Mobile Touch Controls (Visible only on small screens) */}
      <div className="md:hidden w-full max-w-[1200px] mt-4 flex justify-between px-gutter shrink-0 h-32">
      <div className="flex flex-col justify-between h-full w-24">
      <button className="flex-1 bg-surface border border-outline-variant rounded mb-2 active:bg-primary active:text-background flex items-center justify-center text-primary transition-colors" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <ChevronUp aria-hidden={true} focusable="false" />
      </button>
      <button className="flex-1 bg-surface border border-outline-variant rounded mt-2 active:bg-primary active:text-background flex items-center justify-center text-primary transition-colors" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <ChevronDown aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="flex items-center justify-center text-on-surface-variant font-label-caps text-label-caps opacity-50">
                      SWIPE TO MOVE
                  </div>
      </div>
      </main>
      {/* BottomNavBar (Suppressed as per rules: Game Board is a focused journey, BottomNav hidden) */}
    </>
  );
}
