const particlesConfig = {
  fullScreen: {
    enable: false,
  },
  particles: {
    number: {
      value: 60,
      density: {
        enable: false,
        value_area: 720.2592933456048,
      },
    },
    color: {
      value: ['#E2C7C7', '#699A9F', '#F0EFEB'], 
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      // image: {
      //   src: 'https://freesvg.org/img/dibujo-19.png',

      // }
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.7,
        sync: false,
      },
    },
    size: {
      value: 40,
      random: true,
      anim: {
        enable: false,
        speed: 30,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.05,
      direction: "none",
      random: true,
      straight: true,
      out_mode: "bounce",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 300,
        rotateY: 600,
      },
      
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: false,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 50,
        duration: 0.1,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

export default particlesConfig;
