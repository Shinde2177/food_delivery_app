import "../stylesheets/card.css"
import { cloudinaryImageUrl } from "../utils/constants";
import star from '../images/star.png';
const Card=(data)=>
{
 
//console.log();
 //const {resName,dish,price}=data;
 const {id,name,costForTwo,locality,areaName,cuisines,avgRating,cloudinaryImageId}=data.data.card.card.info;


 const displayedCuisines = cuisines.length > 3 
     ? cuisines.slice(0, 3).join(', ') + ', ...' 
     : cuisines.join(', ');

    return <div className="card" >
    <div className="card-info">
        <img src={cloudinaryImageUrl+cloudinaryImageId} alt="chole bhature" />
        <span className="hotel">{name}</span><br></br>
         {/* <h5>{data.dish}</h5> */} 
        <span className="cost">{costForTwo}</span><br/>
        {displayedCuisines}
        <br /><span>{avgRating}<img className="star" src={star} alt="star" /></span>
      
    </div>
  </div>
  
}

export default Card;