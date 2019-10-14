/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        
        this.gui.add(this.scene, 'axiom').name('Axiom');
        //this.gui.add(this.scene, "ruleX").name('Rule for X');
        this.gui.add(this.scene, "ruleF").name('Rule for F');
        this.gui.add(this.scene, "ruleX").name('Rule for X');
        this.gui.add(this.scene, "ruleX1").name('Rule for X1');
        this.gui.add(this.scene, "ruleX2").name('Rule for X2');
        this.gui.add(this.scene, "ruleX3").name('Rule for X3');
        this.gui.add(this.scene, "ruleX4").name('Rule for X4');
        this.gui.add(this.scene, "ruleX5").name('Rule for X5');
        this.gui.add(this.scene, "ruleX6").name('Rule for X6');
    /*    this.gui.add(this.scene, "ruleX7").name('Rule for X7');
        this.gui.add(this.scene, "ruleX8").name('Rule for X8');
        this.gui.add(this.scene, "ruleX9").name('Rule for X9');
        this.gui.add(this.scene, "ruleX10").name('Rule for X10');

*/
        this.gui.add(this.scene, 'angle').name('Angle');
        this.gui.add(this.scene, 'iterations').min(0).step(1).name('Iterations');
        this.gui.add(this.scene, 'scaleFactor').name('Scale Factor');

        this.gui.add(this.scene, 'doGenerate').name('Generate!');

        return true;
    }
}