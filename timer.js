const timer = document.getElementById("timer");
const stopTimer = document.getElementById("stop-timer");
const startTimer = document.getElementById("start-timer");
const resetTimer = document.getElementById("reset-timer");
let timerMinutes = document.getElementById("timer-minute");
let timerSecond = document.getElementById("timer-second");
let total = 0;
let timerInterval;

startTimer.addEventListener("click", () => {
  let min = parseInt(timerMinutes.value) || 1;
  let sec = parseInt(timerSecond) || 0;
  console.log(min);
  total = min * 60 + sec;
  timerInterval = setInterval(() => {
    total--;
    if (total <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      totalSecond = 0;
    }
    updateTimer();
  }, 1000);
});
function updateTimer() {
  let mins = Math.floor(total / 60);
  let sec = total % 60;
  timer.innerHTML = `${format(mins)}:${format(sec)}`;
}
stopTimer.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
});
resetTimer.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  totalSeconds = 0;
  timer.innerText = "00:00";
});
// ----------- stop watch -------------------
const getTime = document.getElementById("time");
const getButton = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
let second = 0;
let minutes = 0;
let hours = 0;
let interval;

getButton.addEventListener("click", () => {
  interval = setInterval(() => {
    second += 1;
    if (second == 60) {
      second = 0;
      minutes++;
    }
    if (minutes == 60) {
      hours++;
      minutes = 0;
    }
    getTime.innerText = `${format(hours)}:${format(minutes)}:${format(second)}`;
  }, 1000);
});
stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});
resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  second = 0;
  minutes = 0;
  hours = 0;
  getTime.innerText = "00:00:00";
});

function format(nums) {
  return nums < 10 ? "0" + nums : nums;
}
