import { waitBtn, btnGroup } from "./links.js";
import start from "./start.js";

let array = [];

function wait() {
  waitBtn.addEventListener("click", w);
}
function w() {
  if (array.length == 0) {
    array.push(Date.now());
  } else if (array.length == 1) {
    array.push(Date.now());

    let between = array[1] - array[0];
    if (between <= 500) {
      localStorage.setItem("play", 0);
      let stop = document.querySelector("#stop");
      stop.remove();
      let btn = document.createElement("button");
      btn.id = "start";
      btn.innerHTML = "Start";
      btnGroup.prepend(btn);
      start();
    }
    array = [];
  }
}
export default wait;
