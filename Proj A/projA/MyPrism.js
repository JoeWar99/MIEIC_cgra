/**
* MyPrism
* @constructor
*/
class MyPrism extends CGFobject {
    constructor(scene, slices, stacks,Height, Radius)
    {
        super(scene);
        this.slices = slices;
        this.Height = Height;
        this.Radius =  Radius;
        this.stacks = stacks;
        this.initBuffers();
    }
    initBuffers() {
        
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];
        var texture_parameter = 1.0 / this.slices;

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;

        for(var i = 0; i < this.slices; i++){
            // All vertices have to be declared for a given face
            // even if they are shared with others, as the normals 
            // in each face will be different

            var sa=this.Radius * Math.sin(ang);
            var saa=this.Radius * Math.sin(ang+alphaAng);
            var ca=this.Radius * Math.cos(ang);
            var caa=this.Radius * Math.cos(ang+alphaAng);

            var media_angulo  = (ang+alphaAng)/2.0;
          
            this.vertices.push(ca, this.Height, -sa);//B
            this.vertices.push(ca, 0, -sa);//A
            this.vertices.push(caa, 0, -saa);//C
            this.vertices.push(caa, this.Height, -saa);//D

           
            var normal= [
                saa-sa,
                0,
                caa-ca
            ];

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
            this.normals.push(...normal);

            this.indices.push(4*i, (4*i+1) , (4*i+2));
            this.indices.push((4*i+2), (4*i+3) , (4*i+0));
                

            var textcoords1 =[
                i * texture_parameter,0,
                i*texture_parameter,1,
                texture_parameter+ i*texture_parameter,1,
                texture_parameter+ i*texture_parameter,0
            ];
            this.texCoords.push(...textcoords1);

            ang+=alphaAng;
        }
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    
}


