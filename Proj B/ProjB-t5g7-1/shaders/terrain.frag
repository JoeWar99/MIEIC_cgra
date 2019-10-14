#ifdef GL_ES
precision highp float;
#endif

varying vec4 coords;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float timeFactor;
uniform sampler2D uSampler3;
uniform sampler2D uSampler2;
uniform sampler2D uSampler1;
uniform sampler2D uSampler4;



void main(){
	vec4 source_color = texture2D(uSampler4, vTextureCoord);
	float frag_height = texture2D(uSampler2, vTextureCoord).r;
	vec4 water_color = texture2D(uSampler, vTextureCoord);

	vec4 filter_gradiente = texture2D(uSampler3, vec2(0.0,1.0 - frag_height));
	
	if(source_color.b > 0.5 && source_color.r > 0.5 && source_color.g < 0.5){
		gl_FragColor = texture2D(uSampler, vTextureCoord+vec2(0,timeFactor*0.002));
	}
	else{
		gl_FragColor = (filter_gradiente) * (source_color);
	}


}