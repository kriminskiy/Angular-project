import { seconds, minutes, btnGroup } from "./links.js";
import start from "./start.js";

function stop() {
  let stopBtn = document.querySelector("#stop");

  stopBtn.addEventListener("click", e);
}
function e() {
  let btn = document.createElement("button");
  btn.innerHTML = "Start";
  btn.id = "start";

  localStorage.setItem("play", 0);
  seconds.innerHTML = "00";
  minutes.innerHTML = "00";
  this.remove();
  btnGroup.prepend(btn);

  start();
}
export default stop;
