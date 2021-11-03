import React, { useState , useEffect } from "react";
import { useParams } from "react-router"
// import hafar from "../Image/hafar.jpeg";
// import AlQassim from "../Image/qassim.jpeg";
// import Swiss from "../Image/swiss.jpeg";




const Card = () => {

  const [pekemon, setPekemon] = useState([]);

    useEffect(() => {
      getPekemon();
    }, [])


    const getPekemon = async () => {

      const response = await fetch("https://api.pokemontcg.io/v2/cards?pageSize=5")
      const body = await response.json(); // convert response to json
      setPekemon(body.data);

      console.log(body.data);
    }
   /* const cards = [
        {
            id: 0,
            name: "Hafr Albaten",
            img: hafar,
            isFav: false,
          },
          {
            id: 1,
            name: "Alqassim",
            img: AlQassim,
            isFav: false,
          },
          {
            id: 2,
            name: "Swiss",
            img: Swiss,
            isFav: false,
          },
        ];
    */
    const id = useParams().id;
    const myItem = pekemon.find((item, id) => Number(id) === id ); // حولتها لنمبر Number
    
    return (
      <div className="cardCoun">
        
           <h1> {myItem.name} </h1>
           <img src = {myItem.img} alt='Countries' />
   
  
      ) : (
        <h1> Loading...</h1>
      
      </div>
  );
      }
export default Card;

