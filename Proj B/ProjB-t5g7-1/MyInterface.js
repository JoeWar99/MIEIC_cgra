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
        
        var obj = this;
        this.gui = new dat.GUI();
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');
        this.gui.add(this.scene, 'scaleFactor_Scene',0,5.0);
        this.gui.add(this.scene, 'speedFactor_Ave',0.1,3.0);
        this.gui.add(this.scene, 'scaleFactor_Ave',0.5,3.0);
        this.gui.add(this.scene, 'slider', 0.1, 1.0).name('Luz Ambiente').onChange(this.scene.updateAmbienteLight.bind(this.scene));
        this.gui.add(this.scene, 'third_person').name('Third Person');
        this.gui.add(this.scene, 'score').name('Score').onChange(this.scene.scorechanged.bind(this.scene));
        this.initKeys();

        return true;
    }
    initKeys() {
        // create reference from the scene to the GUI
        this.scene.gui=this;
        // disable the processKeyboard function
        this.processKeyboard=function(){};
        // create a named array to store which keys are being pressed
        this.activeKeys={};
        }
        processKeyDown(event) {
        // called when a key is pressed down
        // mark it as active in the array
        this.activeKeys[event.code]=true;
        };
        processKeyUp(event) {
        // called when a key is released, mark it as inactive in the array
        this.activeKeys[event.code]=false;
        };
        isKeyPressed(keyCode) {
        // returns true if a key is marked as pressed, false otherwise
        return this.activeKeys[keyCode] || false;
    }
}