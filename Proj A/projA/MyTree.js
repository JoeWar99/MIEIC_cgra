/**
 * MyTree
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTree extends CGFobject {
    constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture,
        treeTopTexture){
        super(scene);
        this.scene = scene;
        this.trunkHeight = trunkHeight;
        this.trunkRadius =trunkRadius;
        this.treeTopHeight = treeTopHeight;
        this.treeTopRadius = treeTopRadius;
        this.treeTopTexture = treeTopTexture;
        
        
        this.trunktexture = new CGFtexture(scene, 'images/trunk.jpg');
        this.toptreetexture = new CGFtexture(scene, this.treeTopTexture);
        this.material = new CGFappearance(scene);
        this.material.setAmbient(1 ,1,1, 1.0);
        this.material.setDiffuse(1.0,1.0,1.0, 1.0);
        this.material.setSpecular(0.0, 0.0, 0.0, 1.0);
        this.material.setShininess(10.0);
        
        this.quad = new MyQuad(scene);
        this.normals = [];
        this.prism = new MyPrism(scene, 10, 1);
        this.cilinder = new MyCylinder(scene, 12, 1, trunkHeight, trunkRadius, trunkTexture);
        this.cone = new MyCone(scene,12,1,trunkHeight, treeTopHeight, treeTopRadius, treeTopTexture);
            
        this.material_standard = new CGFappearance(scene);
        this.material_standard.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.material_standard.setDiffuse(1,1,1,1.0);
        this.material_standard.setSpecular(0, 0, 0, 1.0);
        this.material_standard.setShininess(10.0);
	}
    display(){
        // ---- BEGIN Primitive drawing section
        if(this.scene.textures_activate_difusa_2){
            this.material.setTexture(this.trunktexture);
            this.material.apply();
        }
        else{
            this.material_standard.apply();
        }
        this.cilinder.display();
        this.material.setTexture(this.toptreetexture);
        this.material.apply();
        this.cone.display();
       // this.quad.display();
    
    }

    enableNormalViz() {
        this.quad.enableNormalViz();
        this.prism.enableNormalViz();
        this.cilinder.enableNormalViz();
        this.cone.enableNormalViz();
    }

    disableNormalViz() {
        this.quad.disableNormalViz();
        this.prism.disableNormalViz();
        this.cilinder.disableNormalViz();
        this.cone.disableNormalViz();
    }
  
}

