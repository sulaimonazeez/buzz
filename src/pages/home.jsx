



import MetaTags from 'react-meta-tags';
import React from 'react';
import '.././App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Hi from '.././api/api_call';
import Hello from '.././components/datarender'
//import {Link} from 'react-router-dom';
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
    let firstData = res.slice(0, 7)
    let config = res.slice(res.length / 2);
    let secondData = config.slice(0,7);
    this.setState({data:res,load:true,latests:firstData, data2:secondData});
    
  }
  render(){
        if (this.state.load === false){
          return (
              <div>loading...</div>
              );
        }else{
          return (
          <div className="album-container bg-dark">
          <div className='container-fluid'>
          <h1 className="text-light latest">Deep</h1>
          <div className='flex-box'>
            {this.state.data2.map((data, ind)=>{
              return(
                   <div className='image-grid'>
                <Hello key={ind} link={`playlist/${ind+8}`} id={data.id} album={this.state.endpoint+data.album} title={data.title}/>
              </div>
                )
            })}
            </div>
                                  <h1 style={{marginBottom:'-2vw',marginTop:'9vw'}} className="text-light latest"><strong>Trending Now</strong></h1>
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
            <div className="wrapper">
              <MetaTags>
                 {this.state.data.map((data)=>{
                   return(
                     <div>
                       <title>{data.title}-{data.artist}</title>
                       <meta id="meta-description" name="description" content={data.artist+" is one of the most popular artist trending now. Download latest song on buzz"} />
                       <meta id="og-title" property="og:title" content="Buzz is one of the fatest web app interm of music, latest songs, latest videos, trending artist only on buzz"/>
                       <meta id="og-image" property="og:image" content={this.state.endpoint+data.album} />
                     </div>
                   )
                 })}
              </MetaTags>
            </div>
            <footer style={{marginTop:'10vw'}} className="container-fluid">
              <div style={{justifyContent:'space-evenly'}} className='container-fluid d-flex justify-content-center justify-content-between'>
               <h2 style={{fontSize:'4vw',color:'lightgreen'}}>Hot Categories</h2>
               <h2 style={{fontSize:'4vw',color:'lightgreen'}}>Information</h2>
              </div>
                  <div style={{justifyContent:'space-evenly'}} className='d-flex container-fluid justify-content-center justify-content-between'>
             
               <h2 style={{fontSize:'4vw'}} className="text-danger">About us</h2>
               <h2 style={{fontSize:'4vw'}} className="text-danger">Privacy</h2>
              </div>
              <hr className="text-light"/>
              <div style={{margin:'2vw',padding:'3vw'}} className="p- m-3 text-center">
                <a style={{fontSize:'6vw', backgroundColor:'green', padding:'2vw', borderRadius:'50%'}} href="https://www.facebook.com/afolabi.azeez.127201"><i className="fa fa-twitter text-light"></i></a>
                   <a style={{fontSize:'6vw', backgroundColor:'green', padding:'2vw', borderRadius:'50%'}} href="https://www.facebook.com/afolabi.azeez.127201"><i className="fa fa-facebook text-light"></i></a>
                   <a style={{fontSize:'6vw', backgroundColor:'green', padding:'2vw', borderRadius:'50%'}} href="https://www.instagram.com/afolabi.azeez.127201"><i className="fa fa-instagram text-light"></i></a>
                    <a style={{fontSize:'6vw', backgroundColor:'green', padding:'2vw', borderRadius:'50%'}} href="https://Wa.me/2348080891605"><i className="fa fa-whatsapp text-light"></i></a>
              </div>
              <div className="text-center">
                <p style={{fontSize:'4vw'}} className="text-light">Copyright © 2022 - 2023 | Buzz</p>
              </div>
            </footer>
        </div>
      );
        }
  }
}
export default Home;