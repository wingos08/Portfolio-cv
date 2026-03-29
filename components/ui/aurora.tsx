"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function Aurora() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setSize(window.innerWidth, window.innerHeight)

    const material = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      },
      vertexShader: `void main() { gl_Position = vec4(position, 1.0); }`,
      fragmentShader: `
        uniform float iTime;
        uniform vec2  iResolution;
        #define NUM_OCTAVES 3

        float rand(vec2 n) {
          return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
        }
        float noise(vec2 p) {
          vec2 ip = floor(p);
          vec2 u  = fract(p);
          u = u * u * (3.0 - 2.0 * u);
          float res = mix(
            mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
            mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x),
            u.y);
          return res * res;
        }
        float fbm(vec2 x) {
          float v = 0.0; float a = 0.3;
          vec2 shift = vec2(100.0);
          mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
          for (int i = 0; i < NUM_OCTAVES; ++i) {
            v += a * noise(x); x = rot * x * 2.0 + shift; a *= 0.4;
          }
          return v;
        }

        void main() {
          vec2 p = ((gl_FragCoord.xy) - iResolution.xy * 0.5)
                    / iResolution.y
                    * mat2(6., -4., 4., 6.);
          vec4 o = vec4(0.0);
          float f = 2.0 + fbm(p + vec2(iTime * 5.0, 0.0)) * 0.5;

          for (float i = 0.0; i++ < 35.0;) {
            vec2 v = p + cos(
              i * i + (iTime + p.x * 0.08) * 0.025 + i * vec2(13., 11.)
            ) * 3.5;

            float tailNoise = fbm(v + vec2(iTime * 0.5, i)) * 0.3 * (1.0 - (i / 35.0));

            float t = sin(i * 0.15 + iTime * 0.3) * 0.5 + 0.5;
            vec4 blueAurora = vec4(
              0.05 + 0.15 * sin(i * 0.2 + iTime * 0.4),
              0.15 + 0.25 * cos(i * 0.3 + iTime * 0.5),
              0.50 + 0.30 * sin(i * 0.4 + iTime * 0.3),
              1.0
            );
            vec4 goldAurora = vec4(
              0.55 + 0.20 * sin(i * 0.25 + iTime * 0.35),
              0.38 + 0.15 * cos(i * 0.2  + iTime * 0.4),
              0.05 + 0.05 * sin(i * 0.3  + iTime * 0.2),
              1.0
            );
            vec4 auroraColors = mix(blueAurora, goldAurora, t * 0.45);

            vec4 contrib = auroraColors
              * exp(sin(i * i + iTime * 0.8))
              / length(max(v, vec2(v.x * f * 0.015, v.y * 1.5)));
            float thin = smoothstep(0.0, 1.0, i / 35.0) * 0.55;
            o += contrib * (1.0 + tailNoise * 0.8) * thin;
          }

          o = tanh(pow(o / 100.0, vec4(1.6)));
          gl_FragColor = o * 0.9;
        }
      `,
    })

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material)
    scene.add(mesh)

    let raf: number
    function animate() {
      raf = requestAnimationFrame(animate)
      material.uniforms.iTime.value += 0.012
      renderer.render(scene, camera)
    }

    const ro = new ResizeObserver(() => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight)
    })
    ro.observe(document.body)

    animate()

    const handleVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf)
      else animate()
    }
    document.addEventListener("visibilitychange", handleVisibility)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      document.removeEventListener("visibilitychange", handleVisibility)
      renderer.dispose()
      mesh.geometry.dispose()
      material.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
