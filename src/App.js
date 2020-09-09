import React from 'react';
import PropTypes from "prop-types"

function Food({name, rating}) {
  return (
    <div>
      <h3>I like {name} </h3>
      <h4> {rating} </h4>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

const foodILike = [
  {
    id:1,
    name: "A",
    image:"",
    rating: 5
  },
  {
    id:2,
    name: "B",
    image:"",
    rating: 3
  },
  {
    id:3,
    name: "C",
    image:"",
    rating: 4
  },
  {
    id:4,
    name: "D",
    image:"",
    rating: 2
  },
  {
    id:5,
    name: "E",
    image:"",
    rating: 3
  }
]

function renderFood(dish){
  return ( 
    <Food key={dish.id} name={dish.name} rating={dish.rating} />
  )
}

function App() {
  return( 
    <div> Hello 
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
