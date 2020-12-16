import React from 'react';
import PropTypes from "prop-types"
import Axios from 'axios';



class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async() => {
    const movies = axios.get("https://yts-proxy.now.sh/list_movies.json");
  }

  componentDidMount(){
    this.getMovies();

    // setTimeout( () => {
    //   this.setState({isLoading: false});
    // }, 6000);
    
  }


  render() {
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading ? "Loading": "We are ready"}
      </div>
    );
  }

}

export default App;
