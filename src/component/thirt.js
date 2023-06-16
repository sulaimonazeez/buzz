





import React, { useState, useEffect, useRef } from 'react';
import "../App.css"
import $ from 'jquery';
class Thirt extends React.Component{
  constructor(props){
    super(props);
    this.conf = false;
    this.state = {
      audio: new Audio(''), isplay:false,play: '',data: [], id:'', match:[], endpoint: 'https://ola90.pythonanywhere.com',useTime: true, load: true,loadBtn:true, audit:'', loadSpan:false,like:false,toStyle:false, dis:{display:'none'},showPopup:false,popupData:{}, nowPlaying:false,tracker:1,idPlayer:{},dataId:0, hasError:false
    }
    this.playLoad = {color:"red", backgroundColor:"yellow"}
    this.mycss = [
      {color: "red", backgroundColor:"grey"},
      {color: "blue", backgroundColor:"pink"},
      {color: "yellow", backgroundColor:"orange"},
      {color:"pink", backgroundColor:"blue"},
      {color: "orange", backgroundColor:"purple"}
      
    ]
    this.playMusic = this.playMusic.bind(this);
    setTimeout(()=>{
      this.setState({useTime:false})
    }, 12000);
  }
  playMusic(){
    if (this.state.isplay){
      this.state.audio.pause();
      $('.active').css({display:'none'});
    }else{
      $('.active').css({display:'block'});
      this.state.audio.onloadeddata = function(){
        $('.active').css({display:'none'});
      }
      this.state.audio.play()
    }
    this.setState({isplay:!this.state.isplay, loadBtn: !this.state.loadBtn, loadSpan: !this.state.loadSpan,showPopup:true});
  }
  seekTo = () =>{
    let position = this.state.audio.currentTime * (100 / this.state.audio.duration);
    this.setState({tracker:position})
  }
  async componentDidMount(){
    let response = await fetch('https://ola90.pythonanywhere.com');
    let res = await response.json();
    let mydata = res.slice(Math.floor(res.length) / 2)
    let newData = mydata.slice(0,7);
    this.setState({idPlayer:newData[4], play:newData[4], data: mydata.slice(0,50), id:newData[4], load:false})
    if (this.state.load === false){
       this.setState({audio: new Audio(this.state.endpoint+this.state.play.song)});
       this.state.audio.preload = 'metadata';
    }
  }
    componentDidUpdate(prevProps, prevState){
      if (prevState.play !== this.state.play){
        //do something...
      }
      if (this.state.isplay === true){
        setTimeout(()=>{
          $('.active').css({display:'none'})
        }, 10000);
      }
    }
    componentDidCatch(error, info){
      this.setState({hasError:true})
    }
  render(){
    if (this.state.useTime === true){
      return (
        <div style={{marginTop:"55vw", color: "white"}} className="text-center">
        <div class="fs-1 spinner-grow text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-light" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-dark" role="status">
  <span class="sr-only">Loading...</span>
</div>
</div>
      )
    }else{
      return (
         <div className="hex container-fluid">
          <div className="container-fluid">
         <div className="container-fluid album-card1">
           <img src={this.state.endpoint+this.state.id.album} alt='cover' />
         </div>
         <div className="container-fluid content">
         <div className="content-inner container-fluid">
         <h1 className="">{this.state.id.title}</h1>
           <small className="">Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you. Updates every Monday.</small>
         </div>
         </div>
         <div className="justify-content-between d-flex">
           <div className="like-container d-flex justify-content-between">
           <i onClick = {()=>{
           this.setState({like:!this.state.like})
           if (this.state.like){
             $("i.fa-heart-o").css({color:"white"})
           }else{
             $("i.fa-heart-o").css({color:"red"});
             
           }
           }} className="func fa fa-heart-o"></i>
           <i onClick={()=>{
             let link = $("<a></a>").attr("download", this.state.endpoint+this.state.play).attr("href",this.state.endpoint+this.state.play);
             link[0].click();
             
             link.remove()
           }} className="fa fa-download func"></i>
           <i class="func fa fa-ellipsis-v" aria-hidden="true"></i>
           </div>
           <button onClick={this.playMusic} style={{borderRadius: '50vw', width: "16vw", height: "16vw",fontSize: "8vw"}} className="btn play-btn p-4 btn-success text-dark">{this.state.loadBtn ? <i className="fa fa-play"></i>:  <i className="fa fa-pause"></i>}</button>
         </div>
         <span onClick={this.playMusic} className='active'></span>
         <div className="mt-5 down container-fluid">
           {this.state.data.map((data, ind)=>{
             return (
             <div key={ind} className='container-fluid other-song d-flex'>
             <div onClick={()=>{
               this.setState({popupData: data,isplay:!false,play:data, loadSpan:true, loadBtn:false,toStyle: !this.state.toStyle,showPopup:true, idPlayer:data});
               $('.active').css({display:'block'});
               this.state.audio.src = this.state.endpoint+data.song
               this.state.audio.onloadeddata = function() {
  // The Audio API has fully loaded
  $('.active').css({display:'none'});
  this.play();
};
             }} className="hoove container-fluid d-flex">
               <span className="num">{ind}</span>
               <div>
               <span className="album-title">{data.title}</span>
               <p className='album-title' style={{fontSize: '3vw'}}>{data.artist}</p>
               </div>
             </div>
             <i className="ell fs-1 fa fa-ellipsis-v"></i>
             </div>
             );
           })}
         </div>
       </div>
      {this.state.showPopup ? <div onClick={()=>{
        this.setState({nowPlaying:true})
      }} className='container-fluid fixed-bottom'>
         <div style={{backgroundColor:'purple'}} className='rounded container-fluid play-song-container d-flex'>
          <img alt="now playing" className="play-song" src={this.state.endpoint+this.state.idPlayer.album} />
          <h2 className="playing-title text-light">{this.state.idPlayer.title} - {this.state.idPlayer.artist}</h2>
             <button onClick={this.playMusic} style={{borderRadius: '50vw', width: "10vw", height: "10vw",position:'fixed',left: '81%', fontSize: "4vw"}} className="btn play-btn p-4 btn-light text-dark">{this.state.loadBtn ? <i className="fa fa-play"></i>:  <i className="fa fa-pause"></i>}</button>
        </div>
       </div> : ''}
       {this.state.nowPlaying ? <div id="nowPlaying" className='playing-now w-100'>
       <div className='d-flex'>
           <button onClick={()=>{
             this.setState({nowPlaying:false});
           }} style={{backgroundColor:'none'}} className='btn text-light'><i className='fa fa-close' style={{fontSize:'7vw'}}></i></button>
           <h2 className="text-light" style={{fontSize:'4vw', position:'relative', left:'40vw'}}>{this.state.idPlayer.artist}</h2>
           </div>
         <div className='container-image'>
           <img alt="Playing Now" className='playing-img' src={this.state.endpoint+this.state.idPlayer.album} />
         </div>
         <div className="container-fluid">
         <div className="container-fluid">
           <div className="container-fluid">
           <div className="container-fluid">
         <h2 style={{fontSize:'7vw'}}>{this.state.idPlayer.title}</h2>
         <h6 style={{fontSize:'4vw'}} >{this.state.idPlayer.artist}</h6>
         <br/><br/><br/><br/>
         <input onChange={(e)=>{
           this.setState({tracker:e.target.value});
           this.state.audio.currentTime = Math.floor(this.state.audio.duration * (parseInt(e.target.value)/100))
         }} id="seek" className="seek_slide container-fluid" type="range" value={this.state.tracker} min="1" max="100"/><br/>
         <span className='d-flex justify-content-between'>
           <p className="text-light">{this.state.audio.currentTime}</p>
           <p className="text-light">{this.state.audio.duration}</p>
         </span>
         </div>
         </div>
         </div>
         </div><br/><br/><br/><br/><br/>
         <div style={{justifyContent:'space-evenly'}} className='text-center d-flex'>
           <i onClick={()=>{
             let id = this.state.dataId-=1
             if ( id >= 0){
               this.setState({idPlayer:this.state.data[this.state.dataId], dataId:id});
               this.state.audio.src = this.state.endpoint+this.state.data[id].song;
               this.state.audio.play();
             }else {
               this.setState({dataId:0});
             }
           }} style={{fontSize:'8vw'}} className='fa fa-step-backward text-light mt-5'></i>
           {this.state.isplay ? <i onClick={this.playMusic} style={{fontSize:'8vw'}} className='fa fa-pause myplayers'></i>:<i onClick={this.playMusic} style={{fontSize:'8vw'}} className='myplayers fa fa-play'></i>}
           <i onClick={()=>{
             let id = this.state.dataId+=1
             if ( id < this.state.data.length){
               this.setState({idPlayer:this.state.data[this.state.dataId], dataId:id});
               this.state.audio.src = this.state.endpoint+this.state.data[id].song;
               this.state.audio.play();
             }else {
               this.setState({dataId:this.state.data.length});
             }
           }} style={{fontSize:'8vw'}} className='text-light fa fa-step-forward mt-5'></i>
         </div>
       </div>:''}
       </div>
      )
    }
  }
}
export default Thirt;