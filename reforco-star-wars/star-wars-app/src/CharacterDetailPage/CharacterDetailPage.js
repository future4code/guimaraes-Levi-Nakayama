import react, { useEffect, useState, useContext } from "react";
import { useParams } from 'react-router-dom';
import './CharacterDetailPage.css';



const CharacterDetailPage = () => {
    const [swDetails, setSwDetails ] = useState(null);
    const { name } = useParams();

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/`)
        .then((r) => r.json())
        .then((json) => {
            setSwDetails(json);
        });
    }, [name]); 

    if (!swDetails) {
        return null;
    }
    return (
        <div className="DetalhesSw">
            <h1>{swDetails.name}</h1>

        </div>
    )

}

export default CharacterDetailPage