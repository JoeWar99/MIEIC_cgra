
/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        this.normals = [];
        this.scene = scene;
        this.texture_tangram = new CGFtexture(scene, 'images/image.jpg');
        this.material = new CGFappearance(scene);
        this.material.setAmbient(1 ,1,1, 1.0);
        this.material.setDiffuse(1.0,1.0,1.0, 1.0);
        this.material.setSpecular(0.0, 0.0, 0.0, 1.0);
        this.material.setShininess(10.0);
        
        this.diamond_verde = new MyDiamond(scene);
        this.triangulo_cor_de_rosa = new MyTriangle(scene);
        this.parallelogram_amarelo = new MyParallelogram(scene);
      
        this.triangle_Small_roxo = new MyTriangleSmall(scene);
        this.triangle_Small_vermelho = new MyTriangleSmall(scene);
        this.triangle_Small_vermelho.updateTexCoords();


        this.triangle_Big_azul = new MyTriangleBig(scene);
        this.triangle_Big_laranja = new MyTriangleBig(scene);
        this.triangle_Big_laranja.updateTexCoords();
        //------
	}
    display(){
        // ---- BEGIN Primitive drawing section
       
        // OBJETO VERDE DIAMOND
        this.material.setTexture(this.texture_tangram);
        this.material.apply();
        this.scene.pushMatrix();
        var mt = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            1 / 2, 1 / 2, 0, 1
        ];
        this.scene.translate(-0.08,0.08,0);
        this.scene.multMatrix(mt);
        this.diamond_verde.display();
        

        //OBJETO LARANJA TRIANGLE
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-2, 0, 0);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.triangle_Big_laranja.display();

        //OBJETO AZUL TRIANGLE
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-1.40, -1.40, 0);
        this.scene.rotate((-Math.PI / 2) - (Math.PI / 4), 0, 0, 1);
        this.triangle_Big_azul.display();


        //OBJETO VERMELHO TRIANGLE
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(1.42, -0.42, 0);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.triangle_Small_vermelho.display();

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
        this.parallelogram_amarelo.display();


        //OBJETO COR DE ROSA TRIANGLE
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0.01,-1.41,0);
        this.scene.rotate(Math.PI/4+Math.PI/2, 0,0,1);
        this.triangulo_cor_de_rosa.display();

        //OBJETO ROXO TRIANGLE
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(1.12, 2.88, 0);
        this.scene.rotate(Math.PI/2+Math.PI/4,0,0,1);
        this.triangle_Small_roxo.display();

        
        this.scene.popMatrix();
        this.scene.pushMatrix();

    }
    enableNormalViz(){
        this.triangulo.enableNormalViz();
        this.triangle_Big.enableNormalViz();
        this.triangle_Small.enableNormalViz();
        this.diamond.enableNormalViz();
        this.parallelogram.enableNormalViz();

    }
    disableNormalViz(){
        this.triangulo.disableNormalViz();
        this.triangle_Big.disableNormalViz();
        this.triangle_Small.disableNormalViz();
        this.diamond.disableNormalViz();
        this.parallelogram.disableNormalViz();

    }
    updateBuffers()
    {

    }
}

