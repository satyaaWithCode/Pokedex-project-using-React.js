import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom"

function PokemonDetails()
{

    
        const {id} =useParams();

        const [pokemon,setPokemon]=([]);

       async function downloadPokemon()
       {
        const response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        console.log(response.data);
        setPokemon({
            name:response.data.name,
            image:response.data.sprites.other.dream_world.front_default,
            weight:response.data.weight,
            height:response.data.height,
            types:response.data.types.map((t) => t.type.name)
    
           });

           console.log(response.data.types);
           console.log(pokemon);
           
           
       }

       useEffect(() => {
        downloadPokemon();
        console.log(pokemon);
        
       },[])


        return(

        <div className="pokemons-details-wrapper">
            {/* <h1>{pokemon.name}</h1> */}
            {/* <div className="pokemons-details-name"><span>{pokemon.name}</span></div> */}
            {/* <img className= "pokemons details image" src={image}/> */}
            <div>Height :{pokemon.height} </div>
            {/* <div>Weight :{pokemon.weight}</div> */}
            {/* <div  className="pokemons-details-types">
                {pokemon.types && pokemon.types.map((t) => <div key={t}> {t} </div> )}

            </div> */}
            display pokemon details here
         </div>
        )

}
export default PokemonDetails;