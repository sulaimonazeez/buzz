import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
class Coner extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="container-fluid text-light mt-5 navbar-div">
      <br/>
      <button onClick={this.props.close} className="btn btn-close"><i className='fa fa-close'></i></button><br /><br /><br/><br/>
          <Link onClick={this.props.close} className='link' to="/">Home</Link><br/><br/>
         <Link onClick={this.props.close} className='link' to="/">Login</Link><br/><br/>
         <Link onClick={this.props.close} className='link' to="/">Sign Up</Link><br/><br/>
         <Link onClick={this.props.close} className='link' to="/">__</Link> <br/><br/>
         <Link onClick={this.props.close} className='link' to="/">Help</Link><br/><br/>
         <Link onClick={this.props.close} className='link' to="/">Term</Link><br /><br />
         <Link onClick={this.props.close} className='link' to="/">Privacy</Link>
         <div style={{display:'none'}}>Learn React</div>
      </div>
    );
  }
}
export default Coner;