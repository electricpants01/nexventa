// Obtener elementos del DOM
var modal = document.getElementById('qrfault')
var openModalBtnQR = document.getElementById('openModalBtnQR')
var closeBtn = document.getElementsByClassName('modal-close-btnfault')[0]
// Función para abrir el modal
function openModal() {
  modal.style.display = 'block'
}
// Función para cerrar el modal
function closeModal() {
  modal.style.display = 'none'
}
// Event listeners para abrir y cerrar el modal
openModalBtnQR.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
// Cerrar el modal al hacer clic fuera de él
window.addEventListener('click', function (event) {
  if (event.target == modal) {
    closeModal()
  }
})
