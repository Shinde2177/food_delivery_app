import Card from "./Card";
import "../stylesheets/body.css"
import data from "./data.js"
import search from "../images/search.png"
import { useState } from "react";
const Body=()=>
{
    const [listCard,setListCard]=useState(data);


    return <div className="body">
      <div className="search">
        <input 
          type="text"           
          placeholder="Search here" 
          spellCheck="false"
        />
        <button className="searchbutton">
          <img src={search} alt="search" />
        </button>


        <button className="top-rated" onClick={()=>{
            setListCard(listCard.filter((itm)=> itm.card.card.info.avgRating>4
            ))
        }
        }>
    Top Rated Restaurents
      </button>
      </div>
     
        <div className="res-cont">
       
        {listCard.map((item,index)=>(
            <Card key={item.card.card.info.id} data={item}/>
       
        ))}
        
       
        
        </div>
    </div>
}

export default Body;