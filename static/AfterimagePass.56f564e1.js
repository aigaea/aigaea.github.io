import{U as i,W as s,d as r,H as a,S as o,N as m}from"./index.d27ed79b.js";import{P as h,F as d}from"./Pass.cf1e82c9.js";import{C as p}from"./CopyShader.07fd3494.js";import"./entry.50a5e5de.js";import"./plugin.0874d0b1.js";import"./index.4117aacc.js";import"./nuxt-link.977bf202.js";import"./utils.81488333.js";import"./godhead.fe8dad30.js";import"./checkInContractExplorer.2e34a51c.js";import"./Footer.vuevuetypescriptsetuptruelang.0b5e07d2.js";import"./dict.9d20c0e2.js";const u={name:"AfterimageShader",uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float damp;

		uniform sampler2D tOld;
		uniform sampler2D tNew;

		varying vec2 vUv;

		vec4 when_gt( vec4 x, float y ) {

			return max( sign( x - y ), 0.0 );

		}

		void main() {

			vec4 texelOld = texture2D( tOld, vUv );
			vec4 texelNew = texture2D( tNew, vUv );

			texelOld *= damp * when_gt( texelOld, 0.1 );

			gl_FragColor = max(texelNew, texelOld);

		}`};class Q extends h{constructor(e=.96){super(),this.shader=u,this.uniforms=i.clone(this.shader.uniforms),this.uniforms.damp.value=e,this.textureComp=new s(window.innerWidth,window.innerHeight,{magFilter:r,type:a}),this.textureOld=new s(window.innerWidth,window.innerHeight,{magFilter:r,type:a}),this.compFsMaterial=new o({uniforms:this.uniforms,vertexShader:this.shader.vertexShader,fragmentShader:this.shader.fragmentShader}),this.compFsQuad=new d(this.compFsMaterial);const t=p;this.copyFsMaterial=new o({uniforms:i.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,blending:m,depthTest:!1,depthWrite:!1}),this.copyFsQuad=new d(this.copyFsMaterial)}render(e,t,n){this.uniforms.tOld.value=this.textureOld.texture,this.uniforms.tNew.value=n.texture,e.setRenderTarget(this.textureComp),this.compFsQuad.render(e),this.copyFsQuad.material.uniforms.tDiffuse.value=this.textureComp.texture,this.renderToScreen?(e.setRenderTarget(null),this.copyFsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.copyFsQuad.render(e));const l=this.textureOld;this.textureOld=this.textureComp,this.textureComp=l}setSize(e,t){this.textureComp.setSize(e,t),this.textureOld.setSize(e,t)}dispose(){this.textureComp.dispose(),this.textureOld.dispose(),this.compFsMaterial.dispose(),this.copyFsMaterial.dispose(),this.compFsQuad.dispose(),this.copyFsQuad.dispose()}}export{Q as AfterimagePass};
