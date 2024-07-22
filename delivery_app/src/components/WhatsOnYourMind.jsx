
import React, { useEffect, useRef, useState }  from 'react';
import '../stylesheets/WhatsOnYourMind.css';
import { Rolls,biryani,pizzas } from '../utils/constants';



const WhatsOnYourMind =({ setParentValue }) => {
  const [scrollPosition,setScrollPosition]=useState(0);
  const [catagories,setCatagories]=useState([]);

  const handleChange = (value) => {
    setParentValue(value);
};
  
  useEffect(()=>{

    fetchData();

  },[])

  const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const dataJson=await data.json();
        console.log("json data ",dataJson.data.cards[0].card.card.imageGridCards.info[0].action.text);    
        setCatagories(dataJson.data.cards[0].card.card.imageGridCards.info)
    
    }

  const containerRef=useRef();
  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -100 : 100; 
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  };

    return (
      <div className="horizontal-scroll-wrapper">
        <button className="scroll-button left" onClick={() => scroll("left")}>&lt;</button>
       <div ref={containerRef} className='containerRef' >
         <div className="scroll-container" >
       {catagories.map((cat,index)=>(
        <div key={index} className='cards' onClick={()=>{handleChange(pizzas)}}>{cat.action.
        text}</div>
       ))}
       </div>
       </div>
        <button className="scroll-button right" onClick={() => scroll("right")} >&gt;</button>
      </div>
    );
  };
  
export default WhatsOnYourMind;
