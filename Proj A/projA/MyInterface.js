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

        this.gui.add(this.scene, 'displayAxis').name("Display axis");
        this.gui.add(this.scene, 'displayNormals').name("Display normals");
        this.gui.add(this.scene, 'active').name("ON/OFF_LANTERNAS");
        this.gui.add(this.scene, 'textures_activate_especular').name("Tex/Marmore/Especular");
        this.gui.add(this.scene, 'textures_activate_difusa_1').name("Tex/Terra/Difusa");
        this.gui.add(this.scene, 'textures_activate_difusa_2').name("Tex/Madeira/Difusa");

        this.gui.add(this.scene, 'scaleFactor', 0.1, 10).name('Scale Factor');
        this.gui.add(this.scene, 'day_or_night', this.scene.Altura_do_diaIDs).name('Altura_do_dia');

        return true;
    }
}