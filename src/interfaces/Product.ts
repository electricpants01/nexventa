export type Product = {
  id: number
  name: string
  img: string
  short_description: string
  long_description: string
  stock: number
  price: number
  discount: number
  status: boolean
  image: string
  description: string
  precio: number
  descuento: number
  detalle: string
}

const Product: Product = {
  name: '',
  img: '',
  short_description: '',
  long_description: '',
  stock: 0,
  discount: 0,
  status: true,
  price: 0,
  precio: 0,
  descuento: 0,
  detalle: '',
  id: 0,
  image: '',
  description: ''
}

export type CartItem = Product & {
  quantity: number
}

export default Product
