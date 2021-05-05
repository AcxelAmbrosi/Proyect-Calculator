const $btn_out = document.getElementById("grid-container");
const $display = document.getElementById("output");
let result;

//Function for click
$btn_out.addEventListener("click", (e) => {
  if (e.target != $btn_out) {
    let t = e.target.dataset;
    if (t.number) {
      if ($display.textContent === "0") {
        $display.textContent = t.number;
      } else if ($display.textContent != "0") {
        $display.textContent += t.number;
      }
    } else if (t.math) {
      if ($display.textContent.endsWith("1") || $display.textContent.endsWith("2") || $display.textContent.endsWith("3") || $display.textContent.endsWith("4") || $display.textContent.endsWith("5") || $display.textContent.endsWith("6") || $display.textContent.endsWith("7") || $display.textContent.endsWith("8") || $display.textContent.endsWith("9") || $display.textContent.endsWith("0")) {
        $display.textContent += t.math;
      } else if (t.math) {
        if ($display.textContent.endsWith("*") || $display.textContent.endsWith("-") || $display.textContent.endsWith("+") || $display.textContent.endsWith(",")) {
          console.log("no valido");
          //work css
        }
      }
    } else if (t.operation) {
      if (t.operation === "clear") {
        $display.textContent = "0";
      } else if (t.operation === "equal") {
        result = eval($display.textContent);
        $display.textContent = result;
      }
    }
  }
});
