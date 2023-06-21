


import Modal from './nowPlaying.js';
import React from 'react';
import Music from './music.js';
import Videos from './video.js';
import '../App.css';
class Search extends React.Component {
  constructor(){
    super();
    this.state = {pointer:{},data:[],inputVal:'',result:[], endpoint:'https://ola90.pythonanywhere.com', isSearch:true, playId:{}, isplay:false, player:false};
    this.audio = new Audio();
  }
  async componentDidMount(){
    let response = await fetch('https://ola90.pythonanywhere.com');
    let result = await response.json();
    this.setState({data:result});
  }
  Triger = (e) =>{
    this.setState({inputVal:e.target.value});
  }
  playIt = () =>{
    this.setState({isplay:!this.state.isplay,player:true});
    if (this.state.isplay){
      this.audio.pause();
    }else{
      this.audio.play();
    }
  }
  render(){
    if (this.state.isSearch){
      return (
      <div className="container-fluid">
      <div style={{marginTop:'10vw'}}><br/>
         <input type="search" name="search_query" className="p-2 form-control" value={this.state.inputVal} placeholder="Search on Buzz..." onInput={this.Triger}/>
        </div>
        
        <div className="mt-4">
           {this.state.data.map((data, indx) =>{
           if (data.title.startsWith(this.state.inputVal) || data.title.endsWith(this.state.inputVal)||data.artist.startsWith(this.state.inputVal) || data.artist.endsWith(this.state.inputVal) ){
           if (this.state.inputVal){
              return(
               <div key={indx} onClick={()=>{
                 this.setState({playId:data, isSearch:false, pointer:data});
                 this.audio.src = this.state.endpoint+data.song;
               }} className="p-3 d-flex">
               <img style={{borderRadius:'2%',height:'40px',width:'40px'}} alt="searching" src={this.state.endpoint+data.album} />
               <div style={{position:'relative',left:'8vw'}}>
                 <h4 className="text-light">{data.title}</h4>
                 <span style={{color:'lightgrey'}}>{data.artist}</span>
               </div>
             </div>
             )
           }
           }
           })}
        </div>
      </div>
    );
    }else{
     return(
      <div style={{marginTop:'7vw'}} className="data-container">
          <Music staticImage={this.state.playId.album} title={this.state.playId.title}/>
          <Videos play={this.playIt} isplay={this.state.isplay}/>
           <div className="mt-5 container-fluid">
         <div className='container-fluid'>
           {this.state.data.map((data, indx)=>{
             return(
                <div id="hoover" onClick={()=>{
                  this.setState({pointer:data, isplay:true, player:true});
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
           <Modal playNow={this.state.player} imageModal={this.state.endpoint+this.state.pointer.album} title={this.state.pointer.title} artist={this.state.pointer.artist} isplay={this.state.isplay} played={this.playIt}/>
         </div>
      </div>
      );
    }
  }
}
export default Search;