import{U as i,W as s,d as r,H as a,S as o,N as l}from"./index.c7fd9f7a.js";import{P as h,F as d}from"./Pass.86c447b4.js";import{C as p}from"./CopyShader.af09cbdb.js";import"./entry.289d06fc.js";import"./plugin.250f6315.js";import"./index.53f3402b.js";import"./plugin-vueexport-helper.5c7a2320.js";import"./nuxt-link.2c0b028b.js";import"./godhood.abf6cf36.js";import"./request.a433ba11.js";import"./utils.ccb2f1f7.js";import"./godhead.9bfc18f5.js";import"./checkInContractExplorer.3ef80cf1.js";import"./Footer.vuevuetypescriptsetuptruelang.a44f4882.js";import"./dict.4a4d86d9.js";const u={name:"AfterimageShader",uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

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
