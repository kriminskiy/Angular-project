import { seconds, minutes } from "./links.js";
import start from "./start.js";
function stop() {
  const stopBtn = document.querySelector("#stop");

  stopBtn.addEventListener("click", e);
  function e() {
    this.innerHTML = "Start";
    this.id = "start";
    localStorage.setItem("play", 0);
    seconds.innerHTML = "00";
    minutes.innerHTML = "00";
    start();
  }
}

export default stop;
