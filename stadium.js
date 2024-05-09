import * as T from "./libs/CS559-Three/build/three.module.js";
import { GrWorld } from "./libs/CS559-Framework/GrWorld.js";
import { GrObject } from "./libs/CS559-Framework/GrObject.js";
import * as Loaders from "./libs/CS559-Framework/loaders.js";

//got this object from user "Biswajit24" from https://free3d.com/user/biswajit24
export class stadium extends GrObject
{
    constructor(world)
    {
        let stadium = new Loaders.ObjGrObject({obj:"./sportsstadium.obj"});
        world.add(stadium);
        super("stadium", null);
        stadium.objects[0].scale.set(.04,0.025,0.04);

        stadium.objects[0].material = new T.MeshBasicMaterial({color: 'black'});
        

    }
}