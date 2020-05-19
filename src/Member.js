import React from 'react';
import './App.css';
import logo from './logo.svg';
//import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
//import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';

class Member extends React.Component
{
  render()
  {
    return( 
        
        <div class="card">
            <img src={this.props.image} alt="Team"/>
                <div class="container">
                    <h4>{this.props.name}</h4> 
                    
                    <p>{this.props.role}</p> 

                    <ul>                        
                        <li><a href="#LinkedIn">LinkedIn</a></li>
                        <li><a href="#Twitter">Twitter</a></li>
                    </ul>
                </div>
        </div>        
                         
    );
  }
}

export default Member;