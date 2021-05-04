import React, { Component } from "react";
import axios from "axios";


class JokeList extends Component{
  async componentDidMount(){
    //Load Jokes
    let res = await axios.get("https://icanhazdadjoke.com/", {
      headers: {Accept: "application/json"}});
    console.log(res.data.joke);
  
  }
  render(){
    return(
      <div>
        <h1>Daddy Jokes</h1>
      </div>
    );
  }
}

export default JokeList;