import axios from 'axios'

const API_URL = '/api/products/'

// Create a new product
const createProduct = async (productData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, productData, config)

    return response.data
}

// Get products
const getProducts = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

// Delete a product
const deleteProduct = async (productId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.delete(API_URL + productId, config)

    return response.data
}

// Update Product
const updateProduct = async (productId,productData,token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.put(API_URL + productId,productData, config)

    return response.data
}

const goalService = {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct,
}

export default goalService
