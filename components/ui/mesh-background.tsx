"use client"

import { MeshGradient } from "@paper-design/shaders-react"

export function MeshBackground() {
  return (
    <MeshGradient
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      colors={["#07080f", "#0f1b2d", "#12223a", "#1a1a0a"]}
      speed={0.4}
    />
  )
}
