/**
 * Brain 3D — Three.js Neural Network Visualization
 * CodyMaster Architecture: Brain → Skills → Workflows → QMD → NotebookLM
 */
import * as THREE from 'three';

// ──────────────── DATA ────────────────
const SKILL_CATEGORIES = [
  { name: 'Think', emoji: '🧠', color: '#a855f7', skills: [
    { id: 'cm-brainstorm-idea', label: 'Brainstorm', desc: 'Strategic analysis gate' },
    { id: 'cm-planning', label: 'Planning', desc: 'Requirements & design' },
    { id: 'cm-jtbd', label: 'JTBD', desc: 'Jobs-To-Be-Done discovery' },
    { id: 'cm-start', label: 'Start', desc: 'Workflow orchestrator' },
    { id: 'cm-reactor', label: 'Reactor', desc: 'Codebase pivot protocol' },
  ]},
  { name: 'Design', emoji: '🎨', color: '#ec4899', skills: [
    { id: 'cm-ux-master', label: 'UX Master', desc: '48 UX Laws + Design Tests' },
    { id: 'cm-ui-preview', label: 'UI Preview', desc: 'AI design generation' },
    { id: 'cm-design-system', label: 'Design System', desc: 'Token management' },
    { id: 'cm-cro-methodology', label: 'CRO', desc: 'Conversion optimization' },
  ]},
  { name: 'Build', emoji: '💻', color: '#22d3ee', skills: [
    { id: 'cm-execution', label: 'Execution', desc: 'Batch/parallel dispatch' },
    { id: 'cm-tdd', label: 'TDD', desc: 'Test-driven development' },
    { id: 'cm-terminal', label: 'Terminal', desc: 'Command management' },
    { id: 'cm-codeintell', label: 'CodeIntell', desc: 'AST graph + skeleton' },
  ]},
  { name: 'Quality', emoji: '🛡️', color: '#22c55e', skills: [
    { id: 'cm-quality-gate', label: 'Quality Gate', desc: 'Pre-deploy verification' },
    { id: 'cm-code-review', label: 'Code Review', desc: 'Review lifecycle' },
    { id: 'cm-clean-code', label: 'Clean Code', desc: 'Dead code elimination' },
    { id: 'cm-test-gate', label: 'Test Gate', desc: 'CI test infrastructure' },
  ]},
  { name: 'Deploy', emoji: '🚀', color: '#f97316', skills: [
    { id: 'cm-safe-deploy', label: 'Safe Deploy', desc: 'Multi-gate pipeline' },
    { id: 'cm-identity-guard', label: 'Identity Guard', desc: 'Account verification' },
    { id: 'cm-secret-shield', label: 'Secret Shield', desc: 'Secret scanning' },
    { id: 'cm-git-worktrees', label: 'Git Worktrees', desc: 'Isolated branches' },
    { id: 'cm-safe-i18n', label: 'i18n', desc: 'Safe translation' },
  ]},
  { name: 'Content', emoji: '📝', color: '#C4F82A', skills: [
    { id: 'cm-content-factory', label: 'Content Factory', desc: 'Multi-format engine' },
    { id: 'cm-notebooklm', label: 'NotebookLM', desc: 'Cloud brain sync' },
    { id: 'cm-dockit', label: 'DocKit', desc: 'Documentation engine' },
    { id: 'cm-deep-search', label: 'Deep Search', desc: 'BM25 + qmd search' },
    { id: 'cm-readit', label: 'ReadIt', desc: 'Audio/TTS experience' },
  ]},
  { name: 'Healing', emoji: '🏥', color: '#ef4444', skills: [
    { id: 'cm-skill-health', label: 'Skill Health', desc: 'Real-time metrics' },
    { id: 'cm-skill-evolution', label: 'Skill Evolution', desc: 'Self-healing logic' },
    { id: 'cm-notebooklm', label: 'SEO Master', desc: 'Cloud brain sync' },
    { id: 'cm-dockit', label: 'Auto Publisher', desc: 'Documentation engine' },
    { id: 'cm-deep-search', label: 'ReadIt Voice', desc: 'BM25 + qmd search' },
    { id: 'cm-readit', label: 'StoryBrand', desc: 'Audio/TTS experience' },
  ]},
  { name: 'Healing', emoji: '🏥', color: '#f87171', skills: [
    { id: 'cm-skill-health', label: 'Self-Healing', desc: 'Real-time metrics' },
    { id: 'cm-skill-evolution', label: 'Continuity', desc: 'Self-healing logic' },
    { id: 'cm-continuity', label: 'Debugging', desc: 'Working memory protocol' },
    { id: 'cm-debugging', label: 'Meta-Learning', desc: 'Root cause analysis' },
    { id: 'cm-history', label: 'Project History', desc: 'Archive' },
  ]},
  { name: 'Enterprise', emoji: '🏭', color: '#7dd3fc', skills: [
    { id: 'cm-frappe-agent', label: 'ERPNext Custom', desc: 'ERPNext & Frappe' },
    { id: 'cm-growth-hacking', label: 'Database Schema', desc: 'CRO & Tracking' },
    { id: 'cm-ads-tracker', label: 'System Design', desc: 'Pixel & CAPI' },
    { id: 'cm-booking-calendar', label: 'Scaling', desc: 'Appointments' },
    { id: 'cm-dockit-sys', label: 'DocKit System', desc: 'Documentation' },
  ]},
];
const MEMORY_TIERS = [
  { name: 'Sensory', color: '#fef08a', radius: 2.5, desc: 'Session variables — forgotten instantly' },
  { name: 'Working', color: '#fdba74', radius: 3.5, desc: 'CONTINUITY.md — 7-day context' },
  { name: 'Long-Term', color: '#fbcfe8', radius: 4.5, desc: 'learnings.json — 30-180 day TTL' },
  { name: 'Semantic', color: '#bfdbfe', radius: 5.5, desc: 'qmd / vector — permanent search' },
  { name: 'Structural', color: '#ddd6fe', radius: 6.5, desc: 'CodeGraph / AST — real-time' },
];

