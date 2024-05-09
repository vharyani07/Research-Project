import * as T from "./libs/CS559-Three/build/three.module.js";
import { GrObject } from "./libs/CS559-Framework/GrObject.js";
export class field extends GrObject
{
    constructor(x, y, z) 
    { 
        let fieldGroup = new T.Group();

        const fieldGeometry = new T.PlaneGeometry(60,40);


        let textureLoader = new T.TextureLoader();
        let texture = textureLoader.load('field.jpg');

        const fieldMaterial = new T.MeshBasicMaterial({map: texture});


        const field = new T.Mesh(fieldGeometry, fieldMaterial);
        fieldGroup.rotateX(3*Math.PI/2);

        fieldGroup.add(field);
        fieldGroup.position.set(x, y, z);

        super('fieldGroup', fieldGroup);

       
    }

}