import * as THREE from 'https://cdn.skypack.dev/three@0.136.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls.js';
import { UnrealBloomPass } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/postprocessing/UnrealBloomPass.js';
import { EffectComposer } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/postprocessing/ShaderPass.js';
import { gsap } from 'https://cdn.skypack.dev/gsap@3.9.1';

let composer, bloomPass;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000); 

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.set(0, 8, 12); 
camera.lookAt(0, 0, 0); 


const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio * 1.5);
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.autoRotateSpeed = 1;
controls.maxDistance = 50;
controls.minDistance = 5;

// COMPOSER
composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight));
bloomPass.strength = .4;
bloomPass.threshold = .2;
bloomPass.radius = 2;

const scanLineShader = {
  blending: THREE.AdditiveBlending,
  uniforms: {
    "tDiffuse": { value: null },
    "time": { value: 0.0 },
    "lineHeight": { value: 4.0 },
    "lineSpacing": { value: 2.0 },
    "opacity": { value: 1 }
  },
  vertexShader: `
  varying vec2 vUv;
  void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,
  fragmentShader: `
  uniform sampler2D tDiffuse;
  uniform float time;
  uniform float lineHeight;
  uniform float lineSpacing;
  uniform float opacity;
  varying vec2 vUv;

  void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      float scanline = step(lineSpacing, mod(gl_FragCoord.y, lineHeight)) * opacity;
      color.rgb = color.rgb * (1.0 - scanline) + vec3(0.0, 0.0, 0.0) * scanline;
      gl_FragColor = color;
  }
`
};
const scanLinePass = new ShaderPass(scanLineShader);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Pixel Mosh Shader
const pixelMoshShader = {
  uniforms: {
    "tDiffuse": { value: null },
    "time": { value: 0.0 },
    "mouse": { value: new THREE.Vector2(2, 2) }, // new THREE.Vector2(.5, .5) },
    "resolution": { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    "amplitude": { value: 0.9999 },
  },
  vertexShader: `
  varying vec2 vUv;
  void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,
  fragmentShader: `
  uniform sampler2D tDiffuse;
  uniform float time;
  uniform vec2 mouse;
  uniform vec2 resolution;
  uniform float amplitude;
  varying vec2 vUv;

  // Fonction de turbulence
  float turbulence(vec2 p) {
      float w = 10.0;
      float t = -0.5;
      for (float f = 1.0; f <= 10.0; f++) {
          float power = pow(2.0, f);
          t += abs(sin(p.x * power + time * 0.1) / power + cos(p.y * power + time * 0.1) / power);
      }
      return t;
  }

  void main() {
      vec2 uv = vUv;
      vec2 mouseNorm = mouse / resolution;
      float distortStrength = turbulence(uv * 1.0) * amplitude;

      vec2 distort = vec2(
          sin(uv.y * 10.0 + time) * distortStrength,
          cos(uv.x * 10.0 + time) * distortStrength
      );

      vec2 distortedUv = uv + distort * mouseNorm;
      vec4 color = texture2D(tDiffuse, distortedUv);
      gl_FragColor = color;
  }
`
};
const pixelMoshPass = new ShaderPass(pixelMoshShader);

const clock = new THREE.Clock();

// Mouse movement event
/*window.addEventListener('mousemove', (event) => {
  pixelMoshShader.uniforms.mouse.value.x = event.clientX;
  pixelMoshShader.uniforms.mouse.value.y = window.innerHeight - event.clientY;
});
*/


