const startButton = document.querySelector(".start-button")
const stopButton = document.querySelector(".stop-button")
const clearButton = document.querySelector(".clear-button")

let time = 0 // em milissegundos
let cron
let h1 = document.querySelector("h1")

function formatTime(ms) {
    const minutes = Math.floor(ms / 60000)
    const seconds = Math.floor((ms % 60000) / 1000)
    const milliseconds = ms % 1000

    return `${minutes.toString().padStart(2, "0")}:` +
           `${seconds.toString().padStart(2, "0")}.` +
           `${milliseconds.toString().padStart(3, "0")}`
}

function start() {
    clearInterval(cron)

    cron = setInterval(function () {
        time += 10
        h1.innerHTML = formatTime(time)
    }, 10)
}

function stop() {
    clearInterval(cron)
}

function clear() {
    clearInterval(cron)
    time = 0
    h1.innerHTML = "00:00.000"
}

startButton.addEventListener("click", start)
stopButton.addEventListener("click", stop)
clearButton.addEventListener("click", clear)