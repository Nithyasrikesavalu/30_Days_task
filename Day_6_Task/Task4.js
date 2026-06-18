let stopwatch;
let seconds = 0;

function showCurrentTime() {
  setInterval(() => {
    const now = new Date();
    console.log(now.toLocaleTimeString());
  }, 1000);
}

function start() {
  stopwatch = setInterval(() => {
    seconds++;
    console.log("Time:", seconds, "sec");
  }, 1000);
}

function stop() {
  clearInterval(stopwatch);
}

function reset() {
  clearInterval(stopwatch);
  seconds = 0;
  console.log("Reset:", seconds);
}

function resume() {
  start();
}


start();

