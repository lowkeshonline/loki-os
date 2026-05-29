---
name: Aether Terminal
colors:
  surface: "#0e1416"
  surface-dim: "#0e1416"
  surface-bright: "#333a3c"
  surface-container-lowest: "#090f11"
  surface-container-low: "#161d1e"
  surface-container: "#1a2122"
  surface-container-high: "#242b2d"
  surface-container-highest: "#2f3637"
  on-surface: "#dde4e5"
  on-surface-variant: "#bbc9cc"
  inverse-surface: "#dde4e5"
  inverse-on-surface: "#2b3233"
  outline: "#859396"
  outline-variant: "#3c494c"
  surface-tint: "#30d9f1"
  primary: "#70eaff"
  on-primary: "#00363e"
  primary-container: "#19d0e8"
  on-primary-container: "#005560"
  inverse-primary: "#006875"
  secondary: "#6ad3ff"
  on-secondary: "#003546"
  secondary-container: "#02b0e2"
  on-secondary-container: "#003f53"
  tertiary: "#ffd1a0"
  on-tertiary: "#472a00"
  tertiary-container: "#ffac3f"
  on-tertiary-container: "#6e4300"
  error: "#ffb4ab"
  on-error: "#690005"
  error-container: "#93000a"
  on-error-container: "#ffdad6"
  primary-fixed: "#9defff"
  primary-fixed-dim: "#30d9f1"
  on-primary-fixed: "#001f24"
  on-primary-fixed-variant: "#004f59"
  secondary-fixed: "#bee9ff"
  secondary-fixed-dim: "#6ad3ff"
  on-secondary-fixed: "#001f2a"
  on-secondary-fixed-variant: "#004d65"
  tertiary-fixed: "#ffddb9"
  tertiary-fixed-dim: "#ffb964"
  on-tertiary-fixed: "#2b1700"
  on-tertiary-fixed-variant: "#663e00"
  background: "#0e1416"
  on-background: "#dde4e5"
  surface-variant: "#2f3637"
typography:
  display-lg:
    fontFamily: Instrument Serif
    fontSize: 84px
    fontWeight: "400"
    lineHeight: 90%
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Instrument Serif
    fontSize: 48px
    fontWeight: "400"
    lineHeight: 100%
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Instrument Serif
    fontSize: 42px
    fontWeight: "400"
    lineHeight: 110%
  body-base:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 160%
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: "450"
    lineHeight: 150%
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: "700"
    lineHeight: 120%
    letterSpacing: 0.1em
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  max-width: 1440px
---

## Brand & Style

The design system is a high-fidelity "Midnight Terminal" aesthetic, designed to evoke the focus and precision of a premium developer's operating environment. It centers on a "hacker-elite" persona—intelligent, calm, and technically superior.

The visual style is a hybrid of **Minimalism** and **Technical Brutalism**. It avoids the softness of traditional consumer apps in favor of sharp lines, pure blacks, and purposeful luminescence. The emotional goal is to provide a workspace that feels like an advanced command center: dark, immersive, and high-performance. Key motifs include monochromatic graphite textures, pixel-perfect thin borders, and subtle analog noise that mimics a high-end CRT or OLED display.

## Colors

The palette is strictly dominated by "Midnight" tones to maximize contrast with the Aqua accents.

- **The Deep Black:** The base layer is pure `#000000` to create an infinite depth effect, particularly on OLED screens.
- **Surface Tiers:** UI depth is achieved through graphite increments (`#010101` to `#282828`) rather than shadows.
- **Aqua Glow:** Primary Aqua (`#19d0e8`) is used for "active" energy—cursors, progress bars, and terminal prompts.
- **Secondary Aqua:** The `#44ccff` variant is reserved for hover states and interactive borders, providing a slight shift in frequency that suggests reactivity.

## Typography

The typographic hierarchy creates a tension between cinematic elegance and technical utility.

- **Cinematic Headlines:** Use _Instrument Serif_ for large display text. It should be set with tight tracking and leading to feel like a film title sequence.
- **Modern Body:** _Geist_ provides a clean, neutral canvas for long-form reading, ensuring the technical aesthetic doesn't compromise legibility.
- **Technical Metadata:** _JetBrains Mono_ (substituted for DM Mono for enhanced legibility) is used for all "machine-readable" data, terminal outputs, and navigation labels. It reinforces the developer-centric nature of the system.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy that mimics a sophisticated IDE.

- **Grid:** A 12-column grid on desktop with generous 64px outer margins. Content is often "boxed" into specific zones rather than floating freely.
- **Rhythm:** Spacing follows a 4px baseline. Use 24px gutters to allow the dark surfaces breathing room.
- **Responsive Behavior:** On mobile, the grid collapses to 4 columns. Large headlines should scale down aggressively to maintain the "tight" vertical lock-up.
- **Containers:** Elements should feel "embedded" or "carved" into the black background using thin 1px borders rather than elevated cards.

## Elevation & Depth

This system rejects ambient shadows. Depth is conveyed through **Tonal Layers** and **Aqua Outlines**:

- **Layering:** Level 0 is the true black background. Level 1 (Surfaces) is `#010101`. Level 2 (Inputs/Trays) is `#191919`.
- **Glow Borders:** Instead of shadows, use 1px solid borders. Interactive elements use `#282828` in their default state and transition to a "glowing" `#19d0e8` border on hover or focus.
- **Grain & Texture:** Apply a global 3% opacity film grain overlay to the entire UI. This breaks the "digital perfection" of the black and adds a tactile, hardware-like feel.

## Shapes

The shape language is strictly **Sharp (0px)**.

Every UI element—buttons, inputs, images, and containers—must have square corners. This reinforces the "Terminal" and "OS" metaphor, suggesting a system built on logic and grid-alignment. Softness is avoided entirely to maintain the serious, futuristic tone. Pixel-art assets should be rendered with crisp, non-anti-aliased edges to align with this geometry.

## Components

- **Buttons:** Rectangular with a 1px border. Default: White text on Black. Hover: Aqua border with a subtle `box-shadow: 0 0 10px rgba(25, 208, 232, 0.3)`.
- **Terminal Prompts:** Always prefixed with an Aqua `>` or `$` character in JetBrains Mono. Use a blinking block cursor for active states.
- **Inputs:** Solid `#010101` background with a 1px `#282828` border. On focus, the border strikes to Primary Aqua.
- **Chips/Labels:** Small caps JetBrains Mono. Use thin borders and no background fill for a "ghost" aesthetic.
- **Cards:** Do not use shadows. Cards are defined by their `#191919` surface color and a 1px border that separates them from the `#000000` background.
- **Scrollbars:** Ultra-thin (4px), Aqua thumb, no track background.
- **Visual Dividers:** 1px lines using `#191919`. Occasional use of "scanlines" (horizontal 1px patterns) for section headers.
