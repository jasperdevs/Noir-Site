import { ColorScheme } from "./types/shared";

export const THEME: "system" | "light" | "dark" = "dark";

export const APP_ID = "1234567890";

export const WHIMSICAL_FONT = undefined;
export const CURSIVE_FONT = undefined;

export const MATERIAL_SYMBOLS = [
  "sparkles",
  "movie",
  "bookmark",
  "shield",
  "send",
  "check_circle",
  "open_in_new",
  "open_in_full",
  "play_arrow",
  "pause",
  "star",
  "lock",
  "mail",
  "target",
] as const;

export const COLORS: ColorScheme = {
  LIGHT: {
    "text-primary": "#FFFFFF",
    "text-secondary": "rgba(255, 255, 255, 0.55)",
    "fill-0": "#000000",
    "fill-1": "#0A0A0A",
    "fill-2": "#1A1A1A",
    "fill-3": "#2A2A2A",
    "accent-brand": "#FFFFFF",
    "accent-orange": "#FF9230",
    "accent-green": "#30D158",
    "accent-red": "#FF453A",
    "accent-blue": "#0A84FF",
    "accent-indigo": "#5E5CE6",
    "accent-mint": "#63E6E2",
    "accent-purple": "#BF5AF2",
    "accent-pink": "#FF375F",
  },
  DARK: {
    "text-primary": "#FFFFFF",
    "text-secondary": "rgba(255, 255, 255, 0.55)",
    "fill-0": "#000000",
    "fill-1": "#0A0A0A",
    "fill-2": "#1A1A1A",
    "fill-3": "#2A2A2A",
    "accent-brand": "#FFFFFF",
    "accent-orange": "#FF9230",
    "accent-green": "#30D158",
    "accent-red": "#FF453A",
    "accent-blue": "#0A84FF",
    "accent-indigo": "#5E5CE6",
    "accent-mint": "#63E6E2",
    "accent-purple": "#BF5AF2",
    "accent-pink": "#FF375F",
  },
} as const;

export const MAX_RELEASE_NOTES_PER_PAGE = 5;

export const IS_WAITLIST_ENABLED = false;
