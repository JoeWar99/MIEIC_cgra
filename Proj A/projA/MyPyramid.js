/**
* MyPyramid
* @constructor
*/
class MyPyramid extends CGFobject {
    constructor(scene, slices, stacks,altura, lado_tamanho, altura_base, normal_def) {
        super(scene);
        this.altura = altura;
        this.slices = slices;
        this.stacks = stacks;
        this.lado_tamanho = lado_tamanho;
        this.altura_base = altura_base;
        this.normal_def = normal_def;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;
        var texture_parameter = 1.0 / (this.slices+1);
        
        for(var i = 0; i < this.slices; i++){
            // All vertices have to be declared for a given face
            // even if they are shared with others, as the normals 
            // in each face will be different

            var sa=Math.sin(ang);
            var saa=Math.sin(ang+alphaAng);
            var ca=Math.cos(ang);
            var caa=Math.cos(ang+alphaAng);

            this.vertices.push(0,this.altura_base+this.altura,0);
            this.vertices.push(this.lado_tamanho*ca, this.altura_base, this.lado_tamanho*(-sa));
            this.vertices.push(this.lado_tamanho*caa, this.altura_base, this.lado_tamanho*(-saa));


            // triangle normal computed by cross product of two edges
            var normal;
            if(this.normal_def == 0){
                normal= [
                    (saa-sa),
                    (ca*saa-sa*caa),
                    (caa-ca)
                ];
            }
            else{
                normal= [
                    -(saa-sa),
                    -(ca*saa-sa*caa),
                    -(caa-ca)
                ];

            }

            // normalization
            var nsize=Math.sqrt(
                normal[0]*normal[0]+
                normal[1]*normal[1]+
                normal[2]*normal[2]
                );
            normal[0]/=nsize;
            normal[1]/=nsize;
            normal[2]/=nsize;

            // push normal once for each vertex of this triangle
            this.normals.push(...normal);
            this.normals.push(...normal);
            this.normals.push(...normal);

            this.indices.push(3*i, (3*i+1) , (3*i+2) );
            this.indices.push(3*i+2, (3*i+1) , (3*i) );

        
            var texcoords1 = [
                0.5,0, 
                0,1,
                1,1  
            ];
            this.texCoords.push(...texcoords1);

            ang+=alphaAng;
        }


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




