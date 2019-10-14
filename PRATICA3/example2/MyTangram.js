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
        this.diamond = new MyDiamond(scene);
        this.triangulo = new MyTriangle(scene);
        this.parallelogram = new MyParallelogram(scene);
        this.triangle_Small = new MyTriangleSmall(scene);
        this.triangle_Big = new MyTriangleBig(scene);
        var color ;
        
        this.material_roxo = new CGFappearance(scene);
        color = this.scene.hexToRgbA('#800080');
        this.material_roxo.setAmbient(color[0], color[1],color[2], 1.0);
        this.material_roxo.setDiffuse(color[0], color[1],color[2], 1.0);
        this.material_roxo.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.material_roxo.setShininess(10.0);

        this.material_amarelo = new CGFappearance(scene);
        color = this.scene.hexToRgbA('#FFFF00');
        this.material_amarelo.setAmbient(color[0], color[1],color[2], 1.0);
        this.material_amarelo.setDiffuse(color[0], color[1],color[2], 1.0);
        this.material_amarelo.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.material_amarelo.setShininess(10.0);

        this.material_verde = new CGFappearance(scene);
        color = this.scene.hexToRgbA('#00FF00');
        this.material_verde.setAmbient(color[0], color[1],color[2], 1.0);
        this.material_verde.setDiffuse(color[0], color[1],color[2], 1.0);
        this.material_verde.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.material_verde.setShininess(10.0);

        this.material_vermelho = new CGFappearance(scene);
        color = this.scene.hexToRgbA('#FF0000');
        this.material_vermelho.setAmbient(color[0], color[1],color[2], 1.0);
        this.material_vermelho.setDiffuse(color[0], color[1],color[2], 1.0);
        this.material_vermelho.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.material_vermelho.setShininess(10.0);

        this.material_cor_de_rosa = new CGFappearance(scene);
        color = this.scene.hexToRgbA('#FF69B4');
        this.material_cor_de_rosa.setAmbient(color[0], color[1],color[2], 1.0);
        this.material_cor_de_rosa.setDiffuse(color[0], color[1],color[2], 1.0);
        this.material_cor_de_rosa.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.material_cor_de_rosa.setShininess(10.0);
        
        this.material_azul = new CGFappearance(scene);
        color = this.scene.hexToRgbA('#1E90FF');
        this.material_azul.setAmbient(color[0], color[1],color[2], 1.0);
        this.material_azul.setDiffuse(color[0], color[1],color[2], 1.0);
        this.material_azul.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.material_azul.setShininess(10.0);
        
        this.material_laranja = new CGFappearance(scene);
        color = this.scene.hexToRgbA('#FFA500');
        this.material_laranja.setAmbient(color[0], color[1],color[2], 1.0);
        this.material_laranja.setDiffuse(color[0], color[1],color[2], 1.0);
        this.material_laranja.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.material_laranja.setShininess(10.0);
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
        this.scene.customMaterial.apply();
       // this.material_verde.apply();
        this.diamond.display();
        

        //OBJETO LARANJA TRIANGLE
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-2, 0, 0);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.material_laranja.apply();
        this.triangle_Big.display();

        //OBJETO AZUL TRIANGLE
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-1.40, -1.40, 0);
        this.scene.rotate((-Math.PI / 2) - (Math.PI / 4), 0, 0, 1);
        this.material_azul.apply();
        this.triangle_Big.display();


        //OBJETO VERMELHO TRIANGLE
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(1.42, -0.42, 0);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.material_vermelho.apply();
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
        this.material_amarelo.apply();
        this.parallelogram.display();


        //OBJETO COR DE ROSA TRIANGLE
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0.01,-1.41,0);
        this.scene.rotate(Math.PI/4+Math.PI/2, 0,0,1);
        this.material_cor_de_rosa.apply();
        this.triangulo.display();

        //OBJETO ROXO TRIANGLE
        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(1.12, 2.88, 0);
        this.scene.rotate(Math.PI/2+Math.PI/4,0,0,1);
        this.material_roxo.apply();
        this.triangle_Small.display();

        
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

