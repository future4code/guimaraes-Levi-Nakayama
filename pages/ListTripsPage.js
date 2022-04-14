import React from "react";
import { useNavigate } from "react-router-dom";

const ListTripsPage = () => {
  const navigate = useNavigate()

  const goToHomepage = () => {
    navigate('/Homepage')
  }

  const goBack = () => {
    navigate(-1)
  }
  return (
    <div>
    <h1>ListTripsPage</h1>
    <button onClick={goBack}></button>
    <button onClick={goToHomepage}>Homepage</button>


    </div>
  )
}

export default ListTripsPage;