import React from 'react';
import './App.css';
import Member from './Member';
//import {MDBRow, MDBCol} from 'mdbreact';

class About extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      members: []
    };
  }
  
componentDidMount(){
  fetch("https://localhost:44373/api/Member").then(res=>res.json()).then(
    result=>{
      this.setState({members:result});
    }
  );
}

  render()
  {
    return (
      <React.Fragment> 
        <h1>About Us</h1> 
        <div class="grid-container">
          {this.state.members.map(m => (
          <Member 
          key={m.Id} 
          id={m.Id} 
          name={m.Name} 
          role={m.Role} 
          email={m.Email}
          image={m.Image}
          />
          ))}
        </div> 
     </React.Fragment>
      
    ); 
  }  
  
}

export default About;
