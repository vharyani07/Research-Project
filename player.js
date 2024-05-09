import * as T from "./libs/CS559-Three/build/three.module.js";
import { GrWorld } from "./libs/CS559-Framework/GrWorld.js";
import { GrObject } from "./libs/CS559-Framework/GrObject.js";
import * as Loaders from "./libs/CS559-Framework/loaders.js";

//got this object from user "Swp(swpws)" from https://free3d.com/user/swpws
export class player extends GrObject
{
    constructor(world)
    {
        let player = new Loaders.ObjGrObject({obj:"./stick/StickFigurea.obj"});
        world.add(player);
        super("player", null);
        player.objects[0].scale.set(100,100,100);
        

    }
}