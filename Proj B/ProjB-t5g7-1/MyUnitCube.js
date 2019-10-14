class MyUnitCube extends CGFobject {
	constructor(scene, tamanho_arresta) {
		super(scene);
		this.tamanho_arresta = tamanho_arresta;
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			//frente e tras
			-0.5*this.tamanho_arresta,0.5*this.tamanho_arresta,0.5*this.tamanho_arresta,  //0
			0.5*this.tamanho_arresta,0.5*this.tamanho_arresta,0.5*this.tamanho_arresta,  //1
			-0.5*this.tamanho_arresta,-0.5*this.tamanho_arresta,0.5*this.tamanho_arresta,  //2
			0.5*this.tamanho_arresta,-0.5*this.tamanho_arresta,0.5*this.tamanho_arresta,  //3
			
			
			0.5*this.tamanho_arresta,-0.5*this.tamanho_arresta,-0.5*this.tamanho_arresta, //4
			0.5*this.tamanho_arresta,0.5*this.tamanho_arresta,-0.5*this.tamanho_arresta, //5
			-0.5*this.tamanho_arresta,0.5*this.tamanho_arresta,-0.5*this.tamanho_arresta, //6
			-0.5*this.tamanho_arresta,-0.5*this.tamanho_arresta,-0.5*this.tamanho_arresta,//7
			
			//esquerda e direita
			-0.5*this.tamanho_arresta,0.5*this.tamanho_arresta,0.5*this.tamanho_arresta,  //8
			0.5*this.tamanho_arresta,0.5*this.tamanho_arresta,0.5*this.tamanho_arresta,  //9
			-0.5*this.tamanho_arresta,-0.5*this.tamanho_arresta,0.5*this.tamanho_arresta,  //10
			0.5*this.tamanho_arresta,-0.5*this.tamanho_arresta,0.5*this.tamanho_arresta,  //11

			0.5*this.tamanho_arresta,-0.5*this.tamanho_arresta,-0.5*this.tamanho_arresta, //12
			0.5*this.tamanho_arresta,0.5*this.tamanho_arresta,-0.5*this.tamanho_arresta, //13
			-0.5*this.tamanho_arresta,0.5*this.tamanho_arresta,-0.5*this.tamanho_arresta, //14
			-0.5*this.tamanho_arresta,-0.5*this.tamanho_arresta,-0.5*this.tamanho_arresta,//15

			//cima e baixo
			-0.5*this.tamanho_arresta,0.5*this.tamanho_arresta,0.5*this.tamanho_arresta,  //16
			0.5*this.tamanho_arresta,0.5*this.tamanho_arresta,0.5*this.tamanho_arresta,  //17
			-0.5*this.tamanho_arresta,-0.5*this.tamanho_arresta,0.5*this.tamanho_arresta,  //18
			0.5*this.tamanho_arresta,-0.5*this.tamanho_arresta,0.5*this.tamanho_arresta,  //19

			
			0.5*this.tamanho_arresta,-0.5*this.tamanho_arresta,-0.5*this.tamanho_arresta, //20
			0.5*this.tamanho_arresta,0.5*this.tamanho_arresta,-0.5*this.tamanho_arresta, //21
			-0.5*this.tamanho_arresta,0.5*this.tamanho_arresta,-0.5*this.tamanho_arresta, //22
			-0.5*this.tamanho_arresta,-0.5*this.tamanho_arresta,-0.5*this.tamanho_arresta,//23

		];

		//Counter-clockwise reference of vertices
		this.indices = [
			2,0,1,
			2,1,3,

			4,5,6,
			4,6,7,


			11,9,13,
			11,13,12,

			15,14,8,
			15,8,10,

			16,22,21,
			16,21,17,


		];
		

		this.normals = [
			-1,0,0,
			1,0,0,
			-1,0,0,
			1,0,0,
			1,0,0,
			1,0,0,
			-1,0,0,
			-1,0,0,
			0,1,0,
			0,1,0,
			0,-1,0,
			0,-1,0,
			0,-1,0,
			0,1,0,
			0,1,0,
			0,-1,0,
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,-1,
			0,0,-1,
			0,0,-1,
			0,0,-1
		];

		this.texCoords = [
			
			0.5,0.25,
			0.25,0.25,
			0.5,0.5,
			0.25,0.5,
			1,0.5,
			1,0.25,
			0.75,0.25,
			0.75,0.5,


			0.5,0.25,
			0.25,0.25,
			0.5,0.5,
			0.25,0.5,
			0,0.5,
			0,0.25,
			0.75,0.25,
			0.75,0.5,

			0.5,0.25,
			0.25,0.25,
			0.5,0.5,
			0.25,0.5,
			0.25,0.75,
			0.25,0,
			0.5,0,
			0.5,0.75

		];

		
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
	updateBuffers()
    {

    }
}

