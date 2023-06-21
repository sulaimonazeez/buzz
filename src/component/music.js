import React from 'react';

class Music extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      endpoint:'https://ola90.pythonanywhere.com'
    }
  }
  render(){
    return (
      <div className="container-fluid">
        <div className='container-fluid album-card1'>
           <img src={this.state.endpoint+this.props.staticImage} alt="Playing Now"/>
        </div>
        <div className="container-fluid">
          <h1 className="text-light">{this.props.title}</h1>
          <p style={{fontSize:'16px',color:'lightgrey'}} className="">Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you. Update every Monday.</p>
        </div>
      </div>
    );
  }
}
export default Music;
