/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        // TREE ROW
        this.treerow = new MyTreeRowPatch(this);
        // TREE GROUP
        this.treegroup = new MyTreeGroupPatch(this);
        // CASA
        this.house = new MyHouse(this);
        // VOXHILL
        this.voxhill = new MyVoxelHill(this ,5);
        // CUBE MAP
        // RELVA
        this.relva = new MyQuad(this, 60);
        // LANTERNA
        this.lantern = new Mylantern(this);
        // ARVORES
        this.tree = new MyTree(this, 1,0.5,3, 1.5,'images/trunk.png','images/treetop.jpg');
        this.tree1 = new MyTree(this, 3,1,6, 3, 'images/trunk.png','images/treetop1.jpg');
        // SUPORTE LAMPADA
        this.suporte_lampada = new MyPrism(this, 6, 0, 1, 0.2);
        // TEXTURA DIA
        this.unitcube_map = new MyUnitCube(this, 30);
        this.day_texture = new CGFtexture(this, 'images/cubemap_day.png');
        // TEXTURA NOITE
        this.night_texture = new CGFtexture(this, 'images/cubemap_night.png');
        // TEXTURA RELVA
        this.relva_texture  = new CGFtexture(this, 'images/relva.png');
        // TEXTURA LANTERNA
        this.lantern_texture  = new CGFtexture(this, 'images/chinese_lamp.jpg');
        // TEXTURA DA COLUNA DE SUPORTE
        this.suporte_coluna_texture =  new CGFtexture(this, 'images/suporte_coluna.jpg');
       
       
        //Objects connected to MyInterface
        this.Altura_do_dia = [this.day_texture, this.night_texture];
        this.Altura_do_diaIDs = {'Day': 0, 'Night': 1};
        this.objects = [this.tree, this.treerow, this.treegroup, this.house, this.voxhill];
        this.objectIDs = { 'Single tree':0, 'TreeRow': 1, 'TreeGroup': 2, 'House':3, 'Voxhill':4};

        //other variables connected to MyInterface
        this.day_or_night = 0;
        this.displayAxis = true;
        this.displayNormals = false;
        this.scaleFactor = 2.0;
        this.active = true;
        this.textures_activate_especular = true;
        this.textures_activate_difusa_1 = true;
        this.textures_activate_difusa_2 = true;

        // MATERIAL DIFUSO UTILIZADO EM MAIOR PARTE DOS OBJETOS E NOS DOIS OBJETOS DIFUSOS
        this.material_difuso = new CGFappearance(this);
        this.material_difuso.setAmbient(1 ,1,1, 1.0);
        this.material_difuso.setDiffuse(1.0,1.0,1.0, 1.0);
        this.material_difuso.setSpecular(0.0, 0.0, 0.0, 1.0);
        this.material_difuso.setShininess(10.0);

        //MATERIAL ESPECULAR UTILIZADO NA MARMORE 
        this.materia_especular = new CGFappearance(this);
        this.materia_especular.setAmbient(1 ,1,1, 1.0);
        this.materia_especular.setDiffuse(1.0,1.0,1.0, 1.0);
        this.materia_especular.setSpecular(1, 1, 1, 1.0);
        this.materia_especular.setShininess(10.0);

        // MATERIAL UTILIZADO PARA A RELVA
        this.materia_relva = new CGFappearance(this);
        this.materia_relva.setAmbient(1 ,1,1, 1.0);
        this.materia_relva.setDiffuse(1.0,1.0,1.0, 1.0);
        this.materia_relva.setSpecular(0.0, 0.0, 0.0, 1.0);
        this.materia_relva.setShininess(10.0);
        this.materia_relva.setTextureWrap('REPEAT', 'REPEAT');
        this.texCoords = [0.0, 0.0, 6, 0, 0, 6, 6, 6];
    }   
    initLights() {
        
        // LUZ DO DIA , LUZ QUENTE COM POUCA ATENUAÇÃO
        this.setGlobalAmbientLight(0.3, 0.3, 0.3, 1.0);
        this.lights[0].setPosition(0, 45, 0, 1.0);
        this.lights[0].setDiffuse(1.0, 1.0, 0.5, 1.0);
        this.lights[0].setSpecular(1.0, 1.0, 0.5, 1.0);
        this.lights[0].disable();
        this.lights[0].setConstantAttenuation(0.1);
        this.lights[0].setVisible(true);
        this.lights[0].update();


        // LUZ DA NOITE, LUZ FRIA COM MINIMA ATENUAÇÃO
        this.lights[1].setPosition(0, 45, 0, 1.0);
        this.lights[1].setDiffuse(0.0, 0.0, 0.9, 1.0);
        this.lights[1].setSpecular(0.0, 0.0, 0.9, 1.0);
        this.lights[1].disable();
        this.lights[1].setVisible(true);
        this.lights[1].setConstantAttenuation(0.5);
        this.lights[1].update();

        this.lights[2].setDiffuse(1,0.5, 0, 1.0);
        this.lights[2].setSpecular(1, 1, 1, 1.0);
        this.lights[2].disable();
        this.lights[2].setVisible(true);
        this.lights[2].setQuadraticAttenuation(0.1);
        this.lights[2].update();

        this.lights[3].setDiffuse(1,0.5, 0, 1.0);
        this.lights[3].setSpecular(1, 1, 1, 1.0);
        this.lights[3].disable();
        this.lights[3].setVisible(true);
        this.lights[3].setQuadraticAttenuation(0.1);
        this.lights[3].update();
       
        this.lights[4].setDiffuse(1,0.5, 0, 1.0);
        this.lights[4].setSpecular(1, 1, 1, 1.0);
        this.lights[4].disable();
        this.lights[4].setVisible(true);
        this.lights[4].setQuadraticAttenuation(0.1);
        this.lights[4].update();
       
        this.lights[5].setDiffuse(1,0.5, 0, 1.0);
        this.lights[5].setSpecular(1, 1, 1, 1.0);
        this.lights[5].disable();
        this.lights[5].setVisible(true);
        this.lights[5].setQuadraticAttenuation(0.1);
        this.lights[5].update();
       
        this.lights[6].setDiffuse(1,0.5, 0, 1.0);
        this.lights[6].setSpecular(1, 1, 1, 1.0);
        this.lights[6].disable();
        this.lights[6].setVisible(true);
        this.lights[6].setQuadraticAttenuation(0.1);
        this.lights[6].update();
       

        this.lights[7].setDiffuse(1,0.5, 0, 1.0);
        this.lights[7].setSpecular(1, 1, 1, 1.0);
        this.lights[7].disable();
        this.lights[7].setVisible(true);
        this.lights[7].setQuadraticAttenuation(0.1);
        this.lights[7].update();
    
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(150, 150, 150), vec3.fromValues(0, 0, 0));
    }
    updateTexCoords(){
        this.relva.updateTexCoords(this.texCoords);
    }
    hexToRgbA(hex)
    {
        var ret;
        //either we receive a html/css color or a RGB vector
        if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
            ret=[
                parseInt(hex.substring(1,3),16).toPrecision()/255.0,
                parseInt(hex.substring(3,5),16).toPrecision()/255.0,
                parseInt(hex.substring(5,7),16).toPrecision()/255.0,
                1.0
            ];
        }
        else
            ret=[
                hex[0].toPrecision()/255.0,
                hex[1].toPrecision()/255.0,
                hex[2].toPrecision()/255.0,
                1.0
            ];
        return ret;
    }
   
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        
        // Draw axis
        if(this.displayAxis){
            this.axis.display();
        }        
        this.setDefaultAppearance();
        //Apply default appearance
        this.pushMatrix();
        this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);

        // ATUALIZAR AS LUZES PARA O DIA E PARA A NOITE
         if(this.day_or_night == 0){
            this.lights[0].enable();
            this.lights[1].disable();
            this.lights[0].update();
            this.lights[1].update();
        }
        else{
            this.lights[1].enable();
            this.lights[0].disable();
            this.lights[1].update();
            this.lights[0].update();
        }
        // MOSTRAR AS NORMAIS !!! ATENÇAO DEVIDO A COMPLEXIDADE DA CENA O PROGRAMA FICA MUITO LENTO
        if(this.displayNormals){
            
            this.tree.enableNormalViz();
            this.treerow.enableNormalViz();
            this.treegroup.enableNormalViz();
            this.house.enableNormalViz();
            this.voxhill.enableNormalViz();
            this.unitcube_map.enableNormalViz();
            this.relva.enableNormalViz(); 
            this.lantern.enableNormalViz(); 
            this.tree.enableNormalViz(); 
            this.tree1.enableNormalViz(); 
            this.suporte_lampada.enableNormalViz(); 
        }
        else{
               
            this.tree.disableNormalViz();
            this.treerow.disableNormalViz();
            this.treegroup.disableNormalViz();
            this.house.disableNormalViz();
            this.voxhill.disableNormalViz();
            this.unitcube_map.disableNormalViz();
            this.relva.disableNormalViz(); 
            this.lantern.disableNormalViz(); 
            this.tree.disableNormalViz(); 
            this.tree1.disableNormalViz(); 
            this.suporte_lampada.disableNormalViz();
        }
    
        this.materia_relva.setTexture(this.relva_texture);
        this.materia_relva.apply();
        this.pushMatrix();
        this.rotate(-Math.PI/2, 1, 0, 0);
        this.relva.updateTexCoords(this.texCoords);
        this.relva.enableNormalViz();
        this.relva.display();
        this.popMatrix();
        
        this.material_difuso.setTexture(this.Altura_do_dia[this.day_or_night]);
        this.material_difuso.apply();
        this.pushMatrix();
        this.translate(0,30,0);
        this.unitcube_map.display();
        this.popMatrix();
        
        
        // COLINAS
        this.pushMatrix();
        this.translate(-24.5,0.5,15.5);
        this.voxhill.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(15.5,0.5,-24.5);
        this.voxhill.display();
        this.popMatrix();



        // CONJUNTOS DE ARVORES DA CENA
        this.pushMatrix();
        this.translate(-23.5, 0, 7);
        this.treegroup.display();
        this.translate(0,0, -9.75);
        this.treegroup.display();
        this.translate(0,0, -9.75);
        this.treegroup.display();
        this.translate(0,0, -9.75);
        this.treegroup.display();
        this.translate(9.75, 0 , 0);
        this.treegroup.display();
        this.translate(9.75, 0 , 0);
        this.treegroup.display();
        this.translate(9.75, 0 , 0);
        this.treegroup.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-14.5, 0, 17);
        this.treegroup.display();
        this.translate(+10,0, 0);
        this.treegroup.display();
        this.translate(+10,0,0);
        this.treegroup.display();
        this.translate(10,0,0);
        this.treegroup.display();
        this.translate(0, 0 , -10);
        this.treegroup.display();
        this.translate(0, 0 , -10);
        this.treegroup.display();
        this.translate(0, 0 , -10);
        this.treegroup.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-28, 0, -27);
        this.treerow.display();
        this.translate(18, 0, 0);
        this.treerow.display();
        this.translate(18, 0, 0);
        this.treerow.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-28, 0, 27);
        this.treerow.display();
        this.translate(18, 0, 0);
        this.treerow.display();
        this.translate(18, 0, 0);
        this.treerow.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-28, 0, 23);
        this.rotate(Math.PI/2,0,1,0);
        this.treerow.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-28, 0, 8);
        this.rotate(Math.PI/2,0,1,0);
        this.treerow.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-28, 0, -9);
        this.rotate(Math.PI/2,0,1,0);
        this.treerow.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(28, 0, 23);
        this.rotate(Math.PI/2,0,1,0);
        this.treerow.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(28, 0, 8);
        this.rotate(Math.PI/2,0,1,0);
        this.treerow.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(28, 0, -7);
        this.rotate(Math.PI/2,0,1,0);
        this.treerow.display();
        this.popMatrix();
        
        //CASAS NO CENTRO DA CENA

        var slices = 2*Math.PI/8.0;
        
        for(var i = 1; i <= 8; i++){
            this.pushMatrix();
            this.rotate(slices *i, 0,1,0);
            this.translate(5,0,0);
            this.rotate(-Math.PI/2, 0, 1, 0);
            this.house.display();
            this.popMatrix();
            this.popMatrix();
        }

        slices = 2*Math.PI/10.0;

        for(var i = 1; i <= 10; i++){
            this.pushMatrix();
            this.rotate(slices *i, 0,1,0);
            this.translate(9,0,0);
            this.rotate(-Math.PI/2, 0, 1, 0);
            this.house.display();
            this.popMatrix();
            this.popMatrix();
        }
        
        slices = 2*Math.PI/12.0;

        for(var i = 1; i <= 12; i++){
            this.pushMatrix();
            this.rotate(slices *i, 0,1,0);
            this.translate(13,0,0);
            this.rotate(-Math.PI/2, 0, 1, 0);
            this.house.display();
            this.popMatrix();
            this.popMatrix();
        }
    
        //ARVORES GRANDES DO MEIO E DOS DOIS CANTOS

        this.tree1.display();
        this.pushMatrix();
        this.translate(27, 0, 27);
        this.tree1.display();
        this.popMatrix();
        
        this.pushMatrix();
        this.translate(27, 0, -27);
        this.tree1.display();
        this.popMatrix();


        // LANTERNAS

        var slices = 2*Math.PI/6.0;

        for(var i = 1; i <= 6; i++){
            this.lights[i+1].setPosition(3*Math.cos(slices * i), 1.4, 3*Math.sin(slices * i),1);
            if(this.day_or_night == 1 && this.active == true){
                this.lights[i+1].enable();
            }
            else{
                this.lights[i+1].disable();
            }
            this.lights[i+1].update();
            this.pushMatrix();
            this.rotate(-slices *i, 0,1,0);
            this.translate(3,0,0);
            this.materia_especular.setTexture(this.suporte_coluna_texture);
            this.materia_especular.apply();
            this.suporte_lampada.display();
            this.material_difuso.setTexture(this.lantern_texture);
            this.material_difuso.apply();
            this.lantern.display();
            this.popMatrix();
        }

        
        this.popMatrix();

        // ---- END Primitive drawing section
    }
}