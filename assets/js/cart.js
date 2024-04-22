// Función para crear un nuevo elemento de producto en el carrito
function createCartItemElement(productName, price) {
  const cartItem = document.createElement('div')
  cartItem.classList.add('category-item')
  cartItem.innerHTML = `
        <div class="sidebar-img-box">
            <img src="./public/images/food/1.jpg" alt=${productName} />
        </div>
	<div class="sidebar-content-box">
				<div class="category-content-flex">
        <a href="#" class="category-btn">
					<h3 class="">${productName}</h3>
        </a>
					<button id="editModal" class="category-item-amount-1"><i class='bx bx-edit-alt'></i></button>
					<button class="remove-from-cart-btn"><i class="bx bx-x"></i></button>
				</div>
        <div class="sidebar-content-box">
          <h3 class="sidebar-item-title-h3">${productName}</h3>
          <div class="category-content-flex">
								<button class="category-item-amount-btn">-</button>
								<input  class="category-sidebar-select" type="number" name="cantidad" id="cantidad">
								<button class="category-item-amount-btn">+</button>
							</div>
          <div class="category-content-flex">
          </div>
          <div class="category-content-flex">
            <h3 class="sidebar-item-title-p">Precio:</h3>
            <p class="category-item-amount">${price.toFixed(2)}</p>
            <p class="category-item-amount">Bs</i></p>
          </div>
        </div>
			</div>
      `
  // Evento para eliminar el producto del carrito al hacer clic en el botón de eliminar
  cartItem.querySelector('.remove-from-cart-btn').addEventListener('click', () => {
    cartItem.remove()
    updateCartTotal(-price)
  })
  return cartItem
}
// Función para agregar un producto al carrito
function addToCart(productName, price) {
  // Crear un nuevo elemento de producto
  const cartItem = createCartItemElement(productName, price)
  // Agregar el elemento al carrito
  const cartItemsElement = document.getElementById('cart-items')
  cartItemsElement.appendChild(cartItem)
  // Actualizar el total del carrito
  updateCartTotal(price)
}
// Función para actualizar el total del carrito
function updateCartTotal(price) {
  // Obtener el elemento del total del carrito
  const cartTotalElement = document.getElementById('cart-total')
  // Obtener el valor actual del total del carrito
  let currentTotal = parseFloat(cartTotalElement.textContent.replace('Total: $', ''))
  // Sumar o restar el precio del producto al total actual
  currentTotal += price
  // Actualizar el elemento del total del carrito
  cartTotalElement.textContent = `${currentTotal.toFixed(2)} Bs`
}
// Evento para añadir un producto al carrito cuando se hace clic en el botón "Añadir"
document.querySelectorAll('.add-to-cart-btn-add').forEach((button) => {
  button.addEventListener('click', () => {
    const productName = button.dataset.name
    const price = parseFloat(button.dataset.price)
    addToCart(productName, price)
  })
})
