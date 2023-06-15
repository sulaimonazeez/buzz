




import React, { useEffect, useState } from 'react';
import '../App.css';
import Hi from './api_call.js';
import Hello from './datarender.jsx'
import {Link} from 'react-router-dom';
class Home extends React.Component{
  constructor(){
    super();
    this.state = {latests:[],trend:[],endpoint: 'https://ola90.pythonanywhere.com', load: false, data: [],error: null, data2:[]
    };
  };
  showModal = () =>{
    //nothing here
  }
  async componentDidMount(){
    let response = await fetch('https://ola90.pythonanywhere.com');
    let res = await response.json();
    let date = new Date();
    let year = date.getFullYear();
    let firstData = res.slice(0, 7)
    let config = res.slice(res.length / 2);
    let secondData = config.slice(0,7);
    this.setState({load:true,latests:firstData, data2:secondData});
    
  }
  render(){
        if (this.state.load === false){
          return (
              <div>loading...</div>
              );
        }else{
          return (
          <div className="album-container container-fluid">
          <div className='container-fluid'>
          <h1 className="latest">Deep</h1>
          <div className='flex-box'>
            {this.state.data2.map((data, ind)=>{
              return(
                   <div className='image-grid'>
                <Hello key={ind} link={`playlist/${ind+8}`} id={data.id} album={this.state.endpoint+data.album} title={data.title}/>
              </div>
                )
            })}
            </div>
                                  <h1 style={{marginTop:'9vw'}} className="latest">Trending Now</h1>
          <div className='flex-box'>
            {this.state.latests.map((data, ind)=>{
              return(
                   <div className='image-grid'>
                <Hi key={ind} link={'playlist/'+ind} id={data.id} album={this.state.endpoint+data.album} title={data.title}/>
              </div>
                )
            })}
            </div>
            </div>
        </div>
      );
        }
  }
}
export default Home;