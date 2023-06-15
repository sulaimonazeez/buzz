import React from 'react';

class Videos extends React.Component{
  constructor(props){
    super(props);
    this.state = { bio: false }
    this.handleView = this.handleView.bind(this)
  }
  handleView(){
    this.setState({bio: !this.state.bio})
  }
  render(){
    return (
      <div>
        {this.state.bio ? (
        <div>
          <h1>Video tutorial </h1>
          <button onClick = {this.handleView}>Show less</button>
        </div>
      
        ) : (
         <div>
          <h1> Coding is fun </h1>
          <button onClick={this.handleView}>Show more </button>
          </div>
        )
      }
      </div>
    )
  }
}
function Video(){
  return (
    <div>
      <Videos />
    </div>
  )
}
export default Video;