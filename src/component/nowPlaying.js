




import React from 'react';

class Modal extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div style={{backgroundColor:"purple"}} className="d-flex p-2">
        <img style={{width: '30px', height:'30px'}} src={this.props.imageModal} alt="Now Playing" />
         <div style={{position:'relative', left:'8vw'}} className="mt-2"><span className="text-light">{this.props.title} -</span><span className="text-light"> {this.props.artist}</span></div>
         <button onClick={this.props.played} style={{position:'relative',left:'45%',border:'none', backgroundColor:'white', color:'black', width: '7vw', height:'7vw', borderRadius:'50%'}} className="text-dark bg-light">{this.props.isplay ? <i className="fa fa-pause"></i>:<i className="fa fa-play"></i>}</button>
      </div>
    );
  }
}
export default Modal;