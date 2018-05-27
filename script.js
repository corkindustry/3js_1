var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);
var renderer = new THREE.WebGLRenderer( { alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff, 0);
document.body.appendChild(renderer.domElement);

var light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

var light1 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light1);

var geometry = new THREE.BoxGeometry(50, 50, 10);
var material = new THREE.MeshLambertMaterial( { color: 0x72c245, side: THREE.DoubleSide } );
var cube = new THREE.Mesh(geometry, material);

var cube = [];
for (var i = 0; i < 100; i++) {
  cube[i] = new THREE.Mesh(geometry, material);
  var x = Math.floor((Math.random() * 501) - 250);
  var y = Math.floor((Math.random() * 501) - 250);
  var z = -(Math.floor(Math.random() * 501) + 500);
  cube[i].position.set(x, y, z);
  scene.add(cube[i]);
}

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  for (var i = 0; i < 100; i++) {
    var x = Math.floor((Math.random() * 100) + 1) / 1000;
    // console.log(x);
    var y = Math.floor((Math.random() * 100) + 1) / 10000;
    // console.log(y);
    cube[i].rotation.x += x;
    cube[i].rotation.y += y;
  }
  renderer.render(scene, camera);
};

animate();
