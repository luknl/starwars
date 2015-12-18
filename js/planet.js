var renderer, scene, camera, mesh;

function init() {
    // on initialise le moteur de rendu
    renderer = new THREE.WebGLRenderer();

    // si WebGL ne fonctionne pas sur votre navigateur vous pouvez utiliser le moteur de rendu Canvas à la place
    // renderer = new THREE.CanvasRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.querySelector('.planet').appendChild(renderer.domElement);

    // Scene begin
    scene = new THREE.Scene();

    // Camera begins
    camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(0, 0, 1000);
    scene.add(camera);

    // Sphere creation
    var geometry = new THREE.SphereGeometry(200, 42, 42);
    var material = new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture('imgs/texture.png'),
        overdraw: true
    });
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // White light
    var lumiere = new THREE.DirectionalLight(0xffffff, 1.0);
    lumiere.position.set(0, 0, 100);
    scene.add(lumiere);


    document.querySelector('.tatooine').setAttribute("style", "display:block");
    animate();
}



function animate() {

    // call animate()
    requestAnimationFrame(animate);

    mesh.rotation.y += 0.005;
    renderer.render(scene, camera);
}



function load() {
    setTimeout("init()", 7700);
}


document.querySelector('.more').addEventListener('click', function () {
    document.querySelector('.tatooine1').setAttribute("style", "display:none;");
    document.querySelector('.tatooine2').setAttribute("style", "display:block");
});