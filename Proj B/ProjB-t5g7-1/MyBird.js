/**
 * MyBird
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBird extends CGFobject {
	constructor(scene,tamanho) {
		super(scene);
        this.initBuffers();
        this.tamanho = tamanho;
        this.scene = scene;
        
        this.bico_texture = new CGFtexture(scene, "textures/textura_unha_ave.jpg");
        this.bird_cube = new MyCilinder(scene, 10, 0, 1.5, 0.45);
        this.bird_cube_eyes = new MyUnitCube(scene, 0.1);
        this.bird_nose = new MyPyramid(scene, 8, 0, 0.2, 0.1, 0, 0);
        this.bird_head = new MyPyramid(scene, 10, 0, 1, 0.5,0 , 0);
        this.bird_tail = new MyPyramid(scene, 10, 0, 1, 0.5, 0, 0);
        this.wings = new MyWings(scene, 1);
        this.bird_legs = new MyLegs(scene, 1);
        

        
        this.bird_material = new CGFappearance(scene);
		this.bird_material.setAmbient(1, 1, 1, 1);
		this.bird_material.setDiffuse(1, 1, 1, 1);
		this.bird_material.setSpecular(1, 1, 1, 1);
        this.bird_material.setShininess(200);
        
        this.corpo_texture= new CGFtexture(scene, "textures/asas.jpg");


     
        this.orientacao = 0;
        this.galho_na_boca = new MyTreeBranch(scene, 1, 0, 0, 0, 0);
        this.x = 0;
        this.y = 3;
        this.z = 0;
        this.v = 0;
        this.base = 20;
        this.ang = 0;
        this.previous_t = 0;
        this.velocidade = 0;
        this.velocidade_angular = 0.5;
        this.delta = 0;
        this.incremento = 0;
        this.galho_na_boca_bool = false;
        this.down_to_galho = false;
        this.down_to_nest = false;
        this.check_soil_nest = false;
        this.check_soil_galho = false;
        this.subida_rapina=false;
        
        this.velocidade_aux = 0;
        this.altura_rapina=0;
        this.velocidade_rapina=0;

    }
    accelerate(v){
        if(v){
            
                this.velocidade += this.scene.speedFactor_Ave;
    

           /* else{
                this.velocidade = this.scene.speedFactor_Ave*5;
            } */
        }
        else{
            this.velocidade -= this.scene.speedFactor_Ave * 5;
            if(this.velocidade < 0){
                this.velocidade = 0;
            }
        }

    }
    turn(v){
        if(v){
            this.ang =  (this.ang + this.scene.speedFactor_Ave *  Math.PI/12) % (Math.PI*2);
        }
        else{
            this.ang = (this.ang - this.scene.speedFactor_Ave * Math.PI/12) %(Math.PI*2);
        }    

    
    }


    original_position()
    {
        this.x = 0;
        this.z = 0;
        this.velocidade = 0;
        this.ang = 0;
    }


    update(t){
        // alterar a posicao da ave , bem como a sua velocidade e orinetaçao
        this.delta = t - this.previous_t;
        this.previous_t = t;
        
        this.velocidade = this.velocidade * 0.9;
        
        this.incremento = this.incremento + ((2 * Math.PI * this.delta) / (1000));
        this.z = this.z + this.velocidade * this.delta / 1000 * Math.cos(this.ang)
        this.x = this.x + this.velocidade * this.delta / 1000 * Math.sin(this.ang)
        
        if (this.down_to_galho == false && this.down_to_nest == false&&this.subida_rapina==false) {
            this.y = this.base + Math.sin(this.incremento);
            this.wings.update((t / 100) * this.scene.speedFactor_Ave);
        }

        else if(this.subida_rapina==false&&this.subida_rapina==false) {
            this.velocidade_rapina=this.altura_rapina*(this.delta/1000);
            this.y = this.y-this.velocidade_rapina;
            this.wings.update(0);

        }else if(this.subida_rapina==true){

            if(this.y>=this.altura_rapina){
                this.subida_rapina=false;
                this.scene.p_as_been_pressed = false;
            }else{
                this.velocidade_rapina=this.altura_rapina*(this.delta/1000);
                this.y = this.y+this.velocidade_rapina;
                this.wings.update((t/50) * this.scene.speedFactor_Ave);
            }

        }


        if (this.y <= 7) {
            
            if (this.down_to_galho == true) {
                this.check_soil_galho = true;
            }else if (this.down_to_nest == true) {
                this.check_soil_nest = true;
            }
            
        }
        
    }
    Bird_down() {
        this.down_to_galho = true;

    }
    Bird_down_to_nest() {

        this.down_to_nest = true;

    }

    
    
    
    
    display(){
        
        this.scene.pushMatrix();
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.ang, 0, 1, 0);
        this.scene.scale(this.scene.scaleFactor_Ave, this.scene.scaleFactor_Ave,this.scene.scaleFactor_Ave);
        
        
        this.bird_material.setTexture(this.bico_texture);
        this.bird_material.apply();
        
        this.scene.pushMatrix();
        this.scene.translate(0.3, 0.60, 1.00);
        this.bird_cube_eyes.display();
        this.scene.popMatrix();
        
        
        this.scene.pushMatrix();
        this.scene.translate(-0.3, 0.60, 1.00);
        this.bird_cube_eyes.display();
        this.scene.popMatrix();
        
        
        
        this.bird_material.setTexture(this.corpo_texture);
        this.bird_material.apply();
        
        this.scene.pushMatrix();
        this.scene.translate(-0.40, 0, 0);
        this.scene.scale(-2, 1, 1);
        this.wings.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix()        
        this.scene.translate(0.40, 0, 0);
        this.scene.scale(2, 1, 1);
        this.wings.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(0, 0.4, 0.7);
        this.scene.rotate(Math.PI/2, 1 , 0, 0);
        this.bird_head.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(0, -0.10, -0.25);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.bird_tail.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(-0.27, -0.8, 0);
        this.scene.scale(0.2, 0.2, 0.2);
        
        
        this.scene.pushMatrix();
        this.bird_legs.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(2, 0, 0);
        this.bird_legs.display();
        this.scene.popMatrix();
        
        this.scene.popMatrix();

        
        
        this.scene.pushMatrix();
        if(this.galho_na_boca_bool == true){
            this.scene.scale(1/this.scene.scaleFactor_Ave, 1/this.scene.scaleFactor_Ave,1/this.scene.scaleFactor_Ave);
            this.scene.translate(1, -0.7 * this.scene.scaleFactor_Ave,0.3);
        
            this.galho_na_boca.display();
        }
        this.scene.popMatrix();
        
        this.bird_material.apply();
        
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI/6, 1, 0, 0);
        this.scene.pushMatrix();
        this.scene.translate(0, 0 , -0.5);
        this.scene.rotate(Math.PI/2, 1, 0,0);
        this.bird_cube.display();
        this.scene.popMatrix();
        this.scene.popMatrix();

        this.bird_material.setTexture(this.bico_texture);
        this.bird_material.apply();
        
        this.scene.pushMatrix();
        this.scene.translate(0, 0.37, 1.6);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.bird_nose.display();
        
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

