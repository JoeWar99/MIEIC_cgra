/**
* MyBranch
* @constructor
*/
class MyBranch extends CGFobject {
    constructor(scene)
    {
        super(scene);
        this.scene = scene;
        this.cilinder = new MyCilinder(scene, 4, 0, 1, 0.25)
        this.castanho = new CGFappearance(scene);
        this.castanho.setAmbient(0.40,0.29, 0.15, 1);
        this.castanho.setDiffuse(0.40,0.29, 0.15, 1);
        this.castanho.setSpecular(0,0, 0, 1);
        this.castanho.setShininess(10.0);

    }

    display(){
        this.castanho.apply();
        this.cilinder.display();
    }
  
}


