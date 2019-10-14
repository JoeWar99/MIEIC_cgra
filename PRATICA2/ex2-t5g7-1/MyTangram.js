/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
        super(scene);
        this.scene = scene;
        this.diamond = new MyDiamond(scene);
        this.triangulo = new MyTriangle(scene);
        this.parallelogram = new MyParallelogram(scene);
        this.triangle_Small = new MyTriangleSmall(scene);
        this.triangle_Big = new MyTriangleBig(scene);
	}
    display(){
        // ---- BEGIN Primitive drawing section
       
        // OBJETO VERDE DIAMOND
        this.scene.pushMatrix();
        var mt = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            1 / 2, 1 / 2, 0, 1
        ];
        this.scene.translate(-0.08,0.08,0);
        this.scene.multMatrix(mt);
        //this.scene.customMaterial.apply();
        if(this.scene.Visibilidade_Verde)
            this.diamond.display();
        

        //OBJETO LARANJA TRIANGLE
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-2, 0, 0);
        this.scene.rotate(Math.PI, 0, 0, 1);
        if(this.scene.Visibilidade_Laranja)
            this.triangle_Big.display();

        //OBJETO AZUL TRIANGLE
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-1.40, -1.40, 0);
        this.scene.rotate((-Math.PI / 2) - (Math.PI / 4), 0, 0, 1);
        if(this.scene.Visibilidade_Azul)
            this.triangle_Big.display();


        //OBJETO VERMELHO TRIANGLE
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(1.42, -0.42, 0);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        if(this.scene.Visibilidade_Vermelho)
            this.triangle_Small.display();

        //OBJETO AMARELO PARALLELOGRAM
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0.42,3.58,0);
        var ms = [
            -1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];
        this.scene.multMatrix(ms);
        this.scene.rotate(-Math.PI / 2, 0, 0, 1);
        if(this.scene.Visibilidade_Amarelo)
            this.parallelogram.display();


        //OBJETO COR DE ROSA TRIANGLE
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0.01,-1.41,0);
        this.scene.rotate(Math.PI/4+Math.PI/2, 0,0,1);
        if(this.scene.Visibilidade_Cor_de_rosa)
            this.triangulo.display();

        //OBJETO ROXO TRIANGLE
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(1.12, 2.88, 0);
        this.scene.rotate(Math.PI/2+Math.PI/4,0,0,1);
        if(this.scene.Visibilidade_Roxo)
            this.triangle_Small.display();
        
        this.scene.popMatrix();
        this.scene.pushMatrix();

    }

}
