(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,76591,e=>{"use strict";var t=e.i(43476),i=e.i(71645),r=e.i(26439),s=e.i(50446);let o="#F5F1EA",n="#F5C13A",a="#DD513A",l="#E8852F",c=n,h="#54B26B",d="#4F86C8",u="#6E72C8",p={E:{tint:u,gold:o,material:"PAPER",xp:250,tiltDeg:6,glare:.25,specular:0,sheen:.5,holo:0,prismatic:0,grain:0,paper:1,glitter:0,depthGlitter:0,edgeGlint:0,parallax:0,starfield:0,rays:0,motes:0,frame:"line",frameSheen:0,pulse:0,idle:0,glow:0},D:{tint:d,gold:o,material:"SATIN",xp:500,tiltDeg:7,glare:.5,specular:.6,sheen:.3,holo:0,prismatic:0,grain:0,paper:.4,glitter:0,depthGlitter:0,edgeGlint:0,parallax:0,starfield:0,rays:0,motes:0,frame:"double",frameSheen:0,pulse:0,idle:0,glow:.15},C:{tint:h,gold:o,material:"BRUSHED METAL",xp:1e3,tiltDeg:8,glare:.55,specular:.7,sheen:.3,holo:0,prismatic:0,grain:0,paper:0,glitter:0,depthGlitter:0,edgeGlint:.3,parallax:6,starfield:.4,rays:0,motes:0,frame:"brushed",frameSheen:1,pulse:0,idle:.2,glow:.25},B:{tint:c,gold:o,material:"CHROME",xp:2e3,tiltDeg:9,glare:.7,specular:1,sheen:.25,holo:0,prismatic:0,grain:0,paper:0,glitter:0,depthGlitter:0,edgeGlint:.5,parallax:8,starfield:.5,rays:0,motes:.3,frame:"chrome",frameSheen:1,pulse:1,idle:.3,glow:.3},A:{tint:l,gold:n,material:"HOLOGRAPHIC",xp:4e3,tiltDeg:10,glare:.8,specular:1,sheen:.2,holo:.8,prismatic:.35,grain:0,paper:0,glitter:.6,depthGlitter:0,edgeGlint:.7,parallax:11,starfield:.7,rays:.5,motes:.6,frame:"foil",frameSheen:0,pulse:0,idle:.6,glow:.5},S:{tint:a,gold:n,material:"PRISMATIC",xp:8e3,tiltDeg:12,glare:1,specular:1,sheen:.2,holo:1,prismatic:.85,grain:1,paper:0,glitter:.7,depthGlitter:1,edgeGlint:1,parallax:16,starfield:1,rays:1,motes:1,frame:"energy",frameSheen:0,pulse:0,idle:1,glow:.9}},m=250,f=350,v=50,g=77,y=50,x=22,w=15,b=80,S=180,E=14,R=145,C=275,T=50,_=10,A=`
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,M=`
precision highp float;

uniform vec2 uRes;
uniform float uScale;
uniform vec4 rect;
uniform vec4 winRect;
uniform vec4 plateRect;
uniform vec2 canvas;
uniform float corner;
uniform float winCorner;
uniform float plateCorner;
uniform float artSize;
uniform vec2 tilt;
uniform float time;
uniform vec3 tint;
uniform vec3 gold;
uniform vec3 base;
uniform vec3 bone;
uniform float glare;
uniform float specular;
uniform float sheen;
uniform float holo;
uniform float prismatic;
uniform float grain;
uniform float paper;
uniform float glitter;
uniform float depthGlitter;
uniform float parallax;
uniform float starfield;
uniform float rays;
uniform float motes;
uniform float idle;
uniform float ignite;
uniform float frameLine;
uniform float frameDouble;
uniform float frameBrushed;
uniform float frameChrome;
uniform float frameSheen;
uniform float frameFoil;
uniform float frameEnergy;
uniform float edgeGlint;
uniform float glow;
uniform float leak;
uniform sampler2D art;
uniform float artReady;

const float TAU = 6.2831853;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

// Same value noise, periodic on x, so a pattern laid around an angle closes.
float noiseWrap(vec2 p, float period) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x0 = mod(i.x, period);
  float x1 = mod(i.x + 1.0, period);
  float a = hash(vec2(x0, i.y));
  float b = hash(vec2(x1, i.y));
  float c = hash(vec2(x0, i.y + 1.0));
  float d = hash(vec2(x1, i.y + 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 3; i++) {
    v += a * noise(p);
    p = p * 2.03 + vec2(1.7, 9.2);
    a *= 0.5;
  }
  return v;
}

vec4 layer(vec4 dst, vec3 c, float a) {
  float k = clamp(a, 0.0, 1.0);
  return vec4(c * k + dst.rgb * (1.0 - k), k + dst.a * (1.0 - k));
}

float sdRound(vec2 xy, vec4 r, float rad) {
  vec2 c = (r.xy + r.zw) * 0.5;
  vec2 h = (r.zw - r.xy) * 0.5;
  vec2 q = abs(xy - c) - (h - vec2(rad));
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - rad;
}

float sdCard(vec2 xy) {
  return sdRound(xy, rect, corner);
}

vec3 face(vec2 xy, vec4 r, float par, float star, float ray, float mote, float pap, vec2 artCenter) {
  vec2 size = r.zw - r.xy;
  vec2 uv = (xy - r.xy) / size;
  vec2 shift = vec2(tilt.y, -tilt.x);

  vec3 voidCol = vec3(0.035, 0.04, 0.05);
  vec3 col = mix(voidCol, tint * 0.26, (1.0 - uv.y) * 0.55 + 0.12);
  vec2 c = uv - 0.5;
  col *= 1.0 - 0.55 * dot(c, c);

  if (pap > 0.0) {
    vec2 pp = xy - r.xy;
    float fibre = noise(pp * vec2(0.9, 0.25)) - 0.5;
    float tooth = fbm(pp * 0.06) - 0.5;
    col *= 1.0 + pap * (fibre * 0.16 + tooth * 0.22);
  }

  if (star > 0.0) {
    vec2 sp = (xy - r.xy) - shift * par * 0.35;
    vec2 cell = floor(sp / 7.0);
    vec2 f = fract(sp / 7.0) - 0.5;
    float h = hash(cell);
    float s = step(0.975, h) * (1.0 - smoothstep(0.05, 0.16, length(f + (vec2(hash(cell + 4.1), hash(cell + 8.3)) - 0.5) * 0.5)));
    s *= 0.5 + 0.5 * sin(time * (1.5 + h * 3.0) + h * 40.0);
    col += mix(vec3(1.0), tint, 0.3) * s * star;
  }

  if (ray > 0.0) {
    vec2 d = xy - artCenter - shift * par * 0.6;
    float a = atan(d.y, d.x);
    float rr = length(d);
    float beam = pow(noiseWrap(vec2((a / TAU + 0.5) * 32.0 + time * 0.08, time * 0.15), 32.0), 3.0) * exp(-rr / (size.x * 0.55));
    col += tint * beam * ray * 1.4;
  }

  if (mote > 0.0) {
    vec2 mp = vec2(xy.x - r.x, xy.y - r.y + time * 14.0) - shift * par * 0.9;
    vec2 mc = floor(mp / 22.0);
    vec2 mf = fract(mp / 22.0) - 0.5;
    float mh = hash(mc + 17.0);
    float m = step(0.86, mh) * (1.0 - smoothstep(0.03, 0.09, length(mf + (vec2(hash(mc + 2.2), hash(mc + 5.7)) - 0.5) * 0.6)));
    col += mix(tint, vec3(1.0), 0.5) * m * mote * (0.5 + 0.5 * sin(time * 2.0 + mh * 30.0));
  }

  return col;
}

float sparkle(vec2 px, float cellPx, float density, vec2 light, float seed) {
  vec2 cell = floor(px / cellPx);
  vec2 f = fract(px / cellPx) - 0.5;
  float h = hash(cell + seed);
  float on = step(1.0 - density, h);
  vec2 n = vec2(hash(cell + seed + 3.3), hash(cell + seed + 7.1)) * 2.0 - 1.0;
  float facing = pow(max(0.0, 1.0 - length(n - light) * 1.6), 6.0);
  float dotShape = 1.0 - smoothstep(0.04, 0.2, length(f));
  float rays4 = (1.0 - smoothstep(0.0, 0.05, abs(f.x))) * (1.0 - smoothstep(0.1, 0.45, abs(f.y)))
    + (1.0 - smoothstep(0.0, 0.05, abs(f.y))) * (1.0 - smoothstep(0.1, 0.45, abs(f.x)));
  return on * facing * (dotShape + rays4 * 0.6 * facing);
}

vec3 foil(vec2 xy) {
  vec2 size = rect.zw - rect.xy;
  vec2 uv = (xy - rect.xy) / size;
  float aspect = size.y / size.x;
  vec2 light = vec2(tilt.y, -tilt.x);
  float tiltMag = clamp(length(tilt), 0.0, 1.0);
  float view = 0.35 + 0.65 * clamp(tiltMag * 1.5 + 0.15, 0.0, 1.0);

  vec2 lightUV = 0.5 + light * 0.55;
  vec2 gv = (uv - lightUV) * vec2(1.0, aspect);
  float gd = dot(gv, gv);
  float diffuse = exp(-gd / mix(0.16, 0.08, specular));
  float core = exp(-gd / mix(0.02, 0.005, specular));
  vec3 col = vec3(1.0) * glare * (mix(0.3, 0.18, specular) * diffuse + 0.5 * specular * core);
  col += mix(tint, vec3(1.0), 0.6) * sheen * 0.12 * exp(-gd / 0.3);

  vec2 p = (uv - 0.5) * vec2(1.0, aspect);
  float phase = dot(p, vec2(0.8, 0.6)) * 2.6 + light.x * 1.6 + light.y * 1.1 + time * 0.03 * idle;
  vec3 spectrum = 0.5 + 0.5 * cos(TAU * (phase + vec3(0.0, 0.33, 0.67)));
  vec3 anchored = mix(tint, gold, 0.5 + 0.5 * sin(phase * TAU));
  vec3 holoCol = mix(anchored, spectrum, prismatic);
  float band = 0.5 + 0.5 * sin(phase * TAU * 2.0);
  col += holoCol * holo * band * view * 0.34;

  if (grain > 0.0) {
    vec2 gc = p - light * 0.18;
    float ga = atan(gc.y, gc.x);
    float lines = pow(abs(sin(ga * 120.0)), 14.0);
    float lightAng = atan(light.y, light.x + 0.0001);
    float rake = pow(abs(cos(ga - lightAng)), 6.0);
    col += mix(gold, holoCol, 0.5) * grain * lines * rake * view * 0.4;
  }

  vec2 px = xy - rect.xy;
  if (glitter > 0.0) {
    col += vec3(1.0) * glitter * sparkle(px, 6.0, 0.22, light * 1.2, 1.0) * 0.9;
  }
  if (depthGlitter > 0.0) {
    vec2 deep = px - light * parallax * 1.3;
    col += mix(vec3(1.0), gold, 0.3) * depthGlitter * sparkle(deep, 10.0, 0.18, light, 11.0);
  }

  float diag = uv.x * 0.55 + (1.0 - uv.y) * 0.45;
  float frontAt = ignite * 1.3 - 0.15;
  float lit = smoothstep(diag - 0.06, diag, frontAt);
  float live = step(0.001, ignite) * (1.0 - step(0.999, ignite));
  float frontLine = exp(-abs(diag - frontAt) * 45.0) * live;
  return col * lit + mix(vec3(1.0), gold, 0.3) * frontLine * 0.9;
}

vec3 cardFace(vec2 xy, vec4 artTexel) {
  vec2 light = vec2(tilt.y, -tilt.x);
  vec2 artCenter = (winRect.xy + winRect.zw) * 0.5;
  vec2 shadowOff = vec2(-tilt.y * 6.0, tilt.x * 6.0 + 3.0);

  vec3 col = face(xy, rect, 0.0, 0.0, 0.0, 0.0, paper, artCenter);

  float dWin = sdRound(xy, winRect, winCorner);
  float dPlate = sdRound(xy, plateRect, plateCorner);
  float stock = smoothstep(-0.5, 0.5, dWin) * smoothstep(-0.5, 0.5, dPlate);
  col += foil(xy) * stock;

  // The art window, recessed: the deep field, the art, the shadow its rim casts.
  float inWin = 1.0 - smoothstep(-0.5, 0.5, dWin);
  if (inWin > 0.0) {
    vec3 w = face(xy, winRect, parallax, max(0.35, starfield), rays, motes, 0.0, artCenter);
    w = artTexel.rgb + w * (1.0 - artTexel.a);
    vec4 sr = vec4(winRect.x - 10.0, winRect.y - 14.0, winRect.z + 10.0, winRect.w) + shadowOff.xyxy;
    float ds = abs(sdRound(xy, sr, winCorner + 6.0));
    w = mix(w, base, 0.85 * (1.0 - smoothstep(2.0, 18.0, ds)));
    col = mix(col, w, inWin);
  }
  col = mix(col, base, 0.9 * (1.0 - smoothstep(0.5, 1.5, abs(dWin))));
  float rimLight = (1.0 - smoothstep(0.0, 1.0, abs(dWin - 1.0))) * clamp((xy.y - winRect.y) / (winRect.w - winRect.y), 0.0, 1.0);
  col = mix(col, bone, 0.35 * rimLight);

  // The title plate, raised: its shadow on the card, dark metal, a sheen
  // that slides with the light, a lit bevel.
  vec2 pxy = xy - light * parallax * 0.3;
  vec2 pSize = plateRect.zw - plateRect.xy;
  float dShadow = sdRound(pxy - shadowOff - vec2(0.0, 2.0), plateRect, plateCorner);
  col = mix(col, vec3(0.0), 0.65 * (1.0 - smoothstep(-8.0, 9.0, dShadow)));
  float dP = sdRound(pxy, plateRect, plateCorner);
  float inPlate = 1.0 - smoothstep(-0.5, 0.5, dP);
  if (inPlate > 0.0) {
    float v = clamp((pxy.y - plateRect.y) / pSize.y, 0.0, 1.0);
    vec3 pc = mix(mix(base, tint, 0.28), base, v);
    vec2 a = vec2(plateRect.x + pSize.x * (0.15 + tilt.y * 0.7), plateRect.y);
    vec2 ab = vec2(pSize.x * 0.7, pSize.y);
    float t = dot(pxy - a, ab) / dot(ab, ab);
    pc = mix(pc, bone, 0.16 * clamp(1.0 - abs(t * 2.0 - 1.0), 0.0, 1.0));
    float edge = 1.0 - smoothstep(0.0, 1.0, abs(dP + 1.0));
    pc = mix(pc, bone, edge * 0.45 * clamp(1.0 - v * 2.0, 0.0, 1.0));
    pc = mix(pc, vec3(0.0), edge * 0.6 * clamp(v * 2.0 - 1.0, 0.0, 1.0));
    col = mix(col, pc, inPlate);
  }
  return col;
}

vec4 aura(vec4 acc, vec2 xy, float d) {
  vec2 size = rect.zw - rect.xy;
  vec2 c = (rect.xy + rect.zw) * 0.5;
  float outside = max(d, 0.0);
  vec2 light = vec2(tilt.y, -tilt.x);
  float tiltMag = clamp(length(tilt), 0.0, 1.0);
  vec2 rel = (xy - c) / size;
  float u = atan(rel.y, rel.x) / TAU + 0.5;

  float room = min(min(rect.x, canvas.x - rect.z), min(rect.y, canvas.y - rect.w));
  float tail = 1.0 - smoothstep(room * 0.35, room * 0.95, outside);
  float edgeFade = smoothstep(0.0, room * 0.5, xy.x) * smoothstep(0.0, room * 0.5, canvas.x - xy.x)
    * smoothstep(0.0, room * 0.5, xy.y) * smoothstep(0.0, room * 0.5, canvas.y - xy.y);
  float fade = tail * edgeFade;

  float glowA = exp(-outside / (size.x * 0.09)) * step(0.0, d) * glow * ignite * 0.55 * fade;
  acc = layer(acc, mix(tint, gold, 0.35), glowA);

  float line1 = 1.0 - smoothstep(0.5, 1.3, abs(d + 4.0));
  float line2 = 1.0 - smoothstep(0.5, 1.3, abs(d + 8.0));
  acc = layer(acc, tint, line1 * max(frameLine, frameDouble) * 0.9);
  acc = layer(acc, tint, line2 * frameDouble * 0.6);

  float metal = smoothstep(-11.0, -9.5, d) * (1.0 - smoothstep(-0.5, 0.5, d));
  vec2 cuv = (xy - rect.xy) / size;
  float sweep = fract(time / 6.0) * 2.2 - 0.6;
  float sweepD = cuv.x * 0.6 + cuv.y * 0.4 - sweep;
  float sheenBand = exp(-sweepD * sweepD / 0.004) * frameSheen;

  if (frameBrushed > 0.0 && metal > 0.0) {
    float streak = noise(vec2(xy.x * 0.04, xy.y * 1.6)) * 0.6 + noise(vec2(xy.x * 0.012, xy.y * 3.1)) * 0.4;
    float anisoD = cuv.x - (0.5 + light.x * 0.8);
    float aniso = exp(-anisoD * anisoD / 0.03);
    vec3 steel = mix(vec3(0.34, 0.36, 0.38), tint, 0.3);
    vec3 metalCol = steel * (0.55 + 0.45 * streak) + vec3(1.0) * aniso * (0.25 + 0.5 * streak) * (0.4 + 0.6 * tiltMag);
    float groove = 1.0 - smoothstep(0.3, 0.9, abs(d + 5.5));
    float lip = 1.0 - smoothstep(0.3, 0.9, abs(d + 4.5));
    metalCol = metalCol * (1.0 - groove * 0.7) + vec3(1.0) * lip * 0.18;
    vec2 inner = rect.xy + vec2(corner);
    vec2 outer = rect.zw - vec2(corner);
    vec2 k = clamp(xy, inner, outer);
    vec2 off = xy - k;
    float inCorner = step(0.5, abs(off.x)) * step(0.5, abs(off.y));
    vec2 o = abs(off - sign(off) * 0.7071 * (corner - 5.5));
    float diamond = (1.0 - smoothstep(3.2, 4.2, o.x + o.y)) * inCorner;
    float rim = (1.0 - smoothstep(0.4, 1.0, abs(o.x + o.y - 3.7))) * inCorner;
    metalCol = mix(metalCol, mix(tint, vec3(1.0), 0.5), diamond * 0.8);
    metalCol *= 1.0 - rim * 0.5;
    metalCol += mix(tint, vec3(1.0), 0.6) * sheenBand * 0.9;
    acc = layer(acc, metalCol, metal * frameBrushed);
  }

  if (frameChrome > 0.0 && metal > 0.0) {
    float envPhase = dot(rel, vec2(0.7, 0.9)) * 2.4 + light.x * 1.1 + light.y * 0.8;
    float env = smoothstep(0.42, 0.5, fract(envPhase)) * (1.0 - smoothstep(0.78, 0.86, fract(envPhase)));
    vec3 dark = mix(vec3(0.05, 0.05, 0.06), tint * 0.3, 0.5);
    vec3 bright = mix(vec3(1.0), mix(tint, gold, 0.5), 0.35);
    vec3 metalCol = mix(dark, bright, env * 0.85 + 0.1);
    vec2 grad = vec2(sdCard(xy + vec2(1.0, 0.0)) - sdCard(xy - vec2(1.0, 0.0)), sdCard(xy + vec2(0.0, 1.0)) - sdCard(xy - vec2(0.0, 1.0)));
    vec2 nrm = normalize(grad + vec2(0.00001));
    float facing = dot(nrm, normalize(vec2(-0.5, -0.8) + light * 0.8));
    float t = clamp((d + 10.0) / 10.0, 0.0, 1.0);
    float bevel = (t > 0.5 ? facing : -facing) * (1.0 - smoothstep(0.0, 0.5, abs(t - 0.5)) * 0.4);
    metalCol *= 0.75 + 0.45 * bevel;
    float seam = 1.0 - smoothstep(0.2, 0.8, abs(d + 5.0));
    metalCol = mix(metalCol, dark, seam * 0.6);
    metalCol += vec3(1.0) * sheenBand;
    acc = layer(acc, metalCol, metal * frameChrome);
  }

  if (frameFoil > 0.0) {
    float band = smoothstep(-8.0, -6.5, d) * (1.0 - smoothstep(-0.5, 0.5, d));
    float phase = u * 3.0 + light.x * 0.9 - light.y * 0.7;
    vec3 spectrum = 0.5 + 0.5 * cos(TAU * (phase + vec3(0.0, 0.33, 0.67)));
    vec3 foilCol = mix(mix(tint, gold, 0.5 + 0.5 * sin(phase * 12.0)), spectrum, 0.4);
    acc = layer(acc, foilCol * (0.75 + 0.5 * tiltMag), band * frameFoil);
  }

  if (frameEnergy > 0.0 && d > -12.0 && d < 36.0) {
    float n = fbm(vec2(u * 26.0 - time * 1.6, d * 0.35 + time * 0.6));
    float ridge = pow(1.0 - abs(n * 2.0 - 1.0), 4.0);
    vec3 energyCol = mix(tint, gold, smoothstep(0.35, 0.75, n)) + vec3(1.0) * ridge * 0.6;
    float energyBand = smoothstep(-10.0, -8.0, d) * (1.0 - smoothstep(-0.5, 1.0, d));
    acc = layer(acc, energyCol, energyBand * (0.65 + 0.35 * n) * frameEnergy);
    acc = layer(acc, mix(tint, gold, 0.5), exp(-outside / 7.0) * step(0.0, d) * frameEnergy * (0.4 + 0.4 * ridge) * fade);
  }

  if (edgeGlint > 0.0 && abs(d) < 8.0) {
    vec2 grad = vec2(sdCard(xy + vec2(1.0, 0.0)) - sdCard(xy - vec2(1.0, 0.0)), sdCard(xy + vec2(0.0, 1.0)) - sdCard(xy - vec2(0.0, 1.0)));
    vec2 nrm = normalize(grad + vec2(0.00001));
    float facing = pow(max(dot(nrm, normalize(light + vec2(0.00001))), 0.0), 10.0);
    acc = layer(acc, vec3(1.0), facing * exp(-abs(d) / 1.6) * edgeGlint * tiltMag);
  }

  if (leak > 0.0) {
    float flick = 0.6 + 0.4 * noise(vec2(u * 14.0, time * 9.0));
    float leakA = exp(-abs(d) / (2.0 + leak * 14.0)) * leak * flick * fade;
    acc = layer(acc, mix(gold, vec3(1.0), 0.4), leakA);
  }

  return acc;
}

void main() {
  vec2 xy = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y) / uScale;
  float d = sdCard(xy);
  vec4 acc = vec4(0.0);
  // Sampled outside every branch: a mipmapped lookup needs its derivatives.
  vec2 artCenter = (winRect.xy + winRect.zw) * 0.5;
  vec2 auv = (xy - vec2(tilt.y, -tilt.x) * parallax * 0.55 - (artCenter - vec2(artSize * 0.5))) / artSize;
  vec2 artIn = step(vec2(0.0), auv) * step(auv, vec2(1.0));
  vec4 artTexel = texture2D(art, clamp(auv, 0.0, 1.0)) * artIn.x * artIn.y * artReady;
  float aa = 0.5 / uScale + 0.35;
  float inside = 1.0 - smoothstep(-aa, aa, d);
  if (inside > 0.0) {
    acc = vec4(cardFace(xy, artTexel), 1.0) * inside;
  }
  gl_FragColor = aura(acc, xy, d);
}
`,k=m+2*v,L=f+g+y;function N(e){let t=Number.parseInt(e.slice(1),16);return[(t>>16&255)/255,(t>>8&255)/255,(255&t)/255]}function P(e){return e<-1?-1:e>1?1:e}function D(e,t,i){let r=e.createShader(t);return r?(e.shaderSource(r,i),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS))?r:(e.deleteShader(r),null):null}class z{canvas;style;onPose;gl=null;program=null;uniforms=new Map;texture=null;artReady=!1;lost=!1;clock=0;springX=0;springY=0;velX=0;velY=0;pointer=null;drag=null;revealAt=-1;angle=0;ignite=1;still=!1;ok;constructor({canvas:e,grade:t,artUrl:i,onPose:r}){this.canvas=e,this.style=p[t],this.onPose=r,this.ok=this.setup(),this.ok&&this.loadArt(i),e.addEventListener("webglcontextlost",this.onLost),e.addEventListener("webglcontextrestored",this.onRestored)}onLost=e=>{e.preventDefault(),this.lost=!0};onRestored=()=>{this.lost=!1,this.artReady=!1,this.setup()&&this.image?.complete&&this.upload(this.image)};image=null;pendingArt="";setup(){let e={alpha:!0,antialias:!1,premultipliedAlpha:!0},t=this.canvas.getContext("webgl2",e)??this.canvas.getContext("webgl",e);if(!t)return!1;let i=D(t,t.VERTEX_SHADER,A),r=D(t,t.FRAGMENT_SHADER,M),s=t.createProgram();if(!i||!r||!s||(t.attachShader(s,i),t.attachShader(s,r),t.bindAttribLocation(s,0,"position"),t.linkProgram(s),!t.getProgramParameter(s,t.LINK_STATUS)))return!1;t.useProgram(s);let o=t.createBuffer();return t.bindBuffer(t.ARRAY_BUFFER,o),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),this.gl=t,this.program=s,this.uniforms.clear(),this.texture=t.createTexture(),t.bindTexture(t.TEXTURE_2D,this.texture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array(4)),this.setStatics(),!0}loc(e){return this.gl&&this.program?(this.uniforms.has(e)||this.uniforms.set(e,this.gl.getUniformLocation(this.program,e)),this.uniforms.get(e)??null):null}set1(e,t){this.gl?.uniform1f(this.loc(e),t)}set3(e,t){this.gl?.uniform3f(this.loc(e),t[0],t[1],t[2])}setStatics(){let e=this.gl;if(!e)return;let t=this.style,i=v,r=g;e.uniform4f(this.loc("rect"),i,r,i+m,r+f),e.uniform4f(this.loc("winRect"),i+w,r+b,i+m-w,r+b+S),e.uniform4f(this.loc("plateRect"),i+w,r+C,i+m-w,r+C+T),e.uniform2f(this.loc("canvas"),k,L),this.set1("corner",x),this.set1("winCorner",E),this.set1("plateCorner",_),this.set1("artSize",R),this.set3("tint",N(t.tint)),this.set3("gold",N(t.gold)),this.set3("base",N("#08090B")),this.set3("bone",N(o)),this.set1("glare",t.glare),this.set1("specular",t.specular),this.set1("sheen",t.sheen),this.set1("holo",t.holo),this.set1("prismatic",t.prismatic),this.set1("grain",t.grain),this.set1("paper",t.paper),this.set1("glitter",t.glitter),this.set1("depthGlitter",t.depthGlitter),this.set1("parallax",t.parallax),this.set1("starfield",t.starfield),this.set1("rays",t.rays),this.set1("motes",t.motes),this.set1("idle",t.idle),this.set1("frameLine",+("line"===t.frame)),this.set1("frameDouble",+("double"===t.frame)),this.set1("frameBrushed",+("brushed"===t.frame)),this.set1("frameChrome",+("chrome"===t.frame)),this.set1("frameFoil",+("foil"===t.frame)),this.set1("frameEnergy",+("energy"===t.frame)),this.set1("frameSheen",t.frameSheen),this.set1("edgeGlint",t.edgeGlint),this.set1("glow",t.glow),this.set1("leak",0),e.uniform1i(this.loc("art"),0)}showCard(e,t){(this.style=p[e],this.artReady=!1,this.setStatics(),this.loadArt(t),this.springX=0,this.springY=0,this.velX=0,this.velY=0,this.still)?this.draw():(this.revealAt=0,this.angle=180,this.ignite=0)}loadArt(e){let t=new Image;t.decoding="async",t.onload=()=>{this.image&&this.pendingArt===e&&(this.image=t,this.upload(t),this.still&&this.draw())},this.pendingArt=e,this.image=t,t.src=e}upload(e){let t=this.gl;if(!t||this.lost)return;t.bindTexture(t.TEXTURE_2D,this.texture),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR);let i="u">typeof WebGL2RenderingContext&&t instanceof WebGL2RenderingContext;i&&t.generateMipmap(t.TEXTURE_2D),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,i?t.LINEAR_MIPMAP_LINEAR:t.LINEAR),this.artReady=!0}setPointer(e){this.pointer=e}setDrag(e){this.drag=e}setStill(e){this.still=e,e&&(this.angle=0,this.ignite=1,this.revealAt=-1,this.clock=2e3,this.draw())}resize(){let e=Math.min(window.devicePixelRatio||1,2),t=Math.max(1,Math.round(this.canvas.clientWidth*e)),i=Math.max(1,Math.round(this.canvas.clientHeight*e));(this.canvas.width!==t||this.canvas.height!==i)&&(this.canvas.width=t,this.canvas.height=i),this.still&&this.draw()}frame(e){if(this.still)return;let t=Math.min(e,34);this.clock+=t;let i=0,r=0;if(this.drag)r=P(this.drag[0]/110),i=P(-this.drag[1]/110);else if(this.pointer)r=this.pointer[0],i=-this.pointer[1];else{let e=s.experience.compact?.7:.3;r=P(s.experience.pointer.x*e),i=P(-s.experience.pointer.y*e-.22*s.experience.velocity)}let o=t/1e3,n=(120*(i-this.springX)-11*this.velX)/.7,a=(120*(r-this.springY)-11*this.velY)/.7;if(this.velX+=n*o,this.velY+=a*o,this.springX+=this.velX*o,this.springY+=this.velY*o,this.revealAt>=0){this.revealAt+=t;let e=Math.min(1,this.revealAt/720);this.angle=180*(1-e)**3,this.ignite=Math.min(1,Math.max(0,(this.revealAt-380)/900)),e>=1&&this.ignite>=1&&(this.revealAt=-1)}this.draw()}draw(){let e=this.gl,t=.2,i=-.26;if(!this.still){let e=Math.max(this.style.idle,.35),r=this.pointer||this.drag?.35:1;t=P(this.springX+.14*Math.sin(this.clock/2300*2*Math.PI)*e*r),i=P(this.springY+.14*Math.cos(this.clock/1700*2*Math.PI)*e*r)}this.onPose({tiltX:t,tiltY:i,angle:this.angle,tiltDeg:this.style.tiltDeg,parallax:this.style.parallax}),e&&!this.lost&&(e.viewport(0,0,this.canvas.width,this.canvas.height),e.uniform2f(this.loc("uRes"),this.canvas.width,this.canvas.height),this.set1("uScale",this.canvas.width/k),e.uniform2f(this.loc("tilt"),t,i),this.set1("time",this.clock/1e3),this.set1("ignite",this.ignite),this.set1("artReady",+!!this.artReady),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.texture),e.drawArrays(e.TRIANGLES,0,3))}dispose(){this.canvas.removeEventListener("webglcontextlost",this.onLost),this.canvas.removeEventListener("webglcontextrestored",this.onRestored),j.delete(this),this.gl=null}}let j=new Set,q=0,O=0;function I(e){let t=O?e-O:16;O=e,j.forEach(e=>e.frame(t)),q=j.size>0&&!document.hidden?requestAnimationFrame(I):0}function F(){q||0===j.size||document.hidden||(O=0,q=requestAnimationFrame(I))}let W=!1,U=100/m,H=e=>`/art/card-${e}.webp`;function X({card:e,live:s,reducedMotion:o,mode:n,revealToken:a=0,onOpen:l}){let c=(0,i.useRef)(null),h=(0,i.useRef)(null),d=(0,i.useRef)(null),u=(0,i.useRef)(null),m=(0,i.useRef)(null),f=(0,i.useRef)(null),v=(0,i.useRef)(e),g=(0,i.useRef)({id:-1,x:0,y:0,moved:!1,armed:!1,timer:0});(0,i.useEffect)(()=>{let e=d.current;if(!e)return;let t=new z({canvas:e,grade:v.current.grade,artUrl:H(v.current.id),onPose:e=>{let t=1.6*e.tiltDeg;h.current&&(h.current.style.transform=`perspective(357cqw) rotateX(${(e.tiltX*t).toFixed(2)}deg) rotateY(${(e.angle+e.tiltY*t).toFixed(2)}deg)`);let i=e.tiltY*e.parallax*U,r=-e.tiltX*e.parallax*U;u.current&&(u.current.style.transform=`translate(${(.6*i).toFixed(2)}cqw, ${(.6*r).toFixed(2)}cqw)`),m.current&&(m.current.style.transform=`translate(${(.3*i).toFixed(2)}cqw, ${(.3*r).toFixed(2)}cqw)`)}});f.current=t,t.ok||c.current?.setAttribute("data-gl","off"),t.resize();let i=new ResizeObserver(()=>t.resize());return i.observe(e),()=>{i.disconnect(),t.dispose(),f.current=null}},[]),(0,i.useEffect)(()=>{let e=f.current;if(e&&(e.setStill(o),!o&&s))return W||(W=!0,document.addEventListener("visibilitychange",F)),j.add(e),F(),()=>{j.delete(e)}},[s,o]),(0,i.useEffect)(()=>{(0!==a||v.current.id!==e.id)&&(v.current=e,f.current?.showCard(e.grade,H(e.id)))},[e,a]),(0,i.useEffect)(()=>{let e=m.current,t=c.current;if(!e||!t)return;let i=()=>{e.style.setProperty("--fit","1");let i=e.offsetWidth/(.79*t.clientWidth);e.style.setProperty("--fit",i>1?(1/i).toFixed(3):"1")};i(),document.fonts.ready.then(i).catch(()=>{});let r=new ResizeObserver(i);return r.observe(t),()=>r.disconnect()},[e.title]),(0,i.useEffect)(()=>{let e=c.current;if(!e)return;let t=e=>{g.current.armed&&e.cancelable&&e.preventDefault()};return e.addEventListener("touchmove",t,{passive:!1}),()=>e.removeEventListener("touchmove",t)},[]);let y=()=>{let e=g.current;window.clearTimeout(e.timer),e.id=-1,e.armed=!1,f.current?.setDrag(null),c.current?.removeAttribute("data-held")},x={"--c":p[e.grade].tint},w=(0,t.jsxs)("span",{ref:h,className:"iq-acard__tilt",children:[(0,t.jsxs)("span",{className:"iq-acard__back","aria-hidden":"true",children:[(0,t.jsx)("i",{}),(0,t.jsx)("b",{children:"IRONQUEST"})]}),(0,t.jsxs)("span",{className:"iq-acard__front","aria-hidden":"true",children:[(0,t.jsx)("canvas",{ref:d,className:"iq-acard__canvas"}),(0,t.jsx)("img",{className:"iq-acard__fallback",src:H(e.id),alt:"",width:520,height:520,loading:"lazy"}),(0,t.jsxs)("span",{className:"iq-acard__eyebrow",children:[r.CARDS.cardEyebrow[0],(0,t.jsx)("br",{}),r.CARDS.cardEyebrow[1]]}),(0,t.jsxs)("span",{ref:u,className:"iq-acard__grade",children:[(0,t.jsx)("strong",{children:e.grade}),(0,t.jsx)("span",{children:r.CARDS.gradeLabel})]}),(0,t.jsx)("span",{className:"iq-acard__plate",children:(0,t.jsx)("span",{ref:m,className:"iq-acard__title",children:e.title})})]})]}),b={onPointerDown:e=>{if("mouse"===e.pointerType)return;let t=g.current;window.clearTimeout(t.timer),t.id=e.pointerId,t.x=e.clientX,t.y=e.clientY,t.moved=!1;let i="hand"===n&&window.matchMedia("(max-width: 767.98px)").matches;t.armed=!i,i&&(t.timer=window.setTimeout(()=>{-1===t.id||t.moved||(t.armed=!0,c.current?.setAttribute("data-held","true"))},200))},onPointerMove:e=>{if(o)return;if("mouse"===e.pointerType){let t=e.currentTarget.getBoundingClientRect(),i=(e.clientX-t.left)/t.width*2-1,r=(e.clientY-t.top)/t.height*2-1;f.current?.setPointer([Math.max(-1,Math.min(1,i)),Math.max(-1,Math.min(1,r))]);return}let t=g.current;if(t.id!==e.pointerId)return;let i=e.clientX-t.x,r=e.clientY-t.y;Math.abs(i)+Math.abs(r)>6&&(t.moved=!0),t.armed&&t.moved&&f.current?.setDrag([i,r])},onPointerLeave:e=>{"mouse"===e.pointerType&&f.current?.setPointer(null)},onPointerUp:y,onPointerCancel:y};return"focus"===n?(0,t.jsx)("div",{ref:e=>{c.current=e},className:"iq-acard iq-acard--focus",style:x,...b,children:w}):(0,t.jsx)("button",{ref:e=>{c.current=e},type:"button",className:"iq-acard",style:x,"aria-haspopup":"dialog","aria-label":`${e.title}, ${r.CARDS.gradeLabel.toLowerCase()} ${e.grade}. ${r.CARDS.open}.`,onClick:e=>{let t=g.current.moved&&e.detail>0;g.current.moved=!1,t||l?.()},...b,children:w})}let B=new Intl.NumberFormat("en-US");function Y({cards:e,index:s,open:o,revealToken:n,reducedMotion:a,onChange:l,onClose:c}){let h=(0,i.useRef)(null),d=e[s],u=p[d.grade];(0,i.useEffect)(()=>{let e=h.current;if(!e)return;if(!o){e.open&&e.close();return}e.open||e.showModal();let t=document.documentElement,i=window.innerWidth-t.clientWidth;return t.style.overflow="hidden",t.style.paddingRight=`${i}px`,()=>{t.style.overflow="",t.style.paddingRight=""}},[o]);let m=t=>l((s+t+e.length)%e.length);return(0,t.jsx)("dialog",{ref:h,className:"iq-cardfocus","aria-labelledby":"iq-cardfocus-title",onClose:c,onClick:e=>{e.target===e.currentTarget&&c()},onKeyDown:e=>{"ArrowLeft"===e.key&&m(-1),"ArrowRight"===e.key&&m(1)},children:(0,t.jsxs)("div",{className:"iq-cardfocus__inner",children:[(0,t.jsx)("div",{className:"iq-cardfocus__stage",children:(0,t.jsx)(X,{card:d,live:o,reducedMotion:a,mode:"focus",revealToken:n})}),(0,t.jsxs)("div",{className:"iq-cardfocus__copy","aria-live":"polite",children:[(0,t.jsx)("p",{className:"iq-label",style:{color:u.tint},children:`${r.CARDS.gradeLabel} ${d.grade} \xb7 ${u.material} \xb7 ${B.format(u.xp)} XP`}),(0,t.jsx)("h3",{id:"iq-cardfocus-title",className:"iq-cardfocus__title",children:d.title}),(0,t.jsx)("p",{className:"iq-body",children:d.criterion})]}),(0,t.jsxs)("div",{className:"iq-cardfocus__nav",children:[(0,t.jsx)("button",{type:"button","aria-label":r.CARDS.previous,onClick:()=>m(-1),children:(0,t.jsx)("svg",{viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M15 5l-7 7 7 7",fill:"none",stroke:"currentColor",strokeWidth:"2"})})}),(0,t.jsx)("button",{type:"button",className:"iq-cardfocus__close",autoFocus:!0,onClick:c,children:r.CARDS.close}),(0,t.jsx)("button",{type:"button","aria-label":r.CARDS.next,onClick:()=>m(1),children:(0,t.jsx)("svg",{viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M9 5l7 7-7 7",fill:"none",stroke:"currentColor",strokeWidth:"2"})})})]})]})})}var G=e.i(66956);let $=[...r.CARDS.cards].reverse();e.s(["CardsSection",0,function(){let e=(0,i.useRef)(null),[s,o]=(0,i.useState)(!1),[n,a]=(0,i.useState)(!1),[l,c]=(0,i.useState)({index:0,open:!1,token:0});(0,i.useEffect)(()=>{let t=e.current;if(!t)return;let i=new IntersectionObserver(e=>o(e.some(e=>e.isIntersecting)),{rootMargin:"30% 0px"});i.observe(t);let r=window.matchMedia("(prefers-reduced-motion: reduce)"),s=()=>a(r.matches);return s(),r.addEventListener("change",s),()=>{i.disconnect(),r.removeEventListener("change",s)}},[]);let h=(0,i.useCallback)(e=>c(t=>({index:e,open:!0,token:t.token+1})),[]),d=(0,i.useCallback)(()=>c(e=>({...e,open:!1})),[]);return(0,t.jsxs)("section",{"data-scene":"cards",className:"iq-cards",children:[(0,t.jsxs)("div",{className:"iq-cards__copy",children:[(0,t.jsx)("p",{className:"iq-label iq-label--amber","data-reveal":"up",children:r.CARDS.eyebrow}),(0,t.jsx)(G.Headline,{text:r.CARDS.headline}),(0,t.jsx)("p",{className:"iq-body","data-reveal":"up",children:r.CARDS.body})]}),(0,t.jsx)("ul",{ref:e,className:"iq-cards__hand","aria-label":r.CARDS.handLabel,children:$.map((e,i)=>(0,t.jsx)("li",{className:"iq-cards__slot","data-hero":"S"===e.grade?"true":void 0,style:{"--k":$.length-1-i},children:(0,t.jsx)(X,{card:e,live:s&&!l.open,reducedMotion:n,mode:"hand",onOpen:()=>h(i)})},e.id))}),(0,t.jsx)(Y,{cards:$,index:l.index,open:l.open,revealToken:l.token,reducedMotion:n,onChange:h,onClose:d})]})}],76591)},25927,e=>{"use strict";var t=e.i(43476),i=e.i(71645),r=e.i(26439),s=e.i(66956);e.s(["FaqSection",0,function(){let[e,o]=(0,i.useState)(0);return(0,t.jsx)("section",{id:"faq",className:"iq-faq",children:(0,t.jsxs)("div",{className:"iq-faq__inner",children:[(0,t.jsxs)("div",{className:"iq-faq__copy",children:[(0,t.jsx)("p",{className:"iq-label iq-label--tide","data-reveal":"up",children:r.FAQ.eyebrow}),(0,t.jsx)(s.Headline,{text:r.FAQ.headline})]}),(0,t.jsx)("div",{className:"iq-faq__list",children:r.FAQ.items.map((i,r)=>{let s=e===r;return(0,t.jsxs)("div",{className:"iq-faq__item","data-open":s,children:[(0,t.jsx)("h3",{children:(0,t.jsxs)("button",{type:"button","aria-expanded":s,"aria-controls":`faq-panel-${r}`,id:`faq-button-${r}`,onClick:()=>o(s?null:r),children:[(0,t.jsx)("span",{className:"iq-faq__index",children:String(r+1).padStart(2,"0")}),(0,t.jsx)("span",{className:"iq-faq__question",children:i.question}),(0,t.jsx)("span",{className:"iq-faq__sign","aria-hidden":"true"})]})}),(0,t.jsx)("div",{className:"iq-faq__panel",id:`faq-panel-${r}`,role:"region","aria-labelledby":`faq-button-${r}`,children:(0,t.jsx)("div",{children:(0,t.jsx)("p",{className:"iq-body",children:i.answer})})})]},i.question)})})]})})}])},66956,e=>{"use strict";var t=e.i(43476);e.s(["Headline",0,function({text:e,as:i="h2",size:r="section",reveal:s=!0,className:o,style:n}){let a,l=(a=[],e.split(/[{}]/).forEach((e,t)=>{e.split(/\s+/).filter(Boolean).forEach(e=>a.push({text:e,highlighted:t%2==1}))}),a);return(0,t.jsx)(i,{className:`iq-h iq-h--${r}${o?` ${o}`:""}`,"data-reveal":s?"lines":void 0,style:n,children:l.map((e,i)=>(0,t.jsxs)("span",{children:[(0,t.jsx)("span",{className:"iq-w",children:(0,t.jsx)("span",{className:e.highlighted?"iq-hl":void 0,children:e.text})}),i<l.length-1?" ":null]},i))})}])},49633,e=>{"use strict";var t=e.i(43476),i=e.i(71645),r=e.i(50446);function s(e){let t=-1,i=-1/0;e.querySelectorAll(".iq-w").forEach(e=>{e.offsetTop>i+4&&(t+=1,i=e.offsetTop),e.style.setProperty("--l",String(t))})}e.s(["HomeMotion",0,function(){let e=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let t=Array.from(document.querySelectorAll("[data-reveal]")),i=t.filter(e=>"lines"===e.dataset.reveal),o=Array.from(document.querySelectorAll("[data-tilt]")),n=()=>i.forEach(s);n(),document.fonts.ready.then(n).catch(()=>{}),window.addEventListener("resize",n,{passive:!0});let a=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add("is-in"),a.unobserve(e.target))})},{rootMargin:"0px 0px -12% 0px",threshold:.05});t.forEach(e=>a.observe(e));let l=0,c=0,h=-1,d=(0,r.onExperienceFrame)(t=>{if(Math.abs(t.scroll-h)>5e-4&&e.current&&(h=t.scroll,e.current.style.setProperty("--page",t.scroll.toFixed(4))),t.compact||t.reducedMotion)return;let{x:i,y:r}=t.pointer;if(.002>Math.abs(i-l)&&.002>Math.abs(r-c))return;l=i,c=r;let s=i.toFixed(3),n=r.toFixed(3);o.forEach(e=>{e.style.setProperty("--px",s),e.style.setProperty("--py",n)})});return()=>{d(),a.disconnect(),window.removeEventListener("resize",n)}},[]),(0,t.jsx)("div",{ref:e,className:"iq-xpbar","aria-hidden":"true",children:(0,t.jsx)("span",{})})}])},13119,e=>{"use strict";var t=e.i(43476),i=e.i(26439),r=e.i(71645);let s=Date.parse("2026-05-16T00:00:00Z"),o=()=>()=>{},n=()=>(38111+4*Math.max(0,Math.floor((Date.now()-s)/18e5))).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),a=()=>null;e.s(["PlayerCountLine",0,function({className:e}){let s=(0,r.useSyncExternalStore)(o,n,a);return(0,t.jsx)("p",{className:e,children:s?`${s} ${i.HERO.playersSuffix}`:" "})}],13119)},26439,e=>{"use strict";e.s(["CARDS",0,{eyebrow:"59 ACHIEVEMENT CARDS",headline:"There's NO reason you can't be {the best version of yourself.}",body:"59 achievement cards graded E to S, with holographic foils you can tilt and share.",gradeLabel:"GRADE",cardEyebrow:["ACHIEVEMENT","UNLOCKED"],handLabel:"Achievement cards, grade S to grade E",open:"Opens the card",previous:"Previous card",next:"Next card",close:"CLOSE",cards:[{id:"workouts_1",title:"First Workout",grade:"E",criterion:"Complete your first workout."},{id:"streak_18",title:"18-Session Streak",grade:"D",criterion:"Reach a streak of 18 sessions."},{id:"steps_20000",title:"20,000 Steps in a Day",grade:"C",criterion:"Claim 20,000 steps in one day."},{id:"workouts_100",title:"100 Workouts",grade:"B",criterion:"Complete 100 workouts."},{id:"prs_200",title:"200 PRs",grade:"A",criterion:"Set 200 personal records."},{id:"workouts_400",title:"400 Workouts",grade:"S",criterion:"Complete 400 workouts."}]},"FAQ",0,{eyebrow:"QUESTIONS",headline:"Before you {download.}",items:[{question:"Do I need gym experience?",answer:"No. The program is 3 sessions a week: V-Taper, Iron Legs and Boulder Shoulders. The exercises follow your answers (pull-ups or pulldowns, squat or leg press, a sensitive back or knees), and every set comes with its weight and reps."},{question:"Does it work without a connection?",answer:"Yes. Sessions work offline, and your sets sync once the phone is back online."},{question:"Can I build my own program?",answer:"Yes. You can build your own program with 10 splits, supersets, circuits and 12 set types, out of 4,510 exercises with demos."},{question:"Do I have to do cardio?",answer:"No cardio sessions. Your daily steps take their place, and every milestone from 2,500 to 20,000 steps pays XP."},{question:"How much does it cost?",answer:"IronQuest Unlimited is an auto-renewing subscription, monthly or yearly. Each plan starts with a 14-day free trial when you are eligible. The App Store shows the price for your country before you confirm."},{question:"Which phones does it run on?",answer:"IronQuest is on the App Store for iPhone. The rest timer runs in the Dynamic Island and on the lock screen, and IronQuest syncs with Apple Health with your permission."}]},"HERO",0,{eyebrow:"GYM RPG & DIET PLAN",headline:"A V-shaped body {in 2 hours a week.}",sub:"3 sessions of 40 min, and that's IT.",playersSuffix:"players already on the climb.",scrollCue:"SCROLL",posterAlt:"The IronQuest character in training clothes, outlined in cyan light"}])},50446,e=>{"use strict";let t=["hero","ratio","sessions","diet","streak","climb","cards","final"],i={scroll:0,velocity:0,scenes:Object.fromEntries(t.map(e=>[e,{progress:0,pin:0,active:!1}])),pointer:{x:0,y:0},ready:!1,compact:!1,reducedMotion:!1},r=new Set;e.s(["SCENE_IDS",0,t,"emitExperienceFrame",0,function(){r.forEach(e=>e(i))},"experience",0,i,"onExperienceFrame",0,function(e){return r.add(e),()=>{r.delete(e)}}])},96963,e=>{"use strict";var t=e.i(43476),i=e.i(70703),r=e.i(71645),s=e.i(50446),o=e.i(24150);let n=(0,i.default)(()=>e.A(29436).then(e=>e.Stage),{loadableGenerated:{modules:[95954]},ssr:!1});class a extends r.Component{state={failed:!1};static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(){this.props.onError()}render(){return this.state.failed?null:this.props.children}}e.s(["Experience",0,function(){let[e,i]=(0,r.useState)(!1);(0,r.useEffect)(()=>(0,o.startScrollDriver)(),[]);let l=(0,r.useCallback)(()=>{s.experience.ready=!1,document.documentElement.dataset.stage="off",i(!1)},[]);return((0,r.useEffect)(()=>{let e=document.documentElement;e.dataset.stage="loading";let t=()=>{!function(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}()?e.dataset.stage="off":i(!0)},r="function"==typeof window.requestIdleCallback,o=r?window.requestIdleCallback(t,{timeout:1200}):window.setTimeout(t,200);return()=>{r?window.cancelIdleCallback(o):window.clearTimeout(o),s.experience.ready=!1,delete e.dataset.stage}},[]),e)?(0,t.jsx)(a,{onError:l,children:(0,t.jsx)(n,{onLost:l})}):null}])},24150,e=>{"use strict";var t="1.3.27";function i(e,t,i){return Math.max(e,Math.min(t,i))}var r=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(e){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;let r=i(0,this.currentTime/this.duration,1),s=(t=r>=1)?1:this.easing(r);this.value=this.from+(this.to-this.from)*s}else if(this.lerp){var r,s,o,n;this.value=(r=this.value,s=this.to,o=60*this.lerp,(1-(n=1-Math.exp(-o*e)))*r+n*s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)}else this.value=this.to,t=!0;t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:i,duration:r,easing:s,onStart:o,onUpdate:n}){this.from=this.value=e,this.to=t,this.lerp=i,this.duration=r,this.easing=s,this.currentTime=0,this.isRunning=!0,o?.(),this.onUpdate=n}},s=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(e,t,{autoResize:i=!0,debounce:r=250}={}){this.wrapper=e,this.content=t,i&&(this.debouncedResize=function(e,t){let i;return function(...r){clearTimeout(i),i=setTimeout(()=>{i=void 0,e.apply(this,r)},t)}}(this.resize,r),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},o=class{events={};emit(e,...t){let i=this.events[e]||[];for(let e=0,r=i.length;e<r;e++)i[e]?.(...t)}on(e,t){return this.events[e]?this.events[e].push(t):this.events[e]=[t],()=>{this.events[e]=this.events[e]?.filter(e=>t!==e)}}off(e,t){this.events[e]=this.events[e]?.filter(e=>t!==e)}destroy(){this.events={}}};let n=100/6,a={passive:!1};function l(e,t){return 1===e?n:2===e?t:1}var c=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new o;constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){this.element=e,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,a),this.element.addEventListener("touchstart",this.onTouchStart,a),this.element.addEventListener("touchmove",this.onTouchMove,a),this.element.addEventListener("touchend",this.onTouchEnd,a)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,a),this.element.removeEventListener("touchstart",this.onTouchStart,a),this.element.removeEventListener("touchmove",this.onTouchMove,a),this.element.removeEventListener("touchend",this.onTouchEnd,a)}onTouchStart=e=>{let{clientX:t,clientY:i}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})};onTouchMove=e=>{let{clientX:t,clientY:i}=e.targetTouches?e.targetTouches[0]:e,r=-(t-this.touchStart.x)*this.options.touchMultiplier,s=-(i-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:r,y:s},this.emitter.emit("scroll",{deltaX:r,deltaY:s,event:e})};onTouchEnd=e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})};onWheel=e=>{let{deltaX:t,deltaY:i,deltaMode:r}=e,s=l(r,this.window.width),o=l(r,this.window.height);t*=s,i*=o,t*=this.options.wheelMultiplier,i*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:i,event:e})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};let h=e=>Math.min(1,1.001-2**(-10*e));var d=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;reducedMotionMediaQuery=window.matchMedia("(prefers-reduced-motion: reduce)");isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new r;emitter=new o;dimensions;virtualScroll;constructor({wrapper:e=window,content:i=document.documentElement,eventsTarget:r=e,smoothWheel:o=!0,syncTouch:n=!1,syncTouchLerp:a=.075,touchInertiaExponent:l=1.7,duration:d,easing:u,lerp:p=.1,infinite:m=!1,orientation:f="vertical",gestureOrientation:v="horizontal"===f?"both":"vertical",touchMultiplier:g=1,wheelMultiplier:y=1,autoResize:x=!0,prevent:w,virtualScroll:b,overscroll:S=!0,autoRaf:E=!1,anchors:R=!1,autoToggle:C=!1,allowNestedScroll:T=!1,__experimental__naiveDimensions:_=!1,naiveDimensions:A=_,stopInertiaOnNavigate:M=!1,respectReducedMotion:k=!0}={}){window.lenisVersion=t,window.lenis||(window.lenis={}),window.lenis.version=t,"horizontal"===f&&(window.lenis.horizontal=!0),!0===n&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),e&&e!==document.documentElement||(e=window),"number"==typeof d&&"function"!=typeof u?u=h:"function"==typeof u&&"number"!=typeof d&&(d=1),this.options={wrapper:e,content:i,eventsTarget:r,smoothWheel:o,syncTouch:n,syncTouchLerp:a,touchInertiaExponent:l,duration:d,easing:u,lerp:p,infinite:m,gestureOrientation:v,orientation:f,touchMultiplier:g,wheelMultiplier:y,autoResize:x,prevent:w,virtualScroll:b,overscroll:S,autoRaf:E,anchors:R,autoToggle:C,allowNestedScroll:T,naiveDimensions:A,stopInertiaOnNavigate:M,respectReducedMotion:k},this.dimensions=new s(e,i,{autoResize:x}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new c(r,{touchMultiplier:g,wheelMultiplier:y}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),null!==this._resetVelocityTimeout&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}onScrollEnd=e=>{e instanceof CustomEvent||"smooth"!==this.isScrolling&&!1!==this.isScrolling||e.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){let e=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[e]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=e=>{e.propertyName?.includes("overflow")&&e.target===this.rootElement&&this.checkOverflow()};setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:"instant"}):this.options.wrapper.scrollTo({top:e,behavior:"instant"})}onClick=e=>{let t=e.composedPath().filter(e=>e instanceof HTMLAnchorElement&&e.href).map(e=>new URL(e.href)),i=new URL(window.location.href);if(this.options.anchors){let e=t.find(e=>i.host===e.host&&i.pathname===e.pathname&&e.hash);if(e){let t="object"==typeof this.options.anchors&&this.options.anchors?this.options.anchors:void 0,i=decodeURIComponent(e.hash);this.scrollTo(i,t);return}}if(this.options.stopInertiaOnNavigate&&t.some(e=>i.host===e.host&&i.pathname!==e.pathname))return void this.reset()};onPointerDown=e=>{1===e.button&&this.reset()};isTouchOnSelectionHandle(e){let t=window.getSelection();if(!t||t.isCollapsed||0===t.rangeCount)return!1;let i=e.targetTouches[0]??e.changedTouches[0];if(!i)return!1;let r=t.getRangeAt(0).getClientRects();if(0===r.length)return!1;let s=r[0],o=r[r.length-1],n=40>=Math.hypot(i.clientX-s.left,i.clientY-s.top),a=40>=Math.hypot(i.clientX-o.right,i.clientY-o.bottom);return n||a}onVirtualScroll=e=>{if("function"==typeof this.options.virtualScroll&&!1===this.options.virtualScroll(e))return;let{deltaX:t,deltaY:i,event:r}=e;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:i,event:r}),r.ctrlKey||r.lenisStopPropagation)return;let s=r.type.includes("touch"),o=r.type.includes("wheel");if(s&&this.isIos&&("touchstart"===r.type&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(r)),this._isDraggingSelection)){"touchend"===r.type&&(this._isDraggingSelection=!1);return}this.isTouching="touchstart"===r.type||"touchmove"===r.type;let n=0===t&&0===i;if(this.options.syncTouch&&s&&"touchstart"===r.type&&n&&!this.isStopped&&!this.isLocked)return void this.reset();let a="vertical"===this.options.gestureOrientation&&0===i||"horizontal"===this.options.gestureOrientation&&0===t;if(n||a)return;let l=r.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(i)?"horizontal":"vertical";if(l.find(e=>e instanceof HTMLElement&&("function"==typeof c&&c?.(e)||e.hasAttribute?.("data-lenis-prevent")||"vertical"===h&&e.hasAttribute?.("data-lenis-prevent-vertical")||"horizontal"===h&&e.hasAttribute?.("data-lenis-prevent-horizontal")||s&&e.hasAttribute?.("data-lenis-prevent-touch")||o&&e.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(e,{deltaX:t,deltaY:i}))))return;if(this.isStopped||this.isLocked){r.cancelable&&r.preventDefault();return}if(!(this.options.syncTouch&&s||this.options.smoothWheel&&o)){this.isScrolling="native",this.animate.stop(),r.lenisStopPropagation=!0;return}let d=i;"both"===this.options.gestureOrientation?d=Math.abs(i)>Math.abs(t)?i:t:"horizontal"===this.options.gestureOrientation&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||0===this.animatedScroll&&i>0||this.animatedScroll===this.limit&&i<0))&&(r.lenisStopPropagation=!0),r.cancelable&&r.preventDefault();let u=s&&this.options.syncTouch,p=s&&"touchend"===r.type;p&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(null!==this._resetVelocityTimeout&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(!1===this.isScrolling||"native"===this.isScrolling){let e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling="native"),this.emit(),0!==this.velocity&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle)return void this.rootElement.style.removeProperty("overflow");this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle)return void this.rootElement.style.setProperty("overflow","clip");this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=e=>{let t=e-(this.time||e);this.time=e,this.animate.advance(.001*t),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(e,{offset:t=0,immediate:r=!1,lock:s=!1,programmatic:o=!0,lerp:n=o?this.options.lerp:void 0,duration:a=o?this.options.duration:void 0,easing:l=o?this.options.easing:void 0,onStart:c,onComplete:d,force:u=!1,userData:p}={}){if(this.prefersReducedMotion&&(o?r=!0:(n=1,a=void 0,l=void 0)),(this.isStopped||this.isLocked)&&!u)return;let m=e,f=t;if("string"==typeof m&&["top","left","start","#"].includes(m))m=0;else if("string"==typeof m&&["bottom","right","end"].includes(m))m=this.limit;else{let e=null;if("string"==typeof m?(e=m.startsWith("#")?document.getElementById(m.slice(1)):document.querySelector(m))||("#top"===m?m=0:console.warn("Lenis: Target not found",m)):m instanceof Element&&(e=m),e){if(this.options.wrapper!==window){let e=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?e.left:e.top}let t=e.getBoundingClientRect(),i=getComputedStyle(e),r=this.isHorizontal?Number.parseFloat(i.scrollMarginLeft):Number.parseFloat(i.scrollMarginTop),s=getComputedStyle(this.rootElement),o=this.isHorizontal?Number.parseFloat(s.scrollPaddingLeft):Number.parseFloat(s.scrollPaddingTop);m=(this.isHorizontal?t.left:t.top)+this.animatedScroll-(Number.isNaN(r)?0:r)-(Number.isNaN(o)?0:o)}}if("number"==typeof m){if(m+=f,this.options.infinite){if(o){this.targetScroll=this.animatedScroll=this.scroll;let e=m-this.animatedScroll;e>this.limit/2?m-=this.limit:e<-this.limit/2&&(m+=this.limit)}}else m=i(0,m,this.limit);if(m===this.targetScroll){c?.(this),d?.(this);return}if(this.userData=p??{},r){this.animatedScroll=this.targetScroll=m,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),d?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}o||(this.targetScroll=m),"number"==typeof a&&"function"!=typeof l?l=h:"function"==typeof l&&"number"!=typeof a&&(a=1),this.animate.fromTo(this.animatedScroll,m,{duration:a,easing:l,lerp:n,onStart:()=>{s&&(this.isLocked=!0),this.isScrolling="smooth",c?.(this)},onUpdate:(e,t)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=e-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=e,this.setScroll(this.scroll),o&&(this.targetScroll=e),t||this.emit(),t&&(this.reset(),this.emit(),d?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(e,{deltaX:t,deltaY:i}){let r,s,o,n,a,l,c,h,d,u,p,m,f,v,g,y,x=Date.now();e._lenis||(e._lenis={});let w=e._lenis;if(x-(w.time??0)>2e3){w.time=Date.now();let t=window.getComputedStyle(e);if(w.computedStyle=t,r=["auto","overlay","scroll"].includes(t.overflowX),s=["auto","overlay","scroll"].includes(t.overflowY),a=["auto"].includes(t.overscrollBehaviorX),l=["auto"].includes(t.overscrollBehaviorY),w.hasOverflowX=r,w.hasOverflowY=s,!(r||s))return!1;c=e.scrollWidth,h=e.scrollHeight,d=e.clientWidth,u=e.clientHeight,o=c>d,n=h>u,w.isScrollableX=o,w.isScrollableY=n,w.scrollWidth=c,w.scrollHeight=h,w.clientWidth=d,w.clientHeight=u,w.hasOverscrollBehaviorX=a,w.hasOverscrollBehaviorY=l}else o=w.isScrollableX,n=w.isScrollableY,r=w.hasOverflowX,s=w.hasOverflowY,c=w.scrollWidth,h=w.scrollHeight,d=w.clientWidth,u=w.clientHeight,a=w.hasOverscrollBehaviorX,l=w.hasOverscrollBehaviorY;if(!(r&&o||s&&n))return!1;let b=Math.abs(t)>=Math.abs(i)?"horizontal":"vertical";if("horizontal"===b)p=Math.round(e.scrollLeft),m=c-d,f=t,v=r,g=o,y=a;else{if("vertical"!==b)return!1;p=Math.round(e.scrollTop),m=h-u,f=i,v=s,g=n,y=l}return!y&&(p>=m||p<=0)||(f>0?p<m:p>0)&&v&&g}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return"horizontal"===this.options.orientation}get actualScroll(){let e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){var e;return this.options.infinite?(this.animatedScroll%(e=this.limit)+e)%e:this.animatedScroll}get progress(){return 0===this.limit?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return"smooth"===this.isScrolling}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let e="lenis";return this.options.autoToggle&&(e+=" lenis-autoToggle"),this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),"smooth"===this.isScrolling&&(e+=" lenis-smooth"),e}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(e=>{this.rootElement.classList.add(e)})}cleanUpClassName(){for(let e of Array.from(this.rootElement.classList))("lenis"===e||e.startsWith("lenis-"))&&this.rootElement.classList.remove(e)}},u=e.i(50446);let p=Object.fromEntries(u.SCENE_IDS.map(e=>[e,0])),m={width:0,height:0},f=e=>e<0?0:e>1?1:e;e.s(["sceneCover",0,p,"startScrollDriver",0,function(){let e=window.matchMedia("(pointer: fine)"),t=window.matchMedia("(prefers-reduced-motion: reduce)"),i=[],r=window.innerWidth,s=window.innerHeight,o=1,n=1/0,a=null,l=!0,c=!0,h=0,v=0,g=window.scrollY,y=0,x=0,w=new ResizeObserver(()=>{c=!0}),b=()=>{u.experience.reducedMotion=t.matches;let i=e.matches&&!t.matches;i&&!a?a=new d({autoRaf:!1,lerp:.11,wheelMultiplier:1,anchors:!0}):!i&&a&&(a.destroy(),a=null),t.matches&&(y=0,x=0,u.experience.pointer.x=0,u.experience.pointer.y=0)},S=e=>{"mouse"!==e.pointerType||u.experience.reducedMotion||(y=e.clientX/r*2-1,x=e.clientY/s*2-1)},E=()=>{c=!0},R=new MutationObserver(()=>{(i.length<u.SCENE_IDS.length||i.some(e=>!e.element.isConnected))&&(l=!0)}),C=t=>{h=requestAnimationFrame(C);let d=0===v?1/60:Math.min((t-v)/1e3,.1);if(v=t,a&&a.raf(t),l){for(let e of(w.disconnect(),w.observe(document.body),i=[],u.SCENE_IDS)){let t=document.querySelector(`[data-scene="${e}"]`);t&&(w.observe(t),i.push({id:e,element:t,top:0,height:0,writtenProgress:-1,writtenPin:-1}))}c=!0,l=!1}if(c){r=window.innerWidth,s=window.innerHeight;let e=window.scrollY;for(let t of i){let i=t.element.getBoundingClientRect();t.top=i.top+e,t.height=i.height}o=Math.max(1,document.documentElement.scrollHeight-s);let t=i.find(e=>"final"===e.id);n=t?Math.max(0,t.top+t.height-s):1/0,u.experience.compact=r<768,m.width=r,m.height=s,c=!1}let b=a?a.scroll:window.scrollY,S=Math.min(b,n),E=(S-g)/s/Math.max(d,1/240);for(let e of(g=S,u.experience.velocity+=(E-u.experience.velocity)*(1-Math.exp(-10*d)),5e-4>Math.abs(u.experience.velocity)&&(u.experience.velocity=0),u.experience.scroll=f(b/o),u.SCENE_IDS))p[e]=0;for(let e of i){let t=u.experience.scenes[e.id],i=e.top+e.height;t.progress=f((S+s-e.top)/(e.height+s)),t.pin=f((S-e.top)/Math.max(e.height-s,1)),t.active=S+s>e.top&&S<i;let r=Math.min(S+s,i)-Math.max(S,e.top);p[e.id]=r>0?r/s:0,Math.abs(t.progress-e.writtenProgress)>5e-4&&(e.writtenProgress=t.progress,e.element.style.setProperty("--scene-progress",t.progress.toFixed(4))),Math.abs(t.pin-e.writtenPin)>5e-4&&(e.writtenPin=t.pin,e.element.style.setProperty("--scene-pin",t.pin.toFixed(4)))}if(!u.experience.reducedMotion){if(!e.matches){let e=t/1e3;y=.55*Math.sin(.23*e),x=.35*Math.cos(.17*e)}let i=1-Math.exp(-4*d);u.experience.pointer.x+=(y-u.experience.pointer.x)*i,u.experience.pointer.y+=(x-u.experience.pointer.y)*i}(0,u.emitExperienceFrame)()};return b(),e.addEventListener("change",b),t.addEventListener("change",b),window.addEventListener("pointermove",S,{passive:!0}),window.addEventListener("resize",E,{passive:!0}),R.observe(document.body,{childList:!0,subtree:!0}),document.fonts.ready.then(E).catch(()=>{}),h=requestAnimationFrame(C),()=>{for(let r of(cancelAnimationFrame(h),e.removeEventListener("change",b),t.removeEventListener("change",b),window.removeEventListener("pointermove",S),window.removeEventListener("resize",E),R.disconnect(),w.disconnect(),a&&a.destroy(),a=null,i))r.element.style.removeProperty("--scene-progress"),r.element.style.removeProperty("--scene-pin")}},"viewport",0,m],24150)},5014,e=>{"use strict";var t=e.i(71645),i=e.i(71987),r=e.i(88973),s=e.i(96661);let o=(0,t.createContext)({}),n=(0,t.forwardRef)(({color:e,size:n,strokeWidth:a,absoluteStrokeWidth:l,className:c="",children:h,iconNode:d,...u},p)=>{let{size:m=24,strokeWidth:f=2,absoluteStrokeWidth:v=!1,color:g="currentColor",className:y=""}=(0,t.useContext)(o)??{},x=l??v?24*Number(a??f)/Number(n??m):a??f;return(0,t.createElement)("svg",{ref:p,...i.default,width:n??m??i.default.width,height:n??m??i.default.height,stroke:e??g,strokeWidth:x,className:(0,s.mergeClasses)("lucide",y,c),...!h&&!(0,r.hasA11yProp)(u)&&{"aria-hidden":"true"},...u},[...d.map(([e,i])=>(0,t.createElement)(e,i)),...Array.isArray(h)?h:[h]])});e.s(["default",0,n],5014)},71987,88973,e=>{"use strict";e.s(["default",0,{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}],71987),e.s(["hasA11yProp",0,e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1}],88973)},96661,e=>{"use strict";e.s(["mergeClasses",0,(...e)=>e.filter((e,t,i)=>!!e&&""!==e.trim()&&i.indexOf(e)===t).join(" ").trim()])},90317,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r={bindSnapshot:function(){return c},createAsyncLocalStorage:function(){return l},createSnapshot:function(){return h}};for(var s in r)Object.defineProperty(i,s,{enumerable:!0,get:r[s]});let o=Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"),"__NEXT_ERROR_CODE",{value:"E504",enumerable:!1,configurable:!0});class n{disable(){throw o}getStore(){}run(){throw o}exit(){throw o}enterWith(){throw o}static bind(e){return e}}let a="u">typeof globalThis&&globalThis.AsyncLocalStorage;function l(){return a?new a:new n}function c(e){return a?a.bind(e):n.bind(e)}function h(){return a?a.snapshot():function(e,...t){return e(...t)}}},42344,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"workAsyncStorageInstance",{enumerable:!0,get:function(){return r}});let r=(0,e.r(90317).createAsyncLocalStorage)()},63599,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"workAsyncStorage",{enumerable:!0,get:function(){return r.workAsyncStorageInstance}});let r=e.r(42344)},9885,(e,t,i)=>{"use strict";function r(e){return e.split("/").map(e=>encodeURIComponent(e)).join("/")}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"encodeURIPath",{enumerable:!0,get:function(){return r}})},67585,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"BailoutToCSR",{enumerable:!0,get:function(){return s}});let r=e.r(32061);function s({reason:e,children:t}){if("u"<typeof window)throw Object.defineProperty(new r.BailoutToCSRError(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return t}},52157,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"PreloadChunks",{enumerable:!0,get:function(){return l}});let r=e.r(43476),s=e.r(74080),o=e.r(63599),n=e.r(9885),a=e.r(43369);function l({moduleIds:e}){if("u">typeof window)return null;let t=o.workAsyncStorage.getStore();if(void 0===t)return null;let i=[];if(t.reactLoadableManifest&&e){let r=t.reactLoadableManifest;for(let t of e){if(!r[t])continue;let e=r[t].files;i.push(...e)}}if(0===i.length)return null;let c=(0,a.getAssetTokenQuery)();return(0,r.jsx)(r.Fragment,{children:i.map(e=>{let i=`${t.assetPrefix}/_next/${(0,n.encodeURIPath)(e)}${c}`;return e.endsWith(".css")?(0,r.jsx)("link",{precedence:"dynamic",href:i,rel:"stylesheet",as:"style",nonce:t.nonce},e):((0,s.preload)(i,{as:"script",fetchPriority:"low",nonce:t.nonce}),null)})})}},69093,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return c}});let r=e.r(43476),s=e.r(71645),o=e.r(67585),n=e.r(52157);function a(e){return{default:e&&"default"in e?e.default:e}}let l={loader:()=>Promise.resolve(a(()=>null)),loading:null,ssr:!0},c=function(e){let t={...l,...e},i=(0,s.lazy)(()=>t.loader().then(a)),c=t.loading;function h(e){let a=c?(0,r.jsx)(c,{isLoading:!0,pastDelay:!0,error:null}):null,l=!t.ssr||!!t.loading,h=l?s.Suspense:s.Fragment,d=t.ssr?(0,r.jsxs)(r.Fragment,{children:["u"<typeof window?(0,r.jsx)(n.PreloadChunks,{moduleIds:t.modules}):null,(0,r.jsx)(i,{...e})]}):(0,r.jsx)(o.BailoutToCSR,{reason:"next/dynamic",children:(0,r.jsx)(i,{...e})});return(0,r.jsx)(h,{...l?{fallback:a}:{},children:d})}return h.displayName="LoadableComponent",h}},70703,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return s}});let r=e.r(55682)._(e.r(69093));function s(e,t){let i={};"function"==typeof e&&(i.loader=e);let s={...i,...t};return(0,r.default)({...s,modules:s.loadableGenerated?.modules})}("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)}]);