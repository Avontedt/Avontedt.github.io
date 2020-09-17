const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

navSlide();

//Game
const character = document.getElementById("character");
const block = document.getElementById("block");

function jump() {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }
  setTimeout(function () {
    character.classList.remove("animate");
  }, 400);
}

const checkDead = setInterval(function () {
  const characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  const blockleft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockleft < 20 && blockleft > 0 && characterTop >= 130) {
    block.style.animation = "none";
    block.style.display = "none";
    alert("OOOOOF...");
  }
}, 10);
