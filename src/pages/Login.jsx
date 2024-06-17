import React, {useState, Button} from 'react';
import { useAuth } from '../AuthContext';
import { fetchLogin } from '../services/api';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login: setAuthToken } = useAuth();


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetchLogin(username, password);
            console.log(response)
            alert('Usuario logueado con exito!')
            setAuthToken(response.token);
        } catch (error) {
            console.error('Ha ocurrido un error:',error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type='username' 
            placeholder='username' 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required />
            <br/>
            <input type='password' 
            placeholder='Password' 
            value={password} 
            onChange={(e)=>setPassword(e.target.value)} 
            required />
            <br />
            <br />
            <button type='submit'>Login</button>
        </form>
    );
};
export default Login;