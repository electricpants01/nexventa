// Obtener elementos del DOM
var modal = document.getElementById('verModal')
var openModalBtn = document.getElementById('openModalBtn-ver')
var closeBtn = document.getElementsByClassName('modal-close-btn-show')[0]
// Función para abrir el modal
function openModal() {
    modal.style.display = 'block'
}
// Función para cerrar el modal
function closeModal() {
    modal.style.display = 'none'
}
// Event listeners para abrir y cerrar el modal
openModalBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
// Cerrar el modal al hacer clic fuera de él
window.addEventListener('click', function (event) {
    if (event.target == modal) {
        closeModal()
    }
})