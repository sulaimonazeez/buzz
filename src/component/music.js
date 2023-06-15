import React from 'react';

class Music extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      load: false, data: [], error: null
    }
  }
  
  componentDidMount(){
    fetch('http://127.0.0.1:8000/api').then(res => res.json()).then((data) =>{
      alert("hey");
    });
  }
  render(){
    return (
      <div>
        <h1>fugh ugu iguv ji y know vubu u   ueje rir rir rirveir rueveie doe rirveir rir rir </h1>
      </div>
    );
  }
}
export default Music;
