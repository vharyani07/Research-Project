import * as T from "./libs/CS559-Three/build/three.module.js";
import { GrObject } from "./libs/CS559-Framework/GrObject.js";

export class SoccerGoal extends GrObject {
    constructor(x,y,z) {
        // Create the material for the goal
        let material = new T.MeshStandardMaterial({color: 'white'});

        // Create the geometry for the goal posts
        let postGeometry = new T.CylinderGeometry(0.05, 0.05, 1);

        // Create the left post
        let leftPost = new T.Mesh(postGeometry, material);
        leftPost.position.set(-0.5, 0.5, 0);

        // Create the right post
        let rightPost = new T.Mesh(postGeometry, material);
        rightPost.position.set(0.5, 0.5, 0);

        // Create the geometry for the crossbar
        let crossbarGeometry = new T.CylinderGeometry(0.05, 0.05, 1);

        // Create the crossbar
        let crossbar = new T.Mesh(crossbarGeometry, material);
        crossbar.rotation.z = Math.PI / 2;
        crossbar.position.set(0, 1, 0);

        // Create the goal group and add the posts and crossbar
        let goal = new T.Group();
        goal.add(leftPost);
        goal.add(rightPost);
        goal.add(crossbar);


        // Scale and position the goal to fit your specific needs
        goal.scale.set(10, 6, 10);
        goal.rotateY(Math.PI/2);
        goal.position.set(x,y,z);

        super("SoccerGoal", goal);
       
    }
}
