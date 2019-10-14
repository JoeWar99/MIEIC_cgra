/**
 * MyWings
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyWings extends CGFobject {
	constructor(scene,tamanho) {
		super(scene);
        this.initBuffers();
        this.tamanho = tamanho;
        this.scene = scene;
        this.bird_wings_1 = new MyTriangle(scene, tamanho);
        this.bird_wings_2 = new MyRectangle(scene, tamanho);
        this.rotate_wings = 0;

       
    }
    update(t){

        //altera a posiçao das asas
        this.rotate_wings = Math.sin(t)*Math.PI/4 ;
    }
    
    display(){
        this.scene.pushMatrix();
        this.scene.rotate(this.rotate_wings, 0,0,1);
        
    
       
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/6, 0, 0, 1);
        this.bird_wings_2.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(-0.08, 0.3,0);
        this.bird_wings_1.display();
        this.scene.popMatrix();
        
        this.scene.popMatrix();
    }
    enableNormalViz(){
        this.MyQuad2.enableNormalViz();
    }
    disableNormalViz(){
        this.MyQuad2.disableNormalViz();

    }

}

