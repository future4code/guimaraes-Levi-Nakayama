import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [showAllMatches, setShowAllMatches] = useState(false)
  const [saveProfile, setSaveProfile] = useState()
  console.log(showAllMatches)

  const getProfile = () => {
    fetch('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/levi-nakayama-guimaraes/person')
      .then((response) => {
        return response.json()
      }).then((json) => {
        // salvar o profile em um estado
        setSaveProfile(json.profile)
      })

  }

  const getMatches = () => {
    // Chamar a API
  }

  const choosePerson = (choice) => {
    // Chamar a API
    console.log(choice)

    var requestOptions = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // receber os dados referente ao estado Profile 
        "id": "OS2w9vU9AUkmXhp4sZ7M",
        // 
        "choice": choice
      }),
      redirect: 'follow'
    };

    fetch("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/levi-nakayama-guimaraes/choose-person", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    
    <div className="App">
      <img ></img>
      <button onClick={() => {
        choosePerson(true)
        getProfile()
      }} >Like</button>
      <button onClick={() => {
        choosePerson(false)
        getProfile()
      }} >Deny</button>
    </div>
    
  );
}

export default App;
