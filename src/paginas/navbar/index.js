import React from 'react';
import './estilo.css';
import imagem from '../../imagem/pokebola.png'

function Navbar(){
    return(
        <>
        <header className='navbar'>
        <div className='navbar__title navbar__item'><img src={imagem} alt="imagem" width='40px'/></div>
        <div id="divBusca">
        <input type="text" id="txtBusca" placeholder="Buscar..."/>
        <button id="btnBusca">Buscar</button>
        </div>
        <div className='navbar__item'>Sobre nós</div>
        <div className='navbar__item'>Contato</div>
        <div className='navbar__item'>Ajuda</div>        
        </header>
        </>
    );
}

export default Navbar;
