#ifdef GL_ES
precision highp float;
#endif

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform float normScale;
varying vec4 coords;
varying vec4 normal;
varying vec2 vTextureCoord;
uniform sampler2D uSampler2;
uniform sampler2D uSampler4;
void main(){
	
	vec3 offset=vec3(0.0,0.0,0.0);
	vTextureCoord = aTextureCoord;
	vec4 filter = texture2D(uSampler2, vTextureCoord);
	
	
	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+aVertexNormal*filter.xyz*20.0, 1.0);
	

}