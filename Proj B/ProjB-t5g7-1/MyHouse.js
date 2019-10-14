/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyHouse extends CGFobject {
    constructor(scene){
        super(scene);
        this.scene = scene;
        this.cube =new MyUnitCubeQuad(scene, 'textures/ladocasa.png', 'textures/ladocasa.png', 'textures/frentecasa.png', 'textures/trascasa.png', 'textures/trascasa.png', 'textures/trascasa.png',1,1);
        this.teto = new MyPyramid(scene,4,1,1,1.5,0, 0);
        this.coluna = new MyPrism(scene, 10,1, 1, 0.15);

        this.trunktexture = new CGFtexture(scene, 'textures/colum.jpg');
        this.material = new CGFappearance(scene);
        this.material.setAmbient(1 ,1,1, 1.0);
        this.material.setDiffuse(0,0,0,1.0);
        this.material.setSpecular(1, 1, 1, 1.0);
        this.material.setShininess(10.0);

        this.teto_texture = new CGFtexture(scene, 'textures/teto.jpg');
        this.material1 = new CGFappearance(scene);
        this.material1.setAmbient(1 ,1,1, 1.0);
        this.material1.setDiffuse(1.0,1.0,1.0, 1.0);
        this.material1.setSpecular(0.0, 0.0, 0.0, 1.0);
        this.material1.setShininess(10.0);

        this.material_standard = new CGFappearance(scene);
        this.material_standard.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.material_standard.setDiffuse(1,1, 1,1.0);
        this.material_standard.setSpecular(1, 1, 1, 1.0);
        this.material_standard.setShininess(10.0);
        
    }
    display(){
      // ---- BEGIN Primitive drawing section
        
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.cube.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.material1.setTexture(this.teto_texture);
        this.material1.apply();
        this.scene.translate(0, 1,0);
        this.scene.rotate(Math.PI/4, 0,1,0);
        this.teto.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.material_standard.setTexture(this.trunktexture);
        this.material_standard.apply();

        for(var i = 0; i < 4; i++){
            this.scene.rotate(i * Math.PI/2, 0, 1,0);
            this.scene.translate(0.7,0,0.7);
            this.coluna.display();
            this.scene.popMatrix();
            this.scene.pushMatrix();
        }
        this.scene.popMatrix();
    }

    enableNormalViz(){
        this.cube.enableNormalViz();
        this.coluna.enableNormalViz();
        this.teto.enableNormalViz();
     

    }
    disableNormalViz(){
        this.cube.disableNormalViz();
        this.coluna.disableNormalViz();
        this.teto.disableNormalViz();
    }
}