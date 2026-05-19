---
name: Chronos & Cosmos
colors:
  surface: '#16130c'
  surface-dim: '#16130c'
  surface-bright: '#3d3930'
  surface-container-lowest: '#110e07'
  surface-container-low: '#1f1b14'
  surface-container: '#231f18'
  surface-container-high: '#2e2922'
  surface-container-highest: '#39342c'
  on-surface: '#eae1d5'
  on-surface-variant: '#d2c5b1'
  inverse-surface: '#eae1d5'
  inverse-on-surface: '#343028'
  outline: '#9a8f7d'
  outline-variant: '#4e4636'
  surface-tint: '#eec058'
  primary: '#f2c35b'
  on-primary: '#402d00'
  primary-container: '#d4a843'
  on-primary-container: '#553e00'
  inverse-primary: '#795900'
  secondary: '#d2bbff'
  on-secondary: '#3f008e'
  secondary-container: '#6001d1'
  on-secondary-container: '#c9aeff'
  tertiary: '#b3caff'
  on-tertiary: '#002e6a'
  tertiary-container: '#8eaef4'
  on-tertiary-container: '#1b407f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdf9f'
  primary-fixed-dim: '#eec058'
  on-primary-fixed: '#261a00'
  on-primary-fixed-variant: '#5b4300'
  secondary-fixed: '#eaddff'
  secondary-fixed-dim: '#d2bbff'
  on-secondary-fixed: '#25005a'
  on-secondary-fixed-variant: '#5a00c6'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#aec6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#214584'
  background: '#16130c'
  on-background: '#eae1d5'
  surface-variant: '#39342c'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.2em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
---

## Brand & Style
The design system embodies a "Futuristic Mysticism" aesthetic, tailored for a high-end, cinematic time-travel experience. It targets an affluent, adventurous audience seeking exclusivity and transcendence. 

The style merges **Glassmorphism** with **Minimalist Sci-Fi** elements. Expect deep spatial depth, ethereal glows (blooms), and razor-sharp typography. The emotional response should be one of awe, precision, and timelessness. Interfaces should feel like advanced holographic artifacts—weightless yet authoritative.

## Colors
The palette is rooted in the void of deep space (#050514). 

- **Primary (Celestial Gold):** Used for focal points, high-level CTAs, and active states. It represents the value and rarity of time.
- **Secondary (Nebula Purple):** Used for interactive secondary elements, data visualization, and mystery-coded information.
- **Surface:** Glass panels use a base of white or primary color at 5-10% opacity with a high background blur (20px+).
- **Glows:** Primary and secondary colors should utilize `box-shadow` and `filter: drop-shadow` to create a "bloom" effect, simulating light emitting from the hardware.

## Typography
The typography strategy creates a tension between the old world (Serif) and the future (Sans/Mono).

- **Headlines:** Playfair Display provides a "literary" and premium feel, suggesting the historical nature of time travel. Use high-contrast weights for dramatic effect.
- **Body:** Inter ensures maximum readability against dark, vibrant backgrounds. 
- **Labels/Technical:** Space Grotesk is used for metadata, coordinates, and timestamps to inject a technical, futuristic edge. 
- **Formatting:** Headlines should often use generous top margins to allow the serif letterforms to breathe within the layout.

## Layout & Spacing
The design system utilizes a **Fixed Grid** for desktop (12 columns) and a **Fluid Grid** for mobile. 

- **Breathing Room:** High whitespace (negative space) is mandatory to maintain the "cinematic" feel. Avoid dense clusters of information.
- **Rhythm:** All spacing must be multiples of 8px. 
- **Layering:** Use asymmetrical layouts to suggest movement through time and space. Elements should occasionally overlap to emphasize the Z-axis depth.

## Elevation & Depth
Depth is achieved through **Glassmorphism and Tonal Layering** rather than traditional shadows.

1.  **Level 0 (Void):** The background (#050514).
2.  **Level 1 (Sub-surface):** Subtle gradients or textures (e.g., grain/noise) to break up the flat black.
3.  **Level 2 (Panels):** Semi-transparent glass (Alpha 0.05) with a 1px solid border at 15% white opacity.
4.  **Level 3 (Interactive):** Elements that "hover" via gold or purple glows (blooms). 

**Backdrop Blur:** A minimum of 16px blur is required for all containers to ensure text legibility over moving backgrounds or starfields.

## Shapes
The shape language is **Soft (0.25rem)**. 

While the aesthetic is futuristic, sharp edges feel too aggressive and fully rounded "pills" feel too casual/mobile. A subtle corner radius on panels and buttons provides a "machined" precision look. Large hero images or orbital maps may use circular masks to reinforce the planetary/clock-face theme.

## Components
- **Buttons:** 
  - *Primary:* Solid Gold (#d4a843) with black text. On hover, add a 10px gold outer glow.
  - *Secondary:* Ghost style with a 1px Purple (#7c3aed) border and a soft purple inner glow.
- **Cards:** Glass panels with a "top-light" effect (a subtle 1px highlight on the top border only).
- **Inputs:** Darker than the background with a 1px bottom-border only. On focus, the border animates to Gold with a pulse effect.
- **Chips/Badges:** Use the `label-caps` typography style. Backgrounds should be low-opacity versions of Primary or Secondary colors.
- **Specialty Components:** 
  - *Timeline Scrubber:* A horizontal line with a glowing playhead.
  - *Chronometer:* A circular display showing time coordinates using Space Grotesk.
  - *Scanning Overlay:* A thin, horizontal scanning line that slowly moves vertically across image containers.