let timers = [];
let intervals = [];

function startClock(clockNumber) {
    if (!intervals[clockNumber]) {
        let startTime = Date.now() - (timers[clockNumber] || 0);
        intervals[clockNumber] = setInterval(() => {
            timers[clockNumber] = Date.now() - startTime;
            document.getElementById(`time${clockNumber}`).textContent = formatTime(timers[clockNumber]);
        }, 1000);
    }
}

function stopClock(clockNumber) {
    clearInterval(intervals[clockNumber]);
    intervals[clockNumber] = null;
    timers[clockNumber] = 0;
    document.getElementById(`time${clockNumber}`).textContent = '00:00';
}

function stopAllClocks() {
    for (let i = 1; i <= 3; i++) {
        stopClock(i);
    }
}

function formatTime(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
