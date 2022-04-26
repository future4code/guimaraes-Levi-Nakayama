import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CharacterDetailPage from "../CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "../CharacterListPage/CharacterListPage";

const Router = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/detalhes" element={<CharacterDetailPage />} />                            
                <Route path="/lista" element={<CharacterListPage />} />
            </Routes>    
        </BrowserRouter>
    )
}

export default Router;