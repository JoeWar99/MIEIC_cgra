/**
 * MyVoxelHill
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVoxelHill extends CGFobject {
    constructor(scene,altura){
        super(scene);
        this.altura = altura;
        this.scene = scene;


        this.lado_cubo = new CGFtexture(scene, 'images/mineSide.png');
        this.topo_cubo = new CGFtexture(scene, 'images/mineTop.png');
        this.base_cubo = new CGFtexture(scene, 'images/mineBottom.png');
        this.cube =new MyUnitCubeQuad(scene, 'images/mineSide.png','images/mineSide.png','images/mineSide.png', 'images/mineTop.png', 'images/mineBottom.png', 'images/mineSide.png',1, 0);
        
        

    
    }
    display(){
      // ---- BEGIN Primitive drawing section
    this.scene.pushMatrix();
     for(var i  =  this.altura; i >0; i--) {
        
        this.scene.pushMatrix();
        this.scene.translate(this.altura -i, this.altura-i, this.altura -i);

        for(var j=0; j < 2*i-1; j++){
            
            this.scene.pushMatrix();
            this.scene.translate(0, 0, j);

            for(var k=0; k < 2*i -1; k++){
                    this.scene.pushMatrix();
                    this.scene.translate(k, 0, 0);
                    this.cube.display();
                    this.scene.popMatrix();
                }
            this.scene.popMatrix();
           
        }   
        this.scene.popMatrix();
    
      }
      this.scene.popMatrix();
        
    
    }

    enableNormalViz() {
        this.cube.enableNormalViz();
    }

    disableNormalViz() {
        this.cube.disableNormalViz();
        
    }
}