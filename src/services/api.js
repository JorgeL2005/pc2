import axios from "axios";

const API_URL = 'http://18.117.176.220/api'

export const fetchLogin = async (username, password) => {
    // Diccionario del body
    const data = { 
        username, 
        password 
    }
    // Hacer el request y returnar el response
    const response = await axios.post(`${API_URL}/auth/login`, data)
    return response.data
}

export const fetchRegister = async (name, email, password, username) => {
    // Diccionario del body
    const data = {
        email,
        name, 
        password,
        username
    }
    // Hacer el request y returnar el response
    const response = await axios.post(`${API_URL}/auth/register`, data)
    return response.data
}


export const getProducts = async (skip, limit) => {
    // Hacer el request y returnar el response
    const response = await axios.get(`${API_URL}/products?skip=${skip}&limit=${limit}}`, {
            'headers' : {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }
    )
    return response
}

export const getProduct = async (id) => {
    // Hacer el request y returnar el response
    const response = await axios.get(`${API_URL}/products/${id}`, {
            'headers' : {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }
    )
    return response
}

export const createProduct = async (name, description, price, quantity, image_url) => {
    // Diccionario del body
    const data = {
        name,
        description,
        price,
        quantity,
        image_url
    }
    // Hacer el request y returnar el response
    const response = await axios.post(`${API_URL}/products`, data, {
            'headers' : {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }
    )
    return response
}

export const updateProduct = async (id, name, description, price, quantity, image_url) => {
    // Diccionario del body
    const data = {
        name,
        description,
        price,
        quantity,
        image_url
    }
    // Hacer el request y returnar el response
    const response = await axios.put(`${API_URL}/products/${id}`, data, {
            'headers' : {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }
    )
    return response
}

export const deleteProduct = async (id) => {
    // Hacer el request y returnar el response
    const response = await axios.delete(`${API_URL}/products/${id}`, {
            'headers' : {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }
    )
    return response
}