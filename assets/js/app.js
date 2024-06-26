particlesJS("bg", {
  particles: {
    number: { value: 6, density: { enable: true, value_area: 800 } },
    color: { value: "#1b5cb1" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#1b5cb1" },
      polygon: { nb_sides: 7 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1.038961038961039,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 32.06824121731046,
      random: false,
      anim: { enable: true, speed: 10, size_min: 40, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 200,
      color: "#ffffff",
      opacity: 1,
      width: 1.1048066982851816,
    },
    move: {
      enable: true,
      speed: 1.603412060865523,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "bounce",
      bounce: false,
      attract: { enable: true, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "grab" },
      onclick: { enable: false, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
var count_particles, stats, update;

if (stats && count_particles && update != null) {
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    stats.begin();
    stats.end();
    if (
      window.pJSDom[0].pJS.particles &&
      window.pJSDom[0].pJS.particles.array
    ) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}
