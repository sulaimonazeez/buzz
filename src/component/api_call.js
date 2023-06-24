import React from 'react';
import '../App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
class Hi extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Link id="data-comp" style={{textDecoration:'none'}} to={this.props.link}>
        <img alt="Go" className='album' src={this.props.album} /><br/>
        <span className='mt-3 text-light data-title'>{this.props.title}</span>
      </Link>
    )
  }
}
export default Hi;