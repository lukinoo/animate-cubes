const container = document.querySelector(".container");

const cube_amount = 255;

const randomColorGenerator = () => {
  let symbols = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += symbols[Math.floor(Math.random() * 16)];
  }

  return color;
};

const initialAnimate = (element, index) => {
  element.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 1000,
    delay: index,
  });
};

const createCubes = () => {
  for (let i = 0; i < cube_amount; i += 1) {
    const new_cube = document.createElement("div");
    new_cube.classList.add("cube");

    initialAnimate(new_cube, i);
    animateCubes(new_cube);

    container.appendChild(new_cube);
  }
};

const animateCubes = (cube) => {
  cube.addEventListener("mouseenter", () => {
    const rand_color = randomColorGenerator();
    cube.style.background = rand_color;
    cube.style.boxShadow = `0 0 2px ${rand_color}, 0 0 10px ${rand_color}`;
  });

  cube.addEventListener("mouseleave", () => {
    cube.style.background = "#333333";
    cube.style.boxShadow = "0 0 2px #000";
  });
};

window.addEventListener("load", () => {
  createCubes();
});
