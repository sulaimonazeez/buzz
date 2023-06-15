//import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Search from './component/search.js';
import Home from './component/home.js';
import Music from './component/music.js';
import Video from './component/video.js';
import New from './component/news.js';
import Nav from './component/Navbar.js';
import One from './component/one.js';
import Two from './component/two.js';
import Three from './component/three.js';
import Eight from './component/eight.js';
import Four from './component/four.js';
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
       <Route path='/playlist/4' element={<New />} />
       <Route path='/playlist/5' element={<New />} />
       <Route path='/playlist/6' element={<New />} />
       <Route path='/playlist/7' element={<New />} />
       <Route path='/playlist/8' element={<Eight />} />
       <Route path='/playlist/9' element={<New />} />
       <Route path='/playlist/10' element={<New />} />
       <Route path='/playlist/11' element={<New />} />
       <Route path='/playlist/12' element={<New />} />
       <Route path='/playlist/13' element={<New />} />
       <Route path='/playlist/14' element={<New />} />
       <Route path='/playlist/' element={<New />} />
       <Route path='/music' element={<Music />} />
       <Route path='/video' element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
  }
  }
}

export default App;
