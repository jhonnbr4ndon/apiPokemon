import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';
import './estilo.css';



function PokeCard(){
    const   [listaPokemon, setListaPokemon] =useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=9').then((resposta) => setListaPokemon(resposta.data.results));
    }, []);
    
    return (
      <>
      {listaPokemon.map((item) => (
      <Pokemon key={item.name} dados={item} />
      ))}
      </>
    );
  }
  
  const Pokemon = ({dados}) =>{
    const [detalhes, setDetalhes] = useState(null);

    useEffect(() => {
        axios.get(dados.url).then((resposta) => setDetalhes(resposta.data));
    }, [dados.url]);
    
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