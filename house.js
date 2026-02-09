import * as T from "./libs/CS559-Three/build/three.module.js";
import { GrObject } from "./libs/CS559-Framework/GrObject.js";

// define your buildings here - remember, they need to be imported
// into the "main" program

export class building1 extends GrObject {
    constructor(x, y, z) {
        let buildingGroup = new T.Group();
        const bodyGeometry = new T.BoxGeometry(3, 3, 3);
        const bodyMaterial = new T.MeshStandardMaterial({ color: 'white' });
        const body = new T.Mesh(bodyGeometry, bodyMaterial);

        const doorGeometry = new T.BoxGeometry(1, 1.5, 0.1);
        const doorMaterial = new T.MeshStandardMaterial({ color: 'brown' });
        const door = new T.Mesh(doorGeometry, doorMaterial);
        door.position.y -= 0.75;
        door.position.z += 1.5;
        buildingGroup.add(door);

        const windowGeometry = new T.BoxGeometry(0.5, 0.5, 0.1);
        const windowMaterial = new T.MeshStandardMaterial({ color: 'black' });
        const window = new T.Mesh(windowGeometry, windowMaterial);
        window.position.set(-0.75, 0.5, 1.5);
        const window2 = new T.Mesh(windowGeometry, windowMaterial);
        window2.position.set(0.75, 0.5, 1.5);
        buildingGroup.add(window2);
        buildingGroup.add(window);
        buildingGroup.add(body);

        // Load roof texture
        const loader = new T.TextureLoader();
        const texture = loader.load('brick.jpg'); // Using brick.jpg since roof.jpg is missing

        const roofGeometry = new T.ConeGeometry(2.1, 1, 4);
        roofGeometry.rotateY(Math.PI / 4);
        const roofMaterial = new T.MeshStandardMaterial({ map: texture });
        const roof = new T.Mesh(roofGeometry, roofMaterial);
        roof.position.y += 2;
        buildingGroup.add(roof);

        buildingGroup.position.set(x, y, z);

        buildingGroup.scale.set(7, 7, 7);


        super('building1', buildingGroup);
    }
}