/**
 * MyTerrain
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTerrain extends CGFobject {
    constructor(scene) {
        super(scene);
        
        this.scene = scene;
        
        this.appearance = new CGFappearance(this.scene);
		this.appearance.setAmbient(0.3, 0.3, 0.3, 1);
		this.appearance.setDiffuse(0.7, 0.7, 0.7, 1);
		this.appearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.appearance.setShininess(120);
        
        this.terrain_texture = new CGFtexture(this.scene, "textures/terrain.jpg");
        this.terrain_height_map = new CGFtexture(this.scene, "textures/heightmap.jpg");
        this.terrain_saturation_map = new CGFtexture(this.scene, "textures/altimetry.png");
        this.terrain_water_texture = new CGFtexture(this.scene, "textures/waterTex.jpg");
        this.terrain_shader = new CGFshader(this.scene.gl, "shaders/terrain.vert", "shaders/terrain.frag");
        this.terrain_shader.setUniformsValues({ timeFactor: 0 });
        this.terrain_shader.setUniformsValues({ uSampler2: 2 });
        this.terrain_shader.setUniformsValues({ uSampler3: 3 });
        this.terrain_shader.setUniformsValues({ uSampler4: 4 });

        this.plane = new Plane(this.scene, 32);
        this.scene.setUpdatePeriod(50);
    
    }
   

    update(t) {
		this.terrain_shader.setUniformsValues({ timeFactor: t / 100 % 1000 });	
    }

	display(){
        
        
        this.appearance.setTexture(this.terrain_water_texture);
        this.appearance.setTextureWrap('REPEAT', 'REPEAT');
		this.appearance.apply();

		// activate selected shader
        this.scene.setActiveShader(this.terrain_shader);
        this.terrain_height_map.bind(2); // 
        this.terrain_texture.bind(4); // 
        this.terrain_saturation_map.bind(3); // 
        
		this.scene.pushMatrix();
       
        this.plane.display();
			
        this.scene.popMatrix();
        
    
		// restore default shader (will be needed for drawing the axis in next frame)
		this.scene.setActiveShader(this.scene.defaultShader);
	}
}
