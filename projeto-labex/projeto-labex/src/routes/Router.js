import react from "react";
import Homepage from "../pages/Homepage.js";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TripDetailsPage from "../pages/TripDetailsPage.js";
import ErrorPage from "../pages/ErrosPage.js";
import LoginPage from "../pages/LoginPage.js";

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path={'detalhes-da-viagem'} element={<TripDetailsPage />} />
          <Route path={"*"} element={<ErrorPage />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router;