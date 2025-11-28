import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-x": "gradient-x 3s ease infinite",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  safelist: [
    // Colors
    "text-emerald-400",
    "text-green-400",
    "text-cyan-400",
    "text-blue-400",
    "text-purple-400",
    "text-pink-400",
    "text-yellow-400",
    "text-orange-400",
    "text-red-400",
    "text-teal-400",
    "text-gray-400",

    // Background colors
    "bg-emerald-500",
    "bg-green-500",
    "bg-cyan-500",
    "bg-blue-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-yellow-500",
    "bg-orange-500",
    "bg-red-500",
    "bg-teal-500",

    // Gradients
    "from-emerald-400",
    "to-green-400",
    "from-emerald-500",
    "to-green-500",
    "from-emerald-600",
    "to-green-600",
    "from-cyan-500",
    "to-blue-500",
    "from-blue-500",
    "to-cyan-500",
    "from-purple-500",
    "to-pink-500",
    "from-yellow-500",
    "to-orange-500",
    "from-green-500",
    "to-teal-500",
    "from-gray-700",
    "to-gray-900",
    "from-blue-600",
    "to-blue-800",
    "from-yellow-400",
    "to-yellow-600",
    "from-purple-500",
    "to-purple-700",
    "from-teal-400",
    "to-teal-600",
    "from-green-500",
    "to-green-700",
    "from-pink-500",
    "to-pink-700",

    // Border colors
    "border-emerald-500",
    "border-green-500",
    "border-cyan-500",
    "border-blue-500",
    "border-purple-500",
    "border-pink-500",
    "border-yellow-500",
    "border-orange-500",
    "border-red-500",
    "border-teal-500",

    // Hover states
    "hover:border-emerald-400",
    "hover:border-green-400",
    "hover:border-cyan-400",
    "hover:border-blue-400",
    "hover:border-purple-400",
    "hover:border-pink-400",
    "hover:border-yellow-400",
    "hover:border-orange-400",
    "hover:border-red-400",
    "hover:border-teal-400",

    // Dynamic classes for skills
    "bg-gradient-to-br",
    "from-cyan-500/20",
    "to-blue-500/20",
    "from-purple-500/20",
    "to-pink-500/20",
    "from-green-500/20",
    "to-teal-500/20",
    "from-yellow-500/20",
    "to-orange-500/20",
    "border-cyan-500/30",
    "border-purple-500/30",
    "border-green-500/30",
    "border-yellow-500/30",
    "hover:border-cyan-400/50",
    "hover:border-purple-400/50",
    "hover:border-green-400/50",
    "hover:border-yellow-400/50",
  ],
}

export default config
