import react, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import './CharacterDetailPage.css';
import axios from 'axios';
import { BASE_URL } from "../constants/urls";


const CharacterDetailPage = () => {
    
    const [details, setDetails] = useState({})
    const params = useParams()

    useEffect(() => {
        getDetail()
    }, [])

    const getDetail = () => {
        axios.get(`${BASE_URL}/people/${params.i}`)
        .then((res) => {
            setDetails(res.data)
        })
        .catch((err) => { console.log(err) })
    }

    return (
        <div>
            <h1>Detalhes dos personagens</h1>
            <h2>
                Foto: {  }
                Nome: { details.name }
                Data de nascimento: { details.birth_name }
                Sexo: { details.gender }
                Altura: { details.height }
              
            </h2>
        </div>
    )
}


export default CharacterDetailPage