import AppContext from "./Context";

const AppProvider = ({ children }) => {
    return (
        <AppProvider.Provider value={ { user: 'DEV' }}>

        </AppProvider.Provider>
    )
}

export default AppProvider;
