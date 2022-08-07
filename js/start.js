import { minutes, seconds } from "./links.js";
import stop from "./stop.js";
import reset from "./reset.js";

function start() {
  const startBtn = document.querySelector("#start");
  startBtn.addEventListener("click", counter);
}

function counter() {
  localStorage.setItem("play", 1);
  this.innerHTML = "Stop";
  this.id = "stop";

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

  stop();
  reset();
}
export default start;
