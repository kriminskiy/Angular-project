import { seconds, minutes } from "./links.js";
function reset() {
  const resetBtn = document.querySelector("#reset");
  resetBtn.addEventListener("click", function () {
    seconds.innerHTML = "00";
    minutes.innerHTML = "00";
  });
}
export default reset;
