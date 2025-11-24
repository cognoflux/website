"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  attribute float aScale;
  varying float vAlpha;

  void main() {
    vec3 pos = position;
    
    // Gentle wave movement
    pos.y += sin(uTime * 0.5 + pos.x * 0.5) * 0.1;
    pos.x += cos(uTime * 0.3 + pos.y * 0.5) * 0.1;

    // Mouse interaction (repulsion)
    float dist = distance(pos.xy, uMouse);
    float force = smoothstep(2.0, 0.0, dist);
    vec3 dir = normalize(pos - vec3(uMouse, 0.0));
    pos += dir * force * 0.5;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    // Size attenuation based on depth
    gl_PointSize = aScale * (10.0 / -mvPosition.z);
    
    // Fade out based on depth or interaction
    vAlpha = 0.6 + force * 0.4; 
  }
`;

const fragmentShader = `
  varying float vAlpha;
  
  void main() {
    // Circular particle
    float r = distance(gl_PointCoord, vec2(0.5));
    if (r > 0.5) discard;
    
    // Soft edge
    float glow = 1.0 - (r * 2.0);
    glow = pow(glow, 1.5);

    gl_FragColor = vec4(0.0, 0.8, 1.0, vAlpha * glow);
  }
`;

function InteractiveParticles() {
    const pointsRef = useRef<THREE.Points>(null!);
    const count = 4000; // Increased for density

    const { positions, scales } = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const scales = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            // Spread particles across a wider, flatter area
            positions[i * 3] = (Math.random() - 0.5) * 25; // Wider X spread
            positions[i * 3 + 1] = (Math.random() - 0.5) * 15; // Taller Y spread
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;  // Deeper Z

            scales[i] = Math.random();
        }
        return { positions, scales };
    }, []);

    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(9999, 9999) } // Start off-screen
    }), []);

    useFrame((state) => {
        const { clock, pointer, viewport } = state;
        if (pointsRef.current) {
            // Update time
            (pointsRef.current.material as THREE.ShaderMaterial).uniforms.uTime.value = clock.getElapsedTime();

            // Update mouse position (mapped to world space roughly)
            // pointer is normalized [-1, 1], map to viewport size
            const x = (pointer.x * viewport.width) / 2;
            const y = (pointer.y * viewport.height) / 2;

            // Smoothly interpolate mouse uniform
            (pointsRef.current.material as THREE.ShaderMaterial).uniforms.uMouse.value.lerp(new THREE.Vector2(x, y), 0.1);
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                    args={[positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-aScale"
                    count={count}
                    array={scales}
                    itemSize={1}
                    args={[scales, 1]}
                />
            </bufferGeometry>
            <shaderMaterial
                transparent
                depthWrite={false}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
            />
        </points>
    );
}

export function HeroParticles() {
    return (
        <div className="absolute inset-0 z-0 h-full w-full bg-black pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <InteractiveParticles />
            </Canvas>
        </div>
    );
}
