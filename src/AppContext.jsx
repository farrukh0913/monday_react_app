import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [sharedState, setSharedState] = useState(false);

    return (
        <AppContext.Provider value={{ sharedState, setSharedState }}>
            {children}
        </AppContext.Provider>
    );
};
