var zoom = (function ($) {
    var selectors = {
            document: document,
            window: window,
            body: 'body, html',
            scene: '.scene',
            layers: '.layer',
            depth: '.scene__depth',
            menu: '.menu',
            anchor: 'a[href^="#"]'
        },
        classes = {
            activeMenu: 'menu__item--active'
        },
        distance = 500,
        speed = 2000,
        current = {
            layer: 0,
            progress: 0,
            menu: ''
        },
        depth,
        layers,
        nodes;

    function zoomScene() {
        // get scroll, cap within bounds
        var scroll = nodes.window.scrollTop();
        scroll = scroll >= 0 ? (scroll <= depth ? scroll : depth) : 0;

        // set currents
        current.layer = (scroll / distance) | 0;
        current.progress = (scroll - (current.layer * distance)) / distance;
        current.overallProgress = (scroll / (distance * layers));

        // adjust scene
        setZPosition(nodes.scene, scroll);

        // update menu and layer
        setActive();
    }

    function setActive() {
        // update menu
        var position = current.layer + (Math.round(current.progress));

        if (position !== current.menu) {
            var layer = $('.layer[data-depth="' + (position * distance) + '"]');

            nodes.menu.find('.' + classes.activeMenu).removeClass(classes.activeMenu);

            nodes.menu.find('a[href="#' + layer.attr('id') + '"]').addClass(classes.activeMenu);

            current.menu = position;
        }
    }
    var verification_sound;
    function setZPosition(element, z) {
        element.css({
            '-webkit-transform': 'translate3d(0, 0px, ' + z + 'px)',
            '-moz-transform': 'translate3d(0, 0, ' + z + 'px)',
            'transform': 'translate3d(0, 0, ' + z + 'px)'
        });

        var sound=document.getElementById('bruitage');
        if(z<600 && verification_sound!='resources/wind1.mp3'){
            console.log('coucou');
           sound.src='resources/wind1.mp3';
           verification_sound=bruitage.src;
        }
    }

    function scrollToLayer(target) {
        nodes.body.stop(true).animate({
            'scrollTop': target
        }, speed);
    }

    function setDepth() {
        layers = nodes.layers.length;

        depth = (distance * (layers - 1)) + nodes.window.height();

        nodes.depth.css('height', depth + 'px');
    }

    return {
        init: function () {
            nodes = utils.createNodes(selectors);

            // set environment depth
            setDepth();

            // set layer z position
            $.each(nodes.layers, function () {
                var layer = $(this);

                setZPosition(layer, -layer.data('depth'));
            });

            // set initial position
            zoomScene();

            // zooming
            var throttledZoom = _.throttle(zoomScene, 25);

            nodes.window.on('scroll', throttledZoom);

            // resize
            nodes.window.on('resize', setDepth);

            // anchors
            nodes.anchor.on('click', function (event) {
                var target = $($(this).attr('href')).data('depth');

                scrollToLayer(target);

                event.preventDefault();
            });
        }
    }
})(jQuery);

$(function () {
    zoom.init();
});

var y =1000;
/*function button_start () {

    var start=document.getElementsByTagName('body');
    start[0].style.overflow='visible';
    document.querySelector('.button_start').style.opacity='0';
      if(y>=300) {
    camera.position.set(0, 0, y);
    y-=10;
    console.log('coucou');
  requestAnimationFrame( button_start );
   }
}
*/
function arrow_up () {

    var x=0;

    document.querySelector('.arrowUp').style.opacity='1';
    setInterval(function() {
        if(x==0) {
            document.querySelector('.arrowUp').style.top='78%';
            x=1;
        }
        else {
            document.querySelector('.arrowUp').style.top='80%';
            x=0;
        }




    },500);

}
function DesactivateHelp() {
var scrollVerification = document.getElementsByTagName('body');
  document.querySelector('.arrowUp').style.opacity='0';




};
/* var renderer, scene, camera, mesh;init();
animate();function init(){
   // on initialise le moteur de rendu
   renderer = new THREE.WebGLRenderer();    // si WebGL ne fonctionne pas sur votre navigateur vous pouvez utiliser le moteur de rendu Canvas à la place
   // renderer = new THREE.CanvasRenderer();
   renderer.setSize( window.innerWidth, window.innerHeight );
   document.querySelector('.scene').appendChild(renderer.domElement);    // on initialise la scène
   scene = new THREE.Scene();    // on initialise la camera que l’on place ensuite sur la scène
   camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 10000 );
   camera.position.set(0, 0, 1000);
   scene.add(camera);

  // on créé la sphère et on lui applique une texture sous forme d’image
   var geometry = new THREE.SphereGeometry( 200, 42, 42 );
   var material = new THREE.MeshBasicMaterial( { map:THREE.ImageUtils.loadTexture('imgs/texture.png'), overdraw: true } );
   mesh = new THREE.Mesh( geometry, material );
   scene.add( mesh );    // on ajoute une lumière blanche
   var lumiere = new THREE.DirectionalLight( 0xffffff, 1.0 );
   lumiere.position.set( 0, 0, 100 );
   scene.add( lumiere );
}function animate(){
   // on appel la fonction animate() récursivement à chaque frame
   requestAnimationFrame( animate );
   // on fait tourner le cube sur ses axes x et y

   mesh.rotation.y += 0.005;
   // on effectue le rendu de la scène
   renderer.render( scene, camera );
}*/

// function Bulle1() {
//
//
// }


document.querySelector('#button3').addEventListener('click', function () {
  document.querySelector('.information1').classList.toggle('visible');
  });
