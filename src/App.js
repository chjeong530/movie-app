import React from 'react';
import PropTypes from "prop-types"
import axios from 'axios';
import Movie from "./Movie";
import { findAllByTitle } from '@testing-library/react';



class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const { 
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false })
    console.log(movies);
  };

  componentDidMount(){
    this.getMovies();

    // setTimeout( () => {
    //   this.setState({isLoading: false});
    // }, 6000);
    
  }


  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading ? "Loading": movies.map( movie => {
          console.log(movie);
          return (
            <Movie 
              key={movie.id} 
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image} 
            />
          );
        })};
      </div>
    );
  }

}

export default App;
