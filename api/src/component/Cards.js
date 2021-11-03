import React, { useState , useEffect } from "react";
import { useHistory } from "react-router-dom";
// import hafar from "../Image/hafar.jpeg";
// import AlQassim from "../Image/qassim.jpeg";
// import Swiss from "../Image/swiss.jpeg";

const Cards = () => {
    const [pekemon, setPekemon] = useState([]);
    const history = useHistory();


    useEffect(() => {
      getPekemon();
    }, [])


    const getPekemon = async () => {

      const response = await fetch("https://api.pokemontcg.io/v2/cards?pageSize=15")
      const body = await response.json(); // convert response to json
      setPekemon(body.data);

      console.log(body.data);
    }
  /* const [search, setSearch] = useState("");
  const history = useHistory();
  const [cards] = useState([
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
  ]);

  
const addFavurite = (id) => {
    let val = cards[id];
    if (val.isFav === true) {
        val.isFav = false;
      alert("Remove from favorite")
    } else {
      val.isFav = true;
      alert("Add to favorite")


      let fav = cards.filter((cards) => cards.isFav);
      localStorage.setItem("fav",JSON.stringify(fav))
    }
}

const changePath = (id) => {
    history.push(`/card/${id}`)
}

  return (
  <div>
      <input className = "search"
        type="search"
        placeholder="Search here"
        onChange={(event) => {
            setSearch(event.target.value);
        }}
      />
      <ul className="cardsL">
      {cards.filter((val) => {
            if (search === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          })
          
          .map((item, i) => ( // map for object
          <div className="cards">
        <li className="card" key={i} >
            <div onClick={() => changePath(item.id)}>
            <h2>{item.name}</h2>
            <img src= {item.img} alt='CuntriesImg' /> 
          </div>
          <button className='btn' onClick={() => addFavurite(item.id)}>Favorite</button>
          </li>
          </div>
        ))}
        </ul>
    </div>
  );
  */


  const changePath = (id) => {
    history.push(`/card/${id}`)
}
  return (

    
    <div>
      {pekemon.length ? (
    <ul className="cardsL">
      {pekemon.map((item,i) => (
       <div className="cards">
        <div className="card" key={i} >
          <div onClick={() => changePath(item.id)} >
          <li>{item.name}</li>
          <li>{item.types}</li>
          <img src= {item.images.small} alt='pokemon' /> 
          </div>
          </div>
          </div>
      ))}
      </ul>
      ) : (
        <h1> Loading...</h1>
      )}
      </div>
  );
      }



export default Cards;
