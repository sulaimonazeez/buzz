import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
class Hello extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Link to={this.props.link}>
        <img className='album' src={this.props.album} />
        <h2 className='data-title'>{this.props.title}</h2>
      </Link>
    )
  }
}
export default Hello;