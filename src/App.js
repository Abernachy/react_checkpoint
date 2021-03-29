/* Imports block */
import './App.css';
import React, { Component } from 'react'
/* import viewEmail from ' ./components/viewEmail.js' */
/* import mock data for initial testing purposes*/
import mockData from './mockdata.js'
import EmailTree from './components/EmailTree'

/* -------------------------*/

class App extends React.Component {
  state = {
    emailList: mockData
  
  }
  render(){
  return (
    <div className="App">
      <div className="emailtree">
        {console.log(mockData)}
        <EmailTree data={this.state.emailList}/>

      </div>
      <div className="mainContainer">
        <label className="label">THIS AINT NO PLACE for a hero </label>
      
        
      
      </div>
    </div>
  );
  }
}

export default App;
