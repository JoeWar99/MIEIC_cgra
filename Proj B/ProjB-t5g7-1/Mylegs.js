/**
* MyLegs
* @constructor
*/
class MyLegs extends CGFobject {
    constructor(scene)
    {
        super(scene);
        this.scene = scene;

        this.cilindro = new MyCilinder(scene, 10, 0, 1.5, 0.5);
        this.cilindro1 = new MyCilinder(scene, 10, 0, 2.5, 0.5);
        this.piramide = new MyPyramid(scene, 10, 0, 1,0.5,0,0);

        this.legs_material = new CGFappearance(scene);
		this.legs_material.setAmbient(1, 1, 1, 1);
		this.legs_material.setDiffuse(1, 1, 1, 1);
		this.legs_material.setSpecular(1, 1, 1, 1);
        this.legs_material.setShininess(200);
        
        this.pernas_texture= new CGFtexture(scene, "textures/pernas.jpg");
        this.unhas_texture = new CGFtexture(scene, "textures/textura_unha_ave.jpg");

        
    }
    display(){
        this.legs_material.setTexture(this.pernas_texture);
        this.legs_material.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0)
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.cilindro.display();
        this.scene.popMatrix();     
        
        this.scene.pushMatrix();
        this.cilindro1.display();
        this.scene.popMatrix();

        this.legs_material.setTexture(this.unhas_texture);
        this.legs_material.apply();
        
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 1.5);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.piramide.display();
        this.scene.popMatrix();

    }

    
}

