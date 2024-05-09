import * as T from "./libs/CS559-Three/build/three.module.js";
import { GrObject } from "./libs/CS559-Framework/GrObject.js";


export class PineTree extends GrObject {
    constructor(x,y,z) 
    {
        let treeGroup = new T.Group();

        const trunkGeometry = new T.CylinderGeometry(0.1, 0.1, 0.5);
        const trunkMaterial = new T.MeshBasicMaterial({color: 'brown'});
        const trunk = new T.Mesh(trunkGeometry, trunkMaterial);
        trunk.position.y = 0.25; 
        treeGroup.add(trunk);

        const foliageGeometry = new T.ConeGeometry(0.5, 1, 4);
        const foliageMaterial = new T.MeshBasicMaterial({color: 'green'});
        const foliage = new T.Mesh(foliageGeometry, foliageMaterial);
        foliage.position.y = 1; 
        treeGroup.add(foliage);

        treeGroup.position.z += 2;

        treeGroup.position.set(x,y,z);

        treeGroup.scale.set(10,10,10);

        super('PineTree', treeGroup);
    }
}