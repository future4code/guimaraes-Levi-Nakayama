import react from "react";
import Homepage from "../pages/Homepage.js";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
    
        </Routes>
        </BrowserRouter>
    )
}

export default Router