



import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
class Controler extends React.Component {
  constructor(props){
    super(props);
    this.data = props.data
    this.state = {modal:props.playing,endpoint:'https://ola90.pythonanywhere.com', playIndx:-1}
  }
  render(){
    return (
      <div style={{position:'fixed',top:'0', backgroundColor:'purple',zIndex:'999999', height:'100vh'}} className="container-fluid"><br/><br/><br/><br/><br/><br/><br/>
         <div className="text-center">
            <img style={{width:'70%'}} src={this.state.endpoint+this.state.modal.album}/>
         </div>
         <div className='mt-3'>
           <h2 className="text-light">{this.state.modal.title}</h2>
           <h6 className="text-light">{this.state.modal.artist}</h6>
           <input onChange={this.props.move} onInput={this.props.mute} value={this.props.values} type="range" min="0" max="100" />
         </div>
         <div style={{marginTop:'7vw'}} className="d-flex justify-content-center">
           <i onClick={this.props.backward} style={{top:'2vw',position:'relative',left:'-18vw',fontSize:'7vw'}} className="text-light fa fa-step-backward fa-2x"></i>
           <button style={{fontSize:'6vw',border:'none',height:'50px',width:'50px', borderRadius:'50%'}} onClick={this.props.played} className="bg-light text-dark">{this.props.isplay ? <i className="fa fa-pause"></i>:<i className="fa fa-play"></i>}</button>
           <i onClick={this.props.forward} style={{top:'2vw',position:'relative',right:'-18vw',fontSize:'7vw'}} className="text-light fa fa-step-forward fa-2x"></i>
         </div>
      </div>
    );
  }
}
export default Controler;