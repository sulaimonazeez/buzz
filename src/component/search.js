import React, { useState, useEffect, useRef } from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';
import '../App.css';
class Search extends React.Component{
  constructor(props){
    super(props);
    this.playMusic = this.playMusic.bind(this);
    this.myRef = React.createRef();
    this.state = {
      data:[],search:[],endpoint:"https://ola90.pythonanywhere.com",myRender: true,val:null,loadBtn:true,like:false,isplay:false,loadSpan:false,audio: new Audio(""),loadSpan:false,indPlay:'',showPopup:false,popupData:{},nowPlaying:false,tracker:1,idPlayer:{},dataId:0
    }
  }
  focusRef = () =>{
    this.myRef.current.focus();
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
      this.state.audio.play();
    }
    this.setState({isplay:!this.state.isplay, loadBtn: !this.state.loadBtn, loadSpan: !this.state.loadSpan,showPopup:true});
  }
  addData = (event) =>{
    let myData = this.state.data.filter((data, ind)=>{
      if (data.title.startsWith(event.target.value) || data.artist.startsWith(event.target.value) || data.title.endsWith(event.target.value) || data.artist.endsWith(event.target.value)){
        if (event.target.value !== ""){
          return data;
        }
      }
    })
    this.setState({search: myData});
  }
  async componentDidMount(){
    let response = await fetch('https://ola90.pythonanywhere.com');
    let result = await response.json();
    this.setState({data:result.slice(0,50)});
  }
  componentDidUpdate(prevProps, prevState){
    if (prevState.popupData !== this.state.popupData){
      //coming
    }
  }
  render(){
   if (this.state.myRender){
    return (
      <div className="container-fluid search-engine">
      <div className='my-engine container-fluid justify-content-between mt-5 d-flex'>
      <Link to='/'><i className='p-2 fa fa-arrow-left'></i></Link>
      <input ref={this.myRef} onClick={this.focusRef} onInput={this.addData} placeholder=" 🔍 What do you want to listen to" className='rounded text-dark form-control' type="search" name="search_query" />
      </div>
      <div className="container-fluid search-result">
         {this.state.search.map((data, ind)=>{
           return(
             <div key={ind} onClick={(()=>{
               this.setState({myRender:!this.state.myRender, popupData:data, val: data});
               this.state.audio.src=this.state.endpoint+data.song;
             })} className="m-5 container-fluid result-search d-flex">
               <img className='search-image' alt="my image" src={this.state.endpoint+data.album} />
               <div className="info">
                 <p className='text-light search-title'>{data.title}</p>
                 <p className="search-artist">{data.artist}</p>
               </div>
             </div>
           );
         })}
      </div>
    </div>
  );
  }else{
    return (
      <div className="container-fluid">
      <i onClick={()=>{
        this.setState({myRender:true});
      }} style={{position:'relative',top: '18vw',fontSize:'7vw'}} className='text-light fa fa-arrow-left'></i>
       <div className="album-caption container-fluid">
        <img className='img img-caption' src={this.state.endpoint+this.state.val.album} />
        </div>
          <div className="container-fluid content">
         <div className="content-inner container-fluid">
         <h1 className="">{this.state.val.title}</h1>
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
              <div className="down container-fluid">
           {this.state.data.map((data, ind)=>{
             return (
             <div key={ind} className='container-fluid other-song d-flex'>
             <div onClick={()=>{
               this.setState({indPlay:data.song, loadSpan:true, loadBtn:false,toStyle: !this.state.toStyle, showPopup:true,popupData: data});
               let playIt = false;
               $('.active').css({display:'block'});
               this.state.audio.preload = "metadata";
               this.state.audio.src = this.state.endpoint+data.song;
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
           {this.state.showPopup ? <div onClick = {()=>{
             this.setState({nowPlaying:true});
           }} className='container-fluid fixed-bottom'>
         <div style={{backgroundColor:'purple'}} className='rounded container-fluid play-song-container d-flex'>
          <img className="play-song" src={this.state.endpoint+this.state.popupData.album} />
          <h2 className="playing-title text-light">{this.state.popupData.title} - {this.state.popupData.artist}</h2>
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
           <img alt="Playing Now" className='playing-img' src={this.state.endpoint+this.state.popupData.album} />
         </div>
         <div className="container-fluid">
         <div className="container-fluid">
           <div className="container-fluid">
           <div className="container-fluid">
         <h2 style={{fontSize:'7vw'}}>{this.state.popupData.title}</h2>
         <h6 style={{fontSize:'4vw'}} >{this.state.popupData.artist}</h6>
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
             //display previous
           }} style={{fontSize:'8vw'}} className='fa fa-step-backward text-light mt-5'></i>
           {this.state.isplay ? <i onClick={this.playMusic} style={{fontSize:'8vw'}} className='fa fa-pause myplayers'></i>:<i onClick={this.playMusic} style={{fontSize:'8vw'}} className='myplayers fa fa-play'></i>}
           <i onClick={()=>{
             //disable
           }} style={{fontSize:'8vw'}} className='text-light fa fa-step-forward mt-5'></i>
         </div>
       </div>:''}
      </div>
    );
  }
  }
}
export default Search;