import React, {createContext, useContext, useState} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem('access_token'));

    const login = (token) => {
        localStorage.setItem('access_token', token);
        setToken(token);
    };

    const logout = () => {
        localStorage.removeItem('access_token');
        setToken(null);
    }
    return (
        <AuthContext.Provider value={{token, login, logout}}>
            {children}
        </AuthContext.Provider>
    );

}
export const useAuth = () => {
    return useContext(AuthContext);
}