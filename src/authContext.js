import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

// wrapper for the provider
export const AuthProvider = ({user, children}) => {
    const [currentUser, setCurrentUser] = useState(user);

    return (
        <AuthContext.Provider
            value={{
                currentUser,
                setCurrentUser
            }}
        >
            {children}
        </AuthContext.Provider >
    );
};
