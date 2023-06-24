




import React from 'react';

class Modal extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div onClick={this.props.change} style={{backgroundColor:"purple"}} className="justify-content-between d-flex p-2">
       <div className="d-flex">
        <img style={{width: '30px', height:'30px'}} src={this.props.imageModal} alt="Now Playing" />
         <div style={{position:'relative', left:'4vw'}} className="mt-2"><span className="text-light">{this.props.title} -</span><span className="text-light"> {this.props.artist}</span></div>
         </div>
         <button onClick={this.props.played} style={{border:'none', backgroundColor:'white', color:'black', width: '7vw', height:'7vw', borderRadius:'50%'}} className="text-dark bg-light">{this.props.isplay ? <i className="fa fa-pause"></i>:<i className="fa fa-play"></i>}</button>
      </div>
    );
  }
}
export default Modal;