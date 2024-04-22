// Obtener referencia al select y al botón
var mesallevarSelect = document.getElementById('tipopagos')
var openModalBtnQR = document.getElementById('openModalBtnQR')
// Función para manejar el cambio en el select
function handleSelectChange() {
  // Obtener la opción seleccionada
  var selectedOption = mesallevarSelect.options[mesallevarSelect.selectedIndex]
  // Mostrar el icono seleccionado
  var selectedIconClass = selectedOption.getAttribute('data-icon')
  var selectedIconElement = document.querySelector('.selected-icon')
  selectedIconElement.className = 'selected-icon ' + selectedIconClass
  // Habilitar o deshabilitar el botón según la opción seleccionada
  openModalBtnQR.disabled = selectedOption.value !== 'Qr'
  // Cambiar el color del botón según su estado
  if (openModalBtnQR.disabled) {
    openModalBtnQR.style.backgroundColor = '#B1B1B1' // Botón deshabilitado: verde
  } else {
    openModalBtnQR.style.backgroundColor = '#0F0F0E' // Botón habilitado: rojo
  }
}
// Agregar evento onchange al select
mesallevarSelect.addEventListener('change', handleSelectChange)
// Llamar a la función handleSelectChange() al cargar la página para inicializar el estado
handleSelectChange()
