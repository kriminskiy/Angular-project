import { minutes, seconds, btnGroup } from "./links.js";
import stop from "./stop.js";
import reset from "./reset.js";
import wait from "./wait.js";

let startBtn = false;

function start() {
  startBtn = document.querySelector("#start");

  if (startBtn) {
    startBtn.addEventListener("click", counter);
  }
}

function counter() {
  localStorage.setItem("play", 1);
  let btn = document.createElement("button");

  btn.innerHTML = "Stop";
  btn.id = "stop";
  btnGroup.prepend(btn);

  let interval = setInterval(function () {
    if (localStorage.getItem("play") == 1) {
      let s = +seconds.innerHTML;
      s++;

      if (s < 10) {
        seconds.innerHTML = "0" + s;
      } else {
        seconds.innerHTML = s;
        if (s == 60) {
          seconds.innerHTML = "00";
          let m = +minutes.innerHTML;
          m++;
          if (m < 10) {
            minutes.innerHTML = "0" + m;
          } else {
            minutes.innerHTML = m;
          }
        }
      }
    } else {
      clearInterval(interval);
    }
  }, 1000);
  this.remove();
  stop();
  reset();
  wait();
}
export default start;
