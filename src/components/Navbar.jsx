import React from 'react';
import '../App.css';
import Coner from './conerNav';
import logo from '.././static/buzz.jpeg';
import {Link} from 'react-router-dom';
import $ from 'jquery';
class Nav extends React.Component{
  navBar = () =>{
    $('.coner-nav').css({display: 'block'});
  }
  closeBar = () =>{
    $('.coner-nav').css({display:'none'});
  }
  render(){
    return (
      <div>
      <div className='fixed-top nav-container'>
      <nav className="fixed-top d-flex justify-content-between">
       <img alt="navbar" className="image-logo" src={logo} />
       <div className="d-flex justify-content-between inner-cont">
       <Link to='/search' className="glys glyphicon glyphicon-search gly-search"></Link>
       <button className="st btn btn-light rounded-pill">Streaming</button>
       <a onClick={this.navBar} className='menus' href="#menu"><i className="glyphicon glyphicon-menu-hamburger gly-search menu"></i></a>
       </div>
    </nav>
    </div>
    <div className="container-fluid coner-nav">
      <Coner close={this.closeBar}/>
    </div>
    
    </div>
  )
  }
}
export default Nav;