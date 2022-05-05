import React, { useEffect, useState } from 'react';
import './CharacterListPage.css';
import { BASE_URL, goToCharacterDetailPage } from '../constants/urls';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';






const CharacterListPage = () => {
    const navigate = useNavigate()

   
    
    const [characterList, setCharacterList] = useState([])

    

    useEffect(()=> {
        getCharacterList()
    }, [])
    
    const getCharacterList = () => {
        axios
        .get(`${BASE_URL}/people`)
        .then((res) => setCharacterList(res.data.results))
        .catch((err) => console.log('error', err))
    }

    const onClickCard = (i) => {
        
        navigate(`/detalhes/${i}`)
    } 

    const characterListCard = characterList.map((character, i) => {
        return<button onClick={() => onClickCard(i+1)}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${i+1}.jpg`} width='300px' height='300px' />
            <p key={i}> {character.name} </p>
        </button>
    })

  

    return(
        <div>
            <h1>Lista StarWars</h1>
            {characterListCard}
        </div>
    )
  

}

export default CharacterListPage