/**
 * MyTriangleSmall
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleSmall extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	
	}
	initBuffers() {
		this.vertices = [
			-1, 0, 0,	//0
			1, 0, 0,	//1
			0,1, 0,	//2

		];

		//Counter-clockwise reference of vertices
		this.indices = [
			1,2,0,
			0,2,1
		];

		this.texCoords= [
			0.25,0.75,
			0.75,0.75,
			0.5,0.5
		]
		
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
	updateTexCoords() {
		this.texCoords = [
			0,0,
			0.25,0.25,
			0,0.5
		];
		this.updateTexCoordsGLBuffers();
	}


}