// glitch Shader
const glitchShader = {
  uniforms: {
    'tDiffuse': { value: null },
    'time': { value: 0 },
    'frequency': { value: 5.0 },
    'amplitude': { value: 0.02 },
  },
  vertexShader: `
  varying vec2 vUv;
  void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,
  fragmentShader: `
  uniform sampler2D tDiffuse;
  uniform float time;
  uniform float frequency;
  uniform float amplitude;
  varying vec2 vUv;

  float random(vec2 co) {
      return fract(sin(dot(co.xy, vec2(12.9898,78.233))) * 43758.5453);
  }

  void main() {
      vec2 uv = vUv;
      float glitchAmount = random(uv * time) * amplitude;
      uv.y += sin(uv.x * frequency + time) * glitchAmount;

      vec4 color = texture2D(tDiffuse, uv);
      gl_FragColor = color;
  }
`
};
const wavehPass = new ShaderPass(glitchShader);
wavehPass.uniforms['frequency'].value = 9;
wavehPass.uniforms['amplitude'].value = 0.021;


const glitchShader2 = {
  uniforms: {
    tDiffuse: { value: null },
    time: { value: 0 },
    glitchAmount: { value: 0.1 }, // 0.1
    glitchSpeed: { value: 10.0 }, // 10
    pauseDuration: { value: 2.0 }, // 2
    bandWidth: { value: 500.0 }, //10
  },
  vertexShader: `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,
  fragmentShader: `
  uniform sampler2D tDiffuse;
  uniform float time;
  uniform float glitchAmount;
  uniform float glitchSpeed;
  uniform float pauseDuration;
  uniform float bandWidth;
  varying vec2 vUv;
  float rand(vec2 n) { 
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
  }
  void main() {
    vec2 uv = vUv;
    float glitch = sin((time * glitchSpeed) + rand(uv)) * glitchAmount;
    if (mod(time, pauseDuration) < pauseDuration - 0.1) {
      // Ajouter des bandes de droite à gauche
      float band = floor(uv.x * bandWidth);
      if (mod(band, 2.0) == 0.0) {
        uv.x += glitch;
      }
    }
    gl_FragColor = texture2D(tDiffuse, uv);
  }
`,
};
const glitchPass2 = new ShaderPass(glitchShader2);
glitchPass2.uniforms.tDiffuse.value = scene.backgroundTexture;

// Ajouter le pass à la chaîne de post-processing

// composer.addPass(wavehPass);
composer.addPass(glitchPass2);
composer.addPass(pixelMoshPass);
composer.addPass(bloomPass);
composer.addPass(scanLinePass);

const pointLight = new THREE.PointLight(0xffffff, 1, 100);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0xb347ec); 
scene.add(ambientLight);


const materials = [
  new THREE.MeshStandardMaterial({ color: 0xff6f61, metalness: 0.1, roughness: 0.6, side: THREE.DoubleSide }), // Orange
  new THREE.MeshStandardMaterial({ color: 0x6fc3df, metalness: 0.1, roughness: 0.6, side: THREE.DoubleSide }), // Bleu
  new THREE.MeshStandardMaterial({ color: 0xfed049, metalness: 0.1, roughness: 0.6, side: THREE.DoubleSide }), // Jaune
  new THREE.MeshStandardMaterial({ color: 0x999999, metalness: 1.0, roughness: 0.3, side: THREE.DoubleSide }), // Métal
  new THREE.MeshStandardMaterial({ color: 0xfde2e2, metalness: 0.1, roughness: 0.9, side: THREE.DoubleSide }), // Rose pastel
  new THREE.MeshToonMaterial({ color: Math.random() * 0xffffff }),
  new THREE.MeshPhysicalMaterial({ color: 0x6fc3df, metalness: 0.8, roughness: 0.9, clearcoat: 1.0, clearcoatRoughness: 0.1 })
];

