// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Controls Help
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowLeft, ArrowUp, Circle, MousePointerClick, Settings } from "lucide-react";


export type ControlsHelpActionId = "button-1-1" | "button-2-2" | "back-to-menu-3";

export interface ControlsHelpProps {
  actions?: Partial<Record<ControlsHelpActionId, () => void>>;
}

export function ControlsHelp({ actions }: ControlsHelpProps) {
  return (
    <>
      {/* TopNavBar */}
      <header className="docked full-width top-0 bg-background border-b border-outline-variant flex justify-between items-center w-full px-margin-sm md:px-margin-lg h-touch-target z-50">
      <div className="font-display-score text-display-score text-primary uppercase tracking-tighter" style={{fontSize: "24px", lineHeight: "32px"}}>
                  PONG ARCADE
              </div>
      <div className="flex items-center gap-4">
      <button aria-label="settings" className="h-touch-target w-touch-target flex items-center justify-center text-on-surface-variant hover:bg-surface-variant transition-colors duration-200 active:scale-95 transition-transform rounded arcade-focus" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="help" className="h-touch-target w-touch-target flex items-center justify-center text-primary font-bold border-b-2 border-primary pb-1 active:scale-95 transition-transform rounded arcade-focus" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-grow flex flex-col items-center justify-center p-gutter md:p-margin-lg w-full max-w-4xl mx-auto">
      <div className="w-full flex flex-col gap-margin-sm">
      <div className="text-center mb-margin-sm">
      <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary uppercase">System Controls</h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-2">Initialize parameters before entering the court.</p>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      {/* Keyboard Module */}
      <section className="bg-surface-container border border-outline-variant rounded-lg p-margin-sm flex flex-col items-center text-center gap-6 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-variant/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      <div className="h-12 w-12 rounded-full border border-outline-variant flex items-center justify-center bg-surface-container-high text-primary">
      <Circle aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h2 className="font-label-caps text-label-caps text-primary mb-2">Desktop / Keyboard</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">Optimal for precision tracking and zero latency inputs.</p>
      </div>
      <div className="flex flex-col gap-4 w-full mt-auto">
      <div className="flex items-center justify-between bg-surface-container-high border border-outline-variant rounded p-3">
      <span className="font-button-text text-button-text text-on-surface">Move Up</span>
      <div className="flex gap-2">
      <span className="keycap font-label-caps text-label-caps">W</span>
      <span className="text-outline-variant font-label-caps text-label-caps flex items-center">OR</span>
      <ArrowUp className="keycap text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      </div>
      <div className="flex items-center justify-between bg-surface-container-high border border-outline-variant rounded p-3">
      <span className="font-button-text text-button-text text-on-surface">Move Down</span>
      <div className="flex gap-2">
      <span className="keycap font-label-caps text-label-caps">S</span>
      <span className="text-outline-variant font-label-caps text-label-caps flex items-center">OR</span>
      <ArrowDown className="keycap text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      </section>
      {/* Touch Module */}
      <section className="bg-surface-container border border-outline-variant rounded-lg p-margin-sm flex flex-col items-center text-center gap-6 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-variant/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      <div className="h-12 w-12 rounded-full border border-outline-variant flex items-center justify-center bg-surface-container-high text-primary">
      <MousePointerClick aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h2 className="font-label-caps text-label-caps text-primary mb-2">Mobile / Touch</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">Calibrated for fluid gestures and direct screen interaction.</p>
      </div>
      <div className="flex flex-col gap-4 w-full mt-auto">
      <div className="flex items-center justify-between bg-surface-container-high border border-outline-variant rounded p-3">
      <span className="font-button-text text-button-text text-on-surface">Relative Control</span>
      <div className="flex items-center gap-2 text-primary">
      <Circle aria-hidden={true} focusable="false" />
      <Circle aria-hidden={true} focusable="false" />
      </div>
      </div>
      <div className="flex items-center justify-between bg-surface-container-high border border-outline-variant rounded p-3">
      <span className="font-button-text text-button-text text-on-surface">Absolute Control</span>
      <div className="flex items-center gap-2 text-primary">
      <Circle aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      </section>
      {/* Rules Module */}
      <section className="md:col-span-2 bg-surface-container border border-outline-variant rounded-lg p-margin-sm flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-surface-variant/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      <div className="flex items-center gap-4">
      <div className="h-12 w-12 rounded-full border border-outline-variant flex items-center justify-center bg-surface-container-high text-tertiary-fixed">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </div>
      <div className="text-left">
      <h2 className="font-label-caps text-label-caps text-primary mb-1">Match Objective</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">Defeat your opponent. Prevent the core from breaching your defensive line.</p>
      </div>
      </div>
      <div className="bg-surface-dim border border-outline-variant rounded px-6 py-4 flex items-center justify-center shrink-0">
      <span className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary tracking-tighter uppercase">
                                  First to 10 Wins
                              </span>
      </div>
      </section>
      </div>
      {/* Navigation Action */}
      <div className="mt-margin-lg flex justify-center">
      <button className="h-touch-target px-margin-sm bg-surface-variant text-primary border border-outline-variant rounded font-button-text text-button-text uppercase tracking-widest hover:bg-primary hover:text-background transition-colors duration-200 active:scale-95 arcade-focus flex items-center gap-2 group" type="button" data-action-id="back-to-menu-3" onClick={actions?.["back-to-menu-3"]}>
      <ArrowLeft className="text-[18px] group-hover:-translate-x-1 transition-transform" aria-hidden={true} focusable="false" />
                          Back to Menu
                      </button>
      </div>
      </div>
      </main>
    </>
  );
}
