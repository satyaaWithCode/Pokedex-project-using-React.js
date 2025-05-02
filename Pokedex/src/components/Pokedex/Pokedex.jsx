import { useState } from "react";
import Pokedexlist from "../PokedexList/PokedexList";
import Search from "../Search/Search";
//import css
import "./Pokedex.css"
import PokemonDetails from "../PokemonDetails/PokemonDetails";
function Pokedex()
{

    const [searchTerm , setSearchTerm] =useState('');
    //conditional renderd used from buttom
    return (
        <div className="pokdex-wrapper">
           <h1 className="pokedex-heading" >PokedeX</h1>
           <Search updateSearchTerm={setSearchTerm}/>
           
           {(searchTerm.length == 0 ) ?<Pokedexlist/> : <PokemonDetails pokemonName={searchTerm}/>}; 
        </div>
    );

}
export default Pokedex;