const $counterText = document.getElementById('counter-num')
const $buttons = document.querySelectorAll('.counter-button')
let count = 0

$buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // TODO: Renderizar el contador cuando incrementa y cuando decrementa

    console.log(e)
    if (e.target.classList.contains('is-increase')) {
      let counterIncrement = $counterText.textContent
      console.log(counterIncrement += count++)
      counterIncrement += count++
    }
  })
})
