import react from "react";
import AppContext from "./Context";

const AppProvider = ({ children }) => {
    return (
        <AppProvider.Provider value={ { user: 'DEV' }}>
            {children}
        </AppProvider.Provider>
    )
}

export default AppProvider;
