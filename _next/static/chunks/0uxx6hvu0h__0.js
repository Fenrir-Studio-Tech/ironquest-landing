(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,15570,e=>{"use strict";let t,r,i,s,n;var a=e.i(43476),o=e.i(75056),l=e.i(94800),c=e.i(71645),u=e.i(90072),d=e.i(50446),h=e.i(24150);let f="#F5C13A",p="#F5F1EA",v="#FFE2B8",m=["#6E72C8","#4F86C8","#54B26B","#F5C13A","#E8852F","#DD513A"].map(e=>new u.Color(e)),g={at:0,camera:[0,1.15,3],lookAt:[0,1.36,0],fov:30,frameX:0,turn:0,presence:1,forge:0,orbit:0,particles:.7,ring:1,ladder:0,warmth:0,lowKey:1,keyColor:"#DCEEF2",keyPower:.85,rimColor:"#4DDAE9",rimPower:1.6},y=e=>({...g,...e}),S=e=>Math.min(1,Math.max(0,(e-.02)/.82)),w={forge:1,lowKey:0,keyColor:p,keyPower:1.5,rimPower:4},x={camera:[0,5.6,8],lookAt:[0,5.6,0],presence:0,ring:0},b={camera:[0,-4.5,8],lookAt:[0,-4.5,0],presence:0,ring:0},E={...w,fov:36,particles:1,warmth:.9,keyColor:v,keyPower:1.7,rimColor:f,rimPower:4.6},T={hero:{axis:"progress",keys:[y({at:.5,camera:[0,1.15,3],lookAt:[0,1.36,0],frameX:.6,turn:-16,orbit:7}),y({at:1,camera:[0,1.25,2.6],lookAt:[0,1.4,0],frameX:.54,turn:-14,orbit:4})]},ratio:{axis:"progress",keys:[y({at:.2,camera:[0,1.46,2.6],lookAt:[0,1.4,0],frameX:.3,turn:-13,orbit:2}),y({at:.8,camera:[0,1.44,2.25],lookAt:[0,1.4,0],frameX:.26,turn:12,orbit:2})]},sessions:{axis:"progress",keys:[y({at:.2,camera:[0,1.25,2.95],lookAt:[0,1.42,0],frameX:-.5,turn:16,orbit:3}),y({at:.8,camera:[0,1.28,2.75],lookAt:[0,1.42,0],frameX:-.54,turn:20,orbit:3})]},diet:{axis:"progress",keys:[y({camera:[0,1.3,4.4],lookAt:[0,1.4,0],frameX:-1.9,presence:0,ring:0,particles:.85,warmth:.55,rimColor:f})]},streak:{axis:"progress",keys:[y({...x,particles:.8,warmth:.2})]},climb:{axis:"pin",keys:[y({at:.02,camera:[0,.6,4.5],lookAt:[0,.76,0],lowKey:.45,keyPower:1,ladder:1,particles:.6}),y({at:.32,camera:[0,.82,4.25],lookAt:[0,.82,0],forge:S(.32),lowKey:.2,keyColor:p,keyPower:1.2,rimPower:3,ladder:1,particles:.75,warmth:.2}),y({at:.56,camera:[0,.95,4.05],lookAt:[0,.92,0],fov:31,forge:S(.56),lowKey:0,keyColor:p,keyPower:1.4,rimPower:4.2,ladder:1,particles:.85,warmth:.45}),y({...w,at:.84,camera:[0,.8,4],lookAt:[0,.94,0],fov:33,ladder:1,particles:.95,warmth:.75}),y({...w,at:1,camera:[0,.45,3.85],lookAt:[0,.92,0],fov:35,ladder:1,rimPower:4.4,particles:1,warmth:1,keyColor:v})]},cards:{axis:"progress",keys:[y({...w,...b,particles:.75,warmth:.5,rimColor:f})]},final:{axis:"progress",keys:[y({...E,at:.3,camera:[0,.42,3.6],lookAt:[0,.98,0],orbit:5}),y({...E,at:.7,camera:[0,.4,3.4],lookAt:[0,.98,0],orbit:5})]}},U={hero:{axis:"progress",keys:[y({at:.5,camera:[0,1.4,3.4],lookAt:[0,1.55,0],turn:-8,orbit:4}),y({at:1,camera:[0,1.4,3.1],lookAt:[0,1.5,0],turn:-6,orbit:3})]},ratio:{axis:"progress",keys:[y({at:.2,camera:[0,1.2,3.05],lookAt:[0,1.08,0],turn:-13,orbit:2}),y({at:.8,camera:[0,1.2,2.85],lookAt:[0,1.1,0],turn:12,orbit:2})]},sessions:{axis:"progress",keys:[y({...x,particles:.7})]},diet:{axis:"progress",keys:[y({...x,particles:.8,warmth:.55,rimColor:f})]},streak:{axis:"progress",keys:[y({...x,particles:.75,warmth:.2})]},climb:{axis:"pin",keys:[y({at:.02,camera:[0,.75,5.3],lookAt:[0,1,0],lowKey:.45,keyPower:1,ladder:1,particles:.6}),y({at:.32,camera:[0,.9,5],lookAt:[0,1.02,0],forge:S(.32),lowKey:.2,keyColor:p,keyPower:1.2,rimPower:3,ladder:1,particles:.75,warmth:.2}),y({at:.56,camera:[0,1,4.7],lookAt:[0,1.05,0],forge:S(.56),lowKey:0,keyColor:p,keyPower:1.4,rimPower:4.2,ladder:1,particles:.85,warmth:.45}),y({...w,at:.84,camera:[0,.85,3.9],lookAt:[0,1,0],fov:33,ladder:1,particles:.95,warmth:.75}),y({...w,at:1,camera:[0,.5,3.7],lookAt:[0,1.02,0],fov:35,ladder:1,rimPower:4.4,particles:1,warmth:1,keyColor:v})]},cards:{axis:"progress",keys:[y({...w,...b,particles:.75,warmth:.5,rimColor:f})]},final:{axis:"progress",keys:[y({...E,camera:[0,.68,5.1],lookAt:[0,.9,0],orbit:3})]}},A=new u.Color;function B(e){let t=new Float32Array(25);return t.set([...e.camera,...e.lookAt,e.fov,e.frameX,e.turn,e.presence]),t[10]=e.forge,t[11]=e.orbit,t[12]=e.particles,t[13]=e.ring,t[14]=e.ladder,t[15]=e.warmth,t[16]=e.keyPower,t[17]=e.rimPower,t[24]=e.lowKey,A.set(e.keyColor).toArray(t,18),A.set(e.rimColor).toArray(t,21),t}function M(e){return Object.fromEntries(d.SCENE_IDS.map(t=>[t,{axis:e[t].axis,at:e[t].keys.map(e=>e.at),frames:e[t].keys.map(B)}]))}let R={desktop:M(T),compact:M(U)},C={values:new Float32Array(25),rim:new u.Color("#00B7C1"),key:new u.Color(p),time:0,primed:!1},_=new Float32Array(25),F=new Float32Array(25),D=new u.Color,P=B(y({...x,particles:.4})),z=e=>e<=7||9===e||13===e||12===e,I=()=>d.experience.compact||h.viewport.width<1100,k={key:"idle",clip:"idle"},O={key:"ratio:cocky",clip:"cocky"},G={key:"sessions:cocky",clip:"cocky"},L={key:"guard",clip:"guard"},H={key:"climb:warCry",clip:"warCry"},N=new u.Vector3(16,8,15),V=new u.Vector3(-8,-.6,-10.5),W=`
  attribute vec4 aSeed;
  attribute vec4 aTrait;
  uniform float uTime;
  uniform float uScroll;
  uniform float uStretch;
  uniform float uDensity;
  uniform vec2 uPointer;
  uniform vec3 uBox;
  uniform vec3 uOrigin;
  uniform float uLift;
  varying vec2 vUv;
  varying float vFade;
  varying float vTone;
  varying float vSoft;

  void main() {
    vec3 p = aSeed.xyz;
    float depthPace = 0.35 + 0.65 * aSeed.w;
    p.y = fract(p.y + uTime * aTrait.y * 0.011 + uScroll * depthPace / uBox.y);
    p.x += sin(uTime * 0.13 * aTrait.y + aTrait.z * 6.2831) * 0.018;
    p.z += cos(uTime * 0.11 * aTrait.y + aTrait.z * 4.1) * 0.014;

    vec3 world = uOrigin + p * uBox;
    world.y += uLift;
    vec4 view = viewMatrix * vec4(world, 1.0);
    float depth = -view.z;
    view.xy -= uPointer * (0.9 / max(depth, 1.5));

    float alive = step(aTrait.w, uDensity);
    float size = aTrait.x * alive;
    vec2 corner = position.xy;
    corner.y *= 1.0 + uStretch * (0.6 + aSeed.w);
    view.xy += corner * size;
    gl_Position = projectionMatrix * view;

    float wrap = smoothstep(0.0, 0.08, p.y) * (1.0 - smoothstep(0.9, 1.0, p.y));
    float near = smoothstep(0.5, 2.2, depth);
    float far = 1.0 - smoothstep(9.0, 17.0, depth);
    float twinkle = 0.65 + 0.35 * sin(uTime * aTrait.y * 0.9 + aTrait.z * 6.2831);
    vFade = wrap * near * far * twinkle / (1.0 + uStretch * 0.6);
    vTone = aTrait.z;
    vSoft = smoothstep(0.07, 0.14, aTrait.x);
    vUv = position.xy * 2.0;
  }
`,j=`
  uniform vec3 uCool;
  uniform vec3 uBright;
  uniform vec3 uCore;
  uniform vec3 uAmber;
  uniform vec3 uCoral;
  uniform float uWarmth;
  varying vec2 vUv;
  varying float vFade;
  varying float vTone;
  varying float vSoft;

  void main() {
    float d = length(vUv);
    if (d > 1.0) discard;
    float halo = pow(1.0 - d, 2.4);
    float core = smoothstep(0.32, 0.0, d);
    vec3 cool = mix(uCool, uBright, smoothstep(0.3, 0.9, vTone));
    vec3 warm = mix(uAmber, uCoral, smoothstep(0.55, 1.0, vTone));
    float warmShare = step(1.0 - uWarmth * 0.75, fract(vTone * 7.31));
    vec3 tint = mix(cool, warm, warmShare);
    vec3 color = mix(tint, mix(uCore, vec3(1.0, 0.93, 0.8), warmShare), core * 0.7);
    float strength = mix(halo * 0.9 + core * 0.6, halo * 0.22, vSoft);
    gl_FragColor = vec4(color, strength * vFade);
  }
`;function K({count:e}){let{geometry:t,material:r}=(0,c.useMemo)(()=>(function(e){let t=new u.PlaneGeometry(1,1),r=new u.InstancedBufferGeometry;r.index=t.index,r.setAttribute("position",t.getAttribute("position")),r.instanceCount=e;let i=new Float32Array(4*e),s=new Float32Array(4*e),n=1337,a=()=>(n=1664525*n+0x3c6ef35f>>>0)/0x100000000;for(let t=0;t<e;t+=1){i.set([a(),a(),a(),a()],4*t);let e=.12>a()?.14+.22*a():.02+.045*a();s.set([e,.4+1.4*a(),a(),a()],4*t)}return r.setAttribute("aSeed",new u.InstancedBufferAttribute(i,4)),r.setAttribute("aTrait",new u.InstancedBufferAttribute(s,4)),{geometry:r,material:new u.ShaderMaterial({vertexShader:W,fragmentShader:j,transparent:!0,depthWrite:!1,blending:u.AdditiveBlending,uniforms:{uTime:{value:0},uScroll:{value:0},uStretch:{value:0},uDensity:{value:.7},uWarmth:{value:0},uLift:{value:0},uPointer:{value:new u.Vector2},uBox:{value:N},uOrigin:{value:V},uCool:{value:new u.Color("#00B7C1")},uBright:{value:new u.Color("#4DDAE9")},uCore:{value:new u.Color("#9BF3FA")},uAmber:{value:new u.Color("#F5C13A")},uCoral:{value:new u.Color("#FF592C")}}})}})(e),[e]),i=(0,c.useRef)(null);return(0,c.useEffect)(()=>(i.current=r,()=>{i.current=null,t.dispose(),r.dispose()}),[t,r]),(0,l.useFrame)(({camera:e},t)=>{if(!i.current)return;let r=i.current.uniforms,s=Math.min(t,.1),n=d.experience.reducedMotion?0:d.experience.velocity;r.uTime.value=C.time,r.uScroll.value+=n*s*.9,r.uStretch.value=Math.min(.9*Math.abs(n),5),r.uDensity.value=C.values[12],r.uWarmth.value=C.values[15],r.uLift.value=Math.max(0,e.position.y-2.5),r.uPointer.value.set(d.experience.pointer.x,-d.experience.pointer.y)}),(0,a.jsx)("mesh",{geometry:t,material:r,frustumCulled:!1,renderOrder:2})}var X=e.i(59907),q=e.i(66156),Q=e.i(8560),$=u;Q.UniformsLib.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new $.Vector2},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},Q.ShaderLib.line={uniforms:$.UniformsUtils.merge([Q.UniformsLib.common,Q.UniformsLib.fog,Q.UniformsLib.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Z extends $.ShaderMaterial{constructor(e){super({type:"LineMaterial",uniforms:$.UniformsUtils.clone(Q.ShaderLib.line.uniforms),vertexShader:Q.ShaderLib.line.vertexShader,fragmentShader:Q.ShaderLib.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){!0===e!==this.worldUnits&&(this.needsUpdate=!0),!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){!0===e!==this.dashed&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(!0===e!==this.alphaToCoverage&&(this.needsUpdate=!0),!0===e?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}var Y=u,J=u;let ee=new J.Box3,et=new J.Vector3;class er extends J.InstancedBufferGeometry{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new J.Float32BufferAttribute([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new J.Float32BufferAttribute([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,r=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),r.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let r=new J.InstancedInterleavedBuffer(t,6,1);return this.setAttribute("instanceStart",new J.InterleavedBufferAttribute(r,3,0)),this.setAttribute("instanceEnd",new J.InterleavedBufferAttribute(r,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let r=new J.InstancedInterleavedBuffer(t,6,1);return this.setAttribute("instanceColorStart",new J.InterleavedBufferAttribute(r,3,0)),this.setAttribute("instanceColorEnd",new J.InterleavedBufferAttribute(r,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new J.WireframeGeometry(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new J.Box3);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),ee.setFromBufferAttribute(t),this.boundingBox.union(ee))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new J.Sphere),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let r=this.boundingSphere.center;this.boundingBox.getCenter(r);let i=0;for(let s=0,n=e.count;s<n;s++)et.fromBufferAttribute(e,s),i=Math.max(i,r.distanceToSquared(et)),et.fromBufferAttribute(t,s),i=Math.max(i,r.distanceToSquared(et));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}let ei=new Y.Vector4,es=new Y.Vector3,en=new Y.Vector3,ea=new Y.Vector4,eo=new Y.Vector4,el=new Y.Vector4,ec=new Y.Vector3,eu=new Y.Matrix4,ed=new Y.Line3,eh=new Y.Vector3,ef=new Y.Box3,ep=new Y.Sphere,ev=new Y.Vector4;function em(e,t,i){return ev.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),ev.multiplyScalar(1/ev.w),ev.x=r/i.width,ev.y=r/i.height,ev.applyMatrix4(e.projectionMatrixInverse),ev.multiplyScalar(1/ev.w),Math.abs(Math.max(ev.x,ev.y))}class eg extends Y.Mesh{constructor(e=new er,t=new Z({color:0xffffff*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,r=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let e=0,s=0,n=t.count;e<n;e++,s+=2)es.fromBufferAttribute(t,e),en.fromBufferAttribute(r,e),i[s]=0===s?0:i[s-1],i[s+1]=i[s]+es.distanceTo(en);let s=new Y.InstancedInterleavedBuffer(i,2,1);return e.setAttribute("instanceDistanceStart",new Y.InterleavedBufferAttribute(s,1,0)),e.setAttribute("instanceDistanceEnd",new Y.InterleavedBufferAttribute(s,1,1)),this}raycast(e,i){let s,n,a=this.material.worldUnits,o=e.camera;if(null!==o||a||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),!1===a&&(0===this.material.resolution.x||0===this.material.resolution.y))return;let l=void 0!==e.params.Line2&&e.params.Line2.threshold||0;t=e.ray;let c=this.matrixWorld,u=this.geometry,d=this.material;if(r=d.linewidth+l,null===u.boundingSphere&&u.computeBoundingSphere(),ep.copy(u.boundingSphere).applyMatrix4(c),a)s=.5*r;else{let e=Math.max(o.near,ep.distanceToPoint(t.origin));s=em(o,e,d.resolution)}if(ep.radius+=s,!1!==t.intersectsSphere(ep)){if(null===u.boundingBox&&u.computeBoundingBox(),ef.copy(u.boundingBox).applyMatrix4(c),a)n=.5*r;else{let e=Math.max(o.near,ef.distanceToPoint(t.origin));n=em(o,e,d.resolution)}ef.expandByScalar(n),!1!==t.intersectsBox(ef)&&(a?function(e,i){let s=e.matrixWorld,n=e.geometry,a=n.attributes.instanceStart,o=n.attributes.instanceEnd,l=Math.min(n.instanceCount,a.count);for(let n=0;n<l;n++){ed.start.fromBufferAttribute(a,n),ed.end.fromBufferAttribute(o,n),ed.applyMatrix4(s);let l=new Y.Vector3,c=new Y.Vector3;t.distanceSqToSegment(ed.start,ed.end,c,l),c.distanceTo(l)<.5*r&&i.push({point:c,pointOnLine:l,distance:t.origin.distanceTo(c),object:e,face:null,faceIndex:n,uv:null,uv1:null})}}(this,i):function(e,i,s){let n=i.projectionMatrix,a=e.material.resolution,o=e.matrixWorld,l=e.geometry,c=l.attributes.instanceStart,u=l.attributes.instanceEnd,d=Math.min(l.instanceCount,c.count),h=-i.near;t.at(1,el),el.w=1,el.applyMatrix4(i.matrixWorldInverse),el.applyMatrix4(n),el.multiplyScalar(1/el.w),el.x*=a.x/2,el.y*=a.y/2,el.z=0,ec.copy(el),eu.multiplyMatrices(i.matrixWorldInverse,o);for(let i=0;i<d;i++){if(ea.fromBufferAttribute(c,i),eo.fromBufferAttribute(u,i),ea.w=1,eo.w=1,ea.applyMatrix4(eu),eo.applyMatrix4(eu),ea.z>h&&eo.z>h)continue;if(ea.z>h){let e=ea.z-eo.z,t=(ea.z-h)/e;ea.lerp(eo,t)}else if(eo.z>h){let e=eo.z-ea.z,t=(eo.z-h)/e;eo.lerp(ea,t)}ea.applyMatrix4(n),eo.applyMatrix4(n),ea.multiplyScalar(1/ea.w),eo.multiplyScalar(1/eo.w),ea.x*=a.x/2,ea.y*=a.y/2,eo.x*=a.x/2,eo.y*=a.y/2,ed.start.copy(ea),ed.start.z=0,ed.end.copy(eo),ed.end.z=0;let l=ed.closestPointToPointParameter(ec,!0);ed.at(l,eh);let d=Y.MathUtils.lerp(ea.z,eo.z,l),f=d>=-1&&d<=1,p=ec.distanceTo(eh)<.5*r;if(f&&p){ed.start.fromBufferAttribute(c,i),ed.end.fromBufferAttribute(u,i),ed.start.applyMatrix4(o),ed.end.applyMatrix4(o);let r=new Y.Vector3,n=new Y.Vector3;t.distanceSqToSegment(ed.start,ed.end,n,r),s.push({point:n,pointOnLine:r,distance:t.origin.distanceTo(n),object:e,face:null,faceIndex:i,uv:null,uv1:null})}}}(this,o,i))}}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(ei),this.material.uniforms.resolution.value.set(ei.z,ei.w))}}let ey=new u.Vector3,eS=new u.Vector3,ew=new u.Vector3,ex=new u.Vector3,eb=new u.Vector3,eE=(e,t,r)=>{let i=Math.min(1,Math.max(0,(e-t)/(r-t)));return i*i*(3-2*i)};function eT(e,t,r,i){r.toArray(e,6*t),i.toArray(e,6*t+3)}let eU=new u.Vector3,eA=new u.Vector3,eB=new u.Vector3,eM=new u.Vector3;function eR(e,t,r,i,s){eU.copy(r).addScaledVector(eb,-i*s),eA.copy(r).addScaledVector(eb,i*s),eT(e,t,eU,eA);let n=.045*eE(s,.85,1);eB.copy(eU).setY(eU.y-n),eM.copy(eU).setY(eU.y+n),eT(e,t+1,eB,eM),eB.copy(eA).setY(eA.y-n),eM.copy(eA).setY(eA.y+n),eT(e,t+2,eB,eM)}function eC({avatar:e}){let t=(0,c.useMemo)(()=>{let e=new er;e.setPositions(new Float32Array(36));let t=new eg(e,new Z({color:"#4DDAE9",linewidth:1.6,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}));return t.frustumCulled=!1,t.renderOrder=5,t.visible=!1,t},[]),r=(0,c.useRef)(null);return(0,c.useEffect)(()=>(r.current=t,()=>{r.current=null,t.geometry.dispose(),t.material.dispose()}),[t]),(0,l.useFrame)(({size:t})=>{let i=r.current;if(!i)return;let s=e.current,n=Math.min(1,2.2*h.sceneCover.ratio),a=d.experience.scenes.ratio.progress,o=eE(a,.3,.46);if(!s||n<=.01||o<=0){i.visible=!1;return}i.visible=!0,i.material.opacity=n,i.material.resolution.set(t.width,t.height),s.anchor("leftShoulder",ey),s.anchor("rightShoulder",eS),s.anchor("waist",ew);let l=ey.distanceTo(eS)/2+.07;eb.subVectors(ey,eS).normalize(),ex.addVectors(ey,eS).multiplyScalar(.5);let c=i.geometry.getAttribute("instanceStart"),u=c.data.array;eR(u,0,ex,l,o),eR(u,3,ew,l/1.618,eE(a,.4,.56)),c.data.needsUpdate=!0}),(0,a.jsx)("primitive",{object:t})}var e_=e.i(48546),eF=u,eD=(i=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),s=new Float32Array([0,0,2,0,0,2]),(n=new eF.BufferGeometry).setAttribute("position",new eF.BufferAttribute(i,3)),n.setAttribute("uv",new eF.BufferAttribute(s,2)),n),eP=class e{static get fullscreenGeometry(){return eD}constructor(e="Pass",t=new eF.Scene,r=new eF.OrthographicCamera){this.name=e,this.renderer=null,this.scene=t,this.camera=r,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){let t=this.fullscreenMaterial;null!==t&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return null!==this.screen?this.screen.material:null}set fullscreenMaterial(t){let r=this.screen;null!==r?r.material=t:((r=new eF.Mesh(e.fullscreenGeometry,t)).frustumCulled=!1,null===this.scene&&(this.scene=new eF.Scene),this.scene.add(r),this.screen=r)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=eF.BasicDepthPacking){}render(e,t,r,i,s){throw Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,r){}dispose(){for(let t of Object.keys(this)){let r=this[t];(r instanceof eF.WebGLRenderTarget||r instanceof eF.Material||r instanceof eF.Texture||r instanceof e)&&this[t].dispose()}null!==this.fullscreenMaterial&&this.fullscreenMaterial.dispose()}},ez=class extends eP{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(e,t,r,i,s){let n=e.state.buffers.stencil;n.setLocked(!1),n.setTest(!1)}},eI=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,ek="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",eO=class extends eF.ShaderMaterial{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new eF.Uniform(null),depthBuffer:new eF.Uniform(null),channelWeights:new eF.Uniform(null),opacity:new eF.Uniform(1)},blending:eF.NoBlending,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:eI,vertexShader:ek}),this.depthFunc=eF.AlwaysDepth}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(e){let t=null!==e;this.colorWrite!==t&&(t?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=t,this.needsUpdate=!0),this.uniforms.inputBuffer.value=e}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(e){let t=null!==e;this.depthWrite!==t&&(t?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=t,this.depthWrite=t,this.needsUpdate=!0),this.uniforms.depthBuffer.value=e}set depthPacking(e){this.defines.DEPTH_PACKING=e.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return void 0!==this.defines.COLOR_SPACE_CONVERSION}set colorSpaceConversion(e){this.colorSpaceConversion!==e&&(e?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(e){null!==e?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=e):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(e){this.uniforms.inputBuffer.value=e}getOpacity(e){return this.uniforms.opacity.value}setOpacity(e){this.uniforms.opacity.value=e}},eG=class extends eP{constructor(e,t=!0){super("CopyPass"),this.fullscreenMaterial=new eO,this.needsSwap=!1,this.renderTarget=e,void 0===e&&(this.renderTarget=new eF.WebGLRenderTarget(1,1,{minFilter:eF.LinearFilter,magFilter:eF.LinearFilter,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=t}get resize(){return this.autoResize}set resize(e){this.autoResize=e}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(e){this.autoResize=e}render(e,t,r,i,s){this.fullscreenMaterial.inputBuffer=t.texture,e.setRenderTarget(this.renderToScreen?null:this.renderTarget),e.render(this.scene,this.camera)}setSize(e,t){this.autoResize&&this.renderTarget.setSize(e,t)}initialize(e,t,r){void 0!==r&&(this.renderTarget.texture.type=r,r!==eF.UnsignedByteType?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":null!==e&&e.outputColorSpace===eF.SRGBColorSpace&&(this.renderTarget.texture.colorSpace=eF.SRGBColorSpace))}},eL=new eF.Color,eH=class extends eP{constructor(e=!0,t=!0,r=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=e,this.depth=t,this.stencil=r,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(e,t,r){this.color=e,this.depth=t,this.stencil=r}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(e){this.overrideClearColor=e}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(e){this.overrideClearAlpha=e}render(e,t,r,i,s){let n=this.overrideClearColor,a=this.overrideClearAlpha,o=e.getClearAlpha(),l=null!==n,c=a>=0;l?(e.getClearColor(eL),e.setClearColor(n,c?a:o)):c&&e.setClearAlpha(a),e.setRenderTarget(this.renderToScreen?null:t),e.clear(this.color,this.depth,this.stencil),l?e.setClearColor(eL,o):c&&e.setClearAlpha(o)}},eN=class extends eP{constructor(e,t){super("MaskPass",e,t),this.needsSwap=!1,this.clearPass=new eH(!1,!1,!0),this.inverse=!1}set mainScene(e){this.scene=e}set mainCamera(e){this.camera=e}get inverted(){return this.inverse}set inverted(e){this.inverse=e}get clear(){return this.clearPass.enabled}set clear(e){this.clearPass.enabled=e}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(e){this.inverted=e}render(e,t,r,i,s){let n=e.getContext(),a=e.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,u=+!this.inverted;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),a.stencil.setFunc(n.ALWAYS,u,0xffffffff),a.stencil.setClear(1-u),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(e,null):(c.render(e,t),c.render(e,r))),this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),e.render(o,l),e.setRenderTarget(r)),e.render(o,l),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(n.EQUAL,1,0xffffffff),a.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),a.stencil.setLocked(!0)}},eV=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(e){"u">typeof document&&void 0!==document.hidden&&(e?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=e)}get delta(){return .001*this._delta}get fixedDelta(){return .001*this._fixedDelta}set fixedDelta(e){this._fixedDelta=1e3*e}get elapsed(){return .001*this._elapsed}update(e){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(void 0!==e?e:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(e){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},eW=class{constructor(e=null,{depthBuffer:t=!0,stencilBuffer:r=!1,multisampling:i=0,frameBufferType:s=eF.UnsignedByteType}={}){this.renderer=null,this.inputBuffer=this.createBuffer(t,r,s,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new eG,this.depthRenderTarget=null,this.passes=[],this.timer=new eV,this.autoRenderToScreen=!0,this.setRenderer(e)}get stableDepthTexture(){return null===this.depthRenderTarget?null:this.depthRenderTarget.depthTexture}get multisampling(){return this.inputBuffer.samples}set multisampling(e){let t=null===this.renderer?e:function(e,t){let r=e.getContext();if(t<=0||"function"!=typeof r.renderbufferStorageMultisample)return 0;let i=Math.min(t,r.getParameter(r.MAX_SAMPLES));if(i<=0)return 0;let s=r.getParameter(r.RENDERBUFFER_BINDING),n=r.createRenderbuffer();try{return r.bindRenderbuffer(r.RENDERBUFFER,n),r.renderbufferStorageMultisample(r.RENDERBUFFER,i,r.RGBA8,1,1),i}catch(e){return 0}finally{r.bindRenderbuffer(r.RENDERBUFFER,s),r.deleteRenderbuffer(n)}}(this.renderer,e);this.multisampling!==t&&(this.inputBuffer.samples=t,this.outputBuffer.samples=t,this.inputBuffer.dispose(),this.outputBuffer.dispose())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(e){if(this.renderer=e,null!==e){let t=e.getSize(new eF.Vector2),r=e.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===eF.UnsignedByteType&&e.outputColorSpace===eF.SRGBColorSpace&&(this.inputBuffer.texture.colorSpace=eF.SRGBColorSpace,this.outputBuffer.texture.colorSpace=eF.SRGBColorSpace,this.inputBuffer.dispose(),this.outputBuffer.dispose());let s=this.multisampling;for(let n of(this.multisampling=s,e.autoClear=!1,this.setSize(t.width,t.height),this.passes))n.initialize(e,r,i)}}replaceRenderer(e,t=!0){let r=this.renderer,i=r.domElement.parentNode;return this.setRenderer(e),t&&null!==i&&(i.removeChild(r.domElement),i.appendChild(e.domElement)),r}createDepthTexture(){let e=new eF.DepthTexture;e.name="EffectComposer.InputDepth",this.inputBuffer.stencilBuffer?(e.format=eF.DepthStencilFormat,e.type=eF.UnsignedInt248Type):e.type=eF.FloatType;let t=new eF.DepthTexture;t.format=e.format,t.type=e.type,t.name="EffectComposer.OutputDepth";let r=new eF.DepthTexture;r.format=e.format,r.type=e.type,r.name="EffectComposer.StableDepth",this.inputBuffer.depthTexture=e,this.outputBuffer.depthTexture=t,this.inputBuffer.dispose(),this.outputBuffer.dispose();let{width:i,height:s}=this.inputBuffer;this.depthRenderTarget=new eF.WebGLRenderTarget(i,s,{depthBuffer:!0,stencilBuffer:this.inputBuffer.stencilBuffer,depthTexture:r})}blitDepthBuffer(e){let t=this.renderer,r=this.depthRenderTarget,i=t.properties,s=t.getContext();t.setRenderTarget(r);let n=i.get(e).__webglFramebuffer,a=i.get(r).__webglFramebuffer,o=e.stencilBuffer?s.DEPTH_BUFFER_BIT|s.STENCIL_BUFFER_BIT:s.DEPTH_BUFFER_BIT;s.bindFramebuffer(s.READ_FRAMEBUFFER,n),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,a),s.blitFramebuffer(0,0,e.width,e.height,0,0,r.width,r.height,o,s.NEAREST),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),t.setRenderTarget(null)}deleteDepthTexture(){let e=this.stableDepthTexture;for(let t of this.passes)t.getDepthTexture()===e&&t.setDepthTexture(null);null!==this.depthRenderTarget&&(this.depthRenderTarget.dispose(),this.depthRenderTarget=null),null!==this.inputBuffer.depthTexture&&(this.inputBuffer.depthTexture.dispose(),this.inputBuffer.depthTexture=null),null!==this.outputBuffer.depthTexture&&(this.outputBuffer.depthTexture.dispose(),this.outputBuffer.depthTexture=null)}createBuffer(e,t,r,i){let s=this.renderer,n=null===s?new eF.Vector2:s.getDrawingBufferSize(new eF.Vector2),a=new eF.WebGLRenderTarget(n.width,n.height,{minFilter:eF.LinearFilter,magFilter:eF.LinearFilter,samples:i,stencilBuffer:t,depthBuffer:e,type:r});return r===eF.UnsignedByteType&&null!==s&&s.outputColorSpace===eF.SRGBColorSpace&&(a.texture.colorSpace=eF.SRGBColorSpace),a.texture.name="EffectComposer.Buffer",a.texture.generateMipmaps=!1,a}setMainScene(e){for(let t of this.passes)t.mainScene=e}setMainCamera(e){for(let t of this.passes)t.mainCamera=e}addPass(e,t){let r=this.passes,i=this.renderer,s=i.getDrawingBufferSize(new eF.Vector2),n=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(e.renderer=i,e.setSize(s.width,s.height),e.initialize(i,n,a),this.autoRenderToScreen&&(r.length>0&&(r[r.length-1].renderToScreen=!1),e.renderToScreen&&(this.autoRenderToScreen=!1)),void 0!==t?r.splice(t,0,e):r.push(e),this.autoRenderToScreen&&(r[r.length-1].renderToScreen=!0),e.needsDepthTexture||null!==this.depthRenderTarget)if(null===this.depthRenderTarget)for(let e of(this.createDepthTexture(),r))e.setDepthTexture(this.stableDepthTexture);else e.setDepthTexture(this.stableDepthTexture)}removePass(e){let t=this.passes,r=t.indexOf(e);if(-1!==r&&t.splice(r,1).length>0){let i=this.stableDepthTexture;null!==i&&(t.reduce((e,t)=>e||t.needsDepthTexture,!1)||(e.getDepthTexture()===i&&e.setDepthTexture(null),this.deleteDepthTexture())),this.autoRenderToScreen&&r===t.length&&(e.renderToScreen=!1,t.length>0&&(t[t.length-1].renderToScreen=!0))}}removeAllPasses(){let e=this.passes;this.deleteDepthTexture(),e.length>0&&(this.autoRenderToScreen&&(e[e.length-1].renderToScreen=!1),this.passes=[])}render(e){let t,r=this.renderer,i=this.copyPass,s=this.inputBuffer,n=this.outputBuffer,a=!1;for(let o of(void 0===e&&(this.timer.update(),e=this.timer.getDelta()),this.passes))if(o.enabled){if(o.render(r,s,n,e,a),o.needsDepthBlit&&null!==this.depthRenderTarget&&this.blitDepthBuffer(s),o.needsSwap){if(a){i.renderToScreen=o.renderToScreen;let t=r.getContext(),l=r.state.buffers.stencil;l.setFunc(t.NOTEQUAL,1,0xffffffff),i.render(r,s,n,e,a),l.setFunc(t.EQUAL,1,0xffffffff)}t=s,s=n,n=t}o instanceof eN?a=!0:o instanceof ez&&(a=!1)}}setSize(e,t,r){let i=this.renderer,s=i.getSize(new eF.Vector2);(void 0===e||void 0===t)&&(e=s.width,t=s.height),(s.width!==e||s.height!==t)&&i.setSize(e,t,r);let n=i.getDrawingBufferSize(new eF.Vector2);for(let e of(this.inputBuffer.setSize(n.width,n.height),this.outputBuffer.setSize(n.width,n.height),null!==this.depthRenderTarget&&this.depthRenderTarget.setSize(n.width,n.height),this.passes))e.setSize(n.width,n.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(let e of this.passes)e.dispose();this.deleteDepthTexture(),this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.copyPass.dispose(),this.timer.dispose(),this.passes=[],eP.fullscreenGeometry.dispose()}},ej={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},eK=class{constructor(){this.shaderParts=new Map([[ej.FRAGMENT_HEAD,null],[ej.FRAGMENT_MAIN_UV,null],[ej.FRAGMENT_MAIN_IMAGE,null],[ej.VERTEX_HEAD,null],[ej.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=0,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=eF.LinearSRGBColorSpace}},eX=!1,eq=class{constructor(e=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(e),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case eF.DoubleSide:t=this.materialsFlatShadedDoubleSide;break;case eF.BackSide:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded}else switch(e.material.side){case eF.DoubleSide:t=this.materialsDoubleSide;break;case eF.BackSide:t=this.materialsBackSide;break;default:t=this.materials}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(e){if(!(e instanceof eF.ShaderMaterial))return e.clone();let t=e.uniforms,r=new Map;for(let e in t){let i=t[e].value;i.isRenderTargetTexture&&(t[e].value=null,r.set(e,i))}let i=e.clone();for(let e of r)t[e[0]].value=e[1],i.uniforms[e[0]].value=e[1];return i}setMaterial(e){if(this.disposeMaterials(),this.material=e,null!==e){let t=this.materials=[this.cloneMaterial(e),this.cloneMaterial(e),this.cloneMaterial(e)];for(let r of t)r.uniforms=Object.assign({},e.uniforms),r.side=eF.FrontSide;t[2].skinning=!0,this.materialsBackSide=t.map(t=>{let r=this.cloneMaterial(t);return r.uniforms=Object.assign({},e.uniforms),r.side=eF.BackSide,r}),this.materialsDoubleSide=t.map(t=>{let r=this.cloneMaterial(t);return r.uniforms=Object.assign({},e.uniforms),r.side=eF.DoubleSide,r}),this.materialsFlatShaded=t.map(t=>{let r=this.cloneMaterial(t);return r.uniforms=Object.assign({},e.uniforms),r.flatShading=!0,r}),this.materialsFlatShadedBackSide=t.map(t=>{let r=this.cloneMaterial(t);return r.uniforms=Object.assign({},e.uniforms),r.flatShading=!0,r.side=eF.BackSide,r}),this.materialsFlatShadedDoubleSide=t.map(t=>{let r=this.cloneMaterial(t);return r.uniforms=Object.assign({},e.uniforms),r.flatShading=!0,r.side=eF.DoubleSide,r})}}render(e,t,r){let i=e.shadowMap.enabled;if(e.shadowMap.enabled=!1,eX){let i=this.originalMaterials;for(let s of(this.meshCount=0,t.traverse(this.replaceMaterial),e.render(t,r),i))s[0].material=s[1];this.meshCount!==i.size&&i.clear()}else{let i=t.overrideMaterial;t.overrideMaterial=this.material,e.render(t,r),t.overrideMaterial=i}e.shadowMap.enabled=i}disposeMaterials(){if(null!==this.material)for(let e of this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide))e.dispose()}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return eX}static set workaroundEnabled(e){eX=e}},eQ=class extends eF.EventDispatcher{constructor(e=null,t=-1,r=-1,i=1){super(),null!==e&&this.addEventListener("change",()=>e.setSize(this.baseSize.width,this.baseSize.height)),this.baseSize=new eF.Vector2(1,1),this.preferredSize=new eF.Vector2(t,r),this.target=this.preferredSize,this.s=i,this.effectiveSize=new eF.Vector2,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){let e=this.baseSize,t=this.preferredSize,r=this.effectiveSize,i=this.scale;-1!==t.width?r.width=t.width:-1!==t.height?r.width=Math.round(t.height*(e.width/Math.max(e.height,1))):r.width=Math.round(e.width*i),-1!==t.height?r.height=t.height:-1!==t.width?r.height=Math.round(t.width/Math.max(e.width/Math.max(e.height,1),1)):r.height=Math.round(e.height*i)}get width(){return this.effectiveSize.width}set width(e){this.preferredWidth=e}get height(){return this.effectiveSize.height}set height(e){this.preferredHeight=e}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(e){this.s!==e&&(this.s=e,this.preferredSize.setScalar(-1),this.dispatchEvent({type:"change"}))}getScale(){return this.scale}setScale(e){this.scale=e}get baseWidth(){return this.baseSize.width}set baseWidth(e){this.baseSize.width!==e&&(this.baseSize.width=e,this.dispatchEvent({type:"change"}))}getBaseWidth(){return this.baseWidth}setBaseWidth(e){this.baseWidth=e}get baseHeight(){return this.baseSize.height}set baseHeight(e){this.baseSize.height!==e&&(this.baseSize.height=e,this.dispatchEvent({type:"change"}))}getBaseHeight(){return this.baseHeight}setBaseHeight(e){this.baseHeight=e}setBaseSize(e,t){(this.baseSize.width!==e||this.baseSize.height!==t)&&(this.baseSize.set(e,t),this.dispatchEvent({type:"change"}))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(e){this.preferredSize.width!==e&&(this.preferredSize.width=e,this.dispatchEvent({type:"change"}))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(e){this.preferredWidth=e}get preferredHeight(){return this.preferredSize.height}set preferredHeight(e){this.preferredSize.height!==e&&(this.preferredSize.height=e,this.dispatchEvent({type:"change"}))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(e){this.preferredHeight=e}setPreferredSize(e,t){(this.preferredSize.width!==e||this.preferredSize.height!==t)&&(this.preferredSize.set(e,t),this.dispatchEvent({type:"change"}))}copy(e){this.s=e.scale,this.baseSize.set(e.baseWidth,e.baseHeight),this.preferredSize.set(e.preferredWidth,e.preferredHeight),this.dispatchEvent({type:"change"})}static get AUTO_SIZE(){return -1}},e$=new Map([[0,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}"],[1,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}"],[2,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}"],[3,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}"],[4,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}"],[5,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}"],[6,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}"],[7,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}"],[8,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}"],[9,null],[10,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}"],[11,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}"],[12,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}"],[13,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}"],[14,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}"],[15,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}"],[16,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}"],[17,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}"],[18,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}"],[19,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}"],[20,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}"],[21,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}"],[22,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}"],[23,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}"],[24,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}"],[25,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}"],[26,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}"],[27,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}"],[28,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}"],[29,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}"],[30,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}"],[31,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}"],[32,"vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}"]]),eZ=class extends eF.EventDispatcher{constructor(e,t=1){super(),this._blendFunction=e,this.opacity=new eF.Uniform(t)}getOpacity(){return this.opacity.value}setOpacity(e){this.opacity.value=e}get blendFunction(){return this._blendFunction}set blendFunction(e){this._blendFunction=e,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(e){this.blendFunction=e}getShaderCode(){return e$.get(this.blendFunction)}};eF.CanvasTexture;var eY=class extends eF.EventDispatcher{constructor(e,t,{attributes:r=0,blendFunction:i=23,defines:s=new Map,uniforms:n=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=e,this.renderer=null,this.attributes=r,this.fragmentShader=t,this.vertexShader=o,this.defines=s,this.uniforms=n,this.extensions=a,this.blendMode=new eZ(i),this.blendMode.addEventListener("change",e=>this.setChanged()),this._inputColorSpace=eF.LinearSRGBColorSpace,this._outputColorSpace=eF.NoColorSpace}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(e){this._inputColorSpace=e,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e,this.setChanged()}set mainScene(e){}set mainCamera(e){}getName(){return this.name}setRenderer(e){this.renderer=e}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(e){this.attributes=e,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(e){this.fragmentShader=e,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(e){this.vertexShader=e,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(e,t=eF.BasicDepthPacking){}update(e,t,r){}setSize(e,t){}initialize(e,t,r){}dispose(){for(let e of Object.keys(this)){let t=this[e];(t instanceof eF.WebGLRenderTarget||t instanceof eF.Material||t instanceof eF.Texture||t instanceof eP)&&this[e].dispose()}}},eJ=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,e0=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],e1=class extends eF.ShaderMaterial{constructor(e=new eF.Vector4){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new eF.Uniform(null),texelSize:new eF.Uniform(new eF.Vector4),scale:new eF.Uniform(1),kernel:new eF.Uniform(0)},blending:eF.NoBlending,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:eJ,vertexShader:"uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}"}),this.setTexelSize(e.x,e.y),this.kernelSize=2}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setInputBuffer(e){this.inputBuffer=e}get kernelSequence(){return e0[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(e){this.uniforms.scale.value=e}getScale(){return this.uniforms.scale.value}setScale(e){this.uniforms.scale.value=e}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(e){this.uniforms.kernel.value=e}setKernel(e){this.kernel=e}setTexelSize(e,t){this.uniforms.texelSize.value.set(e,t,.5*e,.5*t)}setSize(e,t){let r=1/e,i=1/t;this.uniforms.texelSize.value.set(r,i,.5*r,.5*i)}},e2=class extends eP{constructor({kernelSize:e=2,resolutionScale:t=.5,width:r=eQ.AUTO_SIZE,height:i=eQ.AUTO_SIZE,resolutionX:s=r,resolutionY:n=i}={}){super("KawaseBlurPass"),this.renderTargetA=new eF.WebGLRenderTarget(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const a=this.resolution=new eQ(this,s,n,t);a.addEventListener("change",e=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new e1,this._blurMaterial.kernelSize=e,this.copyMaterial=new eO}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(e){this._blurMaterial=e}get dithering(){return this.copyMaterial.dithering}set dithering(e){this.copyMaterial.dithering=e}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(e){this.blurMaterial.kernelSize=e}get width(){return this.resolution.width}set width(e){this.resolution.preferredWidth=e}get height(){return this.resolution.height}set height(e){this.resolution.preferredHeight=e}get scale(){return this.blurMaterial.scale}set scale(e){this.blurMaterial.scale=e}getScale(){return this.blurMaterial.scale}setScale(e){this.blurMaterial.scale=e}getKernelSize(){return this.kernelSize}setKernelSize(e){this.kernelSize=e}getResolutionScale(){return this.resolution.scale}setResolutionScale(e){this.resolution.scale=e}render(e,t,r,i,s){let n=this.scene,a=this.camera,o=this.renderTargetA,l=this.renderTargetB,c=this.blurMaterial,u=c.kernelSequence,d=t;this.fullscreenMaterial=c;for(let t=0,r=u.length;t<r;++t){let r=(1&t)==0?o:l;c.kernel=u[t],c.inputBuffer=d.texture,e.setRenderTarget(r),e.render(n,a),d=r}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=d.texture,e.setRenderTarget(this.renderToScreen?null:r),e.render(n,a)}setSize(e,t){let r=this.resolution;r.setBaseSize(e,t);let i=r.width,s=r.height;this.renderTargetA.setSize(i,s),this.renderTargetB.setSize(i,s),this.blurMaterial.setSize(e,t)}initialize(e,t,r){void 0!==r&&(this.renderTargetA.texture.type=r,this.renderTargetB.texture.type=r,r!==eF.UnsignedByteType?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):null!==e&&e.outputColorSpace===eF.SRGBColorSpace&&(this.renderTargetA.texture.colorSpace=eF.SRGBColorSpace,this.renderTargetB.texture.colorSpace=eF.SRGBColorSpace))}static get AUTO_SIZE(){return eQ.AUTO_SIZE}},e3=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,e4=class extends eF.ShaderMaterial{constructor(e=!1,t=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:eF.REVISION.replace(/\D+/g,"")},uniforms:{inputBuffer:new eF.Uniform(null),threshold:new eF.Uniform(0),smoothing:new eF.Uniform(1),range:new eF.Uniform(null)},blending:eF.NoBlending,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:e3,vertexShader:ek}),this.colorOutput=e,this.luminanceRange=t}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setInputBuffer(e){this.uniforms.inputBuffer.value=e}get threshold(){return this.uniforms.threshold.value}set threshold(e){this.smoothing>0||e>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=e}getThreshold(){return this.threshold}setThreshold(e){this.threshold=e}get smoothing(){return this.uniforms.smoothing.value}set smoothing(e){this.threshold>0||e>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=e}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(e){this.smoothing=e}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(e){}get colorOutput(){return void 0!==this.defines.COLOR}set colorOutput(e){e?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(e){return this.colorOutput}setColorOutputEnabled(e){this.colorOutput=e}get useRange(){return null!==this.luminanceRange}set useRange(e){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(e){null!==e?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=e,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(e){this.luminanceRange=e}},e5=class extends eP{constructor({renderTarget:e,luminanceRange:t,colorOutput:r,resolutionScale:i=1,width:s=eQ.AUTO_SIZE,height:n=eQ.AUTO_SIZE,resolutionX:a=s,resolutionY:o=n}={}){super("LuminancePass"),this.fullscreenMaterial=new e4(r,t),this.needsSwap=!1,this.renderTarget=e,void 0===this.renderTarget&&(this.renderTarget=new eF.WebGLRenderTarget(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const l=this.resolution=new eQ(this,a,o,i);l.addEventListener("change",e=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(e,t,r,i,s){this.fullscreenMaterial.inputBuffer=t.texture,e.setRenderTarget(this.renderToScreen?null:this.renderTarget),e.render(this.scene,this.camera)}setSize(e,t){let r=this.resolution;r.setBaseSize(e,t),this.renderTarget.setSize(r.width,r.height)}initialize(e,t,r){void 0!==r&&r!==eF.UnsignedByteType&&(this.renderTarget.texture.type=r,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},e6=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,e8=class extends eF.ShaderMaterial{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new eF.Uniform(null),texelSize:new eF.Uniform(new eF.Vector2)},blending:eF.NoBlending,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:e6,vertexShader:"uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}"})}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}},e7=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,e9=class extends eF.ShaderMaterial{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new eF.Uniform(null),supportBuffer:new eF.Uniform(null),texelSize:new eF.Uniform(new eF.Vector2),radius:new eF.Uniform(.85)},blending:eF.NoBlending,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:e7,vertexShader:"uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}"})}set inputBuffer(e){this.uniforms.inputBuffer.value=e}set supportBuffer(e){this.uniforms.supportBuffer.value=e}get radius(){return this.uniforms.radius.value}set radius(e){this.uniforms.radius.value=e}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}},te=class extends eP{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new eF.WebGLRenderTarget(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new e8,this.upsamplingMaterial=new e9,this.resolution=new eF.Vector2}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(e){if(this.levels!==e){let t=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let r=0;r<e;++r){let e=t.clone();e.texture.name="Downsampling.Mipmap"+r,this.downsamplingMipmaps.push(e)}this.upsamplingMipmaps.push(t);for(let r=1,i=e-1;r<i;++r){let e=t.clone();e.texture.name="Upsampling.Mipmap"+r,this.upsamplingMipmaps.push(e)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(e){this.upsamplingMaterial.radius=e}render(e,t,r,i,s){let{scene:n,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:l}=this,{downsamplingMipmaps:c,upsamplingMipmaps:u}=this,d=t;this.fullscreenMaterial=o;for(let t=0,r=c.length;t<r;++t){let r=c[t];o.setSize(d.width,d.height),o.inputBuffer=d.texture,e.setRenderTarget(r),e.render(n,a),d=r}this.fullscreenMaterial=l;for(let t=u.length-1;t>=0;--t){let r=u[t];l.setSize(d.width,d.height),l.inputBuffer=d.texture,l.supportBuffer=c[t].texture,e.setRenderTarget(r),e.render(n,a),d=r}}setSize(e,t){let r=this.resolution;r.set(e,t);let i=r.width,s=r.height;for(let e=0,t=this.downsamplingMipmaps.length;e<t;++e)i=Math.round(.5*i),s=Math.round(.5*s),this.downsamplingMipmaps[e].setSize(i,s),e<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[e].setSize(i,s)}initialize(e,t,r){if(void 0!==r){let t=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(let e of t)e.texture.type=r;if(r!==eF.UnsignedByteType)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(null!==e&&e.outputColorSpace===eF.SRGBColorSpace)for(let e of t)e.texture.colorSpace=eF.SRGBColorSpace}}dispose(){for(let e of(super.dispose(),this.downsamplingMipmaps.concat(this.upsamplingMipmaps)))e.dispose()}},tt=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,tr=class extends eY{constructor({blendFunction:e=28,luminanceThreshold:t=1,luminanceSmoothing:r=.03,mipmapBlur:i=!0,intensity:s=1,radius:n=.85,levels:a=8,kernelSize:o=3,resolutionScale:l=.5,width:c=eQ.AUTO_SIZE,height:u=eQ.AUTO_SIZE,resolutionX:d=c,resolutionY:h=u}={}){super("BloomEffect",tt,{blendFunction:e,uniforms:new Map([["map",new eF.Uniform(null)],["intensity",new eF.Uniform(s)]])}),this.renderTarget=new eF.WebGLRenderTarget(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new e2({kernelSize:o}),this.luminancePass=new e5({colorOutput:!0}),this.luminanceMaterial.threshold=t,this.luminanceMaterial.smoothing=r,this.mipmapBlurPass=new te,this.mipmapBlurPass.enabled=i,this.mipmapBlurPass.radius=n,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=i?this.mipmapBlurPass.texture:this.renderTarget.texture;const f=this.resolution=new eQ(this,d,h,l);f.addEventListener("change",e=>this.setSize(f.baseWidth,f.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(e){this.resolution.preferredWidth=e}get height(){return this.resolution.height}set height(e){this.resolution.preferredHeight=e}get dithering(){return this.blurPass.dithering}set dithering(e){this.blurPass.dithering=e}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(e){this.blurPass.kernelSize=e}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(e){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(e){this.uniforms.get("intensity").value=e}getIntensity(){return this.intensity}setIntensity(e){this.intensity=e}getResolutionScale(){return this.resolution.scale}setResolutionScale(e){this.resolution.scale=e}update(e,t,r){let i=this.renderTarget,s=this.luminancePass;s.enabled?(s.render(e,t),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(e,s.renderTarget):this.blurPass.render(e,s.renderTarget,i)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(e,t):this.blurPass.render(e,t,i)}setSize(e,t){let r=this.resolution;r.setBaseSize(e,t),this.renderTarget.setSize(r.width,r.height),this.blurPass.resolution.copy(r),this.luminancePass.setSize(e,t),this.mipmapBlurPass.setSize(e,t)}initialize(e,t,r){this.blurPass.initialize(e,t,r),this.luminancePass.initialize(e,t,r),this.mipmapBlurPass.initialize(e,t,r),void 0!==r&&(this.renderTarget.texture.type=r,null!==e&&e.outputColorSpace===eF.SRGBColorSpace&&(this.renderTarget.texture.colorSpace=eF.SRGBColorSpace))}};eF.ShaderMaterial;eF.ShaderMaterial;eF.ShaderMaterial,eF.DataTexture;eF.ShaderMaterial;var ti=class extends eP{constructor(e,t,r=null){super("RenderPass",e,t),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new eH,this.overrideMaterialManager=null===r?null:new eq(r),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(e){this.scene=e}set mainCamera(e){this.camera=e}get renderToScreen(){return super.renderToScreen}set renderToScreen(e){super.renderToScreen=e,this.clearPass.renderToScreen=e}get overrideMaterial(){let e=this.overrideMaterialManager;return null!==e?e.material:null}set overrideMaterial(e){let t=this.overrideMaterialManager;null!==e?null!==t?t.setMaterial(e):this.overrideMaterialManager=new eq(e):null!==t&&(t.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(e){this.overrideMaterial=e}get clear(){return this.clearPass.enabled}set clear(e){this.clearPass.enabled=e}getSelection(){return this.selection}setSelection(e){this.selection=e}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(e){this.ignoreBackground=e}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(e){this.skipShadowMapUpdate=e}getClearPass(){return this.clearPass}render(e,t,r,i,s){let n=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=n.background,u=e.shadowMap.autoUpdate,d=this.renderToScreen?null:t;null!==o&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(e.shadowMap.autoUpdate=!1),(this.ignoreBackground||null!==this.clearPass.overrideClearColor)&&(n.background=null),this.clearPass.enabled&&this.clearPass.render(e,t),e.setRenderTarget(d),null!==this.overrideMaterialManager?this.overrideMaterialManager.render(e,n,a):e.render(n,a),a.layers.mask=l,n.background=c,e.shadowMap.autoUpdate=u}},ts=new eF.Color,tn=(eF.Data3DTexture,`void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 noise=vec3(rand(uv*(1.0+time)));
#ifdef PREMULTIPLY
outputColor=vec4(min(inputColor.rgb*noise,vec3(1.0)),inputColor.a);
#else
outputColor=vec4(noise,inputColor.a);
#endif
}`),ta=class extends eY{constructor({blendFunction:e=28,premultiply:t=!1}={}){super("NoiseEffect",tn,{blendFunction:e}),this.premultiply=t}get premultiply(){return this.defines.has("PREMULTIPLY")}set premultiply(e){this.premultiply!==e&&(e?this.defines.set("PREMULTIPLY","1"):this.defines.delete("PREMULTIPLY"),this.setChanged())}isPremultiplied(){return this.premultiply}setPremultiplied(e){this.premultiply=e}};eF.ShaderMaterial,eF.ShaderMaterial;eF.ShaderMaterial;eF.ShaderMaterial;eF.ShaderMaterial;eF.ShaderMaterial;eF.ShaderMaterial;eF.ShaderMaterial;var to=`uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`,tl=class extends eY{constructor({blendFunction:e,eskil:t=!1,technique:r=1*!!t,offset:i=.5,darkness:s=.5}={}){super("VignetteEffect",to,{blendFunction:e,defines:new Map([["VIGNETTE_TECHNIQUE",r.toFixed(0)]]),uniforms:new Map([["offset",new eF.Uniform(i)],["darkness",new eF.Uniform(s)]])})}get technique(){return Number(this.defines.get("VIGNETTE_TECHNIQUE"))}set technique(e){this.technique!==e&&(this.defines.set("VIGNETTE_TECHNIQUE",e.toFixed(0)),this.setChanged())}get eskil(){return 1===this.technique}set eskil(e){this.technique=1*!!e}getTechnique(){return this.technique}setTechnique(e){this.technique=e}get offset(){return this.uniforms.get("offset").value}set offset(e){this.uniforms.get("offset").value=e}getOffset(){return this.offset}setOffset(e){this.offset=e}get darkness(){return this.uniforms.get("darkness").value}set darkness(e){this.uniforms.get("darkness").value=e}getDarkness(){return this.darkness}setDarkness(e){this.darkness=e}};eF.Loader,eF.Loader,eF.Loader;eF.ShaderMaterial;eF.ShaderMaterial;var tc=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,tu=class extends eF.ShaderMaterial{constructor(e,t,r,i,s=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:eF.REVISION.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new eF.Uniform(null),depthBuffer:new eF.Uniform(null),resolution:new eF.Uniform(new eF.Vector2),texelSize:new eF.Uniform(new eF.Vector2),cameraNear:new eF.Uniform(.3),cameraFar:new eF.Uniform(1e3),aspect:new eF.Uniform(1),time:new eF.Uniform(0)},blending:eF.NoBlending,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:s}),e&&this.setShaderParts(e),t&&this.setDefines(t),r&&this.setUniforms(r),this.copyCameraSettings(i)}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setInputBuffer(e){this.uniforms.inputBuffer.value=e}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(e){this.uniforms.depthBuffer.value=e}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(e){this.defines.DEPTH_PACKING=e.toFixed(0),this.needsUpdate=!0}setDepthBuffer(e,t=eF.BasicDepthPacking){this.depthBuffer=e,this.depthPacking=t}setShaderData(e){this.setShaderParts(e.shaderParts),this.setDefines(e.defines),this.setUniforms(e.uniforms),this.setExtensions(e.extensions)}setShaderParts(e){return this.fragmentShader=tc.replace(ej.FRAGMENT_HEAD,e.get(ej.FRAGMENT_HEAD)||"").replace(ej.FRAGMENT_MAIN_UV,e.get(ej.FRAGMENT_MAIN_UV)||"").replace(ej.FRAGMENT_MAIN_IMAGE,e.get(ej.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}".replace(ej.VERTEX_HEAD,e.get(ej.VERTEX_HEAD)||"").replace(ej.VERTEX_MAIN_SUPPORT,e.get(ej.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(e){for(let t of e.entries())this.defines[t[0]]=t[1];return this.needsUpdate=!0,this}setUniforms(e){for(let t of e.entries())this.uniforms[t[0]]=t[1];return this}setExtensions(e){for(let t of(this.extensions={},e))this.extensions[t]=!0;return this}get encodeOutput(){return void 0!==this.defines.ENCODE_OUTPUT}set encodeOutput(e){this.encodeOutput!==e&&(e?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(e){return this.encodeOutput}setOutputEncodingEnabled(e){this.encodeOutput=e}get time(){return this.uniforms.time.value}set time(e){this.uniforms.time.value=e}setDeltaTime(e){this.uniforms.time.value+=e}adoptCameraSettings(e){this.copyCameraSettings(e)}copyCameraSettings(e){e&&(this.uniforms.cameraNear.value=e.near,this.uniforms.cameraFar.value=e.far,e instanceof eF.PerspectiveCamera?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(e,t){let r=this.uniforms;r.resolution.value.set(e,t),r.texelSize.value.set(1/e,1/t),r.aspect.value=e/t}static get Section(){return ej}};eF.ShaderMaterial,eF.REVISION.replace(/\D+/g,"");var td=255/256;function th(e,t,r){for(let i of t){let t="$1"+e+i.charAt(0).toUpperCase()+i.slice(1),s=RegExp("([^\\.])(\\b"+i+"\\b)","g");for(let e of r.entries())null!==e[1]&&r.set(e[0],e[1].replace(s,t))}}new Float32Array([255/256/0x1000000,255/256/65536,255/256/256,255/256]),new Float32Array([td,td/256,td/65536,1/0x1000000]);var tf=class extends eP{constructor(e,...t){super("EffectPass"),this.fullscreenMaterial=new tu(null,null,null,e),this.listener=e=>this.handleEvent(e),this.effects=[],this.setEffects(t),this.skipRendering=!1,this.minTime=1,this.maxTime=1/0,this.timeScale=1}set mainScene(e){for(let t of this.effects)t.mainScene=e}set mainCamera(e){for(let t of(this.fullscreenMaterial.copyCameraSettings(e),this.effects))t.mainCamera=e}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(e){this.fullscreenMaterial.encodeOutput=e}get dithering(){return this.fullscreenMaterial.dithering}set dithering(e){let t=this.fullscreenMaterial;t.dithering=e,t.needsUpdate=!0}setEffects(e){for(let e of this.effects)e.removeEventListener("change",this.listener);for(let t of(this.effects=e.sort((e,t)=>t.attributes-e.attributes),this.effects))t.addEventListener("change",this.listener)}updateMaterial(){let e=new eK,t=0;for(let r of this.effects)if(9===r.blendMode.blendFunction)e.attributes|=1&r.getAttributes();else if((e.attributes&r.getAttributes()&2)!=0)throw Error(`Convolution effects cannot be merged (${r.name})`);else!function(e,t,r){let i=t.getFragmentShader(),s=t.getVertexShader(),n=void 0!==i&&/mainImage/.test(i),a=void 0!==i&&/mainUv/.test(i);if(r.attributes|=t.getAttributes(),void 0===i)throw Error(`Missing fragment shader (${t.name})`);if(a&&(2&r.attributes)!=0)throw Error(`Effects that transform UVs are incompatible with convolution effects (${t.name})`);if(n||a){let o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=r.shaderParts,c=l.get(ej.FRAGMENT_HEAD)||"",u=l.get(ej.FRAGMENT_MAIN_UV)||"",d=l.get(ej.FRAGMENT_MAIN_IMAGE)||"",h=l.get(ej.VERTEX_HEAD)||"",f=l.get(ej.VERTEX_MAIN_SUPPORT)||"",p=new Set,v=new Set;if(a&&(u+=`	${e}MainUv(UV);
`,r.uvTransformation=!0),null!==s&&/mainSupport/.test(s)){let t=/mainSupport *\([\w\s]*?uv\s*?\)/.test(s);for(let i of(f+=`	${e}MainSupport(`,f+=t?"vUv);\n":");\n",s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g)))for(let e of i[1].split(/\s*,\s*/))r.varyings.add(e),p.add(e),v.add(e);for(let e of s.matchAll(o))v.add(e[1])}for(let e of i.matchAll(o))v.add(e[1]);for(let e of t.defines.keys())v.add(e.replace(/\([\w\s,]*\)/g,""));for(let e of t.uniforms.keys())v.add(e);v.delete("while"),v.delete("for"),v.delete("if"),t.uniforms.forEach((t,i)=>r.uniforms.set(e+i.charAt(0).toUpperCase()+i.slice(1),t)),t.defines.forEach((t,i)=>r.defines.set(e+i.charAt(0).toUpperCase()+i.slice(1),t));let m=new Map([["fragment",i],["vertex",s]]);th(e,v,r.defines),th(e,v,m),i=m.get("fragment"),s=m.get("vertex");let g=t.blendMode;if(r.blendModes.set(g.blendFunction,g),n){null!==t.inputColorSpace&&t.inputColorSpace!==r.colorSpace&&(d+=t.inputColorSpace===eF.SRGBColorSpace?"color0 = sRGBTransferOETF(color0);\n	":"color0 = sRGBToLinear(color0);\n	"),t.outputColorSpace!==eF.NoColorSpace?r.colorSpace=t.outputColorSpace:null!==t.inputColorSpace&&(r.colorSpace=t.inputColorSpace),d+=`${e}MainImage(color0, UV, `,(1&r.attributes)!=0&&/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/.test(i)&&(d+="depth, ",r.readDepth=!0),d+="color1);\n	";let s=e+"BlendOpacity";r.uniforms.set(s,g.opacity),d+=`color0 = blend${g.blendFunction}(color0, color1, ${s});

	`,c+=`uniform float ${s};

`}if(c+=i+"\n",null!==s&&(h+=s+"\n"),l.set(ej.FRAGMENT_HEAD,c),l.set(ej.FRAGMENT_MAIN_UV,u),l.set(ej.FRAGMENT_MAIN_IMAGE,d),l.set(ej.VERTEX_HEAD,h),l.set(ej.VERTEX_MAIN_SUPPORT,f),null!==t.extensions)for(let e of t.extensions)r.extensions.add(e)}else throw Error(`Could not find mainImage or mainUv function (${t.name})`)}("e"+t++,r,e);let r=e.shaderParts.get(ej.FRAGMENT_HEAD),i=e.shaderParts.get(ej.FRAGMENT_MAIN_IMAGE),s=e.shaderParts.get(ej.FRAGMENT_MAIN_UV),n=/\bblend\b/g;for(let t of e.blendModes.values())r+=t.getShaderCode().replace(n,`blend${t.blendFunction}`)+"\n";for(let[t,n]of((1&e.attributes)!=0?(e.readDepth&&(i="float depth = readDepth(UV);\n\n	"+i),this.needsDepthTexture=null===this.getDepthTexture()):this.needsDepthTexture=!1,e.colorSpace===eF.SRGBColorSpace&&(i+="color0 = sRGBToLinear(color0);\n	"),e.uvTransformation?(s="vec2 transformedUv = vUv;\n"+s,e.defines.set("UV","transformedUv")):e.defines.set("UV","vUv"),e.shaderParts.set(ej.FRAGMENT_HEAD,r),e.shaderParts.set(ej.FRAGMENT_MAIN_IMAGE,i),e.shaderParts.set(ej.FRAGMENT_MAIN_UV,s),e.shaderParts))null!==n&&e.shaderParts.set(t,n.trim().replace(/^#/,"\n#"));this.skipRendering=0===t,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(e)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(e,t=eF.BasicDepthPacking){for(let r of(this.fullscreenMaterial.depthBuffer=e,this.fullscreenMaterial.depthPacking=t,this.effects))r.setDepthTexture(e,t)}render(e,t,r,i,s){for(let r of this.effects)r.update(e,t,i);if(!this.skipRendering||this.renderToScreen){let s=this.fullscreenMaterial;s.inputBuffer=t.texture,s.time+=i*this.timeScale,e.setRenderTarget(this.renderToScreen?null:r),e.render(this.scene,this.camera)}}setSize(e,t){for(let r of(this.fullscreenMaterial.setSize(e,t),this.effects))r.setSize(e,t)}initialize(e,t,r){for(let i of(this.renderer=e,this.effects))i.initialize(e,t,r);this.updateMaterial(),void 0!==r&&r!==eF.UnsignedByteType&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){for(let e of(super.dispose(),this.effects))e.removeEventListener("change",this.listener),e.dispose()}handleEvent(e){"change"===e.type&&this.recompile()}};function tp(e,t,r,i){var s;return(s=e+(t-e)*.75)+(r+(i-r)*.75-s)*.875}function tv(){let e=(0,e_.useThree)(e=>e.gl),t=(0,e_.useThree)(e=>e.scene),r=(0,e_.useThree)(e=>e.camera),i=(0,e_.useThree)(e=>e.size),s=(0,e_.useThree)(e=>e.viewport.dpr),n=(0,c.useMemo)(()=>{let i=new eW(e,{multisampling:4});i.addPass(new ti(t,r));let s=new tr({mipmapBlur:!0,luminanceThreshold:.5,luminanceSmoothing:.25,intensity:.65,radius:.72}),n=new tl({offset:.32,darkness:.5}),a=new ta({blendFunction:29,premultiply:!0});return a.blendMode.opacity.value=.22,i.addPass(new tf(r,s,n,a)),i},[e,t,r]);return(0,c.useEffect)(()=>{n.setSize(i.width,i.height)},[n,i,s]),(0,c.useEffect)(()=>()=>n.dispose(),[n]),(0,l.useFrame)((e,t)=>{n.render(t)},1),null}new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1]),new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,0,1]),new Float32Array([1,1,1]),new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([1,0,1]),new Float32Array([1,1,1]),new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1]),new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([0,1,1]),new Float32Array([1,1,1]),new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([0,1,1]),new Float32Array([1,1,1]),new Float32Array(2),new Float32Array(2),new Float32Array([0,-.25,.25,-.125,.125,-.375,.375]),new Float32Array([0,0]),new Float32Array([.25,-.25]),new Float32Array([-.25,.25]),new Float32Array([.125,-.125]),new Float32Array([-.125,.125]),new Uint8Array([0,0]),new Uint8Array([3,0]),new Uint8Array([0,3]),new Uint8Array([3,3]),new Uint8Array([1,0]),new Uint8Array([4,0]),new Uint8Array([1,3]),new Uint8Array([4,3]),new Uint8Array([0,1]),new Uint8Array([3,1]),new Uint8Array([0,4]),new Uint8Array([3,4]),new Uint8Array([1,1]),new Uint8Array([4,1]),new Uint8Array([1,4]),new Uint8Array([4,4]),new Uint8Array([0,0]),new Uint8Array([1,0]),new Uint8Array([0,2]),new Uint8Array([1,2]),new Uint8Array([2,0]),new Uint8Array([3,0]),new Uint8Array([2,2]),new Uint8Array([3,2]),new Uint8Array([0,1]),new Uint8Array([1,1]),new Uint8Array([0,3]),new Uint8Array([1,3]),new Uint8Array([2,1]),new Uint8Array([3,1]),new Uint8Array([2,3]),new Uint8Array([3,3]),tp(0,0,0,0),new Float32Array([0,0,0,0]),tp(0,0,0,1),new Float32Array([0,0,0,1]),tp(0,0,1,0),new Float32Array([0,0,1,0]),tp(0,0,1,1),new Float32Array([0,0,1,1]),tp(0,1,0,0),new Float32Array([0,1,0,0]),tp(0,1,0,1),new Float32Array([0,1,0,1]),tp(0,1,1,0),new Float32Array([0,1,1,0]),tp(0,1,1,1),new Float32Array([0,1,1,1]),tp(1,0,0,0),new Float32Array([1,0,0,0]),tp(1,0,0,1),new Float32Array([1,0,0,1]),tp(1,0,1,0),new Float32Array([1,0,1,0]),tp(1,0,1,1),new Float32Array([1,0,1,1]),tp(1,1,0,0),new Float32Array([1,1,0,0]),tp(1,1,0,1),new Float32Array([1,1,0,1]),tp(1,1,1,0),new Float32Array([1,1,1,0]),tp(1,1,1,1),new Float32Array([1,1,1,1]);let tm=`
  varying vec2 vPlane;
  void main() {
    vPlane = position.xy;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,tg=`
  uniform vec3 uColor;
  uniform vec3 uCore;
  uniform float uIntensity;
  uniform float uTime;
  varying vec2 vPlane;

  void main() {
    float r = length(vPlane);
    float angle = atan(vPlane.y, vPlane.x);
    float d = abs(r - 1.02);

    float gaps = smoothstep(0.035, 0.07, abs(sin(angle * 2.0 + 0.5)));
    float shimmer = 0.82 + 0.18 * sin(angle * 3.0 - uTime * 0.5);
    float line = smoothstep(0.014, 0.003, d) * gaps * shimmer;
    float glow = exp(-d * 11.0) * 0.5 * mix(0.5, 1.0, gaps) + exp(-d * 2.6) * 0.07;

    float ticks = smoothstep(0.008, 0.002, abs(r - 1.2)) * step(0.82, fract(angle * 24.0 / 6.2831853)) * 0.35;
    float sheen = smoothstep(1.02, 0.0, r) * 0.05;
    float spill = smoothstep(4.4, 1.0, r) * 0.014;

    float edge = 1.0 - smoothstep(2.6, 4.4, r);
    float strength = (line + glow + ticks + sheen + spill) * edge * uIntensity;
    vec3 color = mix(uColor, uCore, clamp(line * 0.75, 0.0, 1.0));
    gl_FragColor = vec4(color, strength);
  }
`,ty=`
  varying vec2 vUv;
  varying float vDepth;
  void main() {
    vUv = uv;
    vec4 view = modelViewMatrix * vec4(position, 1.0);
    vDepth = -view.z;
    gl_Position = projectionMatrix * view;
  }
`,tS=`
  uniform vec3 uColor;
  uniform float uIntensity;
  varying vec2 vUv;
  varying float vDepth;

  void main() {
    float across = abs(vUv.x - 0.5) * 2.0;
    float core = smoothstep(0.1, 0.0, across);
    float haze = pow(1.0 - across, 3.0) * 0.3;
    float rise = smoothstep(0.0, 0.04, vUv.y) * pow(1.0 - vUv.y, 1.6);
    float far = 1.0 - smoothstep(12.0, 22.0, vDepth);
    gl_FragColor = vec4(uColor, (core + haze) * rise * far * uIntensity);
  }
`,tw=[[-3.4,-5.5,7.5,.5],[3.6,-6,8,.45],[-6.4,-8.5,9,.32],[6.8,-9,9.5,.3],[-1.2,-11,10,.16]];function tx({beams:e}){let{floor:t,beam:r,floorGeometry:i,beamGeometry:s}=(0,c.useMemo)(()=>{let e={transparent:!0,depthWrite:!1,blending:u.AdditiveBlending,side:u.DoubleSide};return{floor:new u.ShaderMaterial({...e,vertexShader:tm,fragmentShader:tg,uniforms:{uColor:{value:new u.Color("#00B7C1")},uCore:{value:new u.Color("#9BF3FA")},uIntensity:{value:1},uTime:{value:0}}}),beam:new u.ShaderMaterial({...e,vertexShader:ty,fragmentShader:tS,uniforms:{uColor:{value:new u.Color("#00B7C1")},uIntensity:{value:.5}}}),floorGeometry:new u.PlaneGeometry(9,9),beamGeometry:new u.PlaneGeometry(1,1).translate(0,.5,0)}},[]),n=(0,c.useRef)(null);return(0,c.useEffect)(()=>(n.current={floor:t,beam:r},()=>{n.current=null,t.dispose(),r.dispose(),i.dispose(),s.dispose()}),[t,r,i,s]),(0,l.useFrame)(()=>{if(!n.current)return;let{floor:e,beam:t}=n.current;e.uniforms.uIntensity.value=C.values[13],e.uniforms.uTime.value=C.time,e.uniforms.uColor.value.copy(C.rim),t.uniforms.uColor.value.copy(C.rim),t.uniforms.uIntensity.value=.3+.3*C.values[13]}),(0,a.jsxs)("group",{children:[(0,a.jsx)("mesh",{geometry:i,material:t,"rotation-x":-Math.PI/2,"position-y":.004,renderOrder:1,frustumCulled:!1}),e&&tw.map(([e,t,i,n])=>(0,a.jsx)("mesh",{geometry:s,material:r,position:[e,0,t],scale:[n,i,1],renderOrder:0},`${e}:${t}`))]})}let tb=Math.PI/180,tE="#08090B",tT=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)},tU=new u.Vector3,tA=new u.Vector3,tB=new u.Vector3,tM=new u.Vector3,tR=new u.Vector3(0,1,0);function tC({quality:e,onReady:t}){let r=(0,c.useRef)(null),i=(0,c.useRef)(null),s=(0,c.useRef)(null),n=(0,c.useRef)(null),o=(0,c.useRef)(null),u=(0,c.useRef)(null),f=(0,c.useRef)(k),p=(0,c.useRef)(-1),v=(0,c.useRef)(-1),g=(0,c.useRef)(0),y=(0,c.useCallback)(e=>{u.current=e,f.current=k,p.current=-1,v.current=0,g.current=0},[]);return(0,c.useEffect)(()=>()=>{C.primed=!1},[]),(0,l.useFrame)((e,a)=>{let l=e.camera,c=e.size,y=Math.min(a,.1);!function(e){let t;if(!function(){let e=d.experience.compact?R.compact:R.desktop,t=0;for(let e of d.SCENE_IDS)t+=h.sceneCover[e];let r=t>1?1/t:1,i=Math.max(0,1-t);for(let e=0;e<25;e+=1)_[e]=(z(e)||!C.primed?P[e]:C.values[e])*i;for(let t of d.SCENE_IDS){let i=h.sceneCover[t]*r;if(i<=0)continue;let s="sessions"===t&&I()?R.compact.sessions:e[t];!function(e,t){let{at:r,frames:i}=e,s=i.length-1;if(0===s||t<=r[0])return F.set(i[0]);if(t>=r[s])return F.set(i[s]);let n=0;for(;n<s-1&&t>r[n+1];)n+=1;let a=i[n],o=i[n+1],l=(t-r[n])/(r[n+1]-r[n]);for(let e=0;e<25;e+=1)F[e]=a[e]+(o[e]-a[e])*l}(s,d.experience.scenes[t][s.axis]);for(let e=0;e<25;e+=1)_[e]+=F[e]*i}}(),C.time+=e*(d.experience.reducedMotion?.2:1),C.primed){let t=1-Math.exp(-(d.experience.reducedMotion?14:3.6)*e),r=d.experience.reducedMotion?t:1-Math.exp(-5*e),i=C.values;for(let e=0;e<25;e+=1){let s=e>=3&&e<=5?r:t;i[e]+=(_[e]-i[e])*s}}else C.values.set(_),C.primed=!0;let r=C.values,i=(t=d.experience.scenes.climb.pin,Math.min(m.length-1,Math.max(0,t/.16-.5))),s=Math.min(Math.floor(i),m.length-2);D.lerpColors(m[s],m[s+1],i-s),C.rim.setRGB(r[21],r[22],r[23]).lerp(D,Math.min(1,r[14])),C.key.setRGB(r[18],r[19],r[20])}(y);let S=C.values;tU.set(S[0],S[1],S[2]),tA.set(S[3],S[4],S[5]),tB.subVectors(tU,tA);let w=S[11]*tb;tB.applyAxisAngle(tR,-d.experience.pointer.x*w),tB.y+=d.experience.pointer.y*w*.35*tB.length();let x=S[6],b=tB.length()*Math.tan(x*tb/2)*(c.width/c.height);tM.crossVectors(tR,tB).normalize();let E=-S[7]*b;tA.addScaledVector(tM,E);let T=tT(h.sceneCover.cards/.2);tA.y-=3.6*T,l.position.copy(tA).add(tB),l.lookAt(tA),Math.abs(l.fov-x)>.001&&(l.fov=x,l.updateProjectionMatrix());let U=r.current;U&&(U.visible=S[9]>.3&&T<1,U.rotation.y=S[8]*tb),v.current>=2&&(g.current=Math.min(1,g.current+y/1.2));let A=d.experience.reducedMotion&&v.current>=2?1:tT(g.current),B=Math.min(1,Math.max(0,S[24]));i.current&&(i.current.color.copy(C.key),i.current.intensity=S[16]*A),s.current&&n.current&&(s.current.color.copy(C.rim),n.current.color.copy(C.rim),s.current.intensity=S[17]*A,n.current.intensity=.85*S[17]*A),o.current&&(o.current.color.copy(C.rim).lerp(C.key,.5),o.current.intensity=(.55+-.5*B)*A),q.avatarLook.uLookRim.value.copy(C.rim),q.avatarLook.uLookRimPower.value=(.15+1.55*B)*A,q.avatarLook.uLookFalloff.value=B;let M=Math.min(1,1.6*h.sceneCover.ratio)*B*A;if(q.avatarLook.uLookScan.value=M,M>0){let e=C.time%3.4/3.4;q.avatarLook.uLookScanY.value=1.72+-.82*e,q.avatarLook.uLookScan.value=M*tT(8*e)*tT((1-e)*5)}let N=u.current;if(!N)return;Math.abs(S[10]-p.current)>.002&&(p.current=S[10],N.setForge(Math.min(1,Math.max(0,p.current))));let V=function(e){let t=e=>h.sceneCover[e]>=.5,{scenes:r}=d.experience;return t("ratio")?r.ratio.progress>=.62?O:k:t("sessions")?I()?k:G:t("climb")?r.climb.pin>=.9?H:C.values[10]>.5?L:k:t("cards")||t("final")?L:t("hero")||t("diet")||t("streak")?k:e}(f.current);V.key!==f.current.key&&(f.current=V,N.setClip(V.clip,.45)),v.current>=0&&v.current<2&&(v.current+=1,2===v.current&&t())}),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("fogExp2",{attach:"fog",args:[tE,.045]}),(0,a.jsx)("hemisphereLight",{ref:o,args:["#4DDAE9",tE,0]}),(0,a.jsx)("directionalLight",{ref:i,position:[.9,4.4,3.2],intensity:0}),(0,a.jsx)("directionalLight",{ref:s,position:[-3.4,2.2,-3],intensity:0}),(0,a.jsx)("directionalLight",{ref:n,position:[3.4,2,-3],intensity:0}),(0,a.jsx)("group",{ref:r,children:(0,a.jsx)(c.Suspense,{fallback:null,children:(0,a.jsx)(X.Avatar,{quality:e,onReady:y})})}),(0,a.jsx)(eC,{avatar:u}),(0,a.jsx)(tx,{beams:"high"===e}),(0,a.jsx)(K,{count:"high"===e?900:420}),"high"===e&&(0,a.jsx)(tv,{})]})}e.s(["Stage",0,function({onLost:e}){let t=(0,c.useMemo)(()=>(function(){let e=new URLSearchParams(window.location.search).get("quality");if("high"===e||"low"===e)return e;let t=navigator.deviceMemory,r=navigator.hardwareConcurrency<=4||void 0!==t&&t<=4;return window.innerWidth<768||r?"low":"high"})(),[]),[r,i]=(0,c.useState)(!0);(0,c.useEffect)(()=>{let e=()=>i("visible"===document.visibilityState);return document.addEventListener("visibilitychange",e),()=>document.removeEventListener("visibilitychange",e)},[]);let s=(0,c.useCallback)(()=>{d.experience.ready=!0,document.documentElement.dataset.stage="ready"},[]);return(0,a.jsx)("div",{"aria-hidden":!0,style:{position:"fixed",inset:0,zIndex:10,pointerEvents:"none"},children:(0,a.jsx)(o.Canvas,{flat:!0,frameloop:r?"always":"never",dpr:[1,"high"===t?2:1.5],camera:{fov:30,near:.1,far:60,position:[0,.8,6.2]},gl:{alpha:!0,antialias:"low"===t,powerPreference:"high-performance",stencil:!1},style:{pointerEvents:"none"},onCreated:({gl:t})=>{t.setClearColor(0,0),t.domElement.addEventListener("webglcontextlost",e,{once:!0})},children:(0,a.jsx)(tC,{quality:t,onReady:s})})})}],15570)},95954,function(e){e.n(e.i(15570))}]);