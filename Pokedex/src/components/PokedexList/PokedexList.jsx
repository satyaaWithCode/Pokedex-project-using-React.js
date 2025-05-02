import axios from "axios";
import { useEffect, useState } from "react"
//css import
import "./PokedexList.css"
import Pokemon from "../Pokemon/Pokemon";

function Pokedexlist()
{

    //USE-EFFECT

   //WITHOUT DEPENDENCY ARRAY

     //it Accept 2 arg one is callback & second is dependency array
     //we write whatever thats all will be execute when it will be re-render 
     //every re-rendering it will be execute without Dpdc-array
 
     //WITH DEPENDENCY ARRAY

     //with DPDC-array it will be excute once which is ,it will be first-re-render
     //then it won't execute every re-rendering
     //DPDC work is it will track to state variabe changes if useEffect will be change..it will be execute
     //when comoponent will re-render state variable will call to use effect of array

     //USING NORMAL USESTATE

    //  const [pokemonList,setPokemonList]=useState([])
    //  const [isLoading,setIsLoading]=useState(true)
    //  const [Pokedex_url,SetPokedex_url]=useState("https://pokeapi.co/api/v2/pokemon/");
    //  const [nextUrl,setNextUrl]= useState('');
    //  const [prevUrl,setPrevUrl]= useState('');


    //ADVANCE USESTATE

     const [pokemonListState,setPokemonListState]=useState({
        pokemonList :[],
        isLoading :true,
        Pokedex_url :'https://pokeapi.co/api/v2/pokemon/',
        nextUrl :'',
        prevUrl :''
     });
     

    async function downloadPokemons()
    {
        // setIsLoading(true) //for display loading from button
        setPokemonListState ((state) => ({...state , isLoading :true}));

        const response=await axios.get(pokemonListState.Pokedex_url);//this downloads 20 list of pokemons

        const pokemonResult=response.data.results; //we get the array of pokemons result
        console.log(response.data);

        // setNextUrl(response.data.next);
        // setPrevUrl(response.data.previous);
        setPokemonListState({...pokemonListState,
            nextUrl:response.data.next ,
            prevUrl:response.data.previous});
      

        // iterating over the array of pokemons ,to using their url,to create an array of promises 
        //those will download 20 pokemons
        const pokemonResultPromise=pokemonResult.map((pokemon) => axios.get(pokemon.url));
        // console.log(pokemonResultPromise);
        
        // passing that promises array to axios all
        const pokemonData=await axios.all(pokemonResultPromise);
        console.log(pokemonData);
         

        // now iterate  thats all data on each pokemon ,and extract id,name,image,types
        const pokeListResult=pokemonData.map(pokeData => {
            const pokemon= pokeData.data;
            return{
                id:pokemon.id,
                name:pokemon.name ,
                image:(pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
                types:pokemon.types

            }
        });

        // console.log(pokeListResult);
        // setPokemonList(pokeListResult);
         // setIsLoading(false)
        setPokemonListState((state) =>({
        ...state, 
        pokemonList : pokeListResult , 
        isLoading : false}));
    } 

    useEffect(()=>{
        downloadPokemons();
    },[pokemonListState.Pokedex_url])


return (
  <div className="pokedex-list-wrapper">
    
   <div className="pokemon-wrapper">
   {(pokemonListState.isLoading) ? "Loading..." : 
      pokemonListState.pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>)}
   </div>

   <div className="controls">
       <button disabled={pokemonListState.prevUrl == null} onClick={() => {
        const urlToSet=pokemonListState.prevUrl;
     setPokemonListState({...pokemonListState , Pokedex_url :urlToSet})
     }}>Prev</button>
     
       <button disabled={pokemonListState.nextUrl == null} onClick={() =>{
        console.log(pokemonListState); 
         const urlToSett=pokemonListState.nextUrl;
        setPokemonListState({...pokemonListState , Pokedex_url :urlToSett})
        }}>Next</button>
   </div>

  </div>
);
}
export default Pokedexlist;