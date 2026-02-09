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
import { player2 } from "./player2.js";
/********************************************************************** */
/** EXAMPLES - student should not use this! It is just for reference    */
/** you may use the sample objects, but not the sample layout           */
/***/
export function main(world) {

  world.add(new stadium(world));
  world.add(new field(-5, 1, 0));
  world.add(new SoccerGoal(24, 1, 0));
  world.add(new SoccerGoal(-34, 1, 0));

  // Blue Team (4-3-3 formation) - Attacking from left to right
  // Goalkeeper
  world.add(new player(-30, 2.5, 0));

  // Defenders (4)
  world.add(new player(-22, 2.5, -12));  // Left Back
  world.add(new player(-22, 2.5, -4));   // Center Back 1
  world.add(new player(-22, 2.5, 4));    // Center Back 2
  world.add(new player(-22, 2.5, 12));   // Right Back

  // Midfielders (3)
  world.add(new player(-10, 2.5, -10));  // Left Midfielder
  world.add(new player(-10, 2.5, 0));    // Center Midfielder
  world.add(new player(-10, 2.5, 10));   // Right Midfielder

  // Forwards (3)
  world.add(new player(6, 2.5, -10));    // Left Winger
  world.add(new player(6, 2.5, 0));      // Striker
  world.add(new player(6, 2.5, 10));     // Right Winger

  // Red Team (4-3-3 formation) - Attacking from right to left
  // Goalkeeper
  world.add(new player2(20, 2.5, 0));

  // Defenders (4)
  world.add(new player2(12, 2.5, -12));  // Left Back
  world.add(new player2(12, 2.5, -4));   // Center Back 1
  world.add(new player2(12, 2.5, 4));    // Center Back 2
  world.add(new player2(12, 2.5, 12));   // Right Back

  // Midfielders (3)
  world.add(new player2(0, 2.5, -10));   // Left Midfielder
  world.add(new player2(0, 2.5, 0));     // Center Midfielder
  world.add(new player2(0, 2.5, 10));    // Right Midfielder

  // Forwards (3)
  world.add(new player2(-16, 2.5, -10));  // Left Winger
  world.add(new player2(-16, 2.5, 0));    // Striker
  world.add(new player2(-16, 2.5, 10));   // Right Winger

  let soccerBall = new SoccerBall(-5, 1.6, 0);
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

  world.add(new building1(80, 15, -80))
  world.add(new building1(50, 15, -80))
  world.add(new building1(-40, 15, -80))
  world.add(new building1(-70, 15, -80))





  //below is a method using raycaster to move the soccer ball
  //I got this code and assitance from youtube channel Wael Yasmina
  //video is titled 'How To Create Objects On Mouse Click In Three.js'
  //link is 'https://www.youtube.com/watch?v=By9qRmcrTzs'
  let camera = world.camera;
  let scene = world.scene;
  let mouse = new T.Vector2();
  let intersectionPoint = new T.Vector3();
  let renderer = new T.WebGLRenderer();

  // Fixed: Use horizontal ground plane instead of camera-perpendicular plane
  let planeNormal = new T.Vector3(0, 1, 0); // Horizontal plane pointing up
  let plane = new T.Plane(planeNormal, -1.6); // At y = 1.6 (ball height)
  let raycaster = new T.Raycaster();

  // Field boundaries (field is 60x40 at position -5, 1, 0)
  const FIELD_X_MIN = -35;
  const FIELD_X_MAX = 25;
  const FIELD_Z_MIN = -20;
  const FIELD_Z_MAX = 20;

  window.addEventListener('mousemove', function (e) {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1; // Invert Y for correct mapping
    raycaster.setFromCamera(mouse, camera);
    raycaster.ray.intersectPlane(plane, intersectionPoint);
  });

  window.addEventListener('click', function (e) {
    // Clamp position to field boundaries
    let clampedX = Math.max(FIELD_X_MIN, Math.min(FIELD_X_MAX, intersectionPoint.x));
    let clampedZ = Math.max(FIELD_Z_MIN, Math.min(FIELD_Z_MAX, intersectionPoint.z));

    let newPosition = new T.Vector3(clampedX, soccerBall.objects[0].position.y, clampedZ);
    soccerBall.objects[0].position.copy(newPosition);
  });

  function animate() {
    renderer.render(scene, camera);
  }
  renderer.setAnimationLoop(animate);
  window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

  });

  let background = new T.CubeTextureLoader().load(['./city.jpg', './city.jpg', './sky.jpg',
    './brick.jpg', './city.jpg', './city.jpg']);
  world.scene.background = background;



}