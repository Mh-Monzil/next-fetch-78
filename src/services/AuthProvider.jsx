'use client'
import React, { createContext } from 'react';
import {SessionProvider} from 'next-auth/react'

// export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    return (
        <div>
            <SessionProvider>
                {children}
            </SessionProvider>
        </div>
    );
};

export default AuthProvider;