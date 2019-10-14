/**
* MyNest
* @constructor
*/
class MyNest extends CGFobject {
    constructor(scene)
    {
        super(scene);
        this.initBuffers();
        this.x = 5;
        this.y = 7.4;
        this.z = 6;

        this.ninho_texture = new CGFtexture(scene, 'textures/ninho.jpg');
        this.ninho_material = new CGFappearance(scene);
        this.ninho_material.setAmbient(1 ,1,1, 1.0);
        this.ninho_material.setDiffuse(0,0,0,1.0);
        this.ninho_material.setSpecular(1, 1, 1, 1.0);
        this.ninho_material.setShininess(10.0);
        
        this.cilindro_exterior =  new MyCilinder(scene, 8, 0, 0.5, 2);
        this.cilindro_interior = new MyCilinder(scene, 8, 0, 0.5, 1.3);
        this.base = new MyDiamond(scene);
        this.cilindro_aux = new MyCilinder(scene, 10, 0, 1, 0.35);
        
        this.galhos_no_ninho=[];

    }
    display(){

        this.scene.pushMatrix();
        this.scene.translate(this.x, this.y, this.z);
        this.scene.scale(1.5, 1, 1.5);

        this.ninho_material.setTexture(this.ninho_texture);
        this.ninho_material.apply();

        
        this.scene.pushMatrix();
        this.scene.scale(1.8, 0, 1.8);
        this.scene.rotate(Math.PI/4, 0 , 1, 0);
        this.scene.rotate(Math.PI/2, 1 , 0, 0);
        this.base.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.55, 0.20, 0.5);
        this.scene.rotate(-Math.PI/2, 1,0, 0);
        this.cilindro_aux.display();
        this.scene.popMatrix();
        for(var i = 0; i < 16 ; i++){
            this.scene.pushMatrix();
            this.scene.rotate(i*Math.PI/8, 0, 1, 0);
            this.scene.translate(1.55, 0.20, 0.5);
            this.scene.rotate(-Math.PI/2, 1,0, 0);
            this.cilindro_aux.display();
            this.scene.popMatrix();
        }
        this.scene.popMatrix();
        this.scene.pushMatrix();


        for(var i=0;i<this.galhos_no_ninho.length;i++){
            
            this.scene.pushMatrix();
            console.log(this.galhos_no_ninho[i].x);
            this.scene.translate(this.galhos_no_ninho[i].x,this.y,this.galhos_no_ninho[i].z);
            this.scene.rotate(this.galhos_no_ninho[i].rotacao, 0, 1,0);
            this.galhos_no_ninho[i].display();
            this.scene.popMatrix();

        }
        this.scene.popMatrix();


        


        
    }
    
}
