// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Initialize smooth scrolling for anchor links
    new SweetScroll({});

    // Initialize particles effect for the element with ID 'particles-js'
    const headerParticleConfig = {
        particles: {
            number: {
                value: 160, // Number of particles
                density: {
                    enable: true,
                    value_area: 500 // Area in which particles are dispersed
                }
            },
            color: {
                value: "#ffffff" // Color of the particles
            },
            shape: {
                type: "circle", // Shape of the particles
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5 // Number of sides for polygon shapes
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: true, // Randomize opacity
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true, // Randomize size
                anim: {
                    enable: false,
                    speed: 4,
                    size_min: 0.3,
                    sync: false
                }
            },
            line_linked: {
                enable: false, // Disable lines between particles
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true, // Enable movement of particles
                speed: 1,
                direction: "none",
                random: true, // Randomize movement direction
                straight: false,
                out_mode: "out", // Particles disappear when out of canvas
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 600
                }
            }
        },
        interactivity: {
            detect_on: "canvas", // Detect interactions on canvas
            events: {
                onhover: {
                    enable: false, // Disable hover effect
                    mode: "bubble"
                },
                onclick: {
                    enable: false, // Disable click effect
                    mode: "repulse"
                },
                resize: true // Adjust particles on window resize
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 250,
                    size: 0,
                    duration: 2,
                    opacity: 0,
                    speed: 3
                },
                repulse: {
                    distance: 400,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true // Enable high-DPI support
    };

    // Particle configuration for the image (rounded area)
    const imageParticleConfig = {
        particles: {
            number: {
                value: 260, // Keep the same number of particles
                density: {
                    enable: true,
                    value_area: 500 // 300px x 300px area (300 * 300)
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.8,
                random: true,
                anim: {
                    enable: true,
                    speed: 0.5,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 2,
                random: true,
                anim: {
                    enable: false,
                    speed: 4,
                    size_min: 0.3,
                    sync: false
                }
            },
            line_linked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 0.6,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: false,
                    mode: "bubble"
                },
                onclick: {
                    enable: false,
                    mode: "repulse"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 250,
                    size: 0,
                    duration: 2,
                    opacity: 0,
                    speed: 3
                },
                repulse: {
                    distance: 400,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    };

    // Particle configuration for the footer
    const footerParticleConfig = {
        particles: {
            number: {
                value: 160, // Keep the same number of particles
                density: {
                    enable: true,
                    value_area: 250 // Adjusted for a small area
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                }
            },
            opacity: {
                value: 0.8,
                random: true,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 2,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.1,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                resize: true,
                onhover: {
                    enable: false,
                    mode: "grab"
                },
                onclick: {
                    enable: false,
                    mode: "push"
                },
                resize: true
            }
        },
        retina_detect: true
    };

    // Initialize particles effect on each element
    particlesJS("particles-js", headerParticleConfig);
    particlesJS("particles-js-circle", imageParticleConfig);
    particlesJS("footer-particles-js", footerParticleConfig);

}, false);
