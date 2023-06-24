





import React from 'react';
import "../App.css"
import Music from './music.js';
import Videos from './video.js';
import Modal from './nowPlaying.js';
import Controler from './controls.js';
class Ten extends React.Component{
  constructor(){
    super();
    this.state = {
      endpoint:'https://ola90.pythonanywhere.com',data:[], playId:{}, isplay:false, single:{}, player:false, showModal:false, playIndx:-1, mutes:0
    };
    this.audio = new Audio();
  }
  async componentDidMount(){
    let response = await fetch('https://ola90.pythonanywhere.com');
    let result = await response.json();
    let datas = result.slice(result.length / 2);
    this.setState({data:datas.slice(0,50), playId:datas[2], single:datas[2]});
    this.audio.src = this.state.endpoint+this.state.playId.song;
    this.audio.metadata = "preload";
  }
  playIt = () =>{
    this.setState({isplay:!this.state.isplay, player:true});
    if (this.state.isplay){
      this.audio.pause();
    }else{
      this.audio.play();
      this.moveMent();
    }
  }
  moveMent = () =>{
    let seekPosition = 0;
    if (!isNaN(this.audio.duration)) {
      let interval = setInterval(()=>{
        seekPosition = this.audio.currentTime * (100 / this.audio.duration);
        this.setState({mutes:seekPosition});
      },100)
      this.audio.addEventListener("ended", ()=>{
        clearInterval(interval);
        this.setState({mutes:0});
        this.playIt();
      })
    }
  }
  Mute = (e) =>{
    if (this.audio.duration !== NaN && this.audio.currentTime !== NaN){
      try{
        this.setState({mutes:e.target.value});
        this.audio.currentTime = this.audio.duration * (e.target.value / 100);
      }catch(error){
        console.log("Error")
        this.setState({mutes:0})
      }
    }else {
      this.setState({mutes:0});
    }
  }
  Change = () =>{
    this.setState({showModal:true});
  }
  Forward = () =>{
    let indx = this.state.playIndx;
    indx+=1;
    if (indx >= this.state.data.length){
      console.log('no more data');
      indx = this.state.data.length;
    }else {
      this.setState({playIndx:indx, single:this.state.data[indx], mutes:0});
      this.audio.src = this.state.endpoint+this.state.data[indx].song;
      this.audio.play();
    }
      
  }
  Backward = () =>{
    let indx = this.state.playIndx;
    indx-=1;
    if (indx > 0){
      this.setState({playIndx:indx,single:this.state.data[indx],mutes:0});
      this.audio.src = this.state.endpoint+this.state.data[indx].song;
      this.audio.play();
    }else {
      console.log('no more data');
      indx = 0;
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
           <Modal change={this.Change} playNow={this.state.player} imageModal={this.state.endpoint+this.state.single.album} title={this.state.single.title} artist={this.state.single.artist} isplay={this.state.isplay} played={this.playIt}/>
         </div>
         <div>
           {this.state.showModal ? <Controler values={this.state.mutes} mute={this.Mute} played={this.playIt} isplay={this.state.isplay} data={this.state.data} playing={this.state.single} forward={this.Forward} backward={this.Backward} move={this.moveMent}/> : ''}
         </div>
      </div>
    )
  }
}
export default Ten;