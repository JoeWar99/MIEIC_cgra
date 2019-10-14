/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangle extends CGFobject {
	constructor(scene, tamanho) {
		super(scene);
		this.initBuffers();
		this.tamanho = tamanho;
	}
	initBuffers() {
		this.vertices = [
			0.6, 0, 0,	//0
			0.6,0, 0.4,	//1
			1 ,0,0.2	//2
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0,1,2,
			0,2,1
		];

		this.texCoords = [
			0,1, 
			1,1,
			0.5,0.5


		];


		
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

