import Swiper, { Navigation, Pagination } from 'swiper';

function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});
/* Particle - JS */
particlesJS('particle', {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 2250.318795162649
            }
        },
        "color": {
            "value": "#1cd7e3"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 4,
                "color": "#375f79"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.31671153413400244,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 12.501771084236939,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 30.405405405405382,
                "size_min": 0.844594594594594,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 316.7115341340024,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 0.5000708433694776
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
})
particlesJS('particle2', {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 2250.318795162649
            }
        },
        "color": {
            "value": "#1cd7e3"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 4,
                "color": "#375f79"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.31671153413400244,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 12.501771084236939,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 30.405405405405382,
                "size_min": 0.844594594594594,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 316.7115341340024,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 0.5000708433694776
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
})

// var $links = $('.navbar .navbar-nav .nav-link');
// $links.click(function (e) {
//     e.preventDefault();
//     $links.removeClass('active_link');

//     var id = $(this).attr('href');  //  active 
//     var target = $(id).offset().top;
//     $('html, body').animate({
//         scrollTop: target,
//     }, 1000)
// })
// $(window).scroll(function () {
//     var scroll = $(this).scrollTop();

//     $links.each(function () {
//         var target = $(this).attr('href');  //  active 
//         var selector = $(target).offset().top - 50;  // kordinator silki

//         if (scroll >= selector) {
//             $links.removeClass('active_link');
//             $(this).addClass('active_link')
//         }
//     })
// })

