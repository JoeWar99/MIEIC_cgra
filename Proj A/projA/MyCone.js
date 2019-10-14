/**
* MyCone
* @constructor
*/
class MyCone extends CGFobject {
    constructor(scene, slices, stacks,trunkHeight,  treeTopHeight, treeTopRadius,treeTopTexture) {
        super(scene);
        this.treeTopHeight = treeTopHeight;
        this.treeTopTexture = treeTopTexture;
        this.treeTopRadius  = treeTopRadius;
        this.slices = slices;
        this.stacks = stacks;
        this.trunkHeight = trunkHeight;
        this.initBuffers();
        var texcoords1;
        var texcoords2;
    }
    initBuffers(){
    this.vertices = [];
    this.indices = [];
    this.normals = [];
    this.texCoords = [];

    var ang = 0;
    var alphaAng = 2*Math.PI/this.slices;
    var texture_parameter = 1.0 / (this.slices+1);

    for(var i = 0; i < this.slices; i++){

        this.vertices.push(this.treeTopRadius * Math.cos(ang),this.trunkHeight,this.treeTopRadius *  (-Math.sin(ang)));
        this.indices.push(i, (i+1)%this.slices, this.slices);
        this.normals.push(Math.cos(ang), Math.cos(Math.PI/4.0), -Math.sin(ang));
        ang+=alphaAng;
        var texcoords1 = [
            0.5 + 0.5 *Math.cos(ang),0.5 + 0.5 *Math.sin(ang)      
        ];
        this.texCoords.push(...texcoords1);
    }
    ang = 0;
    this.vertices.push(0,this.trunkHeight+this.treeTopHeight,0);
    var texcoords1 = [
        0.5,0.5     
    ];
    this.normals.push(0, 1, 0);
    this.texCoords.push(...texcoords1);

    this.primitiveType = this.scene.gl.TRIANGLES;
    this.initGLBuffers();
}
updateBuffers(complexity){
    this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12
    // reinitialize buffers
    this.initBuffers();
    this.initNormalVizBuffers();
}
}






