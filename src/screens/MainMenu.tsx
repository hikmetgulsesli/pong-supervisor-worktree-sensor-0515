// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Main Menu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BookOpen, ChevronRight, Circle, CirclePlay, Gamepad2, Settings } from "lucide-react";


export type MainMenuActionId = "button-1-1" | "button-2-2" | "button-3-3" | "button-4-4" | "start-new-game-5" | "resume-6" | "easy-7" | "medium-8" | "hard-9" | "leaderboard-10" | "settings-11" | "how-to-play-12";

export interface MainMenuProps {
  actions?: Partial<Record<MainMenuActionId, () => void>>;
}

export function MainMenu({ actions }: MainMenuProps) {
  return (
    <>
      {/* Nav */}
      <nav className="hidden md:flex flex-col bg-background border-b border-outline-variant w-full z-10 relative">
      <div className="flex justify-between items-center w-full px-margin-sm md:px-margin-lg h-touch-target">
      <div className="font-display-score text-display-score text-primary uppercase tracking-tighter text-[32px] leading-[40px]">
                      PONG ARCADE
                  </div>
      <div className="flex items-center space-x-gutter">
      <button aria-label="Settings" className="h-touch-target w-touch-target flex items-center justify-center text-primary hover:bg-surface-variant transition-colors duration-200 active:scale-95" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="Help" className="h-touch-target w-touch-target flex items-center justify-center text-primary hover:bg-surface-variant transition-colors duration-200 active:scale-95" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </nav>
      <nav className="md:hidden flex justify-between items-center w-full px-margin-sm h-touch-target bg-background border-b border-outline-variant z-10 relative">
      <div className="font-headline-lg-mobile text-headline-lg-mobile text-primary uppercase tracking-tighter">
                  PONG ARCADE
              </div>
      <div className="flex items-center space-x-4">
      <button aria-label="Settings" className="text-primary hover:text-surface-variant transition-colors duration-200" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="Help" className="text-primary hover:text-surface-variant transition-colors duration-200" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      </div>
      </nav>
      {/* Main Canvas */}
      <main className="flex-grow flex items-center justify-center relative p-gutter">
      {/* Game Court Background Illusion */}
      <div className="absolute inset-margin-sm md:inset-margin-lg border border-surface-variant rounded flex items-center justify-center pointer-events-none opacity-30">
      <div className="w-[2px] h-full bg-surface-variant border-dashed border-l-2 border-background"></div>
      </div>
      {/* Menu Container */}
      <div className="z-10 bg-surface/80 backdrop-blur-md border border-outline-variant rounded-lg p-margin-sm md:p-margin-lg w-full max-w-[480px] flex flex-col items-center shadow-lg">
      <h1 className="font-display-score text-display-score text-primary uppercase tracking-tighter text-center mb-margin-lg text-[48px] md:text-[64px] leading-none">
                      PONG ARCADE
                  </h1>
      <div className="w-full space-y-4 flex flex-col">
      {/* Primary Action */}
      <button className="h-touch-target w-full bg-outline-variant text-primary font-button-text text-button-text rounded flex items-center justify-center hover:bg-primary hover:text-background transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background group" type="button" data-action-id="start-new-game-5" onClick={actions?.["start-new-game-5"]}>
      <Gamepad2 className="mr-2 group-hover:text-background" aria-hidden={true} focusable="false" />
                          Start New Game
                      </button>
      {/* Disabled Action */}
      <button className="h-touch-target w-full bg-surface-container text-on-surface-variant font-button-text text-button-text rounded flex items-center justify-center cursor-not-allowed opacity-50 border border-outline-variant/30" disabled={true} type="button" data-action-id="resume-6" onClick={actions?.["resume-6"]}>
      <CirclePlay className="mr-2" aria-hidden={true} focusable="false" />
                          Resume
                      </button>
      {/* Settings Segmented Control */}
      <div className="w-full mt-margin-sm">
      <div className="font-label-caps text-label-caps text-on-surface-variant mb-2 text-center">Difficulty</div>
      <div className="flex rounded border border-outline-variant overflow-hidden h-touch-target">
      <button className="flex-1 bg-surface-container text-on-surface-variant font-button-text text-button-text hover:bg-surface-variant transition-colors border-r border-outline-variant" type="button" data-action-id="easy-7" onClick={actions?.["easy-7"]}>Easy</button>
      <button className="flex-1 bg-primary text-background font-button-text text-button-text font-bold border-r border-outline-variant" type="button" data-action-id="medium-8" onClick={actions?.["medium-8"]}>Medium</button>
      <button className="flex-1 bg-surface-container text-on-surface-variant font-button-text text-button-text hover:bg-surface-variant transition-colors" type="button" data-action-id="hard-9" onClick={actions?.["hard-9"]}>Hard</button>
      </div>
      </div>
      {/* Secondary Actions List */}
      <div className="w-full flex flex-col space-y-2 mt-margin-sm pt-margin-sm border-t border-outline-variant/50">
      <button className="h-touch-target w-full flex items-center justify-between px-4 text-on-surface hover:bg-surface-variant hover:text-primary rounded transition-colors group" type="button" data-action-id="leaderboard-10" onClick={actions?.["leaderboard-10"]}>
      <div className="flex items-center font-button-text text-button-text">
      <Circle className="mr-3 text-outline-variant group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
                                  Leaderboard
                              </div>
      <ChevronRight className="text-outline-variant" aria-hidden={true} focusable="false" />
      </button>
      <button className="h-touch-target w-full flex items-center justify-between px-4 text-on-surface hover:bg-surface-variant hover:text-primary rounded transition-colors group" type="button" data-action-id="settings-11" onClick={actions?.["settings-11"]}>
      <div className="flex items-center font-button-text text-button-text">
      <Settings className="mr-3 text-outline-variant group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
                                  Settings
                              </div>
      <ChevronRight className="text-outline-variant" aria-hidden={true} focusable="false" />
      </button>
      <button className="h-touch-target w-full flex items-center justify-between px-4 text-on-surface hover:bg-surface-variant hover:text-primary rounded transition-colors group" type="button" data-action-id="how-to-play-12" onClick={actions?.["how-to-play-12"]}>
      <div className="flex items-center font-button-text text-button-text">
      <BookOpen className="mr-3 text-outline-variant group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
                                  How to Play
                              </div>
      <ChevronRight className="text-outline-variant" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </div>
      </main>
      {/* Bottom Nav Mobile Shell (Contextual suppression applied - this is a transactional/focused screen, but keeping bottom nav if user wants to switch context immediately, though prompt suggests full screen menu. Given instructions "Automatic Suppression: You MUST exclude the navigation shell if the page intent is: Linear/Transactional", a main menu is arguably the start of a linear journey, but also the root destination. I will suppress the bottom nav to keep focus on the main menu card as requested by the prompt "centered, minimalist menu against the game background".) */}
    </>
  );
}
