// ** Imports do React
import React, { createContext, useContext, useEffect, useState } from "react";

// ** Imports de tipos e serviços
import { User } from "../types/interfaces/User";
import { 
    signin as signinService,
    signup as signupService 
} from "../services/authService";

interface AuthContextProps {
    authenticated: boolean;
    token: string;
    signin: (user: User) => void;
    signup: (user: User) => void;
    signout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [token, setToken] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
            setAuthenticated(true);
        }
        setIsLoading(false);
    }, []);

    const signin = async (loggedInUser: User) => {
        const { token } = await signinService(loggedInUser);
        setToken(token);
        setAuthenticated(true);
        localStorage.setItem("token", token);
    };

    const signup = async (loggedInUser: User) => {
        await signupService(loggedInUser);
        await signin(loggedInUser);
    };

    const signout = () => {
        setToken("");
        setAuthenticated(false);
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ authenticated, token, signin, signup, signout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );

}
