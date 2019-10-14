/**
* Mylantern
* @constructor
*/
class Mylantern extends CGFobject {
    constructor(scene)
    {
        super(scene);
        this.scene  =scene;
        this.piramide = new MyPyramid(scene, 4, 0, 1,0.5, 0,1);
        this.piramide1 = new MyPyramid(scene, 4, 0, 1, 0.5, 0, 1);
        
    }
    display() {
        this.scene.pushMatrix();
        this.scene.translate(0, 1.5, 0);
        this.piramide.display();
        this.scene.scale(1, -1, 1);
        this.piramide1.display();
        this.scene.popMatrix();
        
    }
    enableNormalViz(){
        this.piramide.enableNormalViz();
        this.piramide1.enableNormalViz();
        
    }
    disableNormalViz(){
        this.piramide.disableNormalViz();
        this.piramide1.disableNormalViz();
    }
    
    
}


