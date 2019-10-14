/**
 * MyLeaf
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLeaf extends CGFobject {
	constructor(scene) {
		super(scene);
		this.scene = scene;
		this.triangle = new MyTriangle_tree(scene);
		this.verde = new CGFappearance(scene);
        this.verde.setAmbient(0, 1, 0, 1);
        this.verde.setDiffuse(0, 1, 0, 1);
        this.verde.setSpecular(0, 0, 0, 1);
        this.verde.setShininess(10.0);
	}
	display(){
		this.verde.apply();
		this.triangle.display();
	}

}

