/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene, texture_left, texture_right, texture_front, texture_top, texture_base, texture_back, tamanho ,id) {
		super(scene);
        this.initBuffers();
        this.tamanho = tamanho;
        this.MyQuad2 = new MyQuad(scene,tamanho);
        this.tras_texture = new CGFtexture(scene, texture_back);
        this.frente_texture = new CGFtexture(scene, texture_front);
        this.esquerda_texture = new CGFtexture(scene, texture_left);
        this.direita_texture = new CGFtexture(scene, texture_right);
        this.top_texture = new CGFtexture(scene, texture_top);
        this.bottom_texture = new CGFtexture(scene, texture_base);
        this.material = new CGFappearance(scene);
        this.material.setAmbient(1 ,1,1, 1.0);
        this.material.setDiffuse(1.0,1.0,1.0, 1.0);
        this.material.setSpecular(0.0, 0.0, 0.0, 1.0);
        this.material.setShininess(10.0);


        this.material_standard = new CGFappearance(scene);
        this.material_standard.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.material_standard.setDiffuse(1,1,1,1.0);
        this.material_standard.setSpecular(0, 0, 0, 1.0);
        this.material_standard.setShininess(10.0);

        this.id = id;
    
        
    }
    
    display(){
        // face frente do cubo
        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5*this.tamanho);
        if(this.id != 0){
            this.material.setTexture(this.frente_texture);
            this.material.apply();
        }
        else if(this.id == 0){
            if(this.scene.textures_activate_difusa_1){
                this.material.setTexture(this.frente_texture);
                this.material.apply();
            }
            else{
            this.material_standard.apply();
            }
            
        }
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
  
        this.MyQuad2.display(1);

        // lado direito
        this.scene.popMatrix();
        this.scene.pushMatrix();

        if(this.id != 0){
            this.material.setTexture(this.esquerda_texture);
            this.material.apply();
        }
        else if(this.id == 0){
            if(this.scene.textures_activate_difusa_1){
                this.material.setTexture(this.esquerda_texture);
                this.material.apply();
            }
            else{
            this.material_standard.apply();
            }
            
        }
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.scene.rotate((Math.PI/2),0,1,0);
        this.scene.translate(0,0,0.5*this.tamanho);
        this.MyQuad2.display(1);

        
        // parte de trás
        this.scene.popMatrix();
        this.scene.pushMatrix();

        
        if(this.id != 0){
            this.material.setTexture(this.tras_texture);
            this.material.apply();
        }
        else if(this.id == 0){
            if(this.scene.textures_activate_difusa_1){
                this.material.setTexture(this.tras_texture);
                this.material.apply();
            }
            else{
            this.material_standard.apply();
            }
            
        }
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        
        this.scene.rotate((Math.PI),0,1,0);
        this.scene.translate(0,0,0.5*this.tamanho);
        this.MyQuad2.display(1);
        
        // lado esquerdo
        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        if(this.id != 0){
            this.material.setTexture(this.direita_texture);
            this.material.apply();
        }
        else if(this.id == 0){
            if(this.scene.textures_activate_difusa_1){
                this.material.setTexture(this.direita_texture);
                this.material.apply();
            }
            else{
            this.material_standard.apply();
            }
            
        }
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.rotate((3*Math.PI/2),0,1,0);
        this.scene.translate(0,0,0.5*this.tamanho);
        this.MyQuad2.display(1);
        
        // topo
        this.scene.popMatrix();
        this.scene.pushMatrix();

        
        if(this.id != 0){
            this.material.setTexture(this.top_texture);
            this.material.apply();
        }
        else if(this.id == 0){
            if(this.scene.textures_activate_difusa_1){
                this.material.setTexture(this.top_texture);
                this.material.apply();
            }
            else{
            this.material_standard.apply();
            }
            
        }
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.rotate(-Math.PI/2,0,1,0);
        this.scene.rotate((-Math.PI/2),1,0,0);
        this.scene.translate(0,0,0.5*this.tamanho);
       // this.material_topo.apply();
      //  this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.MyQuad2.display(1);


        //base
        this.scene.popMatrix();
        this.scene.pushMatrix();

         
        if(this.id != 0){
            this.material.setTexture(this.bottom_texture);
            this.material.apply();
        }
        else if(this.id == 0){
            if(this.scene.textures_activate_difusa_1){
                this.material.setTexture(this.bottom_texture);
                this.material.apply();
            }
            else{
            this.material_standard.apply();
            }
            
        }
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.scene.rotate((Math.PI/2),1,0,0);
        this.scene.translate(0,0,0.5*this.tamanho);
       // this.material_base.apply();
       // this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.MyQuad2.display(1);

        this.scene.popMatrix();
    }
    enableNormalViz(){
        this.MyQuad2.enableNormalViz();
    }
    disableNormalViz(){
        this.MyQuad2.disableNormalViz();

    }

}

