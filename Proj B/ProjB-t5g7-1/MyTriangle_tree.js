/**
 * MyTriangle_tree
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangle_tree extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			1.2, 0, 0,	//0
			1.2,0, 0.8,	//1
			2 ,0,0.4	//2
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			2,1,0,
			0,1,2
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

