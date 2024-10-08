import React, { useState, useContext, useEffect, createContext } from "react";
export const AuthContext = createContext();
export default function AuthProvider({ children }) {
    const [authUser, setAuthUser] = useState(null);
    useEffect(() => {
        localStorage.removeItem("User");
        const initialAuthUser = localStorage.getItem("User");
        if (initialAuthUser) {
            try {
                setAuthUser(JSON.parse(initialAuthUser));
            } catch (error) {
                console.log("Failed to parse auth user from local storage");
            }
        }
    }, [])

    useEffect(() => {
        if (authUser) {
            localStorage.setItem('User', JSON.stringify(authUser));
            localStorage.setItem('token', authUser.token);
        }
        else {
            localStorage.removeItem('User');
            localStorage.removeItem("token");
        }
    }, [authUser])

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    );
}
export const useAuth = () => useContext(AuthContext);