/**
 * MyTreeRowPatch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeRowPatch extends CGFobject {
    constructor(scene){
        super(scene);
        this.scene = scene;
        this.tree = new MyTree(scene, 1,0.5,3, 1.5,'images/trunk.png','images/treetop.jpg');
        this.tree1 = new MyTree(scene, 1,0.25,1.5, 0.75, 'images/trunk.png','images/treetop1.jpg');
    }
    display(){
        this.scene.pushMatrix();
        var translate_z = 0;
        for(var i = 0 ; i<6; i++){
            if(i % 2 == 0){
                this.tree.display();
                
            }
            else{
                this.tree1.display();
            }
            this.scene.translate(3,0,translate_z);
        }
        this.scene.popMatrix();
    }

    enableNormalViz() {
        this.tree.enableNormalViz();
        this.tree1.enableNormalViz();
        
    }

    disableNormalViz() {
        this.tree.disableNormalViz();
        this.tree1.disableNormalViz();
    }
}

