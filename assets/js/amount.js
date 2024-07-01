// Obtener referencia al input de cantidad
const cantidadInput = document.getElementById('cantidad')
// Obtener referencias a los botones de incremento y decremento
const decrementBtn = document.querySelector('.category-item-amount-btn:first-child')
const incrementBtn = document.querySelector('.category-item-amount-btn:last-child')
// Manejar el evento de clic en el botón de decremento
decrementBtn.addEventListener('click', () => {
  if (cantidadInput.value > 1) {
    cantidadInput.value--
  }
})
// Manejar el evento de clic en el botón de incremento
incrementBtn.addEventListener('click', () => {
  cantidadInput.value++
})
