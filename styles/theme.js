// Central theme configuration for easy customization
const theme = {
  colors: {
    primary: {
      50: "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#f5aa31", // Primary brand color
      600: "#ea580c",
      700: "#c2410c",
      800: "#9a3412",
      900: "#7c2d12",
      950: "#431407",
    },
    secondary: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e",
    },
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },
    success: "#10b981",
    warning: "#f59e0b",
    error: "#ef4444",
    info: "#3b82f6",
  },

  fonts: {
    heading: "var(--font-poppins, 'Poppins', sans-serif)",
    body: "var(--font-poppins, 'Poppins', sans-serif)",
  },

  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  spacing: {
    container: {
      padding: {
        sm: "1rem",
        md: "2rem",
        lg: "4rem",
      },
    },
    section: {
      sm: { paddingTop: "2rem", paddingBottom: "2rem" },
      md: { paddingTop: "3rem", paddingBottom: "3rem" },
      lg: { paddingTop: "4rem", paddingBottom: "4rem" },
    },
    gap: {
      sm: "0.5rem",
      md: "1rem",
      lg: "2rem",
    },
  },

  borderRadius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    full: "9999px",
  },

  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },

  transitions: {
    default: "all 0.3s ease",
    fast: "all 0.15s ease",
    slow: "all 0.5s ease",
  },

  // Animation durations
  durations: {
    fast: 300,
    normal: 500,
    slow: 700,
  },

  // Carousel settings
  carousel: {
    autoplaySpeed: 5000, // 5 seconds
    transitionDuration: 500, // 0.5 seconds
  },
}

export default theme
