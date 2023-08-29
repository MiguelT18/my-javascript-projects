// set initial value to 0
let count = 0
// select value and buttons
const $counterText = document.getElementById('counter-num')
const $buttons = document.querySelectorAll('.counter-button')

$buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const styles = e.target.classList
    if (styles.contains('decrease')) {
      count--
    } else if (styles.contains('increase')) {
      count++
    } else {
      count = 0
    }

    if (count > 0) {
      $counterText.style.color = '#54c640 '
    }
    if (count < 0) {
      $counterText.style.color = '#ff1919'
    }
    if (count === 0) {
      $counterText.style.color = 'white'
    }

    $counterText.textContent = count
  })
})
