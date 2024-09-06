const controlsOperationButtons = document.querySelectorAll(
  ".controls-operation"
);
const controlsStatusButtons = document.querySelectorAll(".controls-status");

controlsOperationButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const switchh = document.querySelector(`.gos${index + 1}`);
    console.log(switchh.src);
    const src = switchh.src.split("images/")[1].split(".")[0];
    console.log(src);
    if (src == "OFF") {
      switchh.setAttribute("src", "./images/on.png");
    } else {
      switchh.setAttribute("src", "./images/off.png");
    }
    // switchh.src = src === "OFF" ? "../images/ON.png" : ".//images/OFF.png";
    if (src === "OFF") {
      if (
        switchh.classList.contains("gos1") ||
        switchh.classList.contains("gos2")
      ) {
        switchh.classList.remove("off");
      }
      if (switchh.classList.contains("gos3")) {
        switchh.classList.remove("off2");
      }
      if (switchh.classList.contains("gos4")) {
        switchh.classList.remove("off3");
      }
      if (switchh.classList.contains("gos5")) {
        switchh.classList.remove("off5");
      }
      if (switchh.classList.contains("gos6")) {
        switchh.classList.remove("off6");
      }
    } else {
      if (
        switchh.classList.contains("gos1") ||
        switchh.classList.contains("gos2")
      ) {
        switchh.classList.add("off");
      }
      if (switchh.classList.contains("gos3")) {
        switchh.classList.add("off2");
      }
      if (switchh.classList.contains("gos4")) {
        switchh.classList.add("off3");
      }
      if (switchh.classList.contains("gos5")) {
        switchh.classList.add("off5");
      }
      if (switchh.classList.contains("gos6")) {
        switchh.classList.add("off6");
      }
    }
    button.textContent = button.textContent == "OFF" ? "ON" : "OFF";
    controlsStatusButtons[index].textContent =
      controlsStatusButtons[index].textContent == "OFF" ? "ON" : "OFF";
  });
});
