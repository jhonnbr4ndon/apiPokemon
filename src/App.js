import React, { useState } from 'react';
import Navbar from './paginas/navbar'
import PokeCard from './paginas/pokecard';
import Footer from './paginas/footer'


function App() {

  const [pokemonLimit, setPokemonLimit] = useState(9);

    const handleSearch = (limit) => {
        setPokemonLimit(limit);
    };

  return (
    <>
    <Navbar onSearch={handleSearch} />
    <PokeCard limit={pokemonLimit} />
    <Footer></Footer>
    </>
  );
}

export default App;
