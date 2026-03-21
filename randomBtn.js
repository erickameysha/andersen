const btn = document.getElementById("btn");

const btnTeleport = () => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const btnHeight = btn.offsetHeight;
  const btnWidth = btn.offsetWidth;

  const maxTop = windowHeight - btnHeight;
  const maxLeft = windowWidth - btnWidth;

  const randomTop = Math.random() * (maxTop + 1);
  const randomLeft = Math.random() * (maxLeft + 1);

  btn.style.top = randomTop + "px";
  btn.style.left = randomLeft + "px";
};

btn.addEventListener("click", () => {
  btnTeleport();
});
btn.addEventListener("mouseenter", () => {
  if (Math.random() > 0.5) {
    btnTeleport();
  }
});
