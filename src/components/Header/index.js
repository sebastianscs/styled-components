import React from "react";
import "../Header/css/styles.css"

const Header = () =>{
    return(
        <header>
            <h1>PeliApi</h1>

            <nav>
                <a href="/">Inicio</a>
                <a href="/movies">Películas</a>
                <a href="">Ayuda</a>
            </nav>
        </header>
    );
}

export default Header;