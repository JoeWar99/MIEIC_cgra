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

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');
        this.gui.add(this.scene, 'Visibilidade_Amarelo').name('Visibilidade_Amarelo');
        this.gui.add(this.scene, 'Visibilidade_Azul').name('Visibilidade_Azul');
        this.gui.add(this.scene, 'Visibilidade_Roxo').name('Visibilidade_Roxo');
        this.gui.add(this.scene, 'Visibilidade_Cor_de_rosa').name('Visibilidade_Cor_de_rosa');
        this.gui.add(this.scene, 'Visibilidade_Verde').name('Visibilidade_Verde');
        this.gui.add(this.scene, 'Visibilidade_Vermelho').name('Visibilidade_Vermelho');
        this.gui.add(this.scene, 'Visibilidade_Laranja').name('Visibilidade_Laranja');
        this.gui.add(this.scene, 'Visibilidade_Tangram').name('Visibilidade_Tangram');

       
        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        return true;
    }
}