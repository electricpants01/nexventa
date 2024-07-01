import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  type ReactNode
} from 'react'
import type { Product, CartItem } from '@interfaces/Product'

interface CartContextProps {
  data: Product[]
  cart: CartItem[]
  addCart: (item: Product) => void
  removeFromCart: (id: Product['id']) => void
  decreaseQuantity: (id: Product['id']) => void
  increaseQuantity: (id: Product['id']) => void
  clearCart: () => void
  isEmpty: boolean
  cartTotal: number
}

// Crear el contexto del carrito
const CartContext = createContext<CartContextProps | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const initialCart = (): CartItem[] => {
    if (typeof window !== 'undefined') {
      const localStorageCart = localStorage.getItem('cart')
      return localStorageCart ? JSON.parse(localStorageCart) : []
    }
    return []
  }

  const [data, setData] = useState<Product[]>([])
  const [cart, setCart] = useState<CartItem[]>(initialCart)

  const MIN_ITEMS = 1
  const MAX_ITEMS = 10

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4321/api/product.json')
        if (!response.ok) {
          throw new Error('Error al obtener los datos')
        }
        const responseData = await response.json()
        setData(responseData)
      } catch (error) {
        console.error('Error al obtener los datos:', error)
      }
    }

    fetchData()
  }, [])

  const addCart = (item: Product) => {
    const itemExists = cart.findIndex((product) => product.id === item.id)
    if (itemExists >= 0) {
      if (cart[itemExists].quantity >= MAX_ITEMS) return
      const updatedCart = [...cart]
      updatedCart[itemExists].quantity++
      setCart(updatedCart)
    } else {
      const newItem: CartItem = { ...item, quantity: 1 }
      setCart([...cart, newItem])
    }
  }

  const removeFromCart = (id: Product['id']) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id))
  }

  const decreaseQuantity = (id: Product['id']) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return { ...item, quantity: item.quantity - 1 }
      }
      return item
    })
    setCart(updatedCart)
  }

  const increaseQuantity = (id: Product['id']) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return { ...item, quantity: item.quantity + 1 }
      }
      return item
    })
    setCart(updatedCart)
  }

  const clearCart = () => {
    setCart([])
  }

  const isEmpty = useMemo(() => cart.length === 0, [cart])
  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.quantity * item.price, 0),
    [cart]
  )

  const contextValue = useMemo(
    () => ({
      data,
      cart,
      addCart,
      removeFromCart,
      decreaseQuantity,
      increaseQuantity,
      clearCart,
      isEmpty,
      cartTotal,
    }),
    [data, cart, isEmpty, cartTotal]
  )

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider')
  }
  return context
}
