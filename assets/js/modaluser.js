// Obtener elementos del DOM
var modal = document.getElementById('userModal')
var openModalBtn2 = document.getElementById('openModalBtn2')
var closeModalBtn = document.getElementById('closeModalBtn')
// Función para abrir el modal
function openModal() {
  modal.style.display = 'block'
}
// Función para cerrar el modal
function closeModal() {
  modal.style.display = 'none'
}
// Event listener para abrir el modal cuando se hace clic en el botón
openModalBtn2.addEventListener('click', openModal)
// Event listener para cerrar el modal cuando se hace clic en el botón de cierre
closeModalBtn.addEventListener('click', closeModal)
// Cerrar el modal al hacer clic fuera de él
window.addEventListener('click', function (event) {
  if (event.target === modal) {
    closeModal()
  }
})
// Enviar el formulario de registro
document.getElementById('registroForm').addEventListener('submit', function (event) {
  event.preventDefault()
  // Aquí puedes agregar la lógica para enviar el formulario de registro a la API
  console.log('Formulario de registro enviado')
  closeModal() // Cierra el modal después de enviar el formulario
})
