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

function increase() {
    count++;
    updateDisplay();
}

function decrease() {
    if (count > 0) {
        count--;
    }
    updateDisplay();
}

function reset() {
    count = 0;
    updateDisplay();
}
