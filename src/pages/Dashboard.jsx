import React, {useState, useEffect} from 'react'
import { getProducts } from '../services/api'
import { useAuth } from '../AuthContext'

function Dashboard(){
    const [products, setProducts] = useState([])
    const { token } = useAuth();

    const fetchCourses = async () => {
        try {
            const res = await getProducts(0, 10)
            setProducts(res.data.content)
            console.log(res.data.content)
        } catch (error) {
            console.error('Error:', error)
        }
    }

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await getProducts(token);
                setProducts(response);
            } catch (error) {
                console.error('Ha ocurrido un error:',error)
            }
        }
        fetchCourses();
    }, [token])

    return (
        <div>
            {products.map((product) => (
                <div key={product._id}>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <p>{product.quantity}</p>
                    <p>{product.image_url}</p>
                </div>
            ))
            }
        </div>
    )
}

export default Dashboard
