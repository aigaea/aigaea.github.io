import{U as i,W as s,d as r,H as a,S as o,N as l}from"./index.45669477.js";import{P as h,F as d}from"./Pass.28735e83.js";import{C as p}from"./CopyShader.aba18c7a.js";import"./entry.6b266b11.js";import"./plugin.a4de6c0b.js";import"./index.376ca428.js";import"./plugin-vueexport-helper.e76b875f.js";import"./nuxt-link.f225f41f.js";import"./godhood.ae03a812.js";import"./request.8b8a8e0e.js";import"./utils.25a215b0.js";import"./godhead.c47f4b06.js";import"./checkInContractExplorer.0fe425d9.js";import"./Footer.vuevuetypescriptsetuptruelang.92fbd661.js";import"./dict.ffaf8839.js";const u={name:"AfterimageShader",uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

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

		}`};class D extends h{constructor(e=.96){super(),this.shader=u,this.uniforms=i.clone(this.shader.uniforms),this.uniforms.damp.value=e,this.textureComp=new s(window.innerWidth,window.innerHeight,{magFilter:r,type:a}),this.textureOld=new s(window.innerWidth,window.innerHeight,{magFilter:r,type:a}),this.compFsMaterial=new o({uniforms:this.uniforms,vertexShader:this.shader.vertexShader,fragmentShader:this.shader.fragmentShader}),this.compFsQuad=new d(this.compFsMaterial);const t=p;this.copyFsMaterial=new o({uniforms:i.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,blending:l,depthTest:!1,depthWrite:!1}),this.copyFsQuad=new d(this.copyFsMaterial)}render(e,t,m){this.uniforms.tOld.value=this.textureOld.texture,this.uniforms.tNew.value=m.texture,e.setRenderTarget(this.textureComp),this.compFsQuad.render(e),this.copyFsQuad.material.uniforms.tDiffuse.value=this.textureComp.texture,this.renderToScreen?(e.setRenderTarget(null),this.copyFsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.copyFsQuad.render(e));const n=this.textureOld;this.textureOld=this.textureComp,this.textureComp=n}setSize(e,t){this.textureComp.setSize(e,t),this.textureOld.setSize(e,t)}dispose(){this.textureComp.dispose(),this.textureOld.dispose(),this.compFsMaterial.dispose(),this.copyFsMaterial.dispose(),this.compFsQuad.dispose(),this.copyFsQuad.dispose()}}export{D as AfterimagePass};
