let count = 0;
const countDisplay = document.getElementById("count");

function updateDisplay() {
    countDisplay.textContent = count;

    if (count > 0) {
        countDisplay.style.color = "green";
    } else if (count < 0) {
        countDisplay.style.color = "red";
    } else {
        countDisplay.style.color = "black";
    }
}
function getStep() {
    const stepInput = document.getElementById("step").value;
    return parseInt(stepInput) || 1;
}

function increase() {
    count += getStep();
    updateDisplay();
}

function decrease() {
    if (count - getStep() >= 0) {
        count -= getStep();
    }
    updateDisplay();
}
