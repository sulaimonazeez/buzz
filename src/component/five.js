





import React from 'react';
import "../App.css"
import Music from './music.js';
import Videos from './video.js';
import Modal from './nowPlaying.js';
class Five extends React.Component{
  constructor(){
    super();
    this.state = {
      endpoint:'https://ola90.pythonanywhere.com',data:[], playId:{}, isplay:false, single:{}, player:false
    };
    this.audio = new Audio();
  }
  async componentDidMount(){
    let response = await fetch('https://ola90.pythonanywhere.com');
    let result = await response.json();
    this.setState({data:result.slice(0,50), playId:result[4], single:result[4]});
    this.audio.src = this.state.endpoint+this.state.playId.song;
    this.audio.metadata = "preload";
  }
  playIt = () =>{
    this.setState({isplay:!this.state.isplay, player:true});
    if (this.state.isplay){
      this.audio.pause();
    }else{
      this.audio.play();
    }
  }
  render(){
    return(
      <div id="data-container">
         <Music staticImage={this.state.playId.album} title={this.state.playId.title}/>
         <Videos play={this.playIt} isplay={this.state.isplay}/>
         
         <div className="mt-5 container-fluid">
         <div className='container-fluid'>
           {this.state.data.map((data, indx)=>{
             return(
                <div id="hoover" onClick={()=>{
                  this.setState({single:data, isplay:true, player:true});
                  this.audio.src = this.state.endpoint+data.song;
                  this.audio.play();
                }} key={indx} className="justify-content-between d-flex">
                <div className="d-flex">
                   <span style={{color:'lightgrey',fontSize:'4vw'}} className="fw-bold">{indx}</span>
                   <div id="player-click">
                     <span style={{fontSize:'3.5vw'}} className="text-light fw-bold">{data.title}</span>
                     <p style={{color:'lightgrey',fontSize:'2.5vw'}} className="">{data.artist}</p>
                   </div>
                   </div>
                   <i className="fw-bold text-light awesome fa fa-ellipsis-v"></i>
                </div>
             );
           })}
         </div>
         </div>
         <div className="fixed-bottom container-fluid">
           <Modal playNow={this.state.player} imageModal={this.state.endpoint+this.state.single.album} title={this.state.single.title} artist={this.state.single.artist} isplay={this.state.isplay} played={this.playIt}/>
         </div>
      </div>
    )
  }
}
export default Five;