import React from 'react';

function Food({name}) {
  return (
    <h3>I like {name}</h3>
  );
}

const foodILike = [
  {
    name: "A",
    image:""
  },
  {
    name: "B",
    image:""
  },
  {
    name: "C",
    image:""
  },
  {
    name: "D",
    image:""
  },
  {
    name: "E",
    image:""
  }
]

function App() {
  return( 
    <div> Hello 
      {foodILike.map(dish => <Food name={dish.name}/>)}
    </div>
  );
}

export default App;