function createSymmetricalGeometry() {
  const geometries = [];
  for (let i = 0; i < 120; i++) {
    const type = Math.floor(Math.random() * 2);
    let geometry;
    switch (type) {
      case 0:
        geometry = new THREE.BoxGeometry(Math.random() * 2, Math.random() * 2, Math.random() * 2);
        break;

      case 1:
        geometry = new THREE.TorusGeometry(Math.random() * 1, Math.random() * 0.25, 16, 100);
        break;

      case 2:
        geometry = new THREE.SphereGeometry(Math.random() * 1, 32, 32);
        break;

      case 3:
        geometry = new THREE.ConeGeometry( Math.random() * 10, Math.random() * 3, 12 );
        break;

      case 4:
        const curve = new THREE.CatmullRomCurve3(
          new Array(100).fill().map((_, i) => {
            const angle = i * 0.02;
            const x = Math.cos(angle) * 5;
            const y = Math.sin(angle) * 5;
            const z =  Math.sin(angle) * 5;
            return new THREE.Vector3(x, y, z);
          })
        );
        geometry = new THREE.TubeGeometry(curve, 100, 0.5, 8, false);
        break;

    }
    const material = materials[Math.floor(Math.random() * materials.length)];
    const mesh = new THREE.Mesh(geometry, material);

    // Position the mesh symmetrically
    const xPos = (Math.random() - 0.5) * 20;
    const zPos = (Math.random() - 0.5) * 20;
    mesh.position.set(xPos, Math.random() * 5, zPos);

    const xRot = (Math.random() - 0.5) * 20;
    mesh.rotation.set(xRot, Math.random() * xRot, xRot);

    geometries.push(mesh);
    scene.add(mesh);
  }
  return geometries;
}

let geometries = createSymmetricalGeometry();

function getRandomPosition() {
  return {
    x: Math.random() * 0 - 10,
    y: Math.random() * 8 - 10,
    z: Math.random() * 8 - 1
  };
}

// double click : camera movement, change AmbientCight.color

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
function randomPosition() {
  return {
    x: Math.random() * 20 - 10,
    y: Math.random() * 10 - 10,
    z: Math.random() * 20 - 10
  };
}

window.addEventListener('dblclick', () => {
  const newColor = Math.random() * 0x555555; 
  gsap.to(ambientLight.color, {
    duration: 1.5,
    r: (newColor >> 16) / 255,
    g: (newColor >> 16) / 255,
    //g: ((newColor >> 8) & 255) / 255,
    b: (newColor & 255) / 255,
    ease: 'easeOutQuint',
    onUpdate: () => {
      //console.log(`New ambient light color: #${ambientLight.color.getHexString()}`);
    }
  });

  // geometries.forEach(mesh => scene.remove(mesh));
  // geometries = createSymmetricalGeometry();
  const newPosition = getRandomPosition();
  gsap.to(camera.position, {
    duration: Math.random() *16-6,
    x: newPosition.x,
    y: newPosition.y,
    z: newPosition.z,
    ease: "Sine.easeInOut"
  });
});   

function animate() {
  requestAnimationFrame(animate);
  //pixelMoshShader.uniforms.time.value = clock.getElapsedTime();
  wavehPass.uniforms['time'].value += 0.5;
  controls.update();
  renderer.render(scene, camera);
  composer.render();
}

let title3;
document.addEventListener('DOMContentLoaded', () => {
  const title1 = document.createElement('h3');
  title1.classList.add('title', '_1');
  title1.textContent = 'three.js + Ambient Light Color Change on Double Click';

  const title2 = document.createElement('h3');
  title2.classList.add('title', '_2');
  title2.textContent = 'double click';

  title3 = document.createElement('h3');
  title3.classList.add('title', '_3');
  title3.textContent = 'fullscreen on';

  document.body.appendChild(title1);
  document.body.appendChild(title2);
  document.body.appendChild(title3);

  const titles = document.querySelectorAll('.title');

  titles.forEach(title => {
    title.style.position = 'absolute';
    title.style.fontFamily = 'arial';
    title.style.color = '#fff';
    title.style.fontSize = '.8rem';
  });

  title1.style.top = '20px';
  title1.style.left = '30px';

  title2.style.bottom = '20px';
  title2.style.left = '30px';

  title3.style.bottom = '20px';
  title3.style.right = '30px';
  title3.style.fontSize = '.8rem';
  title3.style.cursor = 'pointer';

  title3.addEventListener('click', toggleFullscreen);
});

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    title3.textContent = 'fullscreen off';
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
    title3.textContent = 'fullscreen on';
  }
}

animate();