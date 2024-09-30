import React, { Component } from 'react'

export class Form extends Component {
  

  render() {
    return (
      <div>
        <h1>Registration Form  </h1>

        <div>Name: <input type="text"></input></div>
        <br></br>
        <div>Email: <input type="text"></input></div>
        <br></br>
        <div>Mobile Number: <input type="text"></input></div>
        <br></br>
        <div>City: <input type="text"></input></div>
        <br></br>
        <div>Country: <select>
            <option>India</option>
            <option>Australia</option>
            <option>America</option>
            <option>Russia</option>
        </select></div>
        <br></br>
        <div>Gender: <input type="radio"/>Male 
        <input type="radio"/>Female 
        <input type="radio"/>Others </div>
        <br></br>
        <div>Languages: <input type="checkbox"/>English
        <input type="checkbox"/>Hindi</div>
        <br></br>
        <div>Address: <input type="text"></input></div>
        <br></br>
        
        <div><button> Submit </button> 
        <button>Clear</button></div>

      </div>
    )
  }
}

export default Form
