/**
* MyTreeBranch
* @constructor
*/
class MyTreeBranch extends CGFobject {
    constructor(scene, tree_ou_galho, x, y, z, rot)
    {
        super(scene);
        this.scene = scene;
        this.rotacao = rot;
        this.tree_ou_galho = tree_ou_galho;
        this.cilinder = new MyCilinder(scene, 8, 0, 1, 0.25);
        this.cilinder_galho = new MyCilinder(scene, 8, 0, 2, 0.25);
        this.castanho = new CGFappearance(scene);
        this.castanho.setAmbient(0.40,0.29, 0.15, 1);
        this.castanho.setDiffuse(0.40,0.29, 0.15, 1);
        this.castanho.setSpecular(0,0, 0, 1);
        this.castanho.setShininess(10.0);
        this.x = x
        this.z = z;
        this.y = y;
        this.ativo = true;
        this.no_nest = false;
        if(tree_ou_galho == 0){
            this.castanho_texture = new CGFtexture(this.scene, "textures/tree_wood.jpg");
        }
        else{
            this.castanho_texture = new CGFtexture(this.scene, "textures/wood_galho.jpg");
        }
    }
    display(){
        
        this.castanho.setTexture(this.castanho_texture);
        this.castanho.apply();
        if(this.tree_ou_galho != 0){
            this.scene.pushMatrix();
            this.scene.translate(this.x,  this.y, this.z);
            this.scene.rotate(this.rotacao, 0, 1 ,0 );
            this.scene.rotate(Math.PI/2, 0, 0 ,1);
            this.cilinder_galho.display();
            this.scene.popMatrix();
   
        
        }
        else{
            this.cilinder.display();
        }
    }
  
}


