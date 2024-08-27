import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';
import './estilo.css';



function PokeCard({ limit }) {
    const   [listaPokemon, setListaPokemon] =useState([]);

    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
          .then((resposta) => setListaPokemon(resposta.data.results));
  }, [limit]);
    
    return (
      <>
      {listaPokemon.map((item) => (
      <Pokemon key={item.name} dadosURL={item} />
      ))}
      </>
    );
  }
  
  const Pokemon = ({dadosURL}) =>{
    const [detalhes, setDetalhes] = useState(null);

    useEffect(() => {
        axios.get(dadosURL.url).then((resposta) => setDetalhes(resposta.data));
    }, [dadosURL.url]);
    
    if (detalhes === null) {
        return <>Carregando...</>;
      }

    return( 
    <div>
        <div className='container_pai'>
            
        <div className='container'>
            <b>{detalhes.name}</b>
            <img src={detalhes.sprites.front_default} alt=""/>
            <span>EXP - {detalhes.base_experience}</span>
        </div>
       </div>
    </div>
    );
  }

  export default PokeCard;