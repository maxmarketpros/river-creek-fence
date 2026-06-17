// TypeScript mirror of CSS design tokens for use in JS contexts
// The source of truth is globals.css — keep these in sync when rebranding

export const themeTokens = {
  primary: {
    50: "#f7faec",
    100: "#eef4d2",
    200: "#dde9a8",
    300: "#c6da72",
    400: "#b3cd45",
    500: "#a5c021",
    600: "#8aa31b",
    700: "#5f7016",
    800: "#47540f",
    900: "#2e360a",
  },
  foreground: "#0a0a0a",
  muted: "#5b5b5b",
  border: "#e5e7eb",
  surface: "#f7f8f3",
  background: "#ffffff",
} as const;
