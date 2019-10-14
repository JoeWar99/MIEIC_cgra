#ifdef GL_ES
precision highp float;
#endif

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform float timeFactor;

uniform float normScale;
varying vec4 coords;
varying vec4 normal;
varying vec2 vTextureCoord;
uniform sampler2D uSampler2;
void main() {
	
	vec3 offset=vec3(0.0,0.0,0.0);
	
	vTextureCoord = aTextureCoord;
	offset=normScale*0.05*vec3(0.0,0.0,texture2D(uSampler2, mod(vec2(0.005*timeFactor,0.005*timeFactor)+vTextureCoord, vec2(1.0,1.0))).b);

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+offset, 1.0);
}