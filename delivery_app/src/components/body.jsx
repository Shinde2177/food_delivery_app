import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../stylesheets/body.css";
import search from "../images/search.png";

import WhatsOnYourMind from "./WhatsOnYourMind";
import {BodyShimer} from "./Shimer";


const Body = () => {
  const [listCard, setListCard] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [parentValue, setParentValue] = useState();


  useEffect(() => {
    setIsLoading(true)
    fetchData();
  }, [parentValue]);

  const fetchData = async () => {
    console.log("data fetched");

    try {
      const response = await fetch(parentValue);
      const jsonData = await response.json();
      const arr = jsonData.data.cards;
      console.log("data", arr);
      setListCard(arr.slice(3));
      setIsLoading(false); 
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search here"
          spellCheck="false"
        />
        <button className="searchbutton">
          <img src={search} alt="search" />
        </button>
        <button className="top-rated" onClick={() => {
          setListCard(listCard.filter((itm) => itm.card.card.info.avgRating > 4));
        }}>
          Top Rated Restaurants
        </button>
      </div>
      <WhatsOnYourMind setParentValue={setParentValue}/>
      <div className="res-cont">
        {isLoading ? (
         <>
         <BodyShimer/> <BodyShimer/> <BodyShimer/> <BodyShimer/> <BodyShimer/> 
         <BodyShimer/> <BodyShimer/> <BodyShimer/> <BodyShimer/> <BodyShimer/> </>
          
        ) : (
          listCard.map((item) => (
            <Card key={item.card.card.info.id} data={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
