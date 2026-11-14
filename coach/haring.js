// The coaches' Haring kit, characters and scenes. Built by videos/prototypes/coach-educ/bio-pages/render.py: do not edit.
(() => {
const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
window.U = {
  clamp,
  lerp: (a, b, p) => a + (b - a) * p,
  ss: (a, b, x) => { const p = clamp((x - a) / (b - a)); return p * p * (3 - 2 * p); },
  hash: (i, j = 0) => { const x = Math.sin(i * 127.1 + j * 311.7 + 1.3) * 43758.5453; return x - Math.floor(x); },
  rng: seed => { let s = (Math.imul(seed | 0, 2654435761) ^ 0x9e3779b9) >>> 0 || 1;
    const next = () => { s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; };
    next(); next(); return next; },
  poly: (pts, closed = true) => { const p = new Path2D(); pts.forEach((q, i) => i ? p.lineTo(q[0], q[1]) : p.moveTo(q[0], q[1])); if (closed) p.closePath(); return p; },
};
window.MUSIC = { spb: 0.631586, pieces: [{ at: 0 }] };
window.L = (fr, en) => window.LANG === 'en' ? en : fr;
})();
(() => {
const W = 1080, H = 1920, TAU = Math.PI * 2, { clamp, lerp } = U;
const C = { ink: '#121212', white: '#ffffff', red: '#e2231a', yel: '#ffd400', pink: '#ff5fa8', blue: '#1d5fd8',
  green: '#12a150', org: '#ff7a14', sky: '#2fb4ea', mus: '#f2c200', meat: '#c8323a', fat: '#ffe9e0', skin: '#dc9f6c',
  purple: '#8a4dff', lilac: '#e3d6ff', milk: '#c99a6b', chick: '#f4c48e' };
const LW = 13;
const K = window.K = { W, H, C, LW, TAU };
const SPB = MUSIC.spb, PCS = MUSIC.pieces;
K.SPB = SPB;
K.beat = t => { let k = 0; for (let i = 0; i < PCS.length; i++) if (t >= PCS[i].at) k = i; return k * 1000 + (t - PCS[k].at) / SPB; };
K.bb = (t, ph = 0) => Math.pow(Math.abs(Math.sin((K.beat(t) + ph) * Math.PI)), 0.6);   // 0 on the beat, 1 between
K.land = (t, ph = 0) => { const f = K.beat(t) + ph, fr = f - Math.floor(f); return Math.pow(1 - Math.min(1, fr / 0.4), 2); };  // 1 on the beat
K.step = (t, per = 5) => Math.floor(K.beat(t) * per + 1e-6);    // 5 per beat = 8.3 poses a second, on the grid
K.pick = (arr, t, per = 5, ph = 0) => arr[((K.step(t, per) + ph) % arr.length + arr.length) % arr.length];
K.out = p => 1 - Math.pow(1 - clamp(p), 3);
K.on = (t, at, d = 0.25) => clamp((t - at) / d);
K.hit = (t, at, d = 0.3) => t < at ? 0 : Math.pow(Math.max(0, 1 - (t - at) / d), 2);
K.ease = (t, at, d = 0.4) => U.ss(at, at + d, t);
K.keys = (t, ks) => { if (t <= ks[0][0]) return ks[0][1]; for (let i = 1; i < ks.length; i++) if (t < ks[i][0]) {
  const [ta, va] = ks[i - 1], [tb, vb] = ks[i], p = U.ss(ta, tb, t); return va + (vb - va) * p; } return ks[ks.length - 1][1]; };
K.shake = (t, at, amp = 18, d = 0.35) => { const k = K.hit(t, at, d) * amp, s = Math.floor(t * 30); return [(U.hash(s, 1) - 0.5) * 2 * k, (U.hash(s, 2) - 0.5) * 2 * k]; };
K.ink = (c, p, fill, lw = LW, line = C.ink) => { c.lineJoin = 'round'; c.lineCap = 'round'; if (fill) { c.fillStyle = fill; c.fill(p); } if (lw) { c.strokeStyle = line; c.lineWidth = lw; c.stroke(p); } };
K.rrect = (x, y, w, h, r = 18) => { const p = new Path2D(); p.roundRect(x, y, w, h, r); return p; };
K.circ = (x, y, r) => { const p = new Path2D(); p.arc(x, y, r, 0, TAU); return p; };
K.ell = (x, y, rx, ry, a = 0) => { const p = new Path2D(); p.ellipse(x, y, Math.max(1, rx), Math.max(1, ry), a, 0, TAU); return p; };
K.poly = (pts, closed = true) => U.poly(pts, closed);
K.line = (c, pts, lw = LW, col = C.ink) => { c.save(); c.lineJoin = 'round'; c.lineCap = 'round'; c.strokeStyle = col; c.lineWidth = lw; c.beginPath(); pts.forEach((q, i) => i ? c.lineTo(q[0], q[1]) : c.moveTo(q[0], q[1])); c.stroke(); c.restore(); };
K.cap = (a, b, ra, rb = ra) => { const p = new Path2D(), an = Math.atan2(b[1] - a[1], b[0] - a[0]);
  p.arc(a[0], a[1], ra, an + Math.PI / 2, an + Math.PI * 1.5); p.arc(b[0], b[1], rb, an - Math.PI / 2, an + Math.PI / 2); p.closePath(); return p; };
K.union = (c, parts, fill, lw = LW, line = C.ink) => { c.save(); c.lineJoin = 'round'; c.lineCap = 'round';
  if (lw) { c.strokeStyle = line; c.lineWidth = lw * 2; parts.forEach(q => c.stroke(q)); } c.fillStyle = fill; parts.forEach(q => c.fill(q)); c.restore(); };
K.cam = (c, z = 1, fx = W / 2, fy = H / 2, r = 0, ox = 0, oy = 0) => { c.translate(W / 2 + ox, H / 2 + oy); if (r) c.rotate(r); c.scale(z, z); c.translate(-fx, -fy); };
K.ground = (c, sky, floor, hy, line = C.ink, lw = 16) => { c.fillStyle = sky; c.fillRect(-W, -H, W * 3, H * 3); if (floor) { c.fillStyle = floor; c.fillRect(-W, hy, W * 3, H * 3); }
  if (line) { c.fillStyle = line; c.fillRect(-W, hy - lw / 2, W * 3, lw); } };
const P = (...a) => a;
K.POSE = {
  stand: P(0, -374, 0, -318, 0, -172, -34, -238, -44, -160, 34, -238, 44, -160, -20, -86, -26, 0, 20, -86, 26, 0),
  d0: P(0, -384, 0, -326, 0, -178, -70, -372, -100, -452, 70, -372, 100, -452, -30, -88, -40, 0, 56, -150, 74, -78),
  d1: P(-36, -366, -22, -312, 0, -172, -112, -300, -172, -352, 60, -362, 72, -444, -38, -90, -62, 0, 30, -90, 52, 0),
  d2: P(0, -334, 0, -278, 0, -140, -84, -290, -156, -258, 84, -290, 152, -332, -72, -88, -64, 0, 72, -88, 64, 0),
  d3: P(36, -366, 22, -312, 0, -172, -60, -362, -72, -444, 112, -300, 172, -352, -30, -90, -52, 0, 38, -90, 62, 0),
  d4: P(0, -414, 0, -356, 0, -212, -62, -402, -40, -474, 62, -402, 40, -474, -52, -150, -30, -70, 52, -150, 30, -70),
  d5: P(-22, -372, -12, -316, 0, -172, -92, -330, -142, -382, 70, -270, 132, -300, -22, -86, -30, 0, 82, -168, 168, -150),
  w0: P(12, -372, 6, -318, 0, -172, -30, -236, -62, -172, 42, -236, 74, -178, -32, -86, -58, 0, 38, -90, 54, 0),
  w1: P(12, -378, 6, -324, 0, -178, -6, -238, -8, -162, 10, -238, 16, -162, -4, -92, -32, -12, 20, -94, 14, 0),
  w2: P(12, -372, 6, -318, 0, -172, 42, -236, 74, -178, -30, -236, -62, -172, 38, -90, 54, 0, -32, -86, -58, 0),
  w3: P(12, -378, 6, -324, 0, -178, 10, -238, 16, -162, -6, -238, -8, -162, 20, -94, 14, 0, -4, -92, -32, -12),
  r0: P(44, -362, 30, -310, 0, -182, -30, -252, -84, -232, 72, -272, 112, -324, -52, -112, -116, -72, 62, -122, 62, 0),
  r1: P(44, -362, 30, -310, 0, -182, 72, -272, 112, -324, -30, -252, -84, -232, 62, -122, 62, 0, -52, -112, -116, -72),
  point: P(30, -372, 18, -318, 0, -172, -40, -252, -72, -192, 112, -322, 224, -334, -42, -86, -72, 0, 42, -90, 72, 0),
  bark: P(52, -360, 34, -306, 0, -172, -52, -272, -104, -252, 132, -300, 244, -300, -42, -86, -72, 0, 46, -90, 78, 0),
  wag: P(24, -374, 14, -318, 0, -172, -40, -250, -70, -190, 84, -382, 112, -470, -34, -86, -52, 0, 34, -86, 52, 0),
  shrug: P(0, -366, 0, -312, 0, -172, -84, -258, -96, -340, 84, -258, 96, -340, -22, -86, -30, 0, 22, -86, 30, 0),
  carry0: P(44, -342, 30, -294, 0, -170, 10, -222, 2, -150, 44, -222, 44, -150, -32, -86, -58, 0, 38, -90, 54, 0),
  carry1: P(44, -346, 30, -298, 0, -174, 4, -222, -4, -150, 50, -222, 52, -150, 38, -90, 54, 0, -32, -86, -58, 0),
  liftbag: P(10, -372, 6, -318, 0, -172, -62, -384, -54, -462, 70, -384, 62, -462, -42, -86, -64, 0, 42, -86, 64, 0),
  scroll0: P(46, -326, 18, -300, 0, -172, 40, -236, 100, -262, 50, -228, 104, -258, -22, -86, -28, 0, 22, -86, 28, 0),
  scroll1: P(46, -326, 18, -300, 0, -172, 40, -236, 100, -262, 50, -228, 112, -290, -22, -86, -28, 0, 22, -86, 28, 0),
  sit: P(0, -300, 0, -246, 0, -110, -30, -172, 10, -150, 40, -182, 82, -222, 72, -112, 72, 0, 84, -112, 88, 0),
  eat: P(6, -300, 2, -246, 0, -110, -30, -172, 10, -150, 56, -200, 36, -300, 72, -112, 72, 0, 84, -112, 88, 0),
  pushup: P(252, -204, 200, -182, 30, -134, 192, -92, 200, 0, 208, -92, 212, 0, -66, -72, -160, -12, -60, -68, -156, -10),
  pushdn: P(254, -112, 200, -94, 30, -72, 140, -112, 200, 0, 150, -108, 212, 0, -66, -42, -160, -10, -60, -40, -156, -8),
  flat: P(260, -60, 204, -56, 30, -46, 250, -20, 300, -14, 190, -22, 150, -12, -66, -30, -160, -10, -60, -28, -156, -8),
  squat: P(0, -302, 0, -252, 0, -132, -62, -252, -92, -302, 62, -252, 92, -302, -72, -80, -62, 0, 72, -80, 62, 0),
  press: P(0, -376, 0, -320, 0, -174, -82, -392, -102, -482, 82, -392, 102, -482, -32, -86, -50, 0, 32, -86, 50, 0),
  armsup: P(0, -374, 0, -318, 0, -172, -52, -402, -64, -482, 52, -402, 64, -482, -22, -86, -30, 0, 22, -86, 30, 0),
  armsup2: P(0, -380, 0, -324, 0, -178, -80, -390, -120, -460, 80, -390, 120, -460, -22, -90, -34, 0, 22, -90, 34, 0),
  cross: P(0, -374, 0, -318, 0, -172, -54, -248, 34, -262, 54, -248, -34, -266, -40, -86, -62, 0, 40, -86, 62, 0),
  palm: P(22, -374, 12, -318, 0, -172, -40, -250, -70, -192, 92, -302, 150, -360, -40, -86, -62, 0, 40, -86, 62, 0),
  kick: P(-34, -370, -22, -316, 0, -172, -96, -320, -126, -258, 50, -300, 92, -344, -22, -86, -30, 0, 84, -172, 176, -196),
  flex: P(0, -382, 0, -324, 0, -178, -92, -322, -82, -404, 92, -322, 82, -404, -36, -88, -54, 0, 36, -88, 54, 0),
  slump: P(26, -332, 14, -290, 0, -166, -10, -214, -14, -140, 30, -214, 34, -140, -22, -84, -28, 0, 22, -84, 28, 0),
  tug: P(6, -372, 2, -318, 0, -172, -26, -236, 4, -186, 32, -236, 8, -186, -22, -86, -30, 0, 22, -86, 30, 0),
  curl: P(0, -374, 0, -318, 0, -172, -34, -238, -44, -160, 40, -232, 74, -300, -20, -86, -26, 0, 20, -86, 26, 0),
  pointdown: P(16, -370, 8, -316, 0, -172, -40, -250, -66, -190, 70, -250, 132, -150, -30, -86, -44, 0, 30, -86, 44, 0),
  fall: P(-60, -330, -40, -280, 0, -150, -130, -330, -180, -380, 70, -320, 120, -380, -50, -70, -110, -20, 60, -70, 120, -30),
};
K.DANCE = ['d0', 'd1', 'd2', 'd3', 'd4', 'd5'].map(k => K.POSE[k]);
K.WALK = ['w0', 'w1', 'w2', 'w3'].map(k => K.POSE[k]);
K.RUN = ['r0', 'r1'].map(k => K.POSE[k]);
K.figParts = (x, y, s, Q, o = {}) => {
  const f = o.flip || 1, fat = o.fat || 0, v = o.v || 0, sq = o.sq || 1, sx = o.sx || 1;
  const T = q => [x + q[0] * s * f * sx, y + q[1] * s * sq];
  const pt = i => [Q[i * 2], Q[i * 2 + 1]];
  const h = pt(0), n = pt(1), p = pt(2), k1 = pt(7), f1 = pt(8), k2 = pt(9), f2 = pt(10);
  let e1 = pt(3), a1 = pt(4), e2 = pt(5), a2 = pt(6);
  const ang = Math.atan2(p[1] - n[1], p[0] - n[0]) - Math.PI / 2;           // torso tilt
  const side = d => [Math.cos(ang) * d, Math.sin(ang) * d];
  const add = (a, b) => [a[0] + b[0], a[1] + b[1]];
  const tr = 40 + fat * 32 - v * 6, sw = 14 + fat * 20 + v * 44, hw = 16 + fat * 20, limb = 23 + fat * 4 + v * 3, leg = 26 + fat * 7;
  const parts = [];
  if (v > 0) {
    const sh = add(n, [0, 14]), sL = add(sh, side(-sw)), sR = add(sh, side(sw));
    parts.push(K.cap(T(sL), T(sR), (24 + 10 * v) * s));
    const t1 = new Path2D(), pl = add(p, side(-tr * 0.75)), pr = add(p, side(tr * 0.75));
    [sL, sR, pr, pl].map(T).forEach((q, i) => i ? t1.lineTo(q[0], q[1]) : t1.moveTo(q[0], q[1])); t1.closePath(); parts.push(t1);
    parts.push(K.cap(T(add(n, [0, 30])), T(p), (tr * 0.8) * s, (tr * 0.75) * s));
  } else if (fat > 0) parts.push(K.cap(T([n[0], n[1] + 22 * fat]), T(p), (40 + 8 * fat) * s, tr * s));
  else parts.push(K.cap(T(n), T(p), tr * s));
  const bm = [lerp(n[0], p[0], 0.74) + 10 * fat, lerp(n[1], p[1], 0.74) + 4 * fat];
  if (fat > 0) { const out = (q, sd) => { const dx = q[0] - n[0], sg = Math.abs(dx) > 6 ? Math.sign(dx) : sd; return [q[0] + sg * 64 * fat, q[1]]; };
    e1 = out(e1, -1); a1 = out(a1, -1); e2 = out(e2, 1); a2 = out(a2, 1); }
  if (fat > 0) { const q = T(bm); parts.push(K.ell(q[0], q[1], (40 + 62 * fat) * s * sx, (42 + 54 * fat) * s * sq)); }
  const shY = add(n, [0, 12]), sL = add(shY, side(-sw)), sR = add(shY, side(sw)), hL = add(p, side(-hw)), hR = add(p, side(hw));
  parts.push(K.cap(T(sL), T(e1), limb * s), K.cap(T(e1), T(a1), limb * s, (limb - 2) * s));
  parts.push(K.cap(T(sR), T(e2), limb * s), K.cap(T(e2), T(a2), limb * s, (limb - 2) * s));
  parts.push(K.cap(T(hL), T(k1), leg * s), K.cap(T(k1), T(f1), leg * s, (leg - 1) * s));
  parts.push(K.cap(T(hR), T(k2), leg * s), K.cap(T(k2), T(f2), leg * s, (leg - 1) * s));
  const hc = T(h); parts.push(K.circ(hc[0], hc[1], (47 + fat * 3) * s));
  parts.J = { h: hc, n: T(n), p: T(p), a1: T(a1), a2: T(a2), e1: T(e1), e2: T(e2), f1: T(f1), f2: T(f2), k1: T(k1), k2: T(k2),
    belly: T(bm),
    tc: T([(n[0] + p[0]) / 2, (n[1] + p[1]) / 2]), s, f, fat };
  return parts;
};
K.lwFor = s => Math.max(5, Math.min(LW, LW * s * 1.25));
K.fig = (c, x, y, s, Q, o = {}) => {
  const parts = K.figParts(x, y, s, Q, o), lw = o.lw ?? K.lwFor(s), J = parts.J;
  K.union(c, parts, o.fill || C.white, lw, o.line || C.ink);
  if (o.shirt) { const sp = [parts[0]]; if (o.fat) sp.push(parts[1]); const k = o.fat ? 2 : 1;
    const half = (a, b) => [a[0] + (b[0] - a[0]) * 0.55, a[1] + (b[1] - a[1]) * 0.55];
    const fs = o.fat || 0, l = (23 + fs * 4 + 7) * s;
    sp.push(K.cap(J.n, half(J.n, J.e1), l), K.cap(J.n, half(J.n, J.e2), l));
    K.union(c, sp, o.shirt, lw * 0.75, o.line || C.ink); }
  if (o.bellyLine && o.fat) { const b = J.belly; K.ink(c, K.ell(b[0], b[1], (40 + 62 * o.fat) * s * (o.sx || 1), (42 + 54 * o.fat) * s * (o.sq || 1)), o.fill || C.white, lw, o.line || C.ink); }
  if (o.shorts) { const half = (a, b, k) => [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k], fs = o.fat || 0, l = (26 + fs * 7 + 8) * s;
    const sp = [K.cap(J.p, half(J.p, J.k1, 0.75), l), K.cap(J.p, half(J.p, J.k2, 0.75), l), K.ell(J.p[0], J.p[1] - 10 * s, (52 + 40 * fs) * s, 40 * s)];
    K.union(c, sp, o.shorts, lw * 0.75, o.line || C.ink);
    if (fs) { const b = J.belly; c.save(); c.beginPath(); c.rect(b[0] - 400 * s, b[1], 800 * s, 400 * s); c.clip(); K.ink(c, K.ell(b[0], b[1], (40 + 62 * fs) * s * (o.sx || 1), (42 + 54 * fs) * s * (o.sq || 1)), o.fill || C.white, lw, o.line || C.ink); c.restore(); } }
  if (false && o.fold && o.fat) { const b = J.belly, r = (40 + 44 * o.fat) * s; c.save(); c.strokeStyle = o.line || C.ink; c.lineWidth = lw * 0.7; c.lineCap = 'round';
    c.beginPath(); c.arc(b[0] - J.f * r * 0.15, b[1] + r * 0.05, r * 0.62, J.f > 0 ? 0.35 : Math.PI - 1.25, J.f > 0 ? 1.25 : Math.PI - 0.35); c.stroke(); c.restore(); }
  return J;
};
K.verdict = (c, x, y, s, Q, t, o = {}) => { const J = K.fig(c, x, y, s, Q, { fill: C.red, ...o }); if (o.shout !== false) K.shout(c, J.h[0], J.h[1], o.dir ?? ((o.flip || 1) > 0 ? -0.15 : Math.PI + 0.15), t, o.scol || C.ink, Math.max(7, 11 * s), 110 * s); return J; };
K.granny = (c, x, y, s, Q, o = {}) => { const J = K.fig(c, x, y, s, Q, { fill: C.ink, line: C.ink, ...o }); K.ink(c, K.circ(J.h[0] - 26 * s * (o.flip || 1), J.h[1] - 40 * s, 24 * s), C.ink, 0); return J; };
K.him = (c, x, y, s, Q, o = {}) => K.fig(c, x, y, s, Q, { fat: 1, fold: true, fill: C.white, ...o });
K.rays = (c, cx, cy, rx, ry, n, t, seed = 1, len = 34, lw = 9, col = C.ink, per = 5) => {
  const st = K.step(t, per), r = U.rng(seed * 97 + st * 13); c.save(); c.strokeStyle = col; c.lineWidth = lw; c.lineCap = 'round'; c.beginPath();
  for (let i = 0; i < n; i++) { const a = (i / n) * TAU + r() * 0.55, x0 = cx + Math.cos(a) * rx, y0 = cy + Math.sin(a) * ry, L = len * (0.7 + r() * 0.6);
    c.moveTo(x0, y0); c.lineTo(x0 + Math.cos(a) * L, y0 + Math.sin(a) * L); }
  c.stroke(); c.restore();
};
K.burst = (c, cx, cy, r0, r1, n, t, seed = 3, lw = 14, col = C.ink, per = 5) => {
  const st = K.step(t, per), r = U.rng(seed * 31 + st * 7); c.save(); c.strokeStyle = col; c.lineWidth = lw; c.lineCap = 'round'; c.beginPath();
  for (let i = 0; i < n; i++) { const a = (i + r() * 0.6) / n * TAU, a0 = r0 * (0.9 + r() * 0.25), a1 = r1 * (0.75 + r() * 0.4);
    c.moveTo(cx + Math.cos(a) * a0, cy + Math.sin(a) * a0); c.lineTo(cx + Math.cos(a) * a1, cy + Math.sin(a) * a1); }
  c.stroke(); c.restore();
};
K.marks = (c, x, y, w, t, col = C.ink, lw = 10, ph = 0) => { const L = w * (0.35 + 0.35 * K.bb(t, ph)); c.save(); c.strokeStyle = col; c.lineWidth = lw; c.lineCap = 'round'; c.beginPath();
  c.moveTo(x - w - L * 0.5, y + 22); c.lineTo(x - w + L * 0.5, y + 22); c.moveTo(x + w - L * 0.5, y + 22); c.lineTo(x + w + L * 0.5, y + 22); c.stroke(); c.restore(); };
K.shout = (c, x, y, dir, t, col = C.ink, lw = 10, len = 120) => {
  const st = K.step(t, 5) % 2; c.save(); c.strokeStyle = col; c.lineWidth = lw; c.lineCap = 'round'; c.lineJoin = 'round';
  for (let k = -1; k <= 1; k++) { const a = dir + k * 0.42, n = 4, ux = Math.cos(a), uy = Math.sin(a), px = -uy, py = ux;
    c.beginPath(); for (let i = 0; i <= n; i++) { const d = 56 + (len * i) / n + st * 10, z = (i % 2 ? 1 : -1) * 16 * (st ? 1 : -1);
      const X = x + ux * d + px * z, Y = y + uy * d + py * z; i ? c.lineTo(X, Y) : c.moveTo(X, Y); } c.stroke(); }
  c.restore();
};
K.speed = (c, x, y, h, n, t, dir = -1, col = C.ink, lw = 10, len = 90) => { const r = U.rng(500 + K.step(t, 5)); c.save(); c.strokeStyle = col; c.lineWidth = lw; c.lineCap = 'round'; c.beginPath();
  for (let i = 0; i < n; i++) { const yy = y - h / 2 + (i + 0.5) * h / n, L = len * (0.6 + r() * 0.7), x0 = x + dir * (20 + r() * 30); c.moveTo(x0, yy); c.lineTo(x0 + dir * L, yy); } c.stroke(); c.restore(); };
const GL = {
  A: [4.2, [[0, 6, 2.1, 0, 4.2, 6], [0.8, 3.9, 3.4, 3.9]]], B: [4, [[0, 3, 2.7, 3, 3.7, 2.2, 3.7, 0.9, 2.8, 0, 0, 0, 0, 6, 2.9, 6, 4, 5, 4, 4, 2.9, 3]]],
  C: [4, [[4, 1, 3, 0, 1.2, 0, 0, 1.3, 0, 4.7, 1.2, 6, 3, 6, 4, 5]]], D: [4, [[0, 0, 0, 6, 2.2, 6, 4, 4.4, 4, 1.6, 2.2, 0, 0, 0]]],
  E: [3.5, [[3.5, 0, 0, 0, 0, 6, 3.5, 6], [0, 3, 2.9, 3]]], F: [3.5, [[3.5, 0, 0, 0, 0, 6], [0, 3, 2.9, 3]]],
  G: [4.2, [[4.1, 1, 3, 0, 1.2, 0, 0, 1.3, 0, 4.7, 1.2, 6, 3, 6, 4.2, 5, 4.2, 3.4, 2.3, 3.4]]], H: [4, [[0, 0, 0, 6], [4, 0, 4, 6], [0, 3, 4, 3]]],
  I: [0, [[0, 0, 0, 6]]], J: [3.5, [[3.5, 0, 3.5, 4.8, 2.5, 6, 1, 6, 0, 4.9]]], K: [4, [[0, 0, 0, 6], [4, 0, 0, 3.6], [1.5, 2.5, 4, 6]]],
  L: [3.3, [[0, 0, 0, 6, 3.3, 6]]], M: [5, [[0, 6, 0, 0, 2.5, 3.7, 5, 0, 5, 6]]], N: [4, [[0, 6, 0, 0, 4, 6, 4, 0]]],
  O: [4.4, [[1.3, 0, 3.1, 0, 4.4, 1.4, 4.4, 4.6, 3.1, 6, 1.3, 6, 0, 4.6, 0, 1.4, 1.3, 0]]], P: [3.9, [[0, 6, 0, 0, 2.8, 0, 3.9, 0.9, 3.9, 2.4, 2.8, 3.3, 0, 3.3]]],
  Q: [4.4, [[1.3, 0, 3.1, 0, 4.4, 1.4, 4.4, 4.6, 3.1, 6, 1.3, 6, 0, 4.6, 0, 1.4, 1.3, 0], [2.7, 4.3, 4.7, 6.7]]],
  R: [4, [[0, 6, 0, 0, 2.9, 0, 4, 0.9, 4, 2.4, 2.9, 3.3, 0, 3.3], [2.1, 3.3, 4, 6]]],
  S: [4, [[4, 0.9, 3, 0, 1, 0, 0, 0.9, 0, 2.1, 1, 3, 3, 3, 4, 3.9, 4, 5.1, 3, 6, 1, 6, 0, 5.1]]], T: [4.2, [[0, 0, 4.2, 0], [2.1, 0, 2.1, 6]]],
  U: [4, [[0, 0, 0, 4.7, 1.2, 6, 2.8, 6, 4, 4.7, 4, 0]]], V: [4.2, [[0, 0, 2.1, 6, 4.2, 0]]], W: [5.6, [[0, 0, 1.3, 6, 2.8, 1.8, 4.3, 6, 5.6, 0]]],
  X: [4, [[0, 0, 4, 6], [4, 0, 0, 6]]], Y: [4.2, [[0, 0, 2.1, 3.1, 4.2, 0], [2.1, 3.1, 2.1, 6]]], Z: [4, [[0, 0, 4, 0, 0, 6, 4, 6]]],
  0: [3.6, [[1.1, 0, 2.5, 0, 3.6, 1.3, 3.6, 4.7, 2.5, 6, 1.1, 6, 0, 4.7, 0, 1.3, 1.1, 0]]], 1: [1.6, [[0, 1.2, 1.6, 0, 1.6, 6]]],
  2: [3.8, [[0, 1.1, 1, 0, 2.8, 0, 3.8, 1, 3.8, 2.3, 0, 6, 3.8, 6]]],
  3: [3.8, [[0, 0.9, 1, 0, 2.8, 0, 3.8, 0.9, 3.8, 2.1, 2.8, 2.9, 1.4, 2.9], [2.8, 2.9, 3.8, 3.8, 3.8, 5.1, 2.8, 6, 1, 6, 0, 5.1]]],
  4: [4, [[3, 6, 3, 0, 0, 4.1, 4, 4.1]]], 5: [3.8, [[3.6, 0, 0.3, 0, 0, 2.8, 2.7, 2.6, 3.8, 3.6, 3.8, 5, 2.8, 6, 1, 6, 0, 5.2]]],
  6: [3.8, [[3.4, 0.3, 2.4, 0, 1.2, 0, 0, 1.4, 0, 4.8, 1, 6, 2.8, 6, 3.8, 5, 3.8, 3.8, 2.8, 2.9, 1, 2.9, 0, 3.7]]], 7: [3.8, [[0, 0, 3.8, 0, 1.3, 6]]],
  8: [3.8, [[1.9, 2.9, 0.6, 2.2, 0.6, 0.8, 1.3, 0, 2.5, 0, 3.2, 0.8, 3.2, 2.2, 1.9, 2.9, 0.2, 3.8, 0.2, 5.2, 1.1, 6, 2.7, 6, 3.6, 5.2, 3.6, 3.8, 1.9, 2.9]]],
  9: [3.8, [[3.8, 2.4, 2.8, 3.1, 1, 3.1, 0, 2.2, 0, 1, 1, 0, 2.8, 0, 3.8, 1, 3.8, 4.7, 2.7, 6, 1, 6, 0.3, 5.6]]],
  ',': [0.5, [[0.5, 5.6, 0, 7]]], '.': [0, [[0, 5.95, 0, 6]]], '!': [0, [[0, 0, 0, 4.1], [0, 5.95, 0, 6]]],
  '?': [3.4, [[0, 1, 1, 0, 2.4, 0, 3.4, 1, 3.4, 2.2, 1.7, 3.4, 1.7, 4.1], [1.7, 5.95, 1.7, 6]]], "'": [0.4, [[0.4, 0, 0, 1.7]]],
  '-': [2.4, [[0, 3.3, 2.4, 3.3]]], '/': [2.8, [[2.8, 0, 0, 6]]], ':': [0, [[0, 2.2, 0, 2.25], [0, 5.95, 0, 6]]], ';': [0.5, [[0.5, 2.2, 0.5, 2.25], [0.5, 5.6, 0, 7]]],
  '"': [0.9, [[0, 0, 0, 1.7], [0.9, 0, 0.9, 1.7]]],
  '«': [3, [[1.4, 1.7, 0, 3.1, 1.4, 4.5], [3, 1.7, 1.6, 3.1, 3, 4.5]]], '»': [3, [[0, 1.7, 1.4, 3.1, 0, 4.5], [1.6, 1.7, 3, 3.1, 1.6, 4.5]]],
};
const acc = (base, mark) => [GL[base][0], GL[base][1].concat([mark.map((v, i) => i % 2 ? v : v + (GL[base][0] - 4) / 2)])];
GL['É'] = acc('E', [1.4, -1.2, 2.6, -2.4]); GL['È'] = acc('E', [1.2, -2.4, 2.4, -1.2]); GL['Ê'] = acc('E', [0.8, -1.2, 1.8, -2.3, 2.8, -1.2]);
GL['À'] = acc('A', [1.4, -2.4, 2.6, -1.2]); GL['Ù'] = acc('U', [1.4, -2.4, 2.6, -1.2]); GL['Ô'] = acc('O', [1.2, -1.2, 2.2, -2.3, 3.2, -1.2]);
GL['Î'] = [0, [[0, 0, 0, 6], [-1, -1.2, 0, -2.3, 1, -1.2]]]; GL['Û'] = acc('U', [1, -1.2, 2, -2.3, 3, -1.2]);
GL['Ç'] = [4, GL.C[1].concat([[2.2, 6.3, 2.2, 7.3, 1.3, 7.9]])];
GL['%'] = [4.4, [[4.2, 0, 0.2, 6], [0.8, 0, 1.6, 0.6, 1.6, 1.6, 0.8, 2.2, 0, 1.6, 0, 0.6, 0.8, 0], [3.6, 3.8, 4.4, 4.4, 4.4, 5.4, 3.6, 6, 2.8, 5.4, 2.8, 4.4, 3.6, 3.8]]];
GL['+'] = [3.6, [[0, 3.2, 3.6, 3.2], [1.8, 1.4, 1.8, 5]]];
GL['='] = [3.6, [[0, 2.3, 3.6, 2.3], [0, 4.3, 3.6, 4.3]]];
const GAP = 1.45, SPACE = 2.4;
K.glyphs = GL;
const adv = ch => ch === ' ' || ch === ' ' || ch === ' ' ? SPACE * (ch === ' ' ? 1 : 0.6) : (GL[ch] ? GL[ch][0] + GAP : SPACE);
K.textUnits = s => { let w = 0; for (const ch of s) w += adv(ch); return w - GAP; };
K.text = (c, s, x, y, size, o = {}) => {
  const u = size / 6, lw = o.lw ?? size * 0.16, wu = K.textUnits(s), boil = o.boil ?? 0.07, st = K.step(o.t || 0, 5), seed = o.seed || 1;
  let x0 = o.align === 'left' ? x : o.align === 'right' ? x - wu * u : x - (wu * u) / 2; const y0 = y - 3 * u;
  const strokes = []; let k = 0;
  for (const ch of s) { const g = GL[ch]; if (g) { const gx = x0; g[1].forEach((pl, j) => { const pts = [];
      for (let i = 0; i < pl.length; i += 2) { const jx = (U.hash(st * 7 + k, seed * 131 + j * 17 + i) - 0.5) * 2 * boil, jy = (U.hash(st * 11 + k, seed * 73 + j * 19 + i) - 0.5) * 2 * boil;
        pts.push([gx + (pl[i] + jx) * u, y0 + (pl[i + 1] + jy) * u]); } strokes.push(pts); }); }
    x0 += adv(ch) * u; k++; }
  c.save(); c.lineCap = 'round'; c.lineJoin = 'round';
  const pass = (col, w) => { c.strokeStyle = col; c.lineWidth = w; c.beginPath(); strokes.forEach(pts => pts.forEach((q, i) => i ? c.lineTo(q[0], q[1]) : c.moveTo(q[0], q[1]))); c.stroke(); };
  if (o.outline) pass(o.ocol || C.ink, lw + o.outline * 2);
  pass(o.col || C.ink, lw);
  c.restore();
  return wu * u;
};
K.big = (c, str, x, y, size, o = {}) => {
  const t = o.t, at = o.at ?? -1e9; if (t < at - 0.001) return;
  const lines = str.toLocaleUpperCase('fr-FR').split('\n'), maxW = o.maxW || 860;
  let sz = size; lines.forEach(l => { const w = K.textUnits(l) * sz / 6 + sz * 0.5; if (w > maxW) sz = sz * maxW / w; });
  const lh = sz * (o.lh || 1.5), pop = 1 + 0.45 * Math.pow(Math.max(0, 1 - (t - at) / 0.1), 2), bnc = 1 + 0.05 * K.land(t, o.ph || 0);
  c.save(); c.translate(x, y); c.rotate(o.rot || 0); c.scale(pop * bnc, pop / bnc * (1 + 0.04 * K.land(t, o.ph || 0)));
  const h = lh * (lines.length - 1);
  if (o.rays !== false) { const wmax = Math.max(...lines.map(l => K.textUnits(l))) * sz / 6;
    K.rays(c, 0, 0, wmax / 2 + sz * 0.35, h / 2 + sz * 0.85, o.nrays || 16, t, o.seed || 9, sz * 0.32, Math.max(8, sz * 0.07), o.rcol || o.line || C.ink); }
  lines.forEach((l, i) => K.text(c, l, 0, -h / 2 + i * lh, sz, { col: o.core || C.white, outline: o.ol ?? Math.max(9, sz * 0.075), ocol: o.line || C.ink, lw: sz * (o.weight || 0.2), t, seed: (o.seed || 9) + i, boil: o.boil ?? 0.05 }));
  c.restore();
};
K.scale = (c, x, y, w, num, t, o = {}) => {
  const h = w * 0.2, sq = 1 - 0.06 * K.land(t, o.ph || 0);
  c.save(); c.translate(x, y); c.scale(1 + 0.03 * K.land(t, o.ph || 0), sq);
  K.ink(c, K.rrect(-w / 2, -h, w, h, h * 0.35), o.fill || C.white);
  const dw = w * 0.36, dh = h * 0.56; K.ink(c, K.rrect(-dw / 2, -h * 0.78, dw, dh, 10), C.ink, 6);
  if (num != null) K.text(c, String(num), 0, -h * 0.78 + dh / 2, dh * 0.62, { col: o.digit || C.red, lw: dh * 0.12, t, boil: 0.02 });
  c.restore();
};
K.calendar = (c, x, y, w, page, o = {}) => {
  const h = w * 1.1; K.ink(c, K.rrect(x - w / 2, y - h / 2, w, h, 12), o.fill || C.white);
  c.fillStyle = o.band || C.red; c.fillRect(x - w / 2 + 6, y - h / 2 + 6, w - 12, h * 0.2); K.ink(c, K.rrect(x - w / 2, y - h / 2, w, h, 12), null);
  K.line(c, [[x - w / 2, y - h / 2 + h * 0.22], [x + w / 2, y - h / 2 + h * 0.22]], 10);
  const r = U.rng(40 + page * 3), gx = 5, gy = 4, cw = (w - 50) / gx, chh = (h * 0.7) / gy;
  for (let j = 0; j < gy; j++) for (let i = 0; i < gx; i++) { const cx = x - w / 2 + 25 + (i + 0.5) * cw, cy = y - h / 2 + h * 0.27 + (j + 0.5) * chh;
    if (r() < 0.55) K.line(c, [[cx - cw * 0.25, cy - chh * 0.25], [cx + cw * 0.25, cy + chh * 0.25]], 8), K.line(c, [[cx + cw * 0.25, cy - chh * 0.25], [cx - cw * 0.25, cy + chh * 0.25]], 8);
    else { c.fillStyle = C.ink; c.beginPath(); c.arc(cx, cy, 6, 0, TAU); c.fill(); } }
  K.line(c, [[x - w * 0.22, y - h / 2 - 14], [x - w * 0.22, y - h / 2 + 22]], 12); K.line(c, [[x + w * 0.22, y - h / 2 - 14], [x + w * 0.22, y - h / 2 + 22]], 12);
};
K.heart = (c, x, y, s, fill = C.red) => { const p = new Path2D(); p.moveTo(x, y + 40 * s); p.bezierCurveTo(x - 74 * s, y - 8 * s, x - 42 * s, y - 64 * s, x, y - 26 * s);
  p.bezierCurveTo(x + 42 * s, y - 64 * s, x + 74 * s, y - 8 * s, x, y + 40 * s); p.closePath(); K.ink(c, p, fill, Math.min(LW, 11 * s + 2)); };
K.star = (c, x, y, r, fill = C.white, rot = 0, lw = LW) => { const pts = []; for (let i = 0; i < 10; i++) { const a = rot - Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; pts.push([x + Math.cos(a) * rr, y + Math.sin(a) * rr]); }
  K.ink(c, K.poly(pts), fill, lw); };
K.crown = (c, x, y, w, fill = C.white, rot = 0) => { c.save(); c.translate(x, y); c.rotate(rot); const h = w * 0.62;
  K.ink(c, K.poly([[-w / 2, 0], [-w / 2, -h], [-w / 4, -h * 0.45], [0, -h * 1.05], [w / 4, -h * 0.45], [w / 2, -h], [w / 2, 0]]), fill);
  [[-w / 2, -h], [0, -h * 1.05], [w / 2, -h]].forEach(q => K.ink(c, K.circ(q[0], q[1] - 12, 12), fill, 9)); c.restore(); };
K.helix = (c, x, y, h, w, t, o = {}) => { const n = 9, ph = K.step(t, 5) * 0.45 + (o.ph || 0), A = [], B = [];
  for (let i = 0; i <= 40; i++) { const q = i / 40, yy = y - h / 2 + q * h, a = q * TAU * 1.5 + ph; A.push([x + Math.sin(a) * w / 2, yy]); B.push([x - Math.sin(a) * w / 2, yy]); }
  for (let i = 0; i < n; i++) { const q = (i + 0.5) / n, yy = y - h / 2 + q * h, a = q * TAU * 1.5 + ph; K.line(c, [[x + Math.sin(a) * w / 2, yy], [x - Math.sin(a) * w / 2, yy]], 9, o.rung || C.ink); }
  K.line(c, A, 26, o.line || C.ink); K.line(c, A, 12, o.a || C.white); K.line(c, B, 26, o.line || C.ink); K.line(c, B, 12, o.b || C.red);
};
K.box = (c, x, y, w, t, o = {}) => {
  const h = w * 0.78, lid = (o.lid || 0) * 46, land = K.land(t, o.ph || 0);
  c.save(); c.translate(x, y); c.scale(1 + 0.05 * land, 1 - 0.06 * land);
  K.ink(c, K.rrect(-w / 2, -h, w, h, 16), o.fill || C.white);
  c.save(); c.clip(K.rrect(-w / 2, -h, w, h, 16)); K.line(c, [[-w / 2, -h], [w / 2, 0]], 34); K.line(c, [[w / 2, -h], [-w / 2, 0]], 34); c.restore();
  K.ink(c, K.rrect(-w / 2, -h, w, h, 16), null);
  c.save(); c.translate(0, -h - lid); c.rotate(-(o.lid || 0) * 0.12); K.ink(c, K.rrect(-w / 2 - 22, -44, w + 44, 52, 14), o.lidFill || C.white); c.restore();
  const ly = -h * 0.5; c.save(); c.lineWidth = 14; c.strokeStyle = C.ink; c.beginPath(); c.arc(0, ly - 34, 34, Math.PI, 0); c.stroke(); c.restore();
  K.ink(c, K.rrect(-50, ly - 34, 100, 84, 14), o.lock || C.red); K.ink(c, K.circ(0, ly + 2, 9), C.ink, 0);
  c.restore();
  return h;
};
K.barbell = (c, x, y, w, rot = 0, fill = C.ink) => { c.save(); c.translate(x, y); c.rotate(rot); K.line(c, [[-w / 2, 0], [w / 2, 0]], 18);
  [-1, 1].forEach(sd => { K.ink(c, K.rrect(sd * w / 2 - 34 - (sd > 0 ? 0 : 0), -74, 34, 148, 10), fill); K.ink(c, K.rrect(sd * (w / 2 - 44) - 14, -56, 28, 112, 8), fill); }); c.restore(); };
K.phone = (c, x, y, s, rot = 0, fill = C.white) => { c.save(); c.translate(x, y); c.rotate(rot); K.ink(c, K.rrect(-22 * s, -36 * s, 44 * s, 72 * s, 9 * s), fill, Math.max(4, 8 * s)); c.restore(); };
})();
(() => {
const TAU = Math.PI * 2, C = K.C;
const EMO = {
  neutral:      { brow: [0.1, 0.1], browY: 0, eye: 'open', lid: 0.22, look: [0, 0], mouth: 'flat', tilt: 0 },
  furious:      { brow: [0.75, 0.75], browY: 0.05, eye: 'open', lid: 0.5, look: [0, 0.1], mouth: 'shout', tilt: 0.04, shout: true },
  disgusted:    { brow: [0.55, -0.35], browY: 0, eye: 'squint', lid: 0.45, look: [-0.3, 0], mouth: 'sneer', tilt: -0.1, nose: true },
  mocking:      { brow: [-0.3, -0.3], browY: -0.1, eye: 'happy', look: [0, 0], mouth: 'laugh', tilt: -0.16 },
  smug:         { brow: [0.15, -0.45], browY: 0, eye: 'open', lid: 0.55, look: [0.75, 0], mouth: 'smirk', tilt: 0.07 },
  disappointed: { brow: [-0.5, -0.5], browY: -0.02, eye: 'open', lid: 0.6, look: [0, 0.7], mouth: 'frown', tilt: 0.12 },
  approving:    { brow: [-0.12, -0.12], browY: -0.06, eye: 'open', lid: 0.5, look: [0, 0], mouth: 'smile', tilt: 0, nod: true },
  pointing:     { brow: [0.45, 0.45], browY: 0.03, eye: 'wide', lid: 0, look: [0, 0], mouth: 'set', tilt: 0 },
};
const EMOTIONS = Object.keys(EMO);
function head(c, cx, cy, R, emo, o = {}) {
  const E = typeof emo === 'string' ? EMO[emo] : emo, t = o.t || 0, lw = Math.max(7, Math.min(K.LW, R * 0.17));
  const view = o.view || 'front', f = o.flip || 1, tq = view === 'tq', sil = view === 'sil';
  const nod = E.nod ? 0.09 * R * Math.max(0, Math.sin(K.beat(t) * Math.PI)) : 0;
  c.save(); c.translate(cx, cy + nod); c.rotate((E.tilt || 0) * f + (o.tilt || 0)); c.lineCap = 'round'; c.lineJoin = 'round';
  const ink = sil ? C.ink : null;
  const dx = tq ? 0.26 * R * f : 0, sq = tq ? 0.78 : 1, X = x => dx + x * sq, XH = x => dx * 0.35 + x * (tq ? 0.95 : 1);
  if (o.hairBack) o.hairBack(c, R, { ...o, lw, X: XH, sil });
  K.ink(c, K.circ(0, 0, R), ink || o.skin, lw);
  if (!sil) {
    if (o.beard) o.beard(c, R, { ...o, lw, X, E });
    mouth(c, R, E, lw, X, o);
    if (o.stache) o.stache(c, R, { ...o, lw, X, E });
    eyes(c, R, E, lw, X, o);
  }
  if (o.hair) o.hair(c, R, { ...o, lw, X: XH, sil });
  if (!sil) {
    brows(c, R, E, lw, X, o);
    nose(c, R, E, lw, X, o, f, tq);
  }
  c.restore();
  if (E.shout && !sil && o.shoutLines !== false) K.shout(c, cx + (o.shoutDir === undefined ? 0 : 0), cy - 0.2 * R, o.shoutDir ?? -Math.PI / 2, t, C.ink, lw * 0.85, R * 1.1);
}
function line(c, pts, lw, col = C.ink) { c.strokeStyle = col; c.lineWidth = lw; c.beginPath(); pts.forEach((q, i) => i ? c.lineTo(q[0], q[1]) : c.moveTo(q[0], q[1])); c.stroke(); }
function eyes(c, R, E, lw, X, o) {
  [-1, 1].forEach((sd, k) => {
    const ex = X(sd * 0.34 * R), ey = -0.06 * R, rx = 0.17 * R * (E.eye === 'wide' ? 1.15 : 1), ry = 0.21 * R * (E.eye === 'wide' ? 1.15 : 1);
    const slope = E.brow[k] * sd * -1;                   // the lid follows the brow
    if (E.eye === 'happy') { c.strokeStyle = C.ink; c.lineWidth = lw; c.beginPath(); c.arc(ex, ey + 0.08 * R, rx * 1.05, Math.PI * 1.1, Math.PI * 1.9); c.stroke(); return; }
    const sc = K.ell(ex, ey, rx, ry); c.fillStyle = C.white; c.fill(sc);
    const L = E.look || [0, 0], pr = 0.095 * R * (E.eye === 'wide' ? 0.9 : 1);
    c.save(); c.clip(sc); c.fillStyle = C.ink; c.beginPath(); c.arc(ex + L[0] * rx * 0.55, ey + L[1] * ry * 0.5 + 0.02 * R, pr, 0, TAU); c.fill(); c.restore();
    c.strokeStyle = C.ink; c.lineWidth = lw * 0.6; c.stroke(sc);
    c.save(); c.clip(K.ell(ex, ey, rx + lw * 0.4, ry + lw * 0.4));
    if (E.lid) { const top = ey - ry - lw, h = 2 * ry * E.lid + lw, tilt = (E.brow[k] || 0) * 0.16 * R;
      const inner = ex - sd * (rx + lw), outer = ex + sd * (rx + lw);
      c.beginPath(); c.moveTo(inner, top - 4); c.lineTo(outer, top - 4); c.lineTo(outer, top + h - tilt * 0.3); c.lineTo(inner, top + h + tilt); c.closePath();
      c.fillStyle = o.lidCol || o.skin; c.fill(); }
    if (E.eye === 'squint') { const by = ey + ry * 0.35; c.fillStyle = o.skin; c.fillRect(ex - rx - lw, by, 2 * rx + 2 * lw, ry * 2); }
    c.restore();
    if (E.lid) { const top = ey - ry - lw, h = 2 * ry * E.lid + lw, tilt = (E.brow[k] || 0) * 0.16 * R;
      line(c, [[ex - sd * rx * 1.08, top + h + tilt], [ex + sd * rx * 1.08, top + h - tilt * 0.3]], lw * 0.8); }
    if (E.eye === 'squint') { const by = ey + ry * 0.35; line(c, [[ex - rx * 1.08, by], [ex + rx * 1.08, by]], lw * 0.8); }
  });
}
function brows(c, R, E, lw, X, o) {
  const by = (-0.38 + (E.browY || 0)) * R, bw = o.browW || 1.25;
  [-1, 1].forEach((sd, k) => { const s = E.brow[k];
    const outer = [X(sd * 0.56 * R), by - s * 0.06 * R], inner = [X(sd * 0.13 * R), by + s * 0.2 * R];
    line(c, [outer, inner], lw * bw); });
}
function nose(c, R, E, lw, X, o, f, tq) {
  const ny = 0.17 * R;
  if (o.nose === 'hook') line(c, [[X(0.02 * R * f), ny - 0.16 * R], [X(0.1 * R * f) + (tq ? 0.08 * R * f : 0), ny + 0.03 * R], [X(-0.04 * R * f), ny + 0.06 * R]], lw * 0.8);
  else { c.strokeStyle = C.ink; c.lineWidth = lw * 0.8; c.beginPath(); c.arc(X(0) + (tq ? 0.05 * R * f : 0), ny - 0.02 * R, 0.13 * R, Math.PI * 0.15, Math.PI * 0.85); c.stroke(); }
  if (E.nose) { line(c, [[X(-0.12 * R), -0.05 * R + ny * 0.2], [X(-0.05 * R), 0.02 * R]], lw * 0.6); line(c, [[X(0.12 * R), -0.05 * R + ny * 0.2], [X(0.05 * R), 0.02 * R]], lw * 0.6); }
}
function mouth(c, R, E, lw, X, o) {
  const my = 0.47 * R, red = o.tongue || C.red;
  const open = (pts, teethTop, tongue) => { const p = new Path2D(); pts.forEach((q, i) => i ? p.lineTo(q[0], q[1]) : p.moveTo(q[0], q[1])); p.closePath();
    c.fillStyle = C.ink; c.fill(p); c.save(); c.clip(p);
    if (teethTop) { c.fillStyle = C.white; c.fillRect(-R, teethTop[0], 2 * R, teethTop[1]); }
    if (tongue) { c.fillStyle = red; c.beginPath(); c.ellipse(tongue[0], tongue[1], tongue[2], tongue[3], 0, 0, TAU); c.fill(); }
    c.restore(); c.strokeStyle = C.ink; c.lineWidth = lw; c.stroke(p); };
  const curve = (a, b, cpy) => { c.strokeStyle = C.ink; c.lineWidth = lw; c.beginPath(); c.moveTo(a[0], a[1]); c.quadraticCurveTo((a[0] + b[0]) / 2, cpy, b[0], b[1]); c.stroke(); };
  switch (E.mouth) {
    case 'flat': line(c, [[X(-0.22 * R), my], [X(0.22 * R), my]], lw); break;
    case 'set': line(c, [[X(-0.24 * R), my + 0.04 * R], [X(-0.16 * R), my], [X(0.16 * R), my], [X(0.24 * R), my + 0.04 * R]], lw); break;
    case 'shout': { const w = 0.34 * R, k = (K.step(o.t || 0, 5) % 2) * 0.04 * R;
      const pts = []; for (let i = 0; i <= 16; i++) { const a = Math.PI + i / 16 * Math.PI; pts.push([X(Math.cos(a) * w), my - 0.12 * R + Math.sin(a) * 0.06 * R]); }
      for (let i = 0; i <= 16; i++) { const a = i / 16 * Math.PI; pts.push([X(Math.cos(a) * w * 0.82), my + 0.08 * R + Math.sin(a) * (0.32 * R + k)]); }
      open(pts, [my - 0.2 * R, 0.13 * R], [X(0), my + 0.36 * R + k, 0.17 * R, 0.1 * R]); break; }
    case 'laugh': { const w = 0.4 * R, pts = [[X(-w), my - 0.12 * R], [X(w), my - 0.18 * R]];
      for (let i = 0; i <= 16; i++) { const a = i / 16 * Math.PI; pts.push([X(Math.cos(a) * w), my - 0.15 * R + Math.sin(a) * 0.48 * R]); }
      open(pts, [my - 0.2 * R, 0.13 * R], [X(0.04 * R), my + 0.3 * R, 0.2 * R, 0.1 * R]); break; }
    case 'sneer': line(c, [[X(-0.26 * R), my + 0.06 * R], [X(-0.08 * R), my], [X(0.06 * R), my + 0.06 * R], [X(0.2 * R), my - 0.06 * R], [X(0.3 * R), my - 0.14 * R]], lw);
      c.fillStyle = C.white; c.fillRect(X(0.08 * R), my - 0.07 * R, 0.14 * R, 0.08 * R); break;
    case 'smirk': curve([X(-0.2 * R), my + 0.03 * R], [X(0.26 * R), my - 0.1 * R], my + 0.06 * R); line(c, [[X(0.26 * R), my - 0.17 * R], [X(0.3 * R), my - 0.06 * R]], lw * 0.7); break;
    case 'frown': curve([X(-0.24 * R), my + 0.1 * R], [X(0.24 * R), my + 0.1 * R], my - 0.12 * R); break;
    case 'smile': curve([X(-0.2 * R), my - 0.02 * R], [X(0.2 * R), my - 0.02 * R], my + 0.14 * R); break;
  }
}
function body(c, x, y, s, P, b, o = {}) {
  const f = o.flip || 1, lw = Math.max(7, Math.min(K.LW, K.LW * s * 1.25)), sil = o.view === 'sil', sx = o.view === 'tq' ? 0.86 : 1;
  const T = q => [x + q[0] * s * f * sx, y + q[1] * s];
  const J = {}; for (const k of ['h', 'n', 'p', 'e1', 'a1', 'e2', 'a2', 'k1', 'f1', 'k2', 'f2']) J[k] = T(P[k]);
  J.s = s; J.f = f; J.lw = lw;
  const n = P.n, p = P.p;
  const sh = (sd) => T([n[0] + sd * b.shoulder, n[1] + 14]), hip = (sd) => T([p[0] + sd * b.hip * 0.5, p[1]]);
  J.sL = sh(-1); J.sR = sh(1); J.hL = hip(-1); J.hR = hip(1);
  const fill = col => sil ? C.ink : col;
  const legs = [[J.hL, J.k1, J.f1], [J.hR, J.k2, J.f2]];
  legs.forEach(([h, k, ft], i) => {
    const parts = [K.cap(h, k, b.leg * s), K.cap(k, ft, b.leg * s, (b.leg - 2) * s)];
    K.union(c, parts, fill(b.legCol || b.skin), lw / 2 + 0.5);      // one outline around thigh + shin, no knee seam
    if (!sil && b.dressLeg) b.dressLeg(c, h, k, ft, s, J, i);
    const sh2 = K.ell(ft[0] + f * 10 * s, ft[1] - 4 * s, (b.leg + 12) * s, (b.leg - 4) * s); K.ink(c, sh2, fill(b.shoe || C.white), lw);
  });
  const tor = new Path2D(), wL = T([p[0] - b.waist, p[1] + 10]), wR = T([p[0] + b.waist, p[1] + 10]);
  const shL = T([n[0] - b.shoulder, n[1] + 8]), shR = T([n[0] + b.shoulder, n[1] + 8]);
  [shL, shR, wR, wL].forEach((q, i) => i ? tor.lineTo(q[0], q[1]) : tor.moveTo(q[0], q[1])); tor.closePath();
  const tp = [tor, K.cap(shL, shR, b.shoulderR * s), K.cap(T([p[0] - b.waist * 0.8, p[1]]), T([p[0] + b.waist * 0.8, p[1]]), b.hipR * s)];
  if (b.belly) { const q = T([lerp(n[0], p[0], 0.7) + 10, lerp(n[1], p[1], 0.7)]); tp.push(K.ell(q[0], q[1], b.belly * s, b.belly * 0.92 * s)); }
  const neck = K.cap(T([n[0], n[1] + 20]), T([P.h[0] * 0.5 + n[0] * 0.5, (P.h[1] + n[1]) / 2]), b.neck * s);
  K.ink(c, neck, fill(b.skin), lw);
  const tpath = new Path2D(); tp.forEach(q => tpath.addPath(q));
  c.save(); c.strokeStyle = C.ink; c.lineWidth = lw * 2; c.lineJoin = 'round'; tp.forEach(q => c.stroke(q)); c.fillStyle = fill(b.top); tp.forEach(q => c.fill(q)); c.restore();
  if (!sil && b.dressTorso) b.dressTorso(c, J, s, T);
  const order = o.armsOrder || [1, 2];
  order.forEach(i => { const sP = i === 1 ? J.sL : J.sR, e = J['e' + i], a = J['a' + i];
    const up = K.cap(sP, e, b.arm * s), lo = K.cap(e, a, b.arm * s, (b.arm - 2) * s);
    const ap = new Path2D(); ap.addPath(up); ap.addPath(lo);
    c.save(); c.strokeStyle = C.ink; c.lineWidth = lw * 2; c.lineJoin = 'round'; c.stroke(up); c.stroke(lo); c.fillStyle = fill(b.armCol || b.skin); c.fill(up); c.fill(lo); c.restore();
    if (!sil && b.dressArm) b.dressArm(c, sP, e, a, s, J, i);
    hand(c, a, e, (P.hands || {})[i] || 'fist', s, b, lw, fill, f, o);
  });
  if (!sil && b.dressAfter) b.dressAfter(c, J, s, T);
  return J;
}
const lerp = (a, b, p) => a + (b - a) * p;
function hand(c, a, e, kind, s, b, lw, fill, f, o) {
  const r = (b.arm + 3) * s, an = Math.atan2(a[1] - e[1], a[0] - e[0]), ux = Math.cos(an), uy = Math.sin(an);
  const skin = fill(b.skin);
  if (kind === 'point') { const tip = [a[0] + ux * r * 2.1, a[1] + uy * r * 2.1]; K.ink(c, K.cap(a, tip, r * 0.42), skin, lw); }
  if (kind === 'up') { const tip = [a[0] + 0.15 * r * f, a[1] - r * 2.1]; K.ink(c, K.cap(a, tip, r * 0.42), skin, lw); }
  if (kind === 'thumbUp' || kind === 'thumbDown') { const d = kind === 'thumbUp' ? -1 : 1, tip = [a[0], a[1] + d * r * 1.9]; K.ink(c, K.cap(a, tip, r * 0.42), skin, lw); }
  const big = kind === 'you' ? 1.35 : 1;
  K.ink(c, K.circ(a[0], a[1], r * big), skin, lw);
  if (kind === 'watch') { const w = [a[0] + 0.2 * r * f, a[1] - r * 1.25], R2 = r * 1.15;
    K.ink(c, K.rrect(w[0] - r * 0.25, w[1] - R2 - r * 0.5, r * 0.5, r * 0.55, 4), C.white, lw * 0.8);
    K.ink(c, K.circ(w[0], w[1], R2), C.white, lw); const st = K.step(o.t || 0, 5) * 0.8;
    c.strokeStyle = C.ink; c.lineWidth = lw * 0.7; c.beginPath(); c.moveTo(w[0], w[1]); c.lineTo(w[0] + Math.sin(st) * R2 * 0.7, w[1] - Math.cos(st) * R2 * 0.7); c.stroke();
    K.ink(c, K.circ(a[0], a[1], r), skin, lw); }
  if (kind === 'you') { const tip = [a[0] - 0.55 * r * f, a[1] + 0.75 * r]; K.ink(c, K.cap([a[0] - 0.1 * r * f, a[1] + 0.05 * r], tip, r * 0.5, r * 0.56), skin, lw);
    c.strokeStyle = C.ink; c.lineWidth = lw * 0.6; c.beginPath(); c.arc(tip[0], tip[1], r * 0.26, 0, TAU); c.stroke(); }
  if (kind === 'fist' || kind === 'thumbUp' || kind === 'thumbDown') { c.strokeStyle = C.ink; c.lineWidth = lw * 0.6; c.beginPath(); c.moveTo(a[0] - r * 0.45 * f, a[1] - r * 0.1); c.lineTo(a[0] + r * 0.2 * f, a[1] - r * 0.1); c.stroke(); }
}
window.FACE = { EMO, EMOTIONS, head, body, hand, line };
})();
(() => {
const C = K.C, FILL = { skin: '#dc9f6c', blue: C.blue, white: C.white };
const B = { skin: FILL.skin, top: FILL.blue, armCol: FILL.blue, legCol: FILL.blue, shoe: C.white, shoulder: 70, shoulderR: 36, waist: 62, hip: 76, hipR: 38, arm: 28, leg: 31, neck: 26 };
const HEAD_R = 76;
const P = (h, n, p, e1, a1, e2, a2, k1, f1, k2, f2, hands, extra = {}) => ({ h, n, p, e1, a1, e2, a2, k1, f1, k2, f2, hands, ...extra });
const LEGS = [[-40, -86], [-52, 0], [40, -86], [52, -0]];
const POSES = {
  stopwatch: P([0, -392], [0, -314], [0, -166], [-118, -244], [-70, -182], [118, -282], [118, -352], ...LEGS, { 1: 'fist', 2: 'watch' }),
  count: P([0, -392], [0, -314], [0, -166], [-92, -320], [-104, -404], [96, -270], [150, -292], ...LEGS, { 1: 'up', 2: 'watch' }),
  cross: P([0, -392], [0, -314], [0, -166], [-92, -230], [42, -258], [92, -230], [-42, -266], ...LEGS, { 1: 'fist', 2: 'fist' }, { armsOrder: [1, 2] }),
  point: P([18, -390], [10, -314], [0, -166], [-80, -244], [-70, -176], [118, -320], [222, -332], ...LEGS, { 1: 'watch', 2: 'point' }),
  you: P([0, -392], [0, -314], [0, -166], [-118, -244], [-70, -182], [60, -282], [24, -296], ...LEGS, { 1: 'watch', 2: 'you' }),
  bark: P([46, -380], [30, -308], [0, -166], [-60, -270], [-104, -236], [136, -310], [238, -306], ...[[-48, -86], [-74, 0], [52, -92], [80, 0]], { 1: 'watch', 2: 'point' }),
  clap: P([0, -392], [0, -314], [0, -166], [-84, -228], [-8, -278], [84, -228], [8, -278], ...LEGS, { 1: 'fist', 2: 'fist' }, { clap: true }),
  thumbsdown: P([4, -392], [2, -314], [0, -166], [-118, -244], [-70, -182], [102, -246], [124, -196], ...LEGS, { 1: 'watch', 2: 'thumbDown' }),
};
const NAMES = Object.keys(POSES);
function hair(c, R, o) {
  const hl = -0.6 * R, X = o.X;
  const p = new Path2D(); p.moveTo(X(-0.86 * R), hl + 0.12 * R);
  p.bezierCurveTo(X(-0.98 * R), -1.22 * R, X(0.98 * R), -1.22 * R, X(0.86 * R), hl + 0.12 * R);
  p.lineTo(X(0.66 * R), hl); p.lineTo(X(-0.66 * R), hl); p.closePath();
  K.ink(c, p, C.ink, o.lw);
  if (!o.sil) K.line(c, [[X(-0.42 * R), -1.0 * R], [X(-0.34 * R), hl - 0.02 * R]], o.lw * 0.6, C.white);     // the parting, cut with a razor
}
function beard(c, R, o) { K.ink(c, K.rrect(o.X(-0.17 * R), 0.66 * R, 0.34 * R, 0.3 * R, 0.1 * R), C.ink, 0); }
function stache(c, R, o) { const y = 0.3 * R, open = o.E.mouth === 'shout' || o.E.mouth === 'laugh';
  K.line(c, [[o.X(-0.27 * R), y + 0.04 * R], [o.X(0.27 * R), y + 0.04 * R - (open ? 0.03 * R : 0)]], 0.1 * R);
  K.line(c, [[o.X(-0.3 * R), y + 0.04 * R], [o.X(-0.32 * R), y + 0.22 * R]], 0.08 * R); K.line(c, [[o.X(0.3 * R), y + 0.04 * R], [o.X(0.32 * R), y + 0.22 * R]], 0.08 * R); }
const headOpts = o => ({ skin: FILL.skin, hair, beard, stache, nose: 'hook', browW: 1.45, t: o.t, view: o.view, flip: o.flip, shoutDir: o.shoutDir });
B.dressTorso = (c, J, s, T) => { const lw = J.lw, n = J.n, f = J.f;
  K.line(c, [[n[0], n[1] + 18 * s], T([0, -172])], lw * 0.6, C.white);                     // the zip
  K.ink(c, K.cap([n[0] - 32 * s, n[1] + 4 * s], [n[0] + 32 * s, n[1] + 4 * s], 17 * s), FILL.blue, lw);   // collar up
  K.line(c, [T([-56, -170]), T([56, -170])], lw * 0.8);                                   // the jacket hem
};
B.dressArm = (c, sP, e, a, s, J) => { const lw = J.lw; K.line(c, [sP, e, [e[0] + (a[0] - e[0]) * 0.7, e[1] + (a[1] - e[1]) * 0.7]], lw * 0.55, C.white);
  const c0 = [e[0] + (a[0] - e[0]) * 0.86, e[1] + (a[1] - e[1]) * 0.86]; K.ink(c, K.cap(c0, a, (B.arm + 1) * s), FILL.blue, lw * 0.8); };
B.dressLeg = (c, h, k, ft, s, J) => K.line(c, [h, k, [k[0] + (ft[0] - k[0]) * 0.82, k[1] + (ft[1] - k[1]) * 0.82]], J.lw * 0.55, C.white);
function draw(c, x, y, s, o = {}) {
  const t = o.t || 0, f = o.flip || 1, Q = typeof o.pose === 'object' ? o.pose : POSES[o.pose || 'stopwatch'], emo = o.emo || 'neutral';
  let P2 = Q;
  if (Q.clap) { const open = (K.step(t, 5) % 5) > 0; if (open) P2 = { ...Q, a1: [-40, -296], a2: [40, -296] }; }
  const bob = -5 * s * K.land(t);
  const J = FACE.body(c, x, y, s, P2, B, { flip: f, view: o.view, t, armsOrder: Q.armsOrder });
  const R = HEAD_R * s, hc = [J.h[0], J.h[1] + bob - 8 * s];
  const dir = o.shoutDir ?? (o.pose === 'bark' || o.pose === 'point' ? (f > 0 ? -0.25 : Math.PI + 0.25) : -Math.PI / 2);
  FACE.head(c, hc[0], hc[1], R, emo, { ...headOpts({ ...o, t }), shoutDir: dir });
  return { ...J, head: hc, R };
}
function head(c, cx, cy, R, emo, o = {}) { FACE.head(c, cx, cy, R, emo, headOpts(o)); }
window.PROF = { draw, head, POSES, NAMES, EMOTIONS: FACE.EMOTIONS, FILL, HEAD_R, name: 'le prof de muscu de quartier' };
})();
(() => {
const C = K.C, FILL = { skin: '#8a4f2e', red: C.red, white: C.white };
const B = { skin: FILL.skin, top: FILL.red, shoe: C.white, shoulder: 92, shoulderR: 34, waist: 44, hip: 72, hipR: 30, arm: 27, leg: 29, neck: 26 };
const HEAD_R = 80;
const P = (h, n, p, e1, a1, e2, a2, k1, f1, k2, f2, hands, extra = {}) => ({ h, n, p, e1, a1, e2, a2, k1, f1, k2, f2, hands, ...extra });
const LEGS = [[-46, -88], [-64, 0], [46, -88], [64, 0]];
const legs = (k = LEGS) => k;
const POSES = {
  stance: P([0, -400], [0, -318], [0, -170], [-128, -250], [-74, -186], [128, -250], [74, -186], ...legs(), { 1: 'fist', 2: 'fist' }),
  cross: P([0, -400], [0, -318], [0, -170], [-96, -232], [44, -262], [96, -232], [-44, -270], ...legs(), { 1: 'fist', 2: 'fist' }, { armsOrder: [1, 2] }),
  point: P([20, -398], [12, -318], [0, -170], [-84, -246], [-78, -178], [122, -326], [226, -340], ...legs([[-52, -88], [-76, 0], [48, -92], [70, 0]]), { 1: 'fist', 2: 'point' }),
  you: P([0, -400], [0, -318], [0, -170], [-128, -250], [-74, -186], [64, -286], [26, -300], ...legs(), { 1: 'fist', 2: 'you' }),
  bark: P([52, -386], [34, -312], [0, -170], [-62, -272], [-114, -250], [142, -314], [248, -310], ...legs([[-54, -86], [-82, 0], [56, -94], [86, 0]]), { 1: 'fist', 2: 'point' }),
  clap: P([0, -400], [0, -318], [0, -170], [-84, -232], [-8, -282], [84, -232], [8, -282], ...legs(), { 1: 'fist', 2: 'fist' }, { clap: true }),
  thumbsdown: P([6, -400], [4, -318], [0, -170], [-128, -250], [-74, -186], [104, -250], [126, -200], ...legs(), { 1: 'fist', 2: 'thumbDown' }),
};
const NAMES = Object.keys(POSES);
function hair(c, R, o) { if (o.sil) { const p = new Path2D(); p.rect(o.X(-0.86 * R), -1.48 * R, 1.72 * R, 1.0 * R); K.ink(c, p, C.ink, o.lw); return; }
  const top = -1.46 * R, hl = -0.56 * R;
  const p = new Path2D(); p.moveTo(o.X(-0.93 * R), hl + 0.12 * R); p.lineTo(o.X(-0.9 * R), top + 0.1 * R); p.quadraticCurveTo(o.X(-0.9 * R), top, o.X(-0.78 * R), top);
  p.lineTo(o.X(0.78 * R), top); p.quadraticCurveTo(o.X(0.9 * R), top, o.X(0.9 * R), top + 0.1 * R); p.lineTo(o.X(0.93 * R), hl + 0.12 * R);
  p.lineTo(o.X(0.62 * R), hl); p.lineTo(o.X(-0.62 * R), hl); p.closePath();
  K.ink(c, p, C.ink, o.lw);
  [-1, 1].forEach(sd => K.ink(c, K.cap([o.X(sd * 0.9 * R), hl + 0.1 * R], [o.X(sd * 0.96 * R), 0.05 * R], 0.07 * R), C.ink, 0));
}
function beard(c, R, o) { c.save(); c.strokeStyle = C.ink; c.lineCap = 'round'; c.lineWidth = 0.17 * R; c.beginPath(); c.arc(o.X(0), 0, R * 0.9, Math.PI * 0.02, Math.PI * 0.98); c.stroke(); c.restore();
  K.ink(c, K.rrect(o.X(-0.2 * R), 0.66 * R, 0.4 * R, 0.3 * R, 0.12 * R), C.ink, 0); }
function stache(c, R, o) { const y = 0.3 * R, open = o.E.mouth === 'shout' || o.E.mouth === 'laugh';
  K.line(c, [[o.X(-0.3 * R), y + 0.08 * R], [o.X(-0.22 * R), y - (open ? 0.06 : 0)], [o.X(0.22 * R), y - (open ? 0.06 : 0)], [o.X(0.3 * R), y + 0.08 * R]], 0.12 * R); }
const headOpts = o => ({ skin: FILL.skin, hair, beard, stache, nose: 'wide', browW: 1.3, t: o.t, view: o.view, flip: o.flip, shoutDir: o.shoutDir });
B.dressTorso = (c, J, s, T) => {
  const lw = J.lw, n = J.n, f = J.f;
  c.save(); c.strokeStyle = C.white; c.lineWidth = lw * 0.7; c.lineCap = 'round'; c.beginPath(); c.arc(n[0], n[1] + 2 * s, 30 * s, Math.PI * 0.1, Math.PI * 0.9); c.stroke(); c.restore();
  const w = [n[0] + 6 * s * f, n[1] + 92 * s];
  K.line(c, [[n[0] - 24 * s, n[1] + 4 * s], w, [n[0] + 24 * s, n[1] + 4 * s]], lw * 0.55);
  c.save(); c.translate(w[0], w[1]); c.rotate(-0.25 * f); K.ink(c, K.rrect(-14 * s, -4 * s, 46 * s, 26 * s, 10 * s), C.white, lw * 0.75); K.ink(c, K.circ(22 * s, 9 * s, 8 * s), C.white, lw * 0.6); c.restore();
  K.line(c, [T([-40, -164]), T([40, -164])], lw * 0.7, C.white);
};
B.dressLeg = (c, h, k, ft, s, J) => { const m = [h[0] + (k[0] - h[0]) * 0.6, h[1] + (k[1] - h[1]) * 0.6]; K.ink(c, K.cap([h[0], h[1] - 14 * s], m, (B.leg + 6) * s), FILL.red, J.lw); };
B.dressArm = (c, sP, e, a, s, J) => { const w0 = [e[0] + (a[0] - e[0]) * 0.62, e[1] + (a[1] - e[1]) * 0.62], w1 = [e[0] + (a[0] - e[0]) * 0.86, e[1] + (a[1] - e[1]) * 0.86];
  K.ink(c, K.cap(w0, w1, (B.arm + 2) * s), C.white, J.lw * 0.8); };
function draw(c, x, y, s, o = {}) {
  const t = o.t || 0, f = o.flip || 1, Q = typeof o.pose === 'object' ? o.pose : POSES[o.pose || 'stance'], emo = o.emo || 'neutral';
  let P2 = Q;
  if (Q.clap) { const open = (K.step(t, 5) % 5) > 0; if (open) P2 = { ...Q, a1: [-40, -300], a2: [40, -300] }; }
  const bob = -5 * s * K.land(t);
  const J = FACE.body(c, x, y, s, P2, B, { flip: f, view: o.view, t, armsOrder: Q.armsOrder });
  const R = HEAD_R * s, hc = [J.h[0], J.h[1] + bob - 8 * s];
  const dir = o.shoutDir ?? (o.pose === 'bark' || o.pose === 'point' ? (f > 0 ? -0.25 : Math.PI + 0.25) : -Math.PI / 2);
  FACE.head(c, hc[0], hc[1], R, emo, { ...headOpts({ ...o, t }), shoutDir: dir });
  return { ...J, head: hc, R };
}
function head(c, cx, cy, R, emo, o = {}) { FACE.head(c, cx, cy, R, emo, headOpts(o)); }
window.COACH = { draw, head, POSES, NAMES, EMOTIONS: FACE.EMOTIONS, FILL, HEAD_R, name: 'the red coach' };
})();
(() => {
const { W, H, C, TAU } = K, { clamp, lerp } = U;
const XP = (h, n, p, e1, a1, e2, a2, hands) => ({ h, n, p, e1, a1, e2, a2, k1: [-40, -86], f1: [-52, 0], k2: [40, -86], f2: [52, 0], hands });
PROF.POSES.thumbsup = XP([4, -392], [2, -314], [0, -166], [-118, -244], [-70, -182], [108, -262], [132, -330], { 1: 'watch', 2: 'thumbUp' });
PROF.POSES.shrug = XP([0, -398], [0, -318], [0, -166], [-110, -236], [-150, -312], [110, -236], [150, -312], { 1: 'fist', 2: 'fist' });
PROF.POSES.up = XP([16, -390], [10, -314], [0, -166], [-96, -246], [-70, -180], [104, -360], [170, -452], { 1: 'watch', 2: 'point' });
const XC = (h, n, p, e1, a1, e2, a2, hands) => ({ h, n, p, e1, a1, e2, a2, k1: [-46, -88], f1: [-64, 0], k2: [46, -88], f2: [64, 0], hands });
if (window.COACH) Object.assign(COACH.POSES, {
  stopwatch: XC([0, -400], [0, -318], [0, -170], [-128, -250], [-74, -186], [128, -290], [130, -362], { 1: 'fist', 2: 'watch' }),
  count: XC([0, -400], [0, -318], [0, -170], [-104, -326], [-116, -410], [108, -278], [164, -300], { 1: 'up', 2: 'watch' }),
  thumbsup: XC([6, -400], [4, -318], [0, -170], [-128, -250], [-74, -186], [116, -268], [140, -338], { 1: 'fist', 2: 'thumbUp' }),
  shrug: XC([0, -406], [0, -322], [0, -170], [-124, -242], [-166, -318], [124, -242], [166, -318], { 1: 'fist', 2: 'fist' }),
  up: XC([16, -398], [10, -318], [0, -170], [-128, -250], [-74, -186], [116, -366], [182, -458], { 1: 'fist', 2: 'point' }),
});
const COACH_S = 0.96;
K.prof = (c, x, y, s, pose, emo, t, o = {}) => {
  const k = o.at != null ? K.hit(t, o.at, 0.22) : 0, sq = 1 - 0.035 * K.land(t) - 0.14 * k, en = window.LANG === 'en';
  c.save(); c.translate(x, y); c.scale(1 + (1 - sq) * 0.7, sq); c.translate(-x, -y);
  if (en) s *= COACH_S;
  const J = (en ? COACH : PROF).draw(c, x, y, s, { pose, emo, t, flip: o.flip || 1 }); c.restore();
  const two = pose === 'stopwatch' || pose === 'count', a = two ? J.a2 : J.a1, r = (en ? 30 : 31) * s, f = o.flip || 1;
  J.watch = [x + (a[0] - x) * (1 + (1 - sq) * 0.7) + 0.2 * r * f, y + (a[1] - y) * sq - 1.25 * r];
  return J;
};
K.click = (c, x, y, t, at, s = 1, col = C.ink) => { if (t < at - 0.001 || t > at + 0.4) return; const q = (t - at) / 0.4;
  c.save(); c.strokeStyle = col; c.lineCap = 'round'; c.lineWidth = Math.max(7, 12 * s * (1 - q * 0.5)); c.beginPath();
  for (let i = 0; i < 7; i++) { const a = -2.5 + i * 0.5, r0 = (58 + 40 * q) * s, r1 = (130 + 90 * q) * s;
    c.moveTo(x + Math.cos(a) * r0, y + Math.sin(a) * r0); c.lineTo(x + Math.cos(a) * r1, y + Math.sin(a) * r1); }
  c.stroke(); c.restore(); };
const STRAIN = { brow: [0.8, 0.8], browY: 0.06, eye: 'squint', lid: 0.6, look: [0, 0], mouth: 'grit', tilt: 0, nose: true };
K.face = (c, J, emo, t, o = {}) => {
  const R = 49 * J.s * (1 + 0.06 * (J.fat || 0)), [x, y] = J.h, skin = o.skin || C.white;
  const E = emo === 'strain' || emo === 'tears' ? STRAIN : emo;
  const hair = o.hair ? (cc, RR, oo) => { const p = new Path2D(); p.moveTo(oo.X(-0.92 * RR), -0.2 * RR);
    p.bezierCurveTo(oo.X(-1.0 * RR), -1.2 * RR, oo.X(1.0 * RR), -1.2 * RR, oo.X(0.92 * RR), -0.2 * RR); p.lineTo(oo.X(0.7 * RR), -0.5 * RR); p.lineTo(oo.X(-0.7 * RR), -0.5 * RR); p.closePath(); K.ink(cc, p, C.ink, oo.lw); } : null;
  FACE.head(c, x, y, R, E, { skin, t, hair, flip: o.flip, view: o.view });
  if (E === STRAIN) { const lw = Math.max(5, R * 0.14), my = y + 0.47 * R, k = K.step(t, 5) % 2;
    K.ink(c, K.rrect(x - 0.3 * R, my - 0.11 * R, 0.6 * R, 0.22 * R, 0.06 * R), C.white, lw * 0.8);
    for (let i = 1; i < 4; i++) K.line(c, [[x - 0.3 * R + i * 0.15 * R, my - 0.11 * R], [x - 0.3 * R + i * 0.15 * R, my + 0.11 * R]], lw * 0.5);
    K.line(c, [[x - 0.3 * R, my], [x + 0.3 * R, my]], lw * 0.5);
    K.line(c, [[x + 0.55 * R, y - 0.55 * R], [x + 0.62 * R, y - 0.4 * R], [x + 0.52 * R, y - 0.28 * R]], lw * 0.7, C.red);
    [-1, 1].forEach(sd => { for (let i = 0; i < 3; i++) { const a = -Math.PI / 2 + sd * (0.7 + i * 0.32), r0 = R * (1.2 + 0.08 * k), r1 = R * (1.5 + 0.08 * k);
      K.line(c, [[x + Math.cos(a) * r0, y + Math.sin(a) * r0], [x + Math.cos(a) * r1, y + Math.sin(a) * r1]], lw * 0.7); } });
    if (emo === 'tears') [-1, 1].forEach(sd => { const ty = y + 0.1 * R + ((K.step(t, 5) * 0.25 + (sd > 0 ? 0.5 : 0)) % 1) * R * 0.9;
      K.drop(c, x + sd * 0.42 * R, ty, R * 0.13, C.sky); });
  }
};
K.drop = (c, x, y, r, fill = C.white, rot = 0) => { c.save(); c.translate(x, y); c.rotate(rot); const p = new Path2D();
  p.moveTo(0, -r * 2); p.quadraticCurveTo(r * 1.1, -r * 0.2, r, r * 0.3); p.arc(0, r * 0.3, r, 0, Math.PI); p.quadraticCurveTo(-r * 1.1, -r * 0.2, 0, -r * 2);
  K.ink(c, p, fill, Math.max(5, r * 0.4)); c.restore(); };
K.tag = (c, str, x, y, size, t, at, o = {}) => { if (t < at - 0.001) return; const pop = 1 + 0.4 * Math.pow(Math.max(0, 1 - (t - at) / 0.1), 2), bnc = 1 + 0.04 * K.land(t);
  if (o.lx != null) K.line(c, [[x, y], [o.lx, o.ly]], 11);
  c.save(); c.translate(x, y); c.rotate(o.rot || 0); c.scale(pop * bnc, pop / bnc);
  const w = K.textUnits(str) * size / 6 + size * 0.9, h = size * 1.75; K.ink(c, K.rrect(-w / 2, -h / 2, w, h, 18), o.fill || C.white, 12);
  K.text(c, str, 0, 0, size, { col: o.col || C.ink, lw: size * 0.18, t, seed: o.seed || 21, boil: 0.04 }); c.restore(); };
K.fmt = s => { s = Math.max(0, Math.ceil(s - 1e-6)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };
K.timer = (c, x, y, r, secs, t, o = {}) => { const at = o.at ?? -1e9; if (t < at - 0.001) return;
  const pop = 1 + 0.4 * Math.pow(Math.max(0, 1 - (t - at) / 0.12), 2), bnc = 1 + 0.035 * K.land(t, o.ph || 0), lw = Math.max(8, Math.min(K.LW, r * 0.12));
  c.save(); c.translate(x, y); c.rotate(o.rot || 0); c.scale(pop * bnc, pop / bnc);
  K.ink(c, K.rrect(-r * 0.22, -r * 1.3, r * 0.44, r * 0.3, r * 0.08), o.body || C.ink, lw);          // the crown button
  c.save(); c.rotate(0.75); K.ink(c, K.rrect(-r * 0.12, -r * 1.2, r * 0.24, r * 0.26, r * 0.06), o.body || C.ink, lw); c.restore();
  K.ink(c, K.circ(0, 0, r), o.face || C.white, lw);
  const fr = o.frac ?? 1; if (fr > 0.001) { c.save(); c.strokeStyle = o.col || C.red; c.lineWidth = r * 0.16; c.lineCap = 'butt';
    c.beginPath(); c.arc(0, 0, r * 0.8, -Math.PI / 2, -Math.PI / 2 + fr * K.TAU); c.stroke(); c.restore(); }
  c.save(); c.strokeStyle = C.ink; c.lineWidth = lw * 0.5; c.beginPath(); c.arc(0, 0, r * 0.68, 0, K.TAU); c.stroke(); c.restore();
  K.text(c, typeof secs === 'string' ? secs : K.fmt(secs), 0, r * 0.02, r * 0.42, { col: o.digit || C.ink, lw: r * 0.09, t, seed: o.seed || 140, boil: 0.03 });
  if (o.cross) { K.line(c, [[-r * 0.8, -r * 0.8], [r * 0.8, r * 0.8]], r * 0.16, C.red); K.line(c, [[r * 0.8, -r * 0.8], [-r * 0.8, r * 0.8]], r * 0.16, C.red); }
  c.restore(); };
K.usflag = (c, x, y, w, t) => { const h = w * 0.62, wv = 9 * Math.sin(K.beat(t) * Math.PI), top = y - 300, lw = 11;
  K.line(c, [[x, y], [x, top - 20]], 15);
  const P = (u, v) => [x + u * w, top + v * h + wv * Math.sin(u * Math.PI)];
  const band = (v0, v1, fill) => { const p = new Path2D(); for (let i = 0; i <= 8; i++) { const q = P(i / 8, v0); i ? p.lineTo(q[0], q[1]) : p.moveTo(q[0], q[1]); }
    for (let i = 8; i >= 0; i--) { const q = P(i / 8, v1); p.lineTo(q[0], q[1]); } p.closePath(); c.fillStyle = fill; c.fill(p); };
  for (let k = 0; k < 7; k++) band(k / 7, (k + 1) / 7, k % 2 ? C.white : C.red);
  const cp = new Path2D(); [[0, 0], [0.42, 0], [0.42, 4 / 7], [0, 4 / 7]].forEach((q, i) => { const r = P(q[0], q[1]); i ? cp.lineTo(r[0], r[1]) : cp.moveTo(r[0], r[1]); }); cp.closePath();
  c.fillStyle = C.blue; c.fill(cp);
  for (let i = 0; i < 3; i++) for (let j = 0; j < 2; j++) { const q = P(0.08 + i * 0.13, 0.13 + j * 0.3); c.fillStyle = C.white; c.beginPath(); c.arc(q[0], q[1], w * 0.025, 0, K.TAU); c.fill(); }
  const out = new Path2D(); for (let i = 0; i <= 8; i++) { const q = P(i / 8, 0); i ? out.lineTo(q[0], q[1]) : out.moveTo(q[0], q[1]); }
  for (let i = 8; i >= 0; i--) { const q = P(i / 8, 1); out.lineTo(q[0], q[1]); } out.closePath(); K.ink(c, out, null, lw); };
K.bench = (c, x, y, w, hh = 110, fill = C.red) => { K.line(c, [[x - w * 0.36, y - hh + 10], [x - w * 0.36, y]], 14); K.line(c, [[x + w * 0.36, y - hh + 10], [x + w * 0.36, y]], 14);
  K.ink(c, K.rrect(x - w / 2, y - hh - 14, w, 32, 12), fill, 12); };
K.plateSide = (c, x, y, s, fill = C.ink, rot = 0) => { c.save(); c.translate(x, y); c.rotate(rot); K.ink(c, K.rrect(-17 * s, -78 * s, 34 * s, 156 * s, 10 * s), fill, Math.max(6, 11 * s), fill === C.ink ? C.ink : C.ink);
  if (fill === C.ink) K.line(c, [[0, -58 * s], [0, 58 * s]], Math.max(3, 4 * s), '#555'); c.restore(); };
K.bar = (c, x, y, w, s, n, o = {}) => { c.save(); c.translate(x, y); c.rotate(o.rot || 0);
  K.line(c, [[-w / 2, 0], [w / 2, 0]], 18 * s + 4); K.line(c, [[-w / 2, 0], [w / 2, 0]], 6 * s + 1, '#cfd6dd');
  [-1, 1].forEach(d => { K.ink(c, K.rrect(d * (w / 2 - 70 * s) - 9 * s, -26 * s, 18 * s, 52 * s, 5 * s), C.ink, 0);
    for (let i = 0; i < n; i++) K.plateSide(c, d * (w / 2 - 92 * s - i * 38 * s), 0, s * (1 - i * 0.04), o.fill || C.ink); });
  c.restore(); };
K.plateX = (w, s, i) => w / 2 - 92 * s - i * 38 * s;
K.towel = (c, J, fill = C.sky) => { const s = J.s, x = J.p[0], y = J.p[1]; const p = K.rrect(x - 58 * s, y - 34 * s, 116 * s, 92 * s, 16 * s);
  K.ink(c, p, fill, Math.max(6, 10 * s)); c.save(); c.clip(p); for (let i = 0; i < 2; i++) K.line(c, [[x - 70 * s, y + (8 + i * 26) * s], [x + 70 * s, y + (8 + i * 26) * s]], 7 * s, C.white); c.restore();
  K.line(c, [[x + 30 * s, y - 34 * s], [x + 40 * s, y + 20 * s]], Math.max(4, 6 * s)); };
K.calBlock = (c, x, y, w, num, word, t, o = {}) => { const h = w * 0.92, at = o.at ?? -1e9; if (t < at - 0.001) return;
  const pop = 1 + 0.35 * Math.pow(Math.max(0, 1 - (t - at) / 0.12), 2); c.save(); c.translate(x, y); c.scale(pop, pop);
  K.ink(c, K.rrect(-w / 2, -h / 2, w, h, 14), C.white, 12); c.fillStyle = C.red; c.fillRect(-w / 2 + 6, -h / 2 + 6, w - 12, h * 0.24);
  K.ink(c, K.rrect(-w / 2, -h / 2, w, h, 14), null, 12);
  K.text(c, word, 0, -h / 2 + h * 0.15, Math.min(h * 0.13, (w - 30) * 6 / K.textUnits(word)), { col: C.white, lw: 6, t, seed: 170, boil: 0.03 });
  K.text(c, String(num), 0, h * 0.16, h * 0.42, { col: C.ink, lw: h * 0.07, t, seed: 171 + num, boil: 0.04 });
  if (o.flip != null && o.flip < 1) { const q = o.flip; c.save(); c.translate(w * (0.75 + 0.6 * q), -h * (0.25 + 0.3 * q)); c.rotate(0.4 + q * 1.1); K.ink(c, K.rrect(-w / 2, -h * 0.26, w, h * 0.7, 14), C.white, 10); c.restore(); }
  c.restore(); };
K.sweat = (c, J, t, n = 4, col = C.sky) => { const s = J.s, r = U.rng(300 + K.step(t, 5)); for (let i = 0; i < n; i++) { const a = -Math.PI / 2 + (i - (n - 1) / 2) * 0.55 + (r() - 0.5) * 0.2, d = (70 + r() * 40) * s;
  K.drop(c, J.h[0] + Math.cos(a) * d, J.h[1] + Math.sin(a) * d, (10 + r() * 4) * s, col, a + Math.PI / 2); } };
K.biceps = (c, J, k, fill = C.white) => { if (k <= 0.02) return; const s = J.s; [[J.e1, J.n], [J.e2, J.n]].forEach(([e, n]) => {
  const m = [lerp(n[0], e[0], 0.6), lerp(n[1], e[1], 0.6)], ang = Math.atan2(e[1] - n[1], e[0] - n[0]), off = 14 * s * k;
  K.ink(c, K.ell(m[0] - Math.sin(ang) * off, m[1] + Math.cos(ang) * off * 0.2 - off, (30 + 10 * k) * s * k + 6 * s, 26 * s * k + 6 * s, ang), fill, Math.max(5, 9 * s)); }); };
K.lifter = (c, x, y, s, Q, m, o = {}) => { const J = K.guy(c, x, y, s, Q, { v: m * 0.9, fat: 0.25 * (1 - m), ...o }); K.biceps(c, J, m, o.fill || C.white); return J; };
K.tremor = (t, amp = 6, seed = 1) => [(U.hash(K.step(t, 5), seed) - 0.5) * 2 * amp, (U.hash(K.step(t, 5), seed + 9) - 0.5) * amp];
K.guy = (c, x, y, s, Q, o = {}) => K.fig(c, x, y, s, Q, { fat: 0.25, fill: C.white, ...o });
K.shaker = (c, x, y, h, o = {}) => { const lw = Math.max(6, Math.min(K.LW, h * 0.045)), lv = o.level ?? 0.75;
  c.save(); c.translate(x, y); c.rotate(o.rot || 0); if (o.pop) c.scale(o.pop, o.pop);
  const wt = h * 0.46, wb = h * 0.4, y0 = -h * 0.28, y1 = h * 0.5;
  const body = new Path2D(); body.moveTo(-wt / 2, y0); body.lineTo(wt / 2, y0); body.lineTo(wb / 2, y1 - h * 0.05);
  body.quadraticCurveTo(wb / 2, y1, wb / 2 - h * 0.05, y1); body.lineTo(-wb / 2 + h * 0.05, y1); body.quadraticCurveTo(-wb / 2, y1, -wb / 2, y1 - h * 0.05); body.closePath();
  K.ink(c, body, C.lilac, 0);
  if (lv > 0.01) { c.save(); c.clip(body); c.fillStyle = C.milk; c.fillRect(-h, y1 - (y1 - y0) * lv, h * 2, h * 2);
    c.fillStyle = '#e0bc93'; c.fillRect(-h, y1 - (y1 - y0) * lv, h * 2, h * 0.035); c.restore(); }
  for (let i = 1; i < 4; i++) K.line(c, [[wt / 2 - h * 0.02, y0 + i * h * 0.16], [wt / 2 - h * 0.1, y0 + i * h * 0.16]], lw * 0.55);
  K.ink(c, body, null, lw);
  if (o.label !== false) { const ly = y0 + (y1 - y0) * 0.42; K.ink(c, K.rrect(-wt * 0.38, ly - h * 0.08, wt * 0.76, h * 0.16, h * 0.03), C.white, lw * 0.7);
    K.text(c, 'WHEY', 0, ly, h * 0.085, { col: C.purple, lw: h * 0.022, t: o.t || 0, seed: 401, boil: 0.03 }); }
  K.ink(c, K.rrect(-wt * 0.56, -h * 0.4, wt * 1.12, h * 0.14, h * 0.03), o.lid || C.purple, lw);       // the screw lid
  K.ink(c, K.rrect(-wt * 0.2, -h * 0.5, wt * 0.4, h * 0.12, h * 0.04), o.lid || C.purple, lw);         // the cap
  c.restore(); };
K.CHUG = [P2(-22, -362, -6, -316, 0, -172, -44, -248, -60, -176, 74, -292, 46, -370, -22, -86, -30, 0, 22, -86, 30, 0),
  P2(-26, -358, -8, -314, 0, -172, -44, -248, -64, -178, 76, -296, 50, -380, -22, -86, -30, 0, 22, -86, 30, 0)];
function P2(...a) { return a; }
K.chugger = (c, x, y, s, t, o = {}) => { const k = K.step(t, 2) % 2, Q = K.CHUG[k], f = o.flip || 1;
  const J = K.fig(c, x, y, s, Q, { fill: C.white, fat: o.fat ?? 0.15, flip: f });
  if (o.towel) K.towel(c, J, o.towel);
  K.face(c, J, K.GULP, t, { flip: f });
  const hx = J.a2[0], hy = J.a2[1], dx = J.h[0] - hx, dy = J.h[1] - hy, d = Math.hypot(dx, dy) || 1;
  const rot = Math.atan2(dx / d, -dy / d), hh = 150 * s;
  K.shaker(c, hx - dx / d * hh * 0.05, hy - dy / d * hh * 0.05 - 10 * s, hh, { rot: rot + (k ? 0.08 : 0) * f, level: o.level ?? 0.5, t, label: s > 0.7 });
  if (o.wet) K.sweat(c, J, t, 3, C.sky);
  if (k) [-1, 1].forEach(sd => K.line(c, [[J.n[0] + sd * 34 * s, J.n[1] - 6 * s], [J.n[0] + sd * 54 * s, J.n[1] - 18 * s]], Math.max(4, 8 * s)));
  return J; };
K.GULP = { brow: [-0.35, -0.35], browY: -0.08, eye: 'happy', look: [0, 0], mouth: 'flat', tilt: -0.22 };
K.PANIC = { brow: [-0.6, -0.6], browY: -0.1, eye: 'wide', lid: 0, look: [0, -0.2], mouth: 'shout', tilt: 0.05 };
K.PROUD = { brow: [0.1, 0.1], browY: -0.04, eye: 'open', lid: 0.45, look: [0.4, -0.3], mouth: 'smile', tilt: -0.06 };
K.lockers = (c, x, top, y, w, n, o = {}) => { for (let i = 0; i < n; i++) { const lx = x + i * w;
  K.ink(c, K.rrect(lx, top, w, y - top, 6), o.fill || '#9fb3c8', 11);
  if (o.open === i) { K.ink(c, K.rrect(lx + 10, top + 10, w - 20, y - top - 20, 4), '#2a2f36', 0); K.ink(c, K.poly([[lx + w, top], [lx + w + w * 0.3, top + 30], [lx + w + w * 0.3, y - 30], [lx + w, y]]), o.fill || '#9fb3c8', 11); continue; }
  for (let k = 0; k < 3; k++) K.line(c, [[lx + w * 0.25, top + 40 + k * 26], [lx + w * 0.75, top + 40 + k * 26]], 8);
  K.ink(c, K.rrect(lx + w * 0.72, top + (y - top) * 0.45, 14, 54, 6), C.ink, 0); } };
K.countdown = (c, x, y, w, secs, t, o = {}) => { const at = o.at ?? -1e9; if (t < at - 0.001) return; const h = w * 0.42;
  const pop = 1 + 0.35 * Math.pow(Math.max(0, 1 - (t - at) / 0.12), 2); c.save(); c.translate(x, y); c.rotate(o.rot || 0); c.scale(pop, pop);
  K.ink(c, K.rrect(-w / 2, -h / 2, w, h, 22), C.ink, 13, o.frame || C.white);
  const zero = secs <= 0.001, on = !zero || K.step(t, 4) % 2 === 0;
  if (on) K.text(c, K.fmt(secs), 0, 0, h * 0.5, { col: zero ? C.red : '#ff5040', lw: h * 0.1, t, seed: 410, boil: 0.02 });
  c.restore(); };
K.sash = (c, x, y, w, h, close, o = {}) => { const fw = 26, wood = '#a8521b';
  K.ink(c, K.rrect(x - w / 2 - fw, y - h / 2 - fw, w + fw * 2, h + fw * 2, 10), wood, 13);
  K.ink(c, K.rrect(x - w / 2, y - h / 2, w, h, 4), o.sky || '#bfe8fb', 11);
  K.line(c, [[x, y - h / 2], [x, y]], 10);
  const sh = h / 2, sy = lerp(y - h / 2 - sh * 0.15, y, clamp(close));            // the lower sash's top edge
  K.ink(c, K.rrect(x - w / 2 + 6, sy, w - 12, sh, 4), 'rgba(191,232,251,0.0)', 0);
  K.ink(c, K.rrect(x - w / 2 + 2, sy, w - 4, sh, 4), '#d9f2fc', 12, C.ink); K.line(c, [[x, sy], [x, sy + sh]], 9);
  K.ink(c, K.rrect(x - w / 2 + 2, sy - 10, w - 4, 22, 4), wood, 10);
  K.ink(c, K.rrect(x - w / 2 - fw - 20, y + h / 2 + fw - 6, w + fw * 2 + 40, 26, 6), wood, 12);     // the sill
  return { x: x - w / 2, y: y - h / 2, w, h, sashY: sy }; };
const CX = [252, 640], CW = 360, CY0 = 760, CH = 430, FY = CY0 + CH - 56, DX = [-104, 0, 104];
K.CARDS = { CX, CW, CY0, CH, FY };
K.cards = (c, t, o = {}) => { const ap = o.appear ?? 1, m = o.m || [0, 0];
  [0, 1].forEach(i => { const sw = i === 1 ? (o.swell || 0) : (o.swellL || 0), dim = o.dim === i, sc = (1 + 0.1 * sw - (dim ? 0.08 : 0)) * (0.6 + 0.4 * K.out(ap));
    const x = CX[i], yc = CY0 + CH / 2; if (ap <= 0.001) return;
    c.save(); c.translate(x, yc + (1 - K.out(ap)) * 260); c.scale(sc, sc); c.rotate((i ? 0.022 : -0.022) + (sw > 0 ? 0.02 * Math.sin(K.beat(t) * Math.PI) : 0)); c.translate(-x, -yc);
    if (sw > 0.05) K.burst(c, x, yc, CW * 0.56, CW * 1.0, 16, t, 420 + i, 12, o.burst || C.ink);
    const card = K.rrect(x - CW / 2, CY0, CW, CH, 26);
    K.ink(c, card, dim ? '#d8d8d8' : C.white, 13);
    c.save(); c.clip(card); c.fillStyle = dim ? '#bdbdbd' : i ? '#ffe2c4' : '#d8ccff'; c.fillRect(x - CW, FY, CW * 2, 200); K.line(c, [[x - CW, FY], [x + CW, FY]], 10);
    DX.forEach((dx, j) => { const s = j === 1 ? 0.68 : 0.64, fill = dim ? '#ececec' : C.white, mm = m[i];
      if (o.mode === 'lift') K.presser2(c, x + dx, FY + (j === 1 ? 8 : 0), s, t, mm, { fill, ph: j });
      else if (o.mode === 'flex') K.lifter(c, x + dx, FY + (j === 1 ? 8 : 0), s, K.pick([K.POSE.flex, K.POSE.armsup2], t, 2, j), mm, { fill });
      else K.lifter(c, x + dx, FY + (j === 1 ? 8 : 0), s, K.POSE.stand, mm, { fill }); });
    c.restore(); K.ink(c, card, null, 13);
    const ord = o.order ? o.order[i] : null;
    if (ord != null && t >= ord - 0.001) { const p = 1 + 0.4 * Math.pow(Math.max(0, 1 - (t - ord) / 0.1), 2);
      c.save(); c.translate(x, CY0 - 6); c.scale(p, p); c.rotate(i ? 0.03 : -0.03);
      K.ink(c, K.rrect(-150, -54, 300, 108, 20), i ? C.org : C.purple, 12);
      K.text(c, i ? L('APRÈS', 'AFTER') : L('AVANT', 'BEFORE'), 0, 0, 52, { col: C.white, outline: 6, ocol: C.ink, lw: 10, t, seed: 430 + i, boil: 0.04 });
      c.restore();
      const iy = CY0 + 104, a = i ? 'bar' : 'shk', b = i ? 'shk' : 'bar';
      const ic = (kind, ix) => kind === 'shk' ? K.shaker(c, ix, iy, 92, { level: 0.8, label: false, t }) : K.bar(c, ix, iy, 120, 0.32, 1);
      if (!o.noIcons) { ic(a, x - 96); K.line(c, [[x - 30, iy], [x + 26, iy]], 10); K.line(c, [[x + 8, iy - 16], [x + 28, iy], [x + 8, iy + 16]], 10); ic(b, x + 96); } }
    c.restore(); });
};
const PRESS_DN = P2(0, -374, 0, -318, 0, -172, -88, -262, -80, -340, 88, -262, 80, -340, -32, -86, -50, 0, 32, -86, 50, 0);
K.presser2 = (c, x, y, s, t, m, o = {}) => { const up = (((K.step(t, 2) + (o.ph || 0)) % 2) + 2) % 2, Q = up ? K.POSE.press : PRESS_DN;
  const J = K.lifter(c, x, y, s, Q, m, o); const bx = (J.a1[0] + J.a2[0]) / 2, by = Math.min(J.a1[1], J.a2[1]) - 6 * s;
  K.bar(c, bx, by, Math.abs(J.a2[0] - J.a1[0]) + 110 * s, s * 0.5, 1); return J; };
K.bigArm = (c, x, y, s, t, emo, o = {}) => { const sh = [x - 420 * s, y + 120 * s], el = [x + 120 * s, y + 140 * s], wr = [x + 170 * s, y - 230 * s], fi = [x + 175 * s, y - 330 * s];
  K.union(c, [K.cap(sh, el, 120 * s, 92 * s), K.cap(el, wr, 92 * s, 70 * s), K.circ(fi[0], fi[1], 98 * s)], C.skin, Math.max(8, 13 * s));
  K.line(c, [[fi[0] - 60 * s, fi[1] - 30 * s], [fi[0] + 30 * s, fi[1] - 40 * s]], Math.max(5, 9 * s));
  K.line(c, [[fi[0] - 70 * s, fi[1] + 10 * s], [fi[0] + 26 * s, fi[1] + 4 * s]], Math.max(5, 9 * s));
  const bx = x - 130 * s, by = y - 40 * s, R = 175 * s;
  FACE.head(c, bx, by, R, emo, { skin: C.skin, t });
  const wb = [lerp(el[0], wr[0], 0.82), lerp(el[1], wr[1], 0.82)];
  const wq = clamp(o.watch || 0);
  if (wq > 0.001) { c.save(); c.translate(wb[0], wb[1]); c.rotate(-0.12); K.ink(c, K.rrect(-82 * s, -22 * s, 164 * s, 44 * s, 18 * s), '#f2d2b4', 0); c.restore(); }
  const wx = wb[0] + wq * 260 * s, wy = wb[1] - wq * 330 * s + wq * wq * 120 * s, wr2 = wq * 5;
  c.save(); c.translate(wx, wy); c.rotate(-0.12 + wr2);
  K.ink(c, K.rrect(-92 * s, -26 * s, 184 * s, 52 * s, 20 * s), C.ink, 0);
  K.ink(c, K.circ(0, 0, 58 * s), C.white, Math.max(6, 11 * s)); K.line(c, [[0, 0], [0, -38 * s]], Math.max(4, 8 * s)); K.line(c, [[0, 0], [26 * s, 10 * s]], Math.max(4, 8 * s));
  c.restore(); return { wrist: wb, watch: [wx, wy], face: [bx, by, R] }; };
K.wallClock = (c, x, y, r, t, o = {}) => { const lw = Math.max(8, r * 0.1); K.ink(c, K.circ(x, y, r), C.white, lw);
  for (let i = 0; i < 12; i++) { const a = i / 12 * K.TAU; K.line(c, [[x + Math.cos(a) * r * 0.78, y + Math.sin(a) * r * 0.78], [x + Math.cos(a) * r * 0.88, y + Math.sin(a) * r * 0.88]], lw * 0.5); }
  const a1 = K.step(t, 2) * 0.5, a2 = K.step(t, 5) * 0.8; K.line(c, [[x, y], [x + Math.sin(a1) * r * 0.45, y - Math.cos(a1) * r * 0.45]], lw * 0.8); K.line(c, [[x, y], [x + Math.sin(a2) * r * 0.7, y - Math.cos(a2) * r * 0.7]], lw * 0.5);
  const q = clamp(o.cross || 0); if (q > 0) { const d = r * 1.05; K.line(c, [[x - d, y - d], [x - d + 2 * d * Math.min(1, q * 2), y - d + 2 * d * Math.min(1, q * 2)]], r * 0.2, C.red);
    if (q > 0.5) { const k = (q - 0.5) * 2; K.line(c, [[x + d, y - d], [x + d - 2 * d * k, y - d + 2 * d * k]], r * 0.2, C.red); } } };
K.egg = (c, x, y, s) => { const p = new Path2D(); p.moveTo(x - 80 * s, y); p.bezierCurveTo(x - 90 * s, y - 60 * s, x - 10 * s, y - 70 * s, x + 20 * s, y - 50 * s);
  p.bezierCurveTo(x + 90 * s, y - 60 * s, x + 95 * s, y + 30 * s, x + 30 * s, y + 40 * s); p.bezierCurveTo(x - 20 * s, y + 60 * s, x - 75 * s, y + 40 * s, x - 80 * s, y); p.closePath();
  K.ink(c, p, C.white, Math.max(6, 11 * s)); K.ink(c, K.circ(x + 6 * s, y - 6 * s, 30 * s), C.yel, Math.max(5, 9 * s)); };
K.chicken = (c, x, y, s, o = {}) => { const p = new Path2D(); p.moveTo(x - 110 * s, y + 20 * s);
  p.bezierCurveTo(x - 130 * s, y - 50 * s, x - 40 * s, y - 80 * s, x + 30 * s, y - 62 * s); p.bezierCurveTo(x + 110 * s, y - 48 * s, x + 130 * s, y + 10 * s, x + 100 * s, y + 36 * s);
  p.bezierCurveTo(x + 50 * s, y + 66 * s, x - 90 * s, y + 66 * s, x - 110 * s, y + 20 * s); p.closePath();
  K.ink(c, p, o.fill || C.chick, Math.max(6, 12 * s));
  [[-50, -20], [0, -30], [50, -16]].forEach(([dx, dy]) => K.line(c, [[x + (dx - 22) * s, y + (dy + 18) * s], [x + (dx + 18) * s, y + (dy - 6) * s]], Math.max(4, 8 * s), '#c9874d')); };
K.yogurt = (c, x, y, s) => { const p = new Path2D(); p.moveTo(x - 60 * s, y - 70 * s); p.lineTo(x + 60 * s, y - 70 * s); p.lineTo(x + 48 * s, y + 60 * s); p.lineTo(x - 48 * s, y + 60 * s); p.closePath();
  K.ink(c, p, C.white, Math.max(6, 11 * s)); K.ink(c, K.rrect(x - 70 * s, y - 86 * s, 140 * s, 24 * s, 8 * s), C.sky, Math.max(6, 10 * s)); K.line(c, [[x - 40 * s, y - 10 * s], [x + 40 * s, y - 10 * s]], Math.max(5, 10 * s), C.sky); };
K.steak = (c, x, y, s) => { const p = new Path2D(); p.moveTo(x - 100 * s, y - 10 * s); p.bezierCurveTo(x - 100 * s, y - 70 * s, x + 20 * s, y - 80 * s, x + 80 * s, y - 50 * s);
  p.bezierCurveTo(x + 130 * s, y - 20 * s, x + 100 * s, y + 50 * s, x + 30 * s, y + 50 * s); p.bezierCurveTo(x - 40 * s, y + 52 * s, x - 100 * s, y + 40 * s, x - 100 * s, y - 10 * s); p.closePath();
  K.ink(c, p, C.meat, Math.max(6, 12 * s)); K.ink(c, K.ell(x - 30 * s, y - 6 * s, 26 * s, 18 * s, 0.3), C.fat, Math.max(4, 7 * s)); };
K.gauge = (c, x, y, w, h, level, t, o = {}) => { const tube = K.rrect(x - w / 2, y - h, w, h, w / 2);
  K.ink(c, tube, C.white, 13); c.save(); c.clip(tube); c.fillStyle = C.milk; c.fillRect(x - w, y - h * clamp(level), w * 2, h * 2);
  c.fillStyle = '#e0bc93'; c.fillRect(x - w, y - h * clamp(level), w * 2, 12); c.restore(); K.ink(c, tube, null, 13);
  for (let i = 1; i < 5; i++) K.line(c, [[x + w / 2 - 26, y - h * i / 5], [x + w / 2 - 4, y - h * i / 5]], 8);
  if (level >= 0.999) K.rays(c, x, y - h - 20, w * 0.7, 60, 10, t, 440, 26, 9); };
K.kscale = (c, x, y, w, grams, t, o = {}) => { const h = w * 0.36;
  K.ink(c, K.rrect(x - w / 2, y - h, w, h, 30), C.white, 13);
  K.ink(c, K.ell(x, y - h - 14, w * 0.46, 30), '#cfd6dd', 12);
  const dw = w * 0.5, dh = h * 0.46; K.ink(c, K.rrect(x - dw / 2, y - h * 0.74, dw, dh, 12), C.ink, 8);
  K.text(c, grams, x, y - h * 0.74 + dh / 2, dh * 0.56, { col: '#ff5040', lw: dh * 0.11, t, seed: 450, boil: 0.02 });
  return y - h - 14; };
K.bubble = (c, x, y, w, h, str, t, o = {}) => { const p = new Path2D(); p.roundRect(x - w / 2, y - h / 2, w, h, 46);
  p.moveTo(x - w * 0.28, y + h / 2 - 4); p.lineTo(x - w * 0.36, y + h / 2 + 80); p.lineTo(x - w * 0.12, y + h / 2 - 4);
  K.union(c, [p], C.white, 13);
  const tw = str ? K.text(c, str, x - (o.cursor ? 18 : 0), y, o.size || 110, { col: C.ink, lw: (o.size || 110) * 0.17, t, seed: 460, boil: 0.04 }) : 0;
  if (o.cursor && K.step(t, 2) % 2 === 0) K.line(c, [[x + tw / 2 + 4, y - (o.size || 110) * 0.6], [x + tw / 2 + 4, y + (o.size || 110) * 0.6]], 12, C.purple); };
K.groceryList = (c, w, t) => { const h = w * 1.3, lw = Math.max(6, w * 0.035);
  K.ink(c, K.rrect(-w / 2, -h / 2, w, h, 14), C.white, lw); K.ink(c, K.rrect(-w * 0.2, -h / 2 - w * 0.06, w * 0.4, w * 0.12, 8), C.ink, 0);
  const s = w / 900, foods = [K.chicken, K.egg, K.steak, K.yogurt, K.chicken];
  foods.forEach((f, i) => { const ry = -h / 2 + w * 0.22 + i * w * 0.23; f(c, -w * 0.28, ry, s * (f === K.yogurt ? 1.2 : 1.1)); K.line(c, [[-w * 0.06, ry], [w * (i % 2 ? 0.26 : 0.36), ry]], lw * 1.2); }); };
K.numbersSheet = (c, w, t) => { const h = w * 1.3, lw = Math.max(6, w * 0.035);
  K.ink(c, K.rrect(-w / 2, -h / 2, w, h, 14), C.white, lw);
  for (let i = 0; i < 6; i++) { const ry = -h / 2 + w * 0.2 + i * w * 0.19; K.line(c, [[-w * 0.36, ry], [w * (i % 2 ? 0.0 : 0.08), ry]], lw * 1.2);
    K.ink(c, K.rrect(w * 0.14, ry - w * 0.05, w * 0.22, w * 0.1, 6), C.ink, 0); K.text(c, 'G', w * 0.42, ry, w * 0.07, { col: C.ink, lw: w * 0.014, t, seed: 470 + i, boil: 0.03 }); } };
K.envelope = (c, w, t) => { const h = w * 0.66, lw = Math.max(6, w * 0.04);
  K.ink(c, K.rrect(-w / 2, -h / 2, w, h, 14), C.white, lw); K.line(c, [[-w / 2 + 6, -h / 2 + 6], [0, h * 0.08], [w / 2 - 6, -h / 2 + 6]], lw);
  K.ink(c, K.circ(0, h * 0.08, w * 0.08), C.purple, lw * 0.8); };
K.stamp = (c, str, x, y, size, t, at, o = {}) => { if (t < at - 0.001) return; const lines = str.split('\n');
  const pop = 1 + 0.6 * Math.pow(Math.max(0, 1 - (t - at) / 0.1), 2), bnc = 1 + 0.03 * K.land(t), col = o.col || C.red;
  const wmax = Math.max(...lines.map(l => K.textUnits(l))) * size / 6, lh = size * 1.45, hh = lh * (lines.length - 1) + size;
  c.save(); c.translate(x, y); c.rotate(o.rot ?? -0.08); c.scale(pop * bnc, pop / bnc);
  K.ink(c, K.rrect(-wmax / 2 - size * 0.45, -hh / 2 - size * 0.4, wmax + size * 0.9, hh + size * 0.8, 24), o.fill || C.white, size * 0.16 + 10, C.ink);
  c.strokeStyle = col; c.lineWidth = size * 0.1; c.beginPath(); c.roundRect(-wmax / 2 - size * 0.3, -hh / 2 - size * 0.26, wmax + size * 0.6, hh + size * 0.52, 18); c.stroke();
  lines.forEach((l, i) => K.text(c, l, 0, -hh / 2 + size / 2 + i * lh, size, { col, lw: size * 0.19, t, seed: (o.seed || 480) + i, boil: 0.05 }));
  c.restore(); };
})();
(() => {
const { C, SPB } = K;
const en = () => window.LANG === 'en';
const loop = (t, n) => { const b = Math.max(0, K.beat(t)), k = Math.floor(b / n); return { k, ph: b - k * n, at: k * n * SPB }; };
const grid = ph => Math.floor(ph * 5 + 1e-6) / 5;       // a phase snapped to the films' pose grid (5 steps a beat)
const nar = (c, x, y, s, pose, emo, t, at) => K.prof(c, x, y, s, pose, emo, t, { at });
const onBody = (q, x, y, t, at) => { const sq = 1 - 0.035 * K.land(t) - 0.14 * K.hit(t, at, 0.22); return [x + (q[0] - x) * (1 + (1 - sq) * 0.7), y + (q[1] - y) * sq]; };
const pop = (t, at, k = 0.35, d = 0.18) => 1 + k * K.hit(t, at, d);
const popped = (c, x, y, k, draw) => { c.save(); c.translate(x, y); c.scale(k, k); draw(); c.restore(); };
const arrow = (c, len, dir, fill) => {                 // a fat flat arrow round (0, 0), dir = -1 up, 1 down
  const w = 70, hw = 124, hl = 112, tip = dir * len / 2, base = -dir * len / 2, neck = tip - dir * hl;
  K.ink(c, K.poly([[-w / 2, base], [w / 2, base], [w / 2, neck], [hw / 2, neck], [0, tip], [-hw / 2, neck], [-w / 2, neck]]), fill);
};
const bulb = (c, r, on) => {                           // the light bulb of the turning point, round (0, 0)
  K.ink(c, K.rrect(-r * 0.4, r * 0.7, r * 0.8, r * 0.62, r * 0.12), '#cfd6dd', 13);
  K.line(c, [[-r * 0.4, r * 1.02], [r * 0.4, r * 1.02]], 9);
  K.ink(c, K.circ(0, 0, r), on ? C.yel : C.white, 14);
  K.line(c, [[-r * 0.34, r * 0.32], [-r * 0.17, -r * 0.1], [0, r * 0.32], [r * 0.17, -r * 0.1], [r * 0.34, r * 0.32]], 10);
};
const bathScale = (c, x, y, str, col, t) => { popped(c, x, y, 1 + 0.03 * K.land(t), () => {
  K.ink(c, K.rrect(-215, -128, 430, 128, 38), C.white);
  K.ink(c, K.rrect(-140, -106, 280, 84, 14), C.ink, 6);
  K.text(c, str, 0, -64, 44, { col, lw: 9, t, seed: 7, boil: 0.02 }); }); };
const phone = (c, w, rank, screen, xp, k, t) => { const h = w * 2, bw = w * 0.64, bx = -bw / 2, by = h * 0.16;
  K.ink(c, K.rrect(-w / 2, -h / 2, w, h, w * 0.16), C.ink, 13);
  K.ink(c, K.rrect(-w / 2 + 22, -h / 2 + 22, w - 44, h - 44, w * 0.1), screen, 10);
  popped(c, 0, -h * 0.12, k, () => K.text(c, rank, 0, 0, w * 0.5, { col: C.white, outline: 12, ocol: C.ink, lw: w * 0.1, t, seed: 5 }));
  const bar = K.rrect(bx, by, bw, 46, 23);
  K.ink(c, bar, C.white, 0); c.save(); c.clip(bar); c.fillStyle = C.green; c.fillRect(bx, by, bw * xp, 46); c.restore(); K.ink(c, bar, null, 10);
  K.text(c, 'XP', 0, h * 0.3, w * 0.12, { col: C.ink, lw: w * 0.025, t, seed: 6 });
};
const YO = () => en()
  ? { h: [0, -400], n: [0, -318], p: [0, -170], e1: [-128, -250], a1: [-74, -186], e2: [112, -308], a2: [192, -322], k1: [-46, -88], f1: [-64, 0], k2: [46, -88], f2: [64, 0], hands: { 1: 'fist', 2: 'fist' } }
  : { h: [0, -392], n: [0, -314], p: [0, -166], e1: [-118, -244], a1: [-70, -182], e2: [102, -302], a2: [178, -316], k1: [-40, -86], f1: [-52, 0], k2: [40, -86], f2: [52, 0], hands: { 1: 'watch', 2: 'fist' } };
const AHA = { brow: [-0.3, -0.3], browY: -0.14, eye: 'wide', lid: 0, look: [0.6, -0.6], mouth: 'smile', tilt: -0.05 };
const RANKS = ['E', 'D', 'C', 'B', 'A', 'S'], SCREENS = [C.white, C.sky, C.lilac, C.pink, C.org, C.yel];
const icon = draw => ({ w: 420, h: 420, draw });
window.COACH_SCENES = {
  hero: { w: 1080, h: 1180, draw(c, t) {
    const L = loop(t, 8), laugh = L.ph < 6;
    K.burst(c, 540, 600, 470, 640, 22, t, 7, 14, C.ink, 1);
    K.ink(c, K.circ(540, 600, 440), C.white, 16);
    K.marks(c, 540, 1130, 190, t, C.ink, 14);
    nar(c, 540, 1130, 2.0, laugh ? 'you' : 'stopwatch', laugh ? 'mocking' : 'smug', t, L.at + (laugh ? 0 : 6 * SPB));
  } },
  yoyo: { w: 1080, h: 1000, still: 1.3 * SPB, draw(c, t) {
    const L = loop(t, 4), down = L.ph < 2, at = L.at + (down ? 0 : 2 * SPB), x = 290, y = 950;
    K.rays(c, 870, 450, 150, 270, 12, t, 17, 40, 11, C.ink, 2);
    popped(c, 870, 450, pop(t, at), () => arrow(c, 380, down ? 1 : -1, down ? C.green : C.red));
    bathScale(c, 880, 950, (down ? '-' : '+') + (en() ? 'LBS' : 'KG'), down ? '#3ddc73' : '#ff5040', t);
    K.marks(c, x, y, 150, t, C.ink, 12);
    const J = nar(c, x, y, 1.7, YO(), down ? 'mocking' : 'disappointed', t, at);
    const [hx, hy] = onBody(J.a2, x, y, t, at), len = 110 + 250 * (0.5 - 0.5 * Math.cos(Math.PI * grid(L.ph) / 2));
    K.line(c, [[hx, hy + 30], [hx, hy + len]], 8);
    K.rays(c, hx, hy + len, 84, 84, 7, t, 19, 22, 9, C.ink, 5);
    K.ink(c, K.circ(hx, hy + len, 58), C.red, 13); K.ink(c, K.circ(hx, hy + len, 21), C.white, 9);
  } },
  lundi: { w: 1080, h: 1000, still: 103 * SPB, draw(c, t) {
    const L = loop(t, 2), n = L.k % 52 + 1;
    K.rays(c, 800, 520, 230, 280, 14, t, 23, 40, 11, C.ink, 2);
    popped(c, 800, 520, pop(t, L.at, 0.12), () => K.calendar(c, 0, 0, 340, L.k % 9, { band: C.red }));
    K.tag(c, (en() ? 'MONDAY ' : 'LUNDI ') + n, 800, 240, 58, t, L.at, { fill: C.yel, rot: -0.06, seed: 31 });
    K.marks(c, 300, 950, 150, t, C.ink, 12);
    nar(c, 300, 950, 1.7, 'point', n % 4 ? 'smug' : 'mocking', t, n % 4 > 1 ? undefined : L.at);
  } },
  declic: { w: 1080, h: 1000, still: 3.3 * SPB, draw(c, t) {
    const L = loop(t, 6), on = L.ph >= 1.6, at = L.at + (on ? 1.6 * SPB : 0);
    if (on) K.rays(c, 850, 300, 180, 180, 16, t, 41, 50, 12, C.ink, 2);
    popped(c, 850, 300, on ? pop(t, at, 0.4, 0.2) : 1, () => bulb(c, 125, on));
    K.marks(c, 420, 950, 150, t, C.ink, 12);
    nar(c, 420, 950, 1.7, on ? 'up' : 'cross', on ? AHA : 'disappointed', t, at);
  } },
  app: { w: 1080, h: 1000, still: 13.3 * SPB, draw(c, t) {
    const L = loop(t, 16), i = Math.min(5, Math.floor(L.ph / 2)), top = i === 5, at = L.at + i * 2 * SPB;
    K.rays(c, 790, 500, 230, 400, top ? 18 : 10, t, 53, top ? 60 : 36, 12, C.ink, 2);
    c.save(); c.translate(790, 500); c.rotate(0.1);
    phone(c, 300, RANKS[i], SCREENS[i], top ? 1 : 0.12 + 0.88 * grid(L.ph - i * 2) / 2, pop(t, at, 0.5, 0.16), t);
    c.restore();
    K.marks(c, 300, 950, 150, t, C.ink, 12);
    nar(c, 300, 950, 1.7, 'thumbsup', top ? 'mocking' : 'approving', t, top ? at : undefined);
  } },
  go: { w: 1080, h: 1000, draw(c, t) {
    const L = loop(t, 8), count = L.ph < 4, at = L.at + (count ? 0 : 4 * SPB);
    K.burst(c, 540, 560, 380, 520, 20, t, 61, 14, C.ink, 1);
    K.ink(c, K.circ(540, 560, 360), C.white, 16);
    K.marks(c, 540, 950, 170, t, C.ink, 13);
    const J = nar(c, 540, 950, 1.7, count ? 'count' : 'you', count ? 'approving' : 'mocking', t, at);
    if (count) K.click(c, J.watch[0], J.watch[1], t, at, 1.2);
  } },
  'icon-six': icon((c, t) => { K.rays(c, 210, 210, 160, 150, 12, t, 81, 30, 10); K.barbell(c, 195, 250, 290, -0.2, C.ink);
    K.tag(c, 'X6', 290, 120, 62, t, -1, { fill: C.red, col: C.white, rot: 0.1, seed: 82 }); }),
  'icon-diet': icon((c, t) => { K.rays(c, 210, 215, 165, 150, 12, t, 83, 30, 10); K.chicken(c, 175, 265, 1.05);
    K.ink(c, K.rrect(262, 190, 36, 110, 12), '#9be08c', 11);
    [[240, 170, 44], [320, 172, 44], [280, 128, 50]].forEach(([x, y, r]) => K.ink(c, K.circ(x, y, r), C.green, 11)); }),
  'icon-monday': icon((c, t) => { K.rays(c, 210, 225, 160, 150, 12, t, 85, 30, 10); K.calendar(c, 210, 225, 230, 3, { band: C.red }); }),
  'icon-train': icon((c, t) => { K.rays(c, 210, 210, 150, 150, 12, t, 71, 30, 10); K.barbell(c, 210, 210, 300, -0.25, C.red); }),
  'icon-food': icon((c, t) => { K.rays(c, 210, 210, 160, 150, 12, t, 72, 30, 10); K.steak(c, 190, 250, 1.15); K.egg(c, 260, 160, 0.85); }),
  'icon-rank': icon((c, t) => { K.rays(c, 210, 220, 160, 150, 12, t, 73, 30, 10); K.crown(c, 210, 300, 250, C.yel, -0.06); }),
  'icon-adjust': icon((c, t) => { K.rays(c, 210, 225, 160, 150, 12, t, 74, 30, 10); K.calendar(c, 210, 225, 230, 5, { band: C.green }); }),
  head: { w: 400, h: 400, draw(c, t) { (en() ? COACH : PROF).head(c, 200, 245, 118, 'mocking', { t }); } },
};
window.RENDER = name => { const S = COACH_SCENES[name], cv = document.getElementById('c');
  cv.width = S.w; cv.height = S.h; const c = cv.getContext('2d'); c.clearRect(0, 0, S.w, S.h); S.draw(c, S.still ?? 1.1); return cv.toDataURL('image/png'); };
window.READY = true;
})();
