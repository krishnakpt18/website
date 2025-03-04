function togglePanel() {
    let panel = document.getElementById("sidePanel");
    panel.classList.toggle("open");

    // Change button text direction based on panel state
    let button = panel.querySelector(".toggle-btn");
    button.innerHTML = panel.classList.contains("open") ? "&#62;" : "&#60;"; // "<" for close, ">" for open
}



// Set the timer duration (Minutes:Seconds)
let timeLeft = 0 * 60; // 10 minutes in seconds

// Function to update the timer display
function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    // Format with leading zero if needed
    let formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    document.getElementById("timer").textContent = formattedTime;

    // Stop timer at 00:00
    if (timeLeft > 0) {
        timeLeft--;
    } else {
        clearInterval(timerInterval);
        alert("Time's up!");
    }
}

// Start the countdown timer
let timerInterval = setInterval(updateTimer, 1000);
