/**
 * MyTriangleBig
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleBig extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		var cor=2;
		this.vertices = [
			-2, 0, 0,	//0
			0, 2, 0,	//1
			2,0, 0,	//2
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			2,1,0,
			0,1,2
		];
		
		this.texCoords = [
			0,0,
			0.5,0.5,
			1,0
		];
	
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
	updateTexCoords() {
		this.texCoords = [
			1,1,
			0.5,0.5,
			1,0
		];
		this.updateTexCoordsGLBuffers();
	}
}
