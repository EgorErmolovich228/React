import React from "react"
import Kitchenconcrete from '../images/kitchenconcrete.jpg';
import Atrium from '../images/atrium.jpg';
import Livingroom from '../images/livingroom.jpg';
import Diningroom from '../images/diningroom.jpg';
import Bedroom from '../images/bedroom.jpg';
import Livingroom2 from '../images/livingroom2.jpg';
function Showcase(){
    return(
    <div id="showcase">
    <h2>Showcase.</h2>
    <hr/>
    <div className="images">
        <img src= {Kitchenconcrete}/>
        <img src={Atrium}/>
        <img src={Livingroom}/>
        <img src={Diningroom}/>
        <img src={Bedroom}/>
        <img src={Livingroom2}/>
    </div>
</div>
)
}
export default Showcase;