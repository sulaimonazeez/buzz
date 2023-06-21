


//import logo from './logo.svg';
import React from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Search from './component/search.js';
import Home from './component/home.js';
import Nav from './component/Navbar.js';
import One from './component/one.js';
import Two from './component/two.js';
import Three from './component/three.js';
import Eight from './component/eight.js';
import Four from './component/four.js';
import Five from './component/five.js';
import Six from './component/six.js';
import Seven from './component/seven.js'
import Nine from './component/nine.js';
import Ten from './component/ten.js';
import Eleven from './component/ele.js';
import Twelve from './component/twel.js';
import Thirt from './component/thirt.js';
import Fourt from './component/f.js';
class App extends React.Component{
  constructor(){
    super();
    this.state = {hasError:false}
  }
  componentDidCatch(error, info){
    this.setState({hasError:true});
  }
  render(){
      if (this.state.hasError === true){
        return (
          <div className="mt-5 text-center">
             <strong>Oops Something went wrong</strong>
          </div>
        )
      }else{
        return(
     <BrowserRouter>
       <Nav />
       <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/search' element={<Search />} />
       <Route path='/playlist/0' element={<One />} />
       <Route path='/playlist/1' element={<Two />} />
       <Route path='/playlist/2' element={<Three />} />
       <Route path='/playlist/3' element={<Four />} />
       <Route path='/playlist/4' element={<Five />} />
       <Route path='/playlist/5' element={<Six />} />
       <Route path='/playlist/6' element={<Seven />} />
       <Route path='/playlist/8' element={<Eight />} />
       <Route path='/playlist/9' element={<Nine />} />
       <Route path='/playlist/10' element={<Ten />} />
       <Route path='/playlist/11' element={<Eleven />} />
       <Route path='/playlist/12' element={<Twelve />} />
       <Route path='/playlist/13' element={<Thirt />} />
       <Route path='playlist/14' element={<Fourt />} />
      </Routes>
    </BrowserRouter>
  );
  }
  }
}

export default App;
