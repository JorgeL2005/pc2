import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { useAuth } from '../AuthContext';

const NavBar = () => {
    const { token, logout } = useAuth();

    return (
        <nav>
            <ul className='navbar-list'> 
                <li>
                    <Link to='/'> Home </Link>
                </li>
                {!token ? (
                    <>
                        <li>
                            <Link to='/auth/login'> Login </Link>
                        </li>
                        <li>
                            <Link to='/auth/register'> Register </Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to='/dashboard'> Products </Link>
                        </li>
                        <li>
                            <button onClick={logout}> Logout </button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )

}
export default NavBar;