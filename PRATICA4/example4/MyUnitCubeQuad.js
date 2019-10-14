/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
		super(scene);
        this.initBuffers();
        this.MyQuad2 = new MyQuad(scene);
        this.material_lado = new CGFappearance(scene);
        this.material_topo = new CGFappearance(scene);
        this.material_base = new CGFappearance(scene);
        this.lado_cubo = new CGFtexture(scene, 'images/mineSide.png');
        this.topo_cubo = new CGFtexture(scene, 'images/mineTop.png');
        this.base_cubo = new CGFtexture(scene, 'images/mineBottom.png');
    }
    
    display(){

        this.material_lado.setTexture(this.lado_cubo);
        this.material_topo.setTexture(this.topo_cubo);
        this.material_base.setTexture(this.base_cubo);

        // face frente do cubo
        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.material_lado.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.MyQuad2.display();

        // lado direito
        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.rotate((Math.PI/2),0,1,0);
        this.scene.translate(0,0,0.5);
        this.MyQuad2.display();

        
        // parte de trás
        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        this.scene.rotate((Math.PI),0,1,0);
        this.scene.translate(0,0,0.5);
        this.MyQuad2.display();
        
        // lado esquerdo
        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        this.scene.rotate((3*Math.PI/2),0,1,0);
        this.scene.translate(0,0,0.5);
        this.MyQuad2.display();
        
        // topo
        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.rotate((-Math.PI/2),1,0,0);
        this.scene.translate(0,0,0.5);
        this.material_topo.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.MyQuad2.display();


        //base
        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.rotate((Math.PI/2),1,0,0);
        this.scene.translate(0,0,0.5);
        this.material_base.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.MyQuad2.display();
























    }
	

}

