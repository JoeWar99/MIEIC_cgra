/**
 * MyTreeGroupPatch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeGroupPatch extends CGFobject {
    constructor(scene){
        super(scene);
        this.scene = scene;
        this.tree = new MyTree(scene, 1,0.5,3, 1.5,'images/trunk.png','images/treetop.jpg');
        this.tree1 = new MyTree(scene, 1,0.25,1.5, 0.75, 'images/trunk.png','images/treetop1.jpg');
        this.tree2 = new MyTree(scene, 1,0.50,1.5, 1.5, 'images/trunk.png','images/treetop2.jpg');
        this.tree3 = new MyTree(scene, 1,0.50,4, 0.75,'images/trunk.png','images/treetop3.jpg');
    }
    display(){
        // ---- BEGIN Primitive drawing section
        var o;
        this.scene.pushMatrix();
        for(var i = 0 ; i<3; i++){
            for(var j = 0; j <3; j++){
                if(j % 2 == 0 && i % 2 == 0){
                    o = 0;
                }
                else if(j % 2  == 0 && i % 2 != 0){
                    o = 1;
                }
                else if(j % 2  != 0 && i % 2 == 0){
                    o = 2;
                }
                else{
                    o = 3
                }
                if(o  == 0){
                this.tree.display();
                }
                else if(o  == 1){
                    this.tree1.display();
                }
                else if(o == 2){
                    this.tree2.display();
                }
                else if(o == 3){
                    this.tree3.display();
                }
                this.scene.translate(3,0,0);
            }
            this.scene.translate(-9, 0, 3);
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
