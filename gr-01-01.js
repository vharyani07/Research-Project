
import { GrWorld } from "./libs/CS559-Framework/GrWorld.js";

import {main} from "./main.js";


let world = new GrWorld({
    width: 800,
    height: 600,
    groundplanesize: 90 // make the ground plane big enough for a world of stuff
});


main(world);

world.go();
