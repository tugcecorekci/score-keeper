const p1Btn = document.querySelector('#p1Btn')
const p2Btn = document.querySelector('#p2Btn')
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const resetBtn = document.querySelector('#reset')
const playSelect = document.querySelector('#playto')

let p1Score = 0
let p2Score = 0
let winScore = 3


playSelect.addEventListener('change', function () {
    // winScore = parseInt(this.value)
    winScore = this.value
    reset()
})

p1Btn.addEventListener('click', () => {
    if (p1Score != winScore) {
        p1Score += 1
        p1Display.textContent = p1Score
        if (p1Score == winScore) {
            p1Btn.setAttribute("disabled", "true")
            p2Btn.setAttribute("disabled", "true")
        }
    }
})

p2Btn.addEventListener('click', () => {
    if (p2Score != winScore) {
        p2Score += 1
        p2Display.textContent = p2Score
        if (p2Score == winScore) {
            p1Btn.setAttribute("disabled", "true")
            p2Btn.setAttribute("disabled", "true")
        }
    }
})

resetBtn.addEventListener('click', reset)

function reset() {
    p1Score = 0
    p2Score = 0
    p1Display.textContent = 0
    p2Display.textContent = 0
    p1Btn.removeAttribute('disabled');
    p2Btn.removeAttribute('disabled');
}