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

void main() {

	vec3 offset=vec3(0.0,0.0,0.0);
	
	offset=vec3(sin(timeFactor),0,0);
	
	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+offset, 1.0);

	normal = vec4(aVertexNormal, 1.0);

	coords=gl_Position;
}
