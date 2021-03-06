const p1 = {
    button: document.querySelector('#p1Btn'),
    display: document.querySelector('#p1Display'),
    score: 0
}

const p2 = {
    button: document.querySelector('#p2Btn'),
    display: document.querySelector('#p2Display'),
    score: 0
}

const resetButton = document.querySelector('#reset')
const playSelect = document.querySelector('#playto')
let winScore = 3

function updateScores(player, opponent) {
    if (player.score != winScore) {
        player.score += 1
        player.display.textContent = player.score
        if (player.score == winScore) {
            player.button.disabled = true
            opponent.button.disabled = true
        }
    }
}

function reset() {
    for (p of [p1, p2]) {
        p.score = 0
        p.display.textContent = 0
        p.button.disabled = false
    }
}

playSelect.addEventListener('change', function () {
    winScore = this.value
    reset()
})

resetButton.addEventListener('click', reset)

p1.button.addEventListener('click', () => updateScores(p1, p2))
p2.button.addEventListener('click', () => updateScores(p2, p1))