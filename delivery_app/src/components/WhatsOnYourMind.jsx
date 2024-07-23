
import React, { useEffect, useRef, useState }  from 'react';
import '../stylesheets/WhatsOnYourMind.css';
import { choiceImgUrl } from '../utils/constants';
import { Woym } from './Shimer';



const WhatsOnYourMind =({ setParentValue }) => {
  const [scrollPosition,setScrollPosition]=useState(0);
  const [catagories,setCatagories]=useState([]);
  const [isLoading, setIsLoading] = useState(true);


  function convertUrl(originalUrl) {
    // Parse the original URL to extract parameters
    const urlParams = new URLSearchParams(originalUrl.split('?')[1]);

    // Extract collection_id and tags from the original URL
    const collectionId = urlParams.get('collection_id');
    const tags = urlParams.get('tags');

    // Define the base of the new URL
    const baseUrl = "https://www.swiggy.com/dapi/restaurants/list/v5";
    const lat = "18.61610";
    const lng = "73.72860";
    const sortBy = "";
    const filters = "";
    const type = "rcv2";
    const offset = "0";
    const pageType = "null";

    // Construct the new URL using template literals
    const newUrl = `${baseUrl}?lat=${lat}&lng=${lng}&collection=${collectionId}&tags=${tags}&sortBy=${sortBy}&filters=${filters}&type=${type}&offset=${offset}&page_type=${pageType}`;

    return newUrl;
}



  const handleChange = (value) => {
   const url= convertUrl(value.action.link)
   console.log(url)
    setParentValue(url);
    };
  
  useEffect(()=>{

    fetchData();

  },[])

  const fetchData=async()=>{
    try{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const dataJson=await data.json();
        //console.log("json data ",dataJson.data.cards[0].card.card.imageGridCards.info[0].action.text);    
        setCatagories(dataJson.data.cards[0].card.card.imageGridCards.info)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    
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
      <div>
        <h2>Whats on your mind?</h2>
      <div className="horizontal-scroll-wrapper">
       
        <button className="scroll-button left" onClick={() => scroll("left")}>&lt;</button>
       <div ref={containerRef} className='containerRef' >
         <div className="scroll-container" >
       { isLoading?(<><Woym/><Woym/><Woym/><Woym/><Woym/><Woym/><Woym/><Woym/><Woym/><Woym/><Woym/></>):
       ( catagories.map((cat,index)=>(
        <div key={cat.id} className='cards' >
          <img src={choiceImgUrl+cat.imageId} alt="img" className='choice' onClick={()=>{handleChange(cat)}} />
          </div>
       )))}
       </div>
       </div>
        <button className="scroll-button right" onClick={() => scroll("right")} >&gt;</button>
      </div>
      </div>
    );
  };
  
export default WhatsOnYourMind;
