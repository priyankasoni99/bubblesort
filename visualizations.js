//We only have to change background-color and height of the sorting element.

var speed = 500;

delay_time = 10000 / (Math.floor(array_size / 10) * speed); //Decrease numerator to increase speed.

var delay_time = 10000 / (Math.floor(array_size / 10) * speed); //Decrease numerator to increase speed.
var c_delay = 0; //This is updated ov every div change so that visualization is visible.

function div_update(cont, height, color) {
  window.setTimeout(function () {
    cont.style =
      " margin:0% " +
      margin_size +
      "%; width:" +
      (100 / array_size - 2 * margin_size) +
      "%; height:" +
      height +
      "%; background-color:" +
      color +
      ";";
  }, (c_delay += delay_time));
}

function enable_buttons() {
  window.setTimeout(function () {
    for (var i = 0; i < butts_algos.length; i++) {
      butts_algos[i].classList = [];
      butts_algos[i].classList.add("butt_unselected");

      butts_algos[i].disabled = false;
      inp_as.disabled = false;
      inp_gen.disabled = false;
      inp_aspeed.disabled = false;
    }
  }, (c_delay += delay_time));
}