// ──────────────── GLOBALS ────────────────
let scene, camera, renderer, clock;
let brainCore, brainGlow;
let skillMeshes = [];
let tierRings = [];
let connectionLines = [];
let particles = [];
let raycaster, mouse;
let hoveredNode = null;
let isMobile = window.innerWidth < 768;
let isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

const tooltip = document.getElementById('b3dTooltip');
const progressBar = document.getElementById('b3dProgress');

// ──────────────── INIT ────────────────
function init() {
  clock = new THREE.Clock();
  const canvas = document.getElementById('brain3dCanvas');

  // Scene
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0A0A0F, 0.025);

  // Camera
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 2, 12);
  camera.lookAt(0, 0, 0);

  // Renderer
  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: !isMobile,
    alpha: false,
    powerPreference: 'high-performance',
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
  renderer.setClearColor(0x0A0A0F, 1);

  // Raycaster
  raycaster = new THREE.Raycaster();
  raycaster.params.Points.threshold = isMobile ? 0.3 : 0.1; // Larger hit area on mobile
  if (isMobile) raycaster.params.Line.threshold = 0.2;
  mouse = new THREE.Vector2(-10, -10);

  // Build scene
  createBrainCore();
  createMemoryRings();
  createSkillNodes();
  createConnections();
  createAmbientParticles();
  createLights();

  // Events
  window.addEventListener('resize', onResize);
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('scroll', onScroll);
  canvas.addEventListener('touchstart', onTouchStart, { passive: true });

  // Observe sections
  observeSections();

  // Start
  animate();
}

// ──────────────── BRAIN CORE ────────────────
function createBrainCore() {
  // Inner core
  const geo = new THREE.IcosahedronGeometry(1.2, 3);
  const mat = new THREE.MeshPhongMaterial({
    color: 0x7C3AED,
    emissive: 0x4C1D95,
    emissiveIntensity: 0.6,
    shininess: 80,
    transparent: true,
    opacity: 0.85,
    wireframe: false,
  });
  brainCore = new THREE.Mesh(geo, mat);
  scene.add(brainCore);

  // Outer glow wireframe
  const glowGeo = new THREE.IcosahedronGeometry(1.6, 2);
  const glowMat = new THREE.MeshBasicMaterial({
    color: 0xC4F82A,
    wireframe: true,
    transparent: true,
    opacity: 0.12,
  });
  brainGlow = new THREE.Mesh(glowGeo, glowMat);
  scene.add(brainGlow);
}

// ──────────────── MEMORY RINGS ────────────────
function createMemoryRings() {
  MEMORY_TIERS.forEach((tier, i) => {
    const geo = new THREE.TorusGeometry(tier.radius, 0.02, 8, 80);
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(tier.color),
      transparent: true,
      opacity: 0.25,
    });
    const ring = new THREE.Mesh(geo, mat);
    ring.rotation.x = Math.PI / 2 + (i * 0.08);
    ring.rotation.z = i * 0.15;
    ring.userData = { type: 'tier', ...tier };
    tierRings.push(ring);
    scene.add(ring);
  });
}

