document.addEventListener("DOMContentLoaded", function () {
    const timerDisplay = document.getElementById("timerDisplay");
    let seconds = 60;

    function updateTimer() {
        timerDisplay.textContent = seconds;
        if (seconds === 0) {
            seconds = 60; // Reset the timer to 60 seconds when it reaches 0
        } else {
            seconds--;
        }
    }

    // Initial call to update the timer
    updateTimer();

    // Update the timer every second
    setInterval(updateTimer, 1000);
});

let toggleSwitch = document.querySelector("input");


toggleSwitch.addEventListener("change", (e) => {
  let body = document.querySelector("body");
  let av = document.getElementById('av');
let timer = document.getElementById('timerDisplay')

  if (e.target.checked) {
    body.style.backgroundColor = "rgb(38, 43, 52)";
    timer.style.color = "#f8f8f8";
    av.style.color = "#f8f8f8";
  } else {
    body.style.backgroundColor = "#f8f8f8";
    timer.style.color = "#17193F";
    av.style.color = "#17193F";
  }
});
