#ifdef GL_ES
precision highp float;
#endif

varying vec4 coords;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float timeFactor;


void main(){
	gl_FragColor = texture2D(uSampler, vTextureCoord+vec2(timeFactor*0.005,timeFactor*0.005));
}