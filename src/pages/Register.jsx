import React, {useState} from 'react';
import { fetchRegister } from '../services/api';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await fetchRegister(name, email, password, username)
            alert('Usuario registrado con exito!')
        } catch (error) {
            console.error('Ha ocurrido un error:',error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input type='text' placeholder='Name' value = {name} onChange={(e) => setName(e.target.value)} required />
            <br/>
            <input type='email' placeholder='Email' value = {email} onChange={(e) => setEmail(e.target.value)} required />
            <br/>
            <input type='password' placeholder='Password' value = {password} onChange={(e) => setPassword(e.target.value)} required />
            <br/>
            <input type='username' placeholder='Username' value = {username} onChange={(e) => setUsername(e.target.value)} required />
            <br/>
            <button type='submit'>Register</button>
        </form>
    );
};

export default Register;