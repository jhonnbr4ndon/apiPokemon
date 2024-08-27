import React, { useState } from 'react';
import './estilo.css';
import imagem from '../../imagem/pokebola.png'

function Navbar({ onSearch }) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSearchClick = () => {
        const value = parseInt(inputValue, 10);
        if (!isNaN(value)) {
            onSearch(value);
        }
    };

    return (
        <>
            <header className='navbar'>
                <div className='navbar__title'><img src={imagem} alt="imagem" width='40px' /></div>
                <div id="divBusca">
                    <input
                        type="text"
                        id="txtBusca"
                        placeholder="Quantidade Pókemon..."
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button id="btnBusca" onClick={handleSearchClick}>Buscar</button>
                </div>
                <div className='navbar__item'>Sobre nós</div>
                <div className='navbar__item'>Contato</div>
                <div className='navbar__item'>Ajuda</div>
            </header>
        </>
    );
}

export default Navbar;
