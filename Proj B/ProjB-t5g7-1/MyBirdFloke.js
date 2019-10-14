/**
 * MyBird
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBirdFloke extends CGFobject {
	constructor(scene) {
		super(scene);
        this.initBuffers();
        this.passaros=[ 
            new MyBird(this.scene,  0.5 ),
            new MyBird(this.scene,  0.5 ),
            new MyBird(this.scene,  0.5 ),
            new MyBird(this.scene,  0.5 ),
            new MyBird(this.scene,  0.5),
            new MyBird(this.scene,  0.5),
            new MyBird(this.scene,  0.5),
        ];

        this.incremento=0;
        this.last_time_record=0;
        

    }


    update(t){

        
        this.time_calculated=t-this.last_time_record;

        this.incremento+=0.0001*this.time_calculated;

        this.last_time_record=t;
        for(var i = 0; i < 7; i++){
            this.passaros[i].update(t);
        }

        
        
    }

    display(){

        this.scene.pushMatrix();
        this.scene.rotate(this.incremento,0,1,0);
        this.scene.translate(1,0,0);
        
        
        for(var i =0;i<this.passaros.length;i++){
            if(i % 2 == 0){
                this.scene.pushMatrix();
                this.scene.translate(25,20,0);
                this.scene.scale(-0.7,0.7,-0.7);
                this.passaros[i].display();
                this.scene.popMatrix();
                this.scene.translate(2,0,0);
            }
            else{
                
                this.scene.pushMatrix();
                this.scene.translate(25,20,-3);
                this.scene.scale(-0.7,0.7,-0.7);
                this.passaros[i].display();
                this.scene.popMatrix();
                this.scene.translate(2,0,0);

            }
        }

        this.scene.popMatrix();


        
    }
}

