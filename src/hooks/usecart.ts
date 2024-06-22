import { useState, useEffect, useMemo } from 'react';
import type { Product,CartItem } from '@interfaces/Product'


export const useCart = () => {
    // Function to get the initial cart from localStorage - cart state
    const initialCart = (): CartItem[] => {
        // Check if we are in a browser environment
        if (typeof window !== 'undefined') {
            // Get the shopping cart from localStorage
            const localStorageCart = localStorage.getItem('cart')
            // If there is a cart in localStorage, parse and return it
            // Otherwise, return an empty array
            return localStorageCart ? JSON.parse(localStorageCart) : []
        }
        return []
    }


    const [data, setData] = useState<Product[]>([]); //  State for product data
    // Use the useState hook to establish and manage the state of the shopping cart.
    // - cart: Represents the current state of the cart, initialized with initialCart.
    // - setCart: Function that allows reactive updates to the cart state.
    // - initialCart: Function that returns the initial state of the cart, typically obtained from localStorage.
    const [cart, setCart] = useState<CartItem[]>(initialCart);


    const MIN_ITEMS = 1
    const MAX_ITEMS = 10

    // Effect to save the cart in localStorage when it changes
    useEffect(() => {
        // Check that the code is running in a browser environment
        if (typeof window !== 'undefined') {
            console.log("Luis")
            // Store the current state of the cart in localStorage
            localStorage.setItem('cart', JSON.stringify(cart))
        }
        // This effect will run every time the cart state changes
    }, [cart])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4321/api/product.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const responseData = await response.json();
                setData(responseData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Function to add a product to the cart
    function addCart(item: Product) {
        // Check if the product already exists in the cart
        const itemExists = cart.findIndex(product => product.id === item.id)
        if (itemExists >= 0) { // exists in the cart
            if (cart[itemExists].quantity >= MAX_ITEMS) return
            // Create a copy of the current cart
            const updatedCart = [...cart]
            // Increment the quantity of the existing product in the cart
            updatedCart[itemExists].quantity++
            // Update the cart state with the new product quantity
            setCart(updatedCart)
        } else {  // The product does not exist in the cart
            // Create a new CartItem object with an initial quantity of 1
            const newItem: CartItem = { ...item, quantity: 1 }
            // Add the new product to the cart
            setCart([...cart, newItem])
        }
    }

    // Function to remove a product from the cart
    function removeFromCart(id: Product['id']) {
        setCart(prevCart => prevCart.filter(product => product.id !== id))
    }

    // Function to decrease the quantity of a product in the cart
    function decreaseQuantity(id: Product['id']) {
        // Create an updated copy of the cart using map(), 
        // which allows us to iterate over each item in the cart.
        const updatedCart = cart.map(item => {
            // Check if the product ID matches the provided ID 
            // and if the current quantity is greater than the minimum allowed.
            if (item.id === id && item.quantity > MIN_ITEMS) {
                return {
                    ...item, // Copy all existing properties of the product
                    quantity: item.quantity - 1 // Update only the 'quantity' property
                }
            }
            // If the above condition is not met, 
            // simply return the product without modifications.
            return item
        })
        setCart(updatedCart)
    }

    // Function to increase the quantity of a product in the cart
    function increaseQuantity(id: Product['id']) {
        // Create an updated copy of the cart using map(), 
        // which allows us to iterate over each item in the cart.
        const updatedCart = cart.map(item => {
            // Check if the product ID matches the provided ID 
            // and if the current quantity is less than the maximum allowed.
            if (item.id === id && item.quantity < MAX_ITEMS) {
                // If the conditions are met, return a new product object 
                // with the quantity incremented by one.
                return {
                    ...item, // Copy all existing properties of the product
                    quantity: item.quantity + 1 // Update only the 'quantity' property
                }
            }
            // If the above condition is not met, 
            // simply return the product without modifications.
            return item
        })
        // Update the cart state with the updated copy that contains the modified product.
        setCart(updatedCart)
    }

    // Function to clear the cart
    function clearCart() {
        setCart([])
    }

    // State to check if the cart is empty
    const isEmpty = useMemo(() => cart.length === 0, [cart])
    // State to calculate the total of the cart
    const cartTotal = useMemo(
        () => cart.reduce((total, item) => total + (item.quantity * item.price), 0),
        [cart])

    return {
        data,
        cart,
        addCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        clearCart,
        isEmpty,
        cartTotal
    }
}