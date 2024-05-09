import { GrObject } from "./libs/CS559-Framework/GrObject.js";
import * as Loaders from "./libs/CS559-Framework/loaders.js";
import * as T from "./libs/CS559-Three/build/three.module.js";
import { GrWorld } from "./libs/CS559-Framework/GrWorld.js";

export class player2 extends GrObject
{
    constructor(x,y,z)
    {
        let playerGroup = new T.Group();

        let textureLoader = new T.TextureLoader();
        let texture = textureLoader.load('player.jpg');

        let headmaterial = new T.MeshBasicMaterial({map: texture});
        
        let material = new T.MeshBasicMaterial({color: 'red'});

        let head = new T.SphereGeometry(0.5);
        let body = new T.CylinderGeometry(0.1, 0.1, 2);
        let arm = new T.CylinderGeometry(0.05, 0.05, 1);
        let leg = new T.CylinderGeometry(0.05, 0.05, 1);

        // Create meshes
        let headMesh = new T.Mesh(head, headmaterial);
        let bodyMesh = new T.Mesh(body, material);
        let leftArmMesh = new T.Mesh(arm, material);
        let rightArmMesh = new T.Mesh(arm, material);
        let leftLegMesh = new T.Mesh(leg, material);
        let rightLegMesh = new T.Mesh(leg, material);

        // Position meshes
        headMesh.position.y = 1.25;
        leftArmMesh.position.x = -0.6; leftArmMesh.position.y = 0.5;
        rightArmMesh.position.x = 0.6; rightArmMesh.position.y = 0.5;
        leftLegMesh.position.x = -0.2; leftLegMesh.position.y = -1;
        rightLegMesh.position.x = 0.2; rightLegMesh.position.y = -1;

        leftArmMesh.rotateZ(Math.PI / 2);
        rightArmMesh.rotateZ(Math.PI / 2);
        headMesh.rotateY(Math.PI / 2);

        playerGroup.add(bodyMesh);
        playerGroup.add(headMesh);
        playerGroup.add(leftArmMesh);
        playerGroup.add(rightArmMesh);
        playerGroup.add(leftLegMesh);
        playerGroup.add(rightLegMesh);

        playerGroup.position.set(x,y,z);

        playerGroup.rotateY(Math.PI / 2);



        super('playerGroup', playerGroup);


        

    }
}