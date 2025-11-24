# Cognoflux Website Walkthrough

## Overview
The **Cognoflux** website has been scaffolded with a focus on high-end creative visuals, following the "Ghost in the Machine" theme.

### Key Features Implemented
*   **3D Hero Section**: Interactive particle field using `Three.js` and `@react-three/fiber`.
*   **Scramble Text Effect**: "Matrix-style" text decoding animation for the main logo.
*   **Holographic Cards**: Glassmorphism service cards with 3D tilt effects using `framer-motion`.
*   **Smooth Scrolling**: Integrated `Lenis` for premium scroll feel.
*   **Tech Stack**: Next.js 15, Tailwind CSS v4, TypeScript.

## How to Run
1.  **Navigate to the project directory**:
    ```bash
    cd projects/life/cognoflux
    ```
2.  **Start the development server**:
    ```bash
    npm run dev
    ```
3.  **Open in Browser**:
    Visit [http://localhost:3000](http://localhost:3000)

## Project Structure
*   `src/components/3d`: Contains Three.js scenes (e.g., `Particles.tsx`).
*   `src/components/ui`: Reusable UI components (`HolographicCard`, `ScrambleText`).
*   `src/app/globals.css`: Tailwind v4 configuration.

## Next Steps
*   Add more pages (`/services`, `/about`) based on `website-plan.md`.
*   Implement the "Neural Fog" shader for deeper background effects.
*   Populate the "Case Studies" section.
