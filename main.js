import * as T from "./libs/CS559-Three/build/three.module.js";
import { GrObject } from "./libs/CS559-Framework/GrObject.js";
import { GrWorld } from "./libs/CS559-Framework/GrWorld.js";
import { stadium } from "./stadium.js"
import { field } from "./field.js";
import { SoccerGoal } from "./SoccerGoal.js";
import { SoccerBall } from "./ball.js";
import { player } from "./player.js";
import { PineTree } from "./trees.js";
import { building1 } from "./house.js";
/********************************************************************** */
/** EXAMPLES - student should not use this! It is just for reference    */
/** you may use the sample objects, but not the sample layout           */
/***/
export function main(world) 
{

  world.add(new stadium(world));
  world.add(new field(-5, 1, 0));
  world.add(new SoccerGoal(24,1,0));
  world.add(new SoccerGoal(-34,1,0));
  world.add(new player(world));
  let soccerBall = new SoccerBall(-5,1.6,0);
  world.add(soccerBall);

  world.add(new PineTree(-80, 0, 60));
  world.add(new PineTree(-80, 0, 65));
  world.add(new PineTree(-80, 0, 70));
  world.add(new PineTree(-70, 0, 70));
  world.add(new PineTree(-75, 0, 65));
  world.add(new PineTree(-70, 0, 80));
  world.add(new PineTree(-70, 0, 75));
  world.add(new PineTree(-80, 0, 80));

  world.add(new PineTree(80, 0, 60));
  world.add(new PineTree(80, 0, 65));
  world.add(new PineTree(80, 0, 70));
  world.add(new PineTree(70, 0, 70));
  world.add(new PineTree(75, 0, 65));
  world.add(new PineTree(70, 0, 80));
  world.add(new PineTree(70, 0, 75));
  world.add(new PineTree(80, 0, 80));

  world.add(new building1(80,15,-80))
  world.add(new building1(50,15,-80))
  world.add(new building1(-40,15,-80))
  world.add(new building1(-70,15,-80))
 

 


  //below is a method using raycaster to move the soccer ball
  //I got this code and assitance from youtube channel Wael Yasmina
  //video is titled 'How To Create Objects On Mouse Click In Three.js'
  //link is 'https://www.youtube.com/watch?v=By9qRmcrTzs'
  let camera = world.camera;
  let scene = world.scene;
  let mouse = new T.Vector2();
  let intersectionPoint = new T.Vector3();
  let renderer = new T.WebGLRenderer();
  let planeNormal = new T.Vector3();
  let plane = new T.Plane();
  let raycaster = new T.Raycaster();

  window.addEventListener('mousemove', function(e) {
  
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    planeNormal.copy(camera.position).normalize();
    plane.setFromNormalAndCoplanarPoint(planeNormal, scene.position);
    raycaster.setFromCamera(mouse, camera);
    raycaster.ray.intersectPlane(plane, intersectionPoint);
  });

  window.addEventListener('click', function(e) 
  {
    let newPosition = new T.Vector3(intersectionPoint.x, soccerBall.objects[0].position.y,intersectionPoint.z)
    soccerBall.objects[0].position.copy(newPosition);

  });

  function animate()
  {
    renderer.render(scene,camera);
  }
  renderer.setAnimationLoop(animate);
  window.addEventListener('resize', function(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
  });
  
  let background = new T.CubeTextureLoader().load(['./city.jpg', './city.jpg', './sky.jpg', 
'./brick.jpg', './city.jpg', './city.jpg']);
  world.scene.background = background;


  
}