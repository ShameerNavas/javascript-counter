let count = 0;
const countDisplay = document.getElementById("count");

function updateDisplay() {
    countDisplay.textContent = count;

    const decreaseBtn = document.getElementById("decreaseBtn");

    if (count > 0) {
        countDisplay.style.color = "green";
        decreaseBtn.disabled = false;
    } else {
        countDisplay.style.color = "black";
        decreaseBtn.disabled = true;
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
