
import Picture from "./picture";
import Name from "./name";

 function Pic(props)
{

    let a= "this is all adventure"
    return(
        <>
        {/* <h1>{props.name}</h1> */}

        <h2 style={
            {    

                //style reture a obj whiich is blue curlies
                //valid js expression is yellow curlies

                fontSize: "30px",
                color: "green"
            }
        }>
            {a}  //jsx curlies
        </h2>


    <Name>
    <h1>{props.name}</h1>    //entire jsx inside the props
    </Name>


        
        <Picture src={props.Picture}/>
        </>
    )
}
export default Pic;