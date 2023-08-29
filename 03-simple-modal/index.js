const $mainElement = document.getElementById('main')
const $button = document.getElementById('button')
const $modal = document.querySelector('.open-modal')
const $exitModalButton = document.getElementById('exit-button')

$button.addEventListener('click', () => {
  $modal.style.display = 'flex'
  $mainElement.style.backgroundColor = 'rgba(0, 0, 0, .9)'
})

$exitModalButton.addEventListener('click', () => {
  $modal.style.display = 'none'
  $mainElement.style.backgroundColor = 'rgba(0, 0, 0, .6)'
})
