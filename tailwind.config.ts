
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      fontFamily: {
        vscode: ["Segoe UI", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["Consolas", "Monaco", "Courier New", "monospace"],
        code: ["Fira Code", "Consolas", "Monaco", "Courier New", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        sidebar: "hsl(var(--sidebar))",
        "sidebar-foreground": "hsl(var(--sidebar-foreground))",
        "active-tab": "hsl(var(--active-tab))",
        "inactive-tab": "hsl(var(--inactive-tab))",
        "inactive-tab-hover": "hsl(var(--inactive-tab-hover))",
        "sidebar-active": "rgba(255, 255, 255, 0.08)",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        highlight: {
          DEFAULT: "#8B5CF6",
          foreground: "#ffffff"
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "underline": {
          "0%, 100%": { transform: "scaleX(1)", opacity: "1" },
          "50%": { transform: "scaleX(0.5)", opacity: "0.5" }
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 5px 0px rgba(139, 92, 246, 0.3)" },
          "50%": { boxShadow: "0 0 15px 5px rgba(139, 92, 246, 0.5)" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "spotlight": {
          "0%": { opacity: "0", transform: "scale(0.8) translateY(20px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "cursor-blink": "blink 1s step-end infinite",
        "underline": "underline 2s ease-in-out infinite",
        "fade-in": "fade-in 0.5s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float": "float 4s ease-in-out infinite",
        "spotlight": "spotlight 0.7s ease-out forwards"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-light': 'linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%)',
        'gradient-purple': 'linear-gradient(90deg, hsla(277, 75%, 84%, 1) 0%, hsla(297, 50%, 51%, 1) 100%)',
        'gradient-orange': 'linear-gradient(90deg, hsla(39, 100%, 77%, 1) 0%, hsla(22, 90%, 57%, 1) 100%)',
        'gradient-green': 'linear-gradient(90deg, hsla(139, 70%, 75%, 1) 0%, hsla(63, 90%, 76%, 1) 100%)',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
