/**
 * MyLightning
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLightning extends MyLSystem {
	constructor(scene) {
        super(scene);
        this.scene= scene;
        
        this.depth_principal = 0;
        this.axiom = "X"; 
        this.ruleF = "FF"; 
        this.ruleF1 = "FFF";
        this.ruleF2 = "F";
     
        this.ruleX = "F[-X][X]F[-X]+FX"; 
        this.ruleX1 = "F[-X][X]F[-X]+X";
        this.ruleX2 = "F[/X][X]F[««X]+X";
        this.ruleX3 =  "F[^X][X]F[&X]^X";
        
        this.angle = 25.0;
        this.iterations = 3;
        this.scaleFactor = 0.5;
        this.times = 0;
        this.luz =  false;

        this.initGrammar();
        
        this.doGenerate = function (){
            this.generate(
                this.axiom,
                {
                    "F": [this.ruleF,this.ruleF1, this.ruleF2],
                    "X": [this.ruleX, this.ruleX1, this.ruleX2, this.ruleX3],

                },
                this.angle,
                this.iterations,
                this.scaleFactor
            );
        }

        // do initial generation
        this.doGenerate();
    
    }


    // cria o lexico da gramática
    initGrammar(){
        this.grammar = {
            "F": new MyQuad(this.scene),
            "X": new MyQuad(this.scene),
        };
    }

    update(t){
            this.depth_principal = this.depth_principal + this.increment;
            this.delta_time = t - this.first_time;
        
        //this.lights[1].update();
            if(this.delta_time >= 1000 && this.scene.bool == true){
                this.scene.lights[1].disable();
                this.luz = false;
                this.scene.bool = false;
            }
    }
    startAnimation(t){
        
        this.axiom = 'X';
        this.iterate();

        this.increment  = this.axiom.length/(1000/this.scene.update_period);
        this.depth_principal = 0;
        this.first_time  = t;

        this.random_x = 10 -(Math.random() * 100)%20;
        this.random_z = 10 - (Math.random() * 100000)%20; 
        this.scene.lights[1].setPosition(this.random_x, 35, 2+this.random_z, 1.0);
        this.scene.lights[1].enable();
        this.luz = true;
    }

    display(){
        
        this.scene.pushMatrix();
        this.scene.translate(this.random_x, 35, this.random_z);
        this.scene.rotate(Math.PI, 0,0,1);
        this.scene.scale(this.scale*2.5, this.scale*2.5, this.scale*2.5);


        var depth_aux = this.depth_principal;

        var i;
        // percorre a cadeia de caracteres
        for (i=0; i < this.axiom.length && this.scene.bool == true; ++i){
    
            // verifica se sao caracteres especiais
            switch(this.axiom[i]){
                case "+":
                    // roda a esquerda
                    this.scene.rotate(this.angle, 0, 0, 1);
                    break;

                case "-":
                    // roda a direita
                    this.scene.rotate(-this.angle, 0, 0, 1);
                    break;

                case "[":
                    // push
                    this.scene.pushMatrix();
                    break;

                case "]":
                    // pop
                    this.scene.popMatrix();
                    break;

                case "«":
                    this.scene.rotate(this.angle, 1, 0, 0);
                    break;
                case "/":
                    this.scene.rotate(-this.angle, 1, 0, 0);
                    break;
                case "^":
                    this.scene.rotate(this.angle, 0, 1, 0);
                    break;
                case "&":
                    this.scene.rotate(-this.angle, 0, 1, 0);
                    break;
                // processa primitiva definida na gramatica, se existir
                default:
                    var primitive=this.grammar[this.axiom[i]];

                    if (primitive && depth_aux > 0)
                    {
                        this.scene.pushMatrix();
                        switch(this.axiom[i]){
                            case "F":
                                this.scene.scale(0.15,4,1)
                                break;
                                
                            case "X":
                                this.scene.scale(0.15,0.5,1)
                                break;
                        }

                        this.scene.translate(0, 0.5, 0);
                        primitive.display();
                        this.scene.popMatrix();
                        depth_aux--;
                        this.scene.translate(0, 1, 0);
                    }
                    break;
                }
        } 
       
            this.scene.popMatrix();
        }
    }

