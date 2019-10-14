/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0, 0, 0,	//0
			1, 0, 0,	//1
            1,1, 0,	//2
            2,0,0, //3
            2,1,0, //4
			3,1,0, //5

		];

		//Counter-clockwise reference of vertices
		this.indices = [
            2,1,0,
            4,2,1,
            4,3,1,
            5,4,3,
            0,1,2,
            1,2,4,
            1,3,4,
            3,4,5
		];
		this.texCoords = [
			1,1,
			0.75,1,
			0.75, 0.75,
			0.5,1,
			0.5,0.75,
			0.25,0.75
		]
		
	
	
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

