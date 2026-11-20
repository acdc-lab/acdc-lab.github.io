const canvas = document.querySelector(".acdc-hero-particles");
const hero = canvas.closest(".acdc-hero");
const toggle = hero.querySelector(".acdc-motion-toggle");
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

async function start() {
  const gl = canvas.getContext("webgl2", { alpha: true, depth: false });
  if (!gl) return;

  const THREE = await import("./vendor/three-0.174.0/three.module.min.js");
  const renderer = new THREE.WebGLRenderer({ canvas, context: gl });
  renderer.setClearColor(0x000000, 0);
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
  camera.position.z = 4;

  const count = 14000;
  const seeds = new Float32Array(count * 3);
  const noise = new Float32Array(count);
  for (let i = 0; i < count; i += 1) {
    seeds[i * 3] = Math.random();
    seeds[i * 3 + 1] = Math.random();
    seeds[i * 3 + 2] = Math.random();
    noise[i] = Math.random();
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(seeds, 3));
  geometry.setAttribute("aNoise", new THREE.BufferAttribute(noise, 1));

  const uniforms = {
    uTime: { value: 0 },
    uAspect: { value: 1 },
    uDpr: { value: 1 },
    uPointer: { value: new THREE.Vector2(-4, -4) },
    uPointerStrength: { value: 0 },
  };
  const material = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthTest: false,
    depthWrite: false,
    vertexShader: `
      uniform float uTime, uAspect, uDpr, uPointerStrength;
      uniform vec2 uPointer;
      attribute float aNoise;
      varying vec3 vColor;
      varying float vAlpha;

      void main() {
        float u = position.x;
        float v = position.y * 2.0 - 1.0;
        float phase = u * 9.4 - uTime * .34;
        float fold = u * 8.1 + uTime * .23;
        float width = sin(u * 3.14159) * .28 + .075;
        float depth = sin(fold) * v;
        vec2 p = vec2(
          (u * 2.6 - 1.28) * uAspect + depth * .16,
          -.61 + .57 * u + sin(phase) * .29 + cos(fold) * v * width
        );
        p += vec2(position.z - .5, aNoise - .5) * (.065 + .21 * pow(abs(v), 4.0));

        // A sparse field frames the ribbon without competing with the title.
        bool drifting = aNoise > .90;
        if (drifting) {
          p = vec2((u * 2.0 - 1.0) * uAspect, v);
          p += vec2(cos(phase), sin(phase)) * .045;
          depth *= .4;
        }

        vec2 fromPointer = p - uPointer;
        float distanceToPointer = length(fromPointer);
        float scatter = (1.0 - smoothstep(0.0, .5, distanceToPointer)) * uPointerStrength;
        p += fromPointer / max(.04, distanceToPointer) * scatter * (.13 + position.z * .23);

        vec3 teal = vec3(.06, .42, .42);
        vec3 blue = vec3(.20, .51, .73);
        vec3 amber = vec3(.71, .42, .14);
        vColor = mix(teal, blue, position.z);
        vColor = mix(vColor, amber, smoothstep(.64, .88, u + v * .18) * .93);
        float twinkle = .77 + .23 * sin(uTime * 1.1 + aNoise * 24.0);
        float focus = smoothstep(.16, .66, length(vec2(p.x / uAspect, p.y + .04)));
        vAlpha = (drifting ? .32 : .71) * twinkle * mix(.18, 1.0, focus);
        gl_PointSize = uDpr * (1.1 + position.z * 1.6 + depth * .28);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, depth * .5, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        float r = length(gl_PointCoord - .5);
        float edge = 1.0 - smoothstep(.16, .5, r);
        gl_FragColor = vec4(vColor, vAlpha * edge);
      }
    `,
  });
  const points = new THREE.Points(geometry, material);
  points.frustumCulled = false;
  scene.add(points);

  let frame = 0;
  let lastTime = 0;
  let onScreen = false;
  let paused = false;
  let pointerInside = false;

  function render() {
    renderer.render(scene, camera);
  }

  function animate(now) {
    const dt = lastTime ? Math.min((now - lastTime) / 1000, .05) : 0;
    lastTime = now;
    uniforms.uTime.value += dt;
    const strength = uniforms.uPointerStrength;
    strength.value += ((pointerInside ? 1 : 0) - strength.value) * (1 - Math.exp(-dt * 9));
    render();
    frame = requestAnimationFrame(animate);
  }

  function syncAnimation() {
    const stopped = paused || reducedMotion.matches;
    toggle.classList.toggle("is-paused", stopped);
    const label = stopped ? toggle.dataset.resume : toggle.dataset.pause;
    toggle.title = label;
    toggle.setAttribute("aria-label", label);
    toggle.hidden = reducedMotion.matches;
    if (stopped || !onScreen || document.hidden) {
      cancelAnimationFrame(frame);
      frame = 0;
      lastTime = 0;
      uniforms.uPointerStrength.value = 0;
      render();
    } else if (!frame) {
      frame = requestAnimationFrame(animate);
    }
  }

  function resize() {
    const { width, height } = hero.getBoundingClientRect();
    if (!width || !height) return;
    const aspect = width / height;
    const dpr = Math.min(devicePixelRatio, 1.6);
    uniforms.uAspect.value = aspect;
    uniforms.uDpr.value = dpr;
    camera.left = -aspect;
    camera.right = aspect;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height, false);
    geometry.setDrawRange(0, width < 680 ? 8500 : count);
    render();
  }

  hero.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse") return;
    const bounds = hero.getBoundingClientRect();
    uniforms.uPointer.value.set(
      (2 * (event.clientX - bounds.left) / bounds.width - 1) * uniforms.uAspect.value,
      1 - 2 * (event.clientY - bounds.top) / bounds.height
    );
    pointerInside = true;
  });
  hero.addEventListener("pointerleave", () => { pointerInside = false; });
  toggle.addEventListener("click", () => {
    paused = !paused;
    syncAnimation();
  });
  reducedMotion.addEventListener("change", syncAnimation);
  document.addEventListener("visibilitychange", syncAnimation);
  new ResizeObserver(resize).observe(hero);
  new IntersectionObserver(([entry]) => {
    onScreen = entry.isIntersecting;
    syncAnimation();
  }).observe(hero);
  resize();
  syncAnimation();
}

start().catch((error) => {
  console.warn("Unable to render homepage particles:", error);
});
