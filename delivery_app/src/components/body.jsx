import Card from "./Card";
import "../stylesheets/body.css"
import data from "./data.js"
import search from "../images/search.png"
const Body=()=>
{
    return <div className="body">
      <div className="search">
        <input 
          type="text"           
          placeholder="Search here" 
          spellCheck="false"
        />
        <button >
          <img src={search} alt="search" />
        </button>
      </div>
        <div className="res-cont">
       
        {data.map((item,index)=>(
            <Card key={item.card.card.info.id} data={item}/>
       
        ))}
        
       
        
        </div>
    </div>
}

export default Body;