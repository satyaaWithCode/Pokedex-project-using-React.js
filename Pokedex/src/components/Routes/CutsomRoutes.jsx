import {Routes ,Route, Router} from "react-router-dom" 
import Pokedex from "../Pokedex/Pokedex";
import PokemonDetails from "../PokemonDetails/PokemonDetails";

function CustomRoutes()
{
    //set of routes define in routes of comoponent cz routes take set  of take component
return (
    
    <Routes>
        <Route path="/" element={<Pokedex/>}/>
        <Route path="/pokemon/:id" element={<PokemonDetails/>}/>
    </Routes>

)
}
export default CustomRoutes;