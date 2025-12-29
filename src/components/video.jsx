


import React from 'react';
import '../App.css';
class Videos extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
     <div className="container-fluid">
      <div style={{justifyContent:'space-between'}} className="justify-content-between d-flex">
         <div style={{justifyContent:'space-evenly',fontSize:'5vw'}} className="p-3 d-flex">
           <i className="p-2 awesome fa fa-heart"></i>
           <i className="p-2 awesome fa fa-download"></i>
           <i className="p-2 awesome fa fa-ellipsis-v"></i>
         </div>
         <button className='btn-player' onClick={this.props.play}>
            {this.props.isplay ? <i className="fa fa-pause"></i> : <i className='fa fa-play'></i>}
         </button>
      </div>
     </div>
    )
  }
}
export default Videos;