// ──────────────── SKILL NODES ────────────────
function createSkillNodes() {
  const maxSkills = isMobile ? 15 : isTablet ? 24 : 999;
  let skillCount = 0;

  SKILL_CATEGORIES.forEach((cat, catIdx) => {
    const catAngleOffset = (catIdx / SKILL_CATEGORIES.length) * Math.PI * 2;

    cat.skills.forEach((skill, skillIdx) => {
      if (skillCount >= maxSkills) return;
      skillCount++;

      const angle = catAngleOffset + (skillIdx / cat.skills.length) * (Math.PI * 2 / SKILL_CATEGORIES.length);
      const radius = 5 + Math.sin(skillIdx * 1.7) * 1.5;
      const y = (Math.random() - 0.5) * 3;

      const size = isMobile ? 0.15 : 0.2;
      const geo = new THREE.SphereGeometry(size, isMobile ? 8 : 12, isMobile ? 8 : 12);
      const mat = new THREE.MeshPhongMaterial({
        color: new THREE.Color(cat.color),
        emissive: new THREE.Color(cat.color),
        emissiveIntensity: 0.3,
        shininess: 60,
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(
        Math.cos(angle) * radius,
        y,
        Math.sin(angle) * radius
      );
      mesh.userData = {
        type: 'skill',
        id: skill.id,
        label: skill.label,
        desc: skill.desc,
        category: cat.name,
        color: cat.color,
        baseY: y,
        angle,
        radius,
      };

      skillMeshes.push(mesh);
      scene.add(mesh);
    });
  });
}

// ──────────────── CONNECTIONS ────────────────
function createConnections() {
  const maxConn = isMobile ? 10 : 30;
  let count = 0;

  skillMeshes.forEach((mesh) => {
    if (count >= maxConn) return;
    count++;

    const points = [
      new THREE.Vector3(0, 0, 0),
      mesh.position.clone(),
    ];
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    const mat = new THREE.LineBasicMaterial({
      color: new THREE.Color(mesh.userData.color),
      transparent: true,
      opacity: 0.06,
    });
    const line = new THREE.Line(geo, mat);
    connectionLines.push(line);
    scene.add(line);
  });
}

// ──────────────── AMBIENT PARTICLES ────────────────
function createAmbientParticles() {
  const count = isMobile ? 200 : 600;
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const particlePalette = [
    new THREE.Color('#d9f99d'),
    new THREE.Color('#a78bfa'),
    new THREE.Color('#67e8f9'),
    new THREE.Color('#4ade80'),
    new THREE.Color('#fb923c'),
  ];

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 25;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 25;

    const c = particlePalette[Math.floor(Math.random() * particlePalette.length)];
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }

  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const mat = new THREE.PointsMaterial({
    size: isMobile ? 0.04 : 0.05,
    vertexColors: true,
    transparent: true,
    opacity: 0.5,
    sizeAttenuation: true,
  });

  const pts = new THREE.Points(geo, mat);
  particles.push(pts);
  scene.add(pts);
}

// ──────────────── LIGHTS ────────────────
function createLights() {
  const ambient = new THREE.AmbientLight(0x404060, 0.5);
  scene.add(ambient);

  const point1 = new THREE.PointLight(0xC4F82A, 1, 20);
  point1.position.set(5, 5, 5);
  scene.add(point1);

  const point2 = new THREE.PointLight(0x7C3AED, 0.8, 20);
  point2.position.set(-5, -3, -5);
  scene.add(point2);

  const point3 = new THREE.PointLight(0x06B6D4, 0.6, 15);
  point3.position.set(0, 5, -5);
  scene.add(point3);
}

// ──────────────── CAMERA POSITIONS ────────────────
const CAMERA_STATES = {
  hero:     { pos: [0, 2, 12],  look: [0, 0, 0] },
  memory:   { pos: [-4, 3, 8],  look: [0, 0.5, 0] },
  skills:   { pos: [0, 8, 10],  look: [0, 0, 0] },
  healing:  { pos: [-5, 4, -4], look: [0, 0, 0] },
  workflow: { pos: [5, 2, 8],   look: [0, 0, -1] },
  cloud:    { pos: [0, 6, 6],   look: [0, 2, 0] },
  cta:      { pos: [0, 0, 14],  look: [0, 0, 0] },
};

let currentCameraState = 'hero';
let cameraTarget = { pos: new THREE.Vector3(0, 2, 12), look: new THREE.Vector3(0, 0, 0) };

function setCameraState(state) {
  if (state === currentCameraState) return;
  currentCameraState = state;
  const s = CAMERA_STATES[state];
  if (!s) return;
  cameraTarget.pos.set(...s.pos);
  cameraTarget.look.set(...s.look);
}

// ──────────────── ANIMATION ────────────────
function animate() {
  requestAnimationFrame(animate);

  const t = clock.getElapsedTime();
  const delta = clock.getDelta();

  // Brain core rotation + pulse
  if (brainCore) {
    brainCore.rotation.y = t * 0.15;
    brainCore.rotation.x = Math.sin(t * 0.1) * 0.1;
    const scale = 1 + Math.sin(t * 1.5) * 0.03;
    brainCore.scale.setScalar(scale);
  }

  if (brainGlow) {
    brainGlow.rotation.y = -t * 0.08;
    brainGlow.rotation.z = t * 0.05;
  }

  // Memory rings slow rotation
  tierRings.forEach((ring, i) => {
    ring.rotation.z = i * 0.15 + t * 0.03 * (i % 2 === 0 ? 1 : -1);
  });

  // Skill nodes float
  skillMeshes.forEach((mesh) => {
    const d = mesh.userData;
    mesh.position.y = d.baseY + Math.sin(t * 0.8 + d.angle * 3) * 0.15;
    // Pulse on hover
    if (mesh === hoveredNode) {
      mesh.scale.setScalar(1.5 + Math.sin(t * 4) * 0.2);
    } else {
      mesh.scale.setScalar(1);
    }
  });

  // Ambient particles drift
  particles.forEach((pts) => {
    pts.rotation.y = t * 0.01;
    pts.rotation.x = Math.sin(t * 0.005) * 0.02;
  });

  // Camera smooth lerp
  camera.position.lerp(cameraTarget.pos, 0.02);
  const currentLook = new THREE.Vector3();
  camera.getWorldDirection(currentLook);
  currentLook.add(camera.position);
  currentLook.lerp(cameraTarget.look, 0.02);
  camera.lookAt(cameraTarget.look);

  // Raycasting
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(skillMeshes);
  if (intersects.length > 0) {
    const obj = intersects[0].object;
    if (hoveredNode !== obj) {
      hoveredNode = obj;
      showTooltip(obj);
      document.body.style.cursor = 'pointer';
    }
  } else {
    if (hoveredNode) {
      hoveredNode = null;
      hideTooltip();
      document.body.style.cursor = '';
    }
  }

  renderer.render(scene, camera);
}

// ──────────────── TOOLTIP ────────────────
function showTooltip(mesh) {
  if (!tooltip) return;

  tooltip.querySelector('.b3d-tooltip__name').textContent = mesh.userData.label;
  tooltip.querySelector('.b3d-tooltip__desc').textContent = `${mesh.userData.category} — ${mesh.userData.desc}`;

  if (isMobile) {
    // Mobile: Thumb Zone Tooltip (Centered at bottom)
    tooltip.style.left = '50%';
    tooltip.style.transform = 'translateX(-50%)';
    tooltip.style.top = 'auto';
    tooltip.style.bottom = '80px';
  } else {
    // Desktop: Floating Tooltip
    const pos = mesh.position.clone().project(camera);
    const x = (pos.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-pos.y * 0.5 + 0.5) * window.innerHeight;
    tooltip.style.left = `${Math.min(x + 15, window.innerWidth - 240)}px`;
    tooltip.style.top = `${y - 30}px`;
    tooltip.style.bottom = 'auto';
    tooltip.style.transform = 'none';
  }

  tooltip.classList.add('show');
}

function hideTooltip() {
  if (!tooltip) return;
  tooltip.classList.remove('show');
}

// ──────────────── EVENTS ────────────────
function onResize() {
  isMobile = window.innerWidth < 768;
  isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
}

function onMouseMove(e) {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
}

function onTouchStart(e) {
  if (e.touches.length > 0) {
    mouse.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;

    // Direct hit test on touch for immediate feedback
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(skillMeshes);
    if (intersects.length === 0 && hoveredNode) {
      // Clear selection if touching background
      hoveredNode = null;
      hideTooltip();
    }
  }
}

function onScroll() {
  // Progress bar
  const scrollY = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = Math.min(scrollY / docHeight, 1);
  if (progressBar) {
    progressBar.style.width = `${progress * 100}%`;
  }
}

// ──────────────── SECTION OBSERVER ────────────────
function observeSections() {
  const sections = document.querySelectorAll('.b3d-section');
  const panels = document.querySelectorAll('.b3d-panel');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const state = entry.target.dataset.camera;
        if (state) setCameraState(state);

        // Show panel
        const panel = entry.target.querySelector('.b3d-panel');
        if (panel) {
          setTimeout(() => panel.classList.add('visible'), 200);
        }
      } else {
        const panel = entry.target.querySelector('.b3d-panel');
        if (panel) panel.classList.remove('visible');
      }
    });
  }, { threshold: 0.35, rootMargin: '-10% 0px' });

  sections.forEach(s => observer.observe(s));
}

// ──────────────── START ────────────────
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
