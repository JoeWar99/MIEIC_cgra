/**
 * MyRectangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyRectangle extends CGFobject {
	constructor(scene ,tamanho) {
		super(scene);
		this.initBuffers();
		this.tamanho = tamanho;
	}
	initBuffers() {
		this.vertices = [
			0, 0, 0,	//0
			0, 0, 0.4,	//1 
			0.6, 0 ,0.4,	//2
			0.6, 0 , 0		//3
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0,1,2,
			2,3,0,
			2,1,0,
			0,3,2
		];

		this.texCoords = [
			0,1,
			1,1,
			1,0,
			0,0
		];


		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

