import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function GlitchBackground(){
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current!
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor('#05050a')
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

    const uniforms = {
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
    }

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `void main(){ gl_Position = vec4(position,1.0); }`,
      fragmentShader: `
        precision highp float;
        uniform float u_time;
        uniform vec2 u_resolution;

        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453123); }
        float noise(vec2 p){ vec2 i=floor(p), f=fract(p);
          float a=hash(i), b=hash(i+vec2(1,0)), c=hash(i+vec2(0,1)), d=hash(i+vec2(1,1));
          vec2 u=f*f*(3.0-2.0*f);
          return mix(a,b,u.x)+(c-a)*u.y*(1.0-u.x)+(d-b)*u.x*u.y;
        }

        void main(){
          vec2 uv = gl_FragCoord.xy/u_resolution.xy;
          uv.y=1.0-uv.y;
          vec3 col = vec3(0.05,0.0,0.1);

          float glitch = step(0.95, fract(sin(u_time*3.0)*43758.5453));
          if(glitch>0.5){
            uv.x += (noise(vec2(uv.y*40.0, u_time*5.0))-0.5)*0.2;
            col = vec3(0.7,0.2,1.0);
          }

          gl_FragColor = vec4(col,1.0);
        }
      `
    })

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2,2), material)
    scene.add(mesh)

    let raf = 0
    const loop = (t: number) => {
      uniforms.u_time.value = t*0.001
      renderer.render(scene, camera)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const resize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="fixed inset-0 -z-10"><div className="scanlines" /></div>
}
