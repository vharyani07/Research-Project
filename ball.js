import * as T from "./libs/CS559-Three/build/three.module.js";
import { GrObject } from "./libs/CS559-Framework/GrObject.js";

export class SoccerBall extends GrObject {
    constructor(x,y,z) 
    {
        // Create the geometry and material for the soccer ball
        let ballGroup = new T.Group();
        let textureLoader = new T.TextureLoader();
        let texture = textureLoader.load('soccerBall.png');

        let geometry = new T.SphereGeometry(0.1, 32, 32);
        let material = new T.MeshBasicMaterial({map: texture});

        // Create the soccer ball
        let ball = new T.Mesh(geometry, material);

        ballGroup.add(ball);

        ballGroup.scale.set(6,6,6);

        ballGroup.position.set(x,y,z);
        

        super("ballGroup", ballGroup);

       
        
       
    }
}
