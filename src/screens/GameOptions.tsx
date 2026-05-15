// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Options
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Settings } from "lucide-react";


export type GameOptionsActionId = "button-1-1" | "button-2-2" | "reset-to-default-3" | "save-and-close-4";

export interface GameOptionsProps {
  actions?: Partial<Record<GameOptionsActionId, () => void>>;
}

export function GameOptions({ actions }: GameOptionsProps) {
  return (
    <>
      {/* TopNavBar */}
      <nav className="bg-background dark:bg-background border-b border-outline-variant flex justify-between items-center w-full px-margin-sm md:px-margin-lg h-touch-target full-width top-0 z-50">
      <div className="font-display-score text-headline-lg-mobile md:text-headline-lg text-primary uppercase tracking-tighter">PONG ARCADE</div>
      <div className="flex gap-4">
      <button className="h-touch-target w-touch-target flex items-center justify-center text-primary font-bold border-b-2 border-primary pb-1 active:scale-95 transition-transform" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </button>
      <button className="h-touch-target w-touch-target flex items-center justify-center text-on-surface-variant font-medium hover:bg-surface-variant transition-colors duration-200 active:scale-95" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      </div>
      </nav>
      {/* Main Canvas */}
      <main className="flex-1 flex items-center justify-center p-gutter md:p-margin-lg">
      {/* Settings Panel Card */}
      <div className="w-full max-w-md bg-surface-container border border-outline-variant rounded p-margin-sm md:p-margin-lg relative overflow-hidden backdrop-blur-md">
      <h1 className="font-label-caps text-label-caps text-primary uppercase mb-8 pb-4 border-b border-outline-variant">Game Options</h1>
      <form className="space-y-6">
      {/* Sound Effects Slider */}
      <div className="space-y-2">
      <div className="flex justify-between items-center">
      <label className="font-body-md text-body-md text-primary" htmlFor="sfx-vol">Sound Effects</label>
      <span className="font-label-caps text-label-caps text-on-surface-variant">80%</span>
      </div>
      <div className="h-touch-target flex items-center w-full">
      <input className="w-full appearance-none bg-transparent focus:outline-none" id="sfx-vol" max="100" min="0" type="range" value="80" />
      </div>
      </div>
      {/* Music Slider */}
      <div className="space-y-2">
      <div className="flex justify-between items-center">
      <label className="font-body-md text-body-md text-primary" htmlFor="music-vol">Music</label>
      <span className="font-label-caps text-label-caps text-on-surface-variant">45%</span>
      </div>
      <div className="h-touch-target flex items-center w-full">
      <input className="w-full appearance-none bg-transparent focus:outline-none" id="music-vol" max="100" min="0" type="range" value="45" />
      </div>
      </div>
      {/* Difficulty Select */}
      <div className="space-y-2">
      <label className="font-body-md text-body-md text-primary block" htmlFor="difficulty">Difficulty</label>
      <div className="relative w-full">
      <select className="w-full h-touch-target bg-background border border-outline-variant text-primary font-body-md text-body-md px-4 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" id="difficulty">
      <option value="easy">Easy</option>
      <option selected={true} value="medium">Medium</option>
      <option value="hard">Hard</option>
      <option value="insane">Insane</option>
      </select>
      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-primary">
      <Circle aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      {/* Ball Speed Select */}
      <div className="space-y-2">
      <label className="font-body-md text-body-md text-primary block" htmlFor="ball-speed">Ball Speed</label>
      <div className="relative w-full">
      <select className="w-full h-touch-target bg-background border border-outline-variant text-primary font-body-md text-body-md px-4 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" id="ball-speed">
      <option value="1x">1x (Standard)</option>
      <option selected={true} value="1.5x">1.5x (Fast)</option>
      <option value="2x">2x (Hyper)</option>
      </select>
      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-primary">
      <Circle aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      {/* Theme Selection */}
      <div className="space-y-2 pt-2">
      <label className="font-body-md text-body-md text-primary block">Theme</label>
      <div className="flex flex-col sm:flex-row gap-2">
      <label className="flex-1 cursor-pointer">
      <input checked={true} className="peer sr-only" name="theme" type="radio" value="arcade" />
      <div className="h-touch-target flex items-center justify-center font-button-text text-button-text bg-surface-variant text-primary border border-outline-variant peer-checked:bg-primary peer-checked:text-background peer-focus:ring-2 peer-focus:ring-primary/50">
                                      Arcade
                                  </div>
      </label>
      <label className="flex-1 cursor-pointer">
      <input className="peer sr-only" name="theme" type="radio" value="classic" />
      <div className="h-touch-target flex items-center justify-center font-button-text text-button-text bg-surface-variant text-primary border border-outline-variant peer-checked:bg-primary peer-checked:text-background peer-focus:ring-2 peer-focus:ring-primary/50">
                                      Classic
                                  </div>
      </label>
      <label className="flex-1 cursor-pointer">
      <input className="peer sr-only" name="theme" type="radio" value="neon" />
      <div className="h-touch-target flex items-center justify-center font-button-text text-button-text bg-surface-variant text-primary border border-outline-variant peer-checked:bg-primary peer-checked:text-background peer-focus:ring-2 peer-focus:ring-primary/50">
                                      Neon
                                  </div>
      </label>
      </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-outline-variant mt-8">
      <button className="h-touch-target px-6 flex items-center justify-center font-button-text text-button-text border border-outline-variant text-primary hover:bg-surface-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" type="button" data-action-id="reset-to-default-3" onClick={actions?.["reset-to-default-3"]}>
                              Reset to Default
                          </button>
      <button className="flex-1 h-touch-target px-6 flex items-center justify-center font-button-text text-button-text bg-surface-variant text-primary hover:bg-primary hover:text-background focus:outline-none focus:ring-2 focus:ring-primary/50" type="button" data-action-id="save-and-close-4" onClick={actions?.["save-and-close-4"]}>
                              Save &amp; Close
                          </button>
      </div>
      </form>
      </div>
      </main>
    </>
  );
}
