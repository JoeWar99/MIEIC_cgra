/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
        this.velocidade = 0;
    }
    init(application) {
        super.init(application);
        this.initLights();
        this.initCameras();
        
        
        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        
        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);
        this.update_period = 50;
        this.setUpdatePeriod(this.update_period);
        
        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.plane = new Plane(this, 32);
        this.Bird = new MyBird(this, 2);
        this.terrain = new MyTerrain(this, 2);
        this.house = new MyHouse(this);
        this.lSystem = new MyLSystem(this);
        this.lightning = new MyLightning(this);
        this.tree_plant = new MyLSPlant(this);
        this.nest  = new MyNest(this);
        this.birds_floke = new MyBirdFloke(this);
        this.unitcube_map = new MyUnitCube(this, 60);
        this.day_texture = new CGFtexture(this, 'textures/cubemap_day.png');
        this.night_texture = new CGFtexture(this, 'images/cubemap_night.png');
        this.branch_aux=new MyTreeBranch(this,1,0,0,0,0);
        
        
        this.day_or_night = 0;
        this.material_difuso = new CGFappearance(this);
        this.material_difuso.setAmbient(1 ,1,1, 1.0);
        this.material_difuso.setDiffuse(1.0,1.0,1.0, 1.0);
        this.material_difuso.setSpecular(0.0, 0.0, 0.0, 1.0);
        this.material_difuso.setShininess(10.0);

        
        this.displayAxis = true;
        this.down_bool = false;
        this.third_person = false;
        this.p_as_been_pressed = false;
        this.bool = false;
        this.slider = 0.3;
        this.n_de_galhos_no_ninho = 0;
        this.scaleFactor_Scene = 1;
        this.scaleFactor_Ave = 1;
        this.speedFactor_Ave = 1;
        this.pos_galho_hided = 0;
        this.ang_passaro_check_soil = 0;
        this.score = 0;
        this.bird_camera_x = Math.sin(this.Bird.ang)
        this.bird_camera_y = this.Bird.y;
        this.bird_camera_z = Math.cos(this.Bird.ang);
        
        this.lightning_material = new CGFappearance(this);
		this.lightning_material.setAmbient(1, 1, 1, 1);
		this.lightning_material.setDiffuse(1, 1, 1, 1);
		this.lightning_material.setSpecular(1, 1, 1, 1);
        this.lightning_material.setShininess(200);
        this.lightning_texture = new CGFtexture(this, "textures/relampago.jpg");

        this.axiom_plants = [];
        
        for(var i = 0; i < 14; i++){
            this.axiom_plants.push(this.tree_plant.axiom)
            this.tree_plant.axiom = 'X';
            this.tree_plant.iterate();
           
        }

        this.galhos=[
            new MyTreeBranch(this, 8, -6, 7.5, -5, 0), 
            new MyTreeBranch(this, 8, -3, 7.5, -12, Math.PI/4),
            new MyTreeBranch(this, 8, 3, 7.5, -15, 0),
            new MyTreeBranch(this, 8, 8, 7.5, -12, -Math.PI/4),
            new MyTreeBranch(this, 8, 10, 7.5, -6, -Math.PI/2),
        ];

        this.posicao_galhos =[
            new MyTreeBranch(this, 8, -6, 7.5, -5, 0), 
            new MyTreeBranch(this, 8, -3, 7.5, -12, Math.PI/4),
            new MyTreeBranch(this, 8, 3, 7.5, -15, 0),
            new MyTreeBranch(this, 8, 8, 7.5, -12, -Math.PI/4),
            new MyTreeBranch(this, 8, 10, 7.5, -6, -Math.PI/2),
        ]

        
        

    
        //Objects connected to MyInterface
   

    }
    scorechanged(){

    }
    updateAmbienteLight() {
        this.setGlobalAmbientLight(this.slider,this.slider,this.slider,1.0);
    }
    initLights() {
        this.setGlobalAmbientLight(0.3, 0.3, 0.3, 1.0);
        this.lights[0].setPosition(0, 30, 0, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();

        this.lights[1].setPosition(0, 0, 0, 1);
        this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[1].disable();
        this.lights[1].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(0,100,75), vec3.fromValues(0, 0, 0));
    }

    updatecamera(){
        this.bird_camera_z = Math.cos(this.Bird.ang);
        this.bird_camera_y = this.Bird.y;
        this.bird_camera_x = Math.sin(this.Bird.ang);

        this.camera.setTarget(vec3.fromValues(this.Bird.x,this.Bird.y,this.Bird.z))
        this.camera.setPosition(vec3.fromValues(this.Bird.x - this.bird_camera_x*30, this.Bird.y+40, this.Bird.z - this.bird_camera_z*30));
    }
    
    setDefaultAppearance(){
        this.setAmbient(1, 1, 1, 1.0);
        this.setDiffuse(1, 1, 1, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    update(t) {

        this.terrain.update(t);
        this.birds_floke.update(t);

        
        if (this.Bird.down_to_galho == false && this.Bird.down_to_nest == false) {
            this.checkKeys(t);
        } 
        else if (this.Bird.check_soil_galho == true ) {

            for (var i = 0; i < this.galhos.length; i++) {
                if(this.galhos[i].ativo == true && this.galhos[i].no_nest == false){
                    if (this.Bird.x <= (this.galhos[i].x + 2) && this.Bird.x >= (this.galhos[i].x - 2)) {

                        if (this.Bird.z <= (this.galhos[i].z + 2) && this.Bird.z >= (this.galhos[i].z - 2)) {

                            this.Bird.galho_na_boca_bool = true;
                            this.galhos[i].ativo = false;
                            this.pos_galho_hided = i;
                        }
                    }
                }
            }
            this.Bird.check_soil_galho = false;
            this.Bird.down_to_galho = false;
            this.Bird.subida_rapina=true;

        } else if (this.Bird.check_soil_nest == true) {

            if (this.Bird.x <= this.nest.x + 3.5 && this.Bird.x >= this.nest.x - 3.5) {

                if (this.Bird.z <= this.nest.z + 3.5 && this.Bird.z >= this.nest.z - 3.5) {
                    
                    if(this.pos_galho_hided!=-1){
                        this.Bird.galho_na_boca_bool=false;
                        this.galhos[this.pos_galho_hided].x = this.Bird.x;
                        this.galhos[this.pos_galho_hided].z = this.Bird.z;
                        this.galhos[this.pos_galho_hided].y =this.galhos[this.pos_galho_hided].y+0.1;
                        
                        this.galhos[this.pos_galho_hided].rotacao=this.Bird.ang;
                        this.galhos[this.pos_galho_hided].no_nest = true;
                        this.galhos[this.pos_galho_hided].ativo = true;
                        this.n_de_galhos_no_ninho++;
                        this.score++;
                        
                        console.log(this.n_de_galhos_no_ninho);
                        if(this.n_de_galhos_no_ninho == 5){
                            this.n_de_galhos_no_ninho = 0;
                            for(var i = 0; i < 5; i++){
                                this.galhos[i].x = this.posicao_galhos[i].x;
                                this.galhos[i].y = this.posicao_galhos[i].y;
                                this.galhos[i].z = this.posicao_galhos[i].z;
                                this.galhos[i].rotacao = this.posicao_galhos[i].rotacao;
                                this.galhos[i].ativo = true;
                                this.galhos[i].no_nest = false;                
                            }
                           
                        }
                    }
                }

            }
            this.Bird.check_soil_nest = false;
            this.Bird.down_to_nest = false;
            this.Bird.subida_rapina=true;
        }

        this.Bird.update(t);
        this.lightning.update(t);
    }
    checkKeys(t) {
        var text="Keys pressed: ";
        var keysPressed=false;
        // Check for key codes e.g. in https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")) {
            text+=" W ";
            keysPressed=true;
            if(this.down_bool == false){
                this.Bird.accelerate(true);
            }
        }
        if (this.gui.isKeyPressed("KeyS")) {
            text+=" S ";
            keysPressed=true;
            if(this.down_bool == false){
                this.Bird.accelerate(false);
            }
        }
        if (this.gui.isKeyPressed("KeyA")) {
            text+=" A ";
            if(this.down_bool == false){
                keysPressed=true;
                this.Bird.turn(true);
            }
        }
        if (this.gui.isKeyPressed("KeyD")) {
            text+=" D ";
            keysPressed=true;
            if(this.down_bool == false){
                this.Bird.turn(false);
            }
        }
        
        if (this.gui.isKeyPressed("KeyR")) {
            text+=" R ";
            keysPressed=true;
            if(this.down_bool == false){
                this.velocidade = 0;
                this.Bird.original_position();
            }
        }
        if (this.gui.isKeyPressed("KeyL")) {
            text+=" L ";
            keysPressed=true;
            if(this.bool == false){
                this.bool = true;
                this.lightning.startAnimation(t);
            }

        }
        if (this.gui.isKeyPressed("KeyP")){
            text+=" P ";
            keysPressed = true;
            if(this.p_as_been_pressed == false){
                this.p_as_been_pressed = true;
                if (this.Bird.galho_na_boca_bool == false) {
                    this.Bird.altura_rapina = this.Bird.y;
                    this.Bird.Bird_down();
                } else if (this.Bird.galho_na_boca_bool == true) {
                    this.Bird.altura_rapina = this.Bird.y;
                    this.Bird.Bird_down_to_nest();
                }
            }

        }

    }
   
    display() {
        if(this.third_person == true){
            this.updatecamera();
        }
        
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        //this.lights[0].update();
        this.lights[1].update();

        // Draw axis
        this.axis.display();


        //Apply default appearance
        this.setDefaultAppearance();

        this.scale(this.scaleFactor_Scene, this.scaleFactor_Scene, this.scaleFactor_Scene);

        // ---- BEGIN Primitive drawing section

        // CUBO MAP

 

        this.material_difuso.setTexture(this.day_texture);
        this.material_difuso.apply();
        this.pushMatrix();
        this.translate(0,30,0);
        this.unitcube_map.display();
        this.popMatrix();
        
        
        // TERRENO

        this.pushMatrix();
        this.rotate(-0.5*Math.PI, 1, 0, 0);
        this.scale(60, 60, 1);
        this.terrain.display();
        this.popMatrix();


        // NINHO


        this.pushMatrix();
        this.nest.display();
        this.popMatrix();

        // BANDO DE AVES

        this.pushMatrix();
        this.birds_floke.display();
        this.popMatrix();

        // CASA

        this.pushMatrix()
        this.translate(13, 7.5, 0);
        this.scale(2, 2, 2);
        this.house.display();
        this.popMatrix();

        // PASSARO
        
        this.pushMatrix();
        this.Bird.display();
        this.popMatrix();


        // ARVORES

        for(var i = 0; i < 5 ; i++){
            this.pushMatrix();
            this.rotate((i-1) * Math.PI/5, 0, 1, 0);
            this.translate(16,7.5,0);
            this.tree_plant.axiom = this.axiom_plants[i];
            this.tree_plant.display();
            this.popMatrix();

        }

        
        this.pushMatrix();
        this.translate(-15, 7.5, -6.5);
        this.tree_plant.axiom = this.axiom_plants[0];
        this.tree_plant.display();
        this.popMatrix();

        
        this.pushMatrix();
        this.translate(-15, 7.5, -6.5);
        this.tree_plant.axiom = this.axiom_plants[0];
        this.tree_plant.display();
        this.popMatrix();
        
        this.pushMatrix();
        this.translate(-19, 7.5, 5);
        this.tree_plant.axiom = this.axiom_plants[1];
        this.tree_plant.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-17, 7.5, 5.5);
        this.tree_plant.axiom = this.axiom_plants[2];
        this.tree_plant.display();
        this.popMatrix();
        
        this.pushMatrix();
        this.translate(-15, 7.5, -1);
        this.tree_plant.axiom = this.axiom_plants[3];
        this.tree_plant.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-19, 7.5, 1);
        this.tree_plant.axiom = this.axiom_plants[4];
        this.tree_plant.display();
        this.popMatrix();
        
        this.pushMatrix();
        this.translate(-12, 7.5, 0);
        this.tree_plant.axiom = this.axiom_plants[5];
        this.tree_plant.display();
        this.popMatrix();
        
        this.pushMatrix();
        this.translate(-4, 7.5, 6.5);
        this.tree_plant.axiom = this.axiom_plants[6];
        this.tree_plant.display();
        this.popMatrix();
        
        this.pushMatrix();
        this.translate(-4, 7.5, 14);
        this.tree_plant.axiom = this.axiom_plants[7];
        this.tree_plant.display();
        this.popMatrix();
        
        this.pushMatrix();
        this.translate(-3, 7.5, 12);
        this.tree_plant.axiom = this.axiom_plants[8];
        this.tree_plant.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-13, 7.5, 4);
        this.tree_plant.axiom = this.axiom_plants[9];
        this.tree_plant.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-19, 7.5, 1);
        this.tree_plant.axiom = this.axiom_plants[10];
        this.tree_plant.display();
        this.popMatrix();

        
        this.pushMatrix();
        this.translate(-12, 7.5, 14);
        this.tree_plant.axiom = this.axiom_plants[11];
        this.tree_plant.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-9, 7.5, 13);
        this.tree_plant.axiom = this.axiom_plants[12];
        this.tree_plant.display();
        this.popMatrix();



        this.pushMatrix();
        this.translate(-10, 7.5, 10);
        this.tree_plant.axiom = this.axiom_plants[13];
        this.tree_plant.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-7, 7.5, 9);
        this.tree_plant.axiom = this.axiom_plants[1];
        this.tree_plant.display();
        this.popMatrix();


        // Galhos


        this.pushMatrix();
        
        for (var i = 0; i < this.galhos.length; i++) {


            if (this.galhos[i].ativo == true) {

                if (i == this.pos_galho_hided) {
                    this.rotate(this.ang_passaro_check_soil, 0, 1, 0);
                    this.ang_passaro_check_soil = 0;
                    this.pos_galho_hided = -1;
                }

                    this.galhos[i].display();

                }

            }
            
            this.popMatrix();
            

        // Relampago

       this.lightning_material.setTexture(this.lightning_texture);
       this.lightning_material.apply();
       if(this.bool == true){
            this.lightning.display();
       }


        // ---- END Primitive drawing section
    }
}