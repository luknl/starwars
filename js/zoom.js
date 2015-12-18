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




    var verification_sound=null;
    function setZPosition(element, z) {
        element.css({
            '-webkit-transform': 'translate3d(0, 0px, ' + z + 'px)',
            '-moz-transform': 'translate3d(0, 0, ' + z + 'px)',
            'transform': 'translate3d(0, 0, ' + z + 'px)'
        });

        var sound=document.getElementById('bruitage');
        if(z<1900 && verification_sound!="http://www.random-ination.com/resources/wind3.mp3"){
           sound.src='resources/wind3.mp3';
           verification_sound=sound.src;
           console.log(verification_sound);
        }

        if(z>=1900 && z<2350 && verification_sound!=null){
          sound.src='';
          verification_sound=sound.src;
        }

        if(z>=2350 && z<2900 && verification_sound!="http://www.random-ination.com/resources/wind3.mp3"){
           sound.src='resources/wind3.mp3';
           verification_sound=sound.src;
           console.log(verification_sound);
        }

        if(z>=2900 && z<3300 && verification_sound!="http://www.random-ination.com/resources/fire1.mp3") {
          sound.src='resources/fire1.mp3';
           verification_sound=sound.src;
        }

        if(z>=3300 && z<4750 && verification_sound!="http://www.random-ination.com/resources/wind3.mp3") {
           sound.src='resources/wind3.mp3';
           verification_sound=sound.src;
        }
        if(z>=4750 && z<5400 && verification_sound!="http://www.random-ination.com/resources/droids.mp4") {
           sound.src='resources/droids.mp4';
           verification_sound=sound.src;

        }
        if(z>=5450 && verification_sound!="http://www.random-ination.com/resources/cantina.mp3") {
           sound.src='resources/cantina.mp3';
           verification_sound=sound.src;
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


document.querySelector('#button1').addEventListener('click', function () {
  document.querySelector('.information1').classList.toggle('visible');
    });

document.querySelector('#button2').addEventListener('click', function () {
  document.querySelector('.info_video').classList.toggle('visible');
    });

document.querySelector('#button3').addEventListener('click', function () {
  document.querySelector('.information2').classList.toggle('visible');
    });

document.querySelector('#button4').addEventListener('click', function () {
  document.querySelector('.information3').classList.toggle('visible');
    });

document.querySelector('#button5').addEventListener('click', function () {
  document.querySelector('.information4').classList.toggle('visible');
    });
