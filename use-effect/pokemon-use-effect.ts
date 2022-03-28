import React, { useEffect, useState } from "react";
import axios from "axios";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

const PokeCard = (props) => {
  const [poke, setPoke] = useState([])
}

getPoke = () => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
  .then(response => getPoke(response.data))
  .catch(error => console.log(error))
}

useEffect(() => {
  const pokeCharacter = async () => {
      try {
          const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
          setPoke(data);
      } catch(e) {
          console.log(e)
      }
  }
  if(setPoke) pokeCharacter()
}, [setPoke])