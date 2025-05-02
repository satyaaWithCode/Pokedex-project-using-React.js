
// import Icon from "../icon/icon";
import "./Card.css";

function Card({player})
{
    let icon=<Icon/>
    
    if (player="X") {
        icon=<Icon name= "cross" />
    } else if (player = "O" ){
        icon=<Icon name= "circle" />
    }

    //jsx curlies icon binded
    return (
        <div className="card">
            {icon} 
        </div>
    )

}
export default  Card;