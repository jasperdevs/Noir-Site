import { ColorScheme } from "./types/shared";

export const THEME: "system" | "light" | "dark" = "light";

export const APP_ID = "1234567890";

export const WHIMSICAL_FONT = undefined;
export const CURSIVE_FONT = undefined;

export const MATERIAL_SYMBOLS = [
  "auto_awesome",
  "movie_filter",
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
    "text-primary": "#000000",
    "text-secondary": "rgba(0, 0, 0, 0.50)",
    "fill-0": "#FFFFFF",
    "fill-1": "#FAFAFA",
    "fill-2": "#F0F0F0",
    "fill-3": "#E0E0E0",
    "accent-brand": "#000000",
    "accent-orange": "#FF8D28",
    "accent-green": "#34C759",
    "accent-red": "#FF3B30",
    "accent-blue": "#007AFF",
    "accent-indigo": "#5856D6",
    "accent-mint": "#00C7BE",
    "accent-purple": "#AF52DE",
    "accent-pink": "#FF2D55",
  },
  DARK: {
    "text-primary": "#000000",
    "text-secondary": "rgba(0, 0, 0, 0.50)",
    "fill-0": "#FFFFFF",
    "fill-1": "#FAFAFA",
    "fill-2": "#F0F0F0",
    "fill-3": "#E0E0E0",
    "accent-brand": "#000000",
    "accent-orange": "#FF8D28",
    "accent-green": "#34C759",
    "accent-red": "#FF3B30",
    "accent-blue": "#007AFF",
    "accent-indigo": "#5856D6",
    "accent-mint": "#00C7BE",
    "accent-purple": "#AF52DE",
    "accent-pink": "#FF2D55",
  },
} as const;

export const MAX_RELEASE_NOTES_PER_PAGE = 5;

export const IS_WAITLIST_ENABLED = false;
