# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint
```

## Architecture

Next.js 16 App Router project. All routes live under `app/`. UI components are in `components/ui/` (shadcn/ui pattern — add new components there). Shared utilities go in `lib/utils.ts`.

**Shader components** use Three.js directly inside React via `useEffect` with a `"use client"` directive. The pattern: create a full-screen `PlaneGeometry(2,2)` with a `ShaderMaterial`, append the renderer's canvas to a `ref`'d div, and clean up on unmount (cancel animation frame, remove canvas, dispose geometry/material/renderer). See `components/ui/shader-animation.tsx` for the reference implementation.

Uniforms passed to GLSL shaders: `time` (float, incremented each frame) and `resolution` (vec2, updated on resize).

## Key Constraints

- **Next.js 16 has breaking changes** from prior versions — before writing any Next.js-specific code, check `node_modules/next/dist/docs/` for current API conventions.
- TypeScript strict mode is enabled.
- Path alias `@/*` maps to the project root.
- Tailwind CSS 4 (PostCSS plugin approach, not the v3 config file).
