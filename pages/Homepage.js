import react from "react";
import { useNavigate } from 'react-router-dom';


const Homepage = () => {
  const navigate = useNavigate()

  const goToListTripsPage = () => {
    navigate('/ListTripsPage')
  }

  const goToLoginPage = () => {
    navigate('/LoginPage')
  }

  return (
    <div>
      <h1>Labex Viagens</h1>
      <button onClick={goToListTripsPage}>Lista de Viagens</button>
      <button onClick={goToLoginPage}>Log in</button>
    </div>
    
    )
    

}


export default Homepage;
