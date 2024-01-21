"use client";

import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";


const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}

export default AppProvider;