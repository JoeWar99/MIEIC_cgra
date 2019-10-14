/**
 * MyLSPlant
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLSPlant extends MyLSystem {
	constructor(scene) {
        super(scene);

        //Objects connected to MyInterface
        this.axiom = "X"; // "X"; //
        this.ruleF = "FF"; // "FF"; //
        this.ruleX = "F[-X][X]F[-X]+X";
        this.ruleX1 = "F[-X][X]+X";
        this.ruleX2 = "F[+X]-X";
        this.ruleX3 = "F[/X][X]F[««X]+X";
        this.ruleX4 =  "F[«X][X]/X";
        this.ruleX5 =  "F[/X]«X";
        this.ruleX6 =  "F[^X][X]F[&X]^X";
        this.ruleX7 = "F[^X]&X";
        this.ruleX8 = "F[&X]^X";

        this.angle = 30.0;
        this.iterations = 4;
        this.scaleFactor = 0.5;
        
        this.doGenerate = function (){
            this.generate(
                this.axiom,
                {
                    "F": [ this.ruleF ],
                    "X": [this.ruleX, this.ruleX1, this.ruleX2,  this.ruleX3, this.ruleX4, this.ruleX5, this.ruleX6, this.ruleX7, this.ruleX8],

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
            "F": new MyTreeBranch(this.scene, 0),
            "X": new MyLeaf(this.scene)
        };
    }
    display(){
        this.scene.pushMatrix();
        this.scene.scale(this.scale*4, this.scale*4, this.scale*4);
        var i;

        // percorre a cadeia de caracteres
        for (i=0; i<this.axiom.length; ++i){

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

                    if ( primitive )
                    {
                        primitive.display();
                        this.scene.translate(0, 1, 0);
                    }
                    break;
            }
        }
        this.scene.popMatrix();
    }
    
}