const time = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let startTime;
let stopTime = 0;
let timeoutID;

function displayTime() {
    const currentTime = new Date(Date.now() - startTime + stopTime);

    const h = String(currentTime.getUTCHours()).slice();
    const m = String(currentTime.getUTCMinutes()).slice();
    const s = String(currentTime.getUTCSeconds()).slice();
    const ms = String(currentTime.getUTCMilliseconds()).slice(0,1);

    time.textContent = `${h}:${m}:${s}.${ms}`;
}

function start() {
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;
  startTime = Date.now() - stopTime;
  timeoutID = setInterval(displayTime, 1);
};
function stop() {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
  clearInterval(timeoutID);
  stopTime = Date.now() - startTime;
};
function reset() {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
  clearInterval(timeoutID);
  time.textContent = '0:0:0:0';
  stopTime = 0;
};
