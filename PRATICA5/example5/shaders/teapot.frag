#ifdef GL_ES
precision highp float;
#endif

varying vec4 coords;


void main() {
	
	vec4 color;
	
	if (coords.y > 0.5)
		color=vec4(1,1 ,0 , 1.0);
	else
	{
		color=vec4(0, 0, 1, 1.0);
	}
	vec4 grey = color;
	grey.r = color.r * 0.299 + 0.587*color.g + 0.114*color.b;
	
	grey.g = color.r * 0.299 + 0.587*color.g + 0.114*color.b;
	
	grey.b = color.r * 0.299 + 0.587*color.g + 0.114*color.b;

	gl_FragColor = grey;
}