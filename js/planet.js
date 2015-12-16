var renderer, scene, camera, mesh;

function init(){
   // on initialise le moteur de rendu
   renderer = new THREE.WebGLRenderer();

   // si WebGL ne fonctionne pas sur votre navigateur vous pouvez utiliser le moteur de rendu Canvas à la place
   // renderer = new THREE.CanvasRenderer();
   renderer.setSize( window.innerWidth, window.innerHeight );
   document.querySelector('.planet').appendChild(renderer.domElement);

   // on initialise la scène
   scene = new THREE.Scene();

   // on initialise la camera que l’on place ensuite sur la scène
   camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 10000 );
   camera.position.set(0, 0, 1000);
   scene.add(camera);

  // on créé la sphère et on lui applique une texture sous forme d’image
   var geometry = new THREE.SphereGeometry( 200, 42, 42 );
   var material = new THREE.MeshBasicMaterial( { map:THREE.ImageUtils.loadTexture('imgs/texture.png'), overdraw: true } );
   mesh = new THREE.Mesh( geometry, material );
   scene.add( mesh );

   // on ajoute une lumière blanche
   var lumiere = new THREE.DirectionalLight( 0xffffff, 1.0 );
   lumiere.position.set( 0, 0, 100 );
   scene.add( lumiere );


   document.querySelector('.tatooine').setAttribute("style", "display:block");
   animate();
}



function animate(){
   // on appel la fonction animate() récursivement à chaque frame
   requestAnimationFrame( animate );
   // on fait tourner le cube sur ses axes x et y
   //

     mesh.rotation.y += 0.005;
   // on effectue le rendu de la scène
   renderer.render( scene, camera );
}



function load(){
setTimeout("init()",7700);
}


document.querySelector('.more').addEventListener('click', function () {
    document.querySelector('.tatooine1').setAttribute("style", "display:none;");
    document.querySelector('.tatooine2').setAttribute("style", "display:block");
});



//
// var y =1000;
// function button_start () {
//    var start=document.getElementsByTagName('body');
//    start[0].style.overflow='visible';
//    document.querySelector('.button_start').style.opacity='0';
//      if(y>=300) {
//    camera.position.set(0, 0, y);
//    y-=10;
//    console.log('coucou');
//  requestAnimationFrame( button_start );
//   }
// }
