import React from 'react';

const Form = () => {

function formSubmit()
{
console.log("Clicked On Submit");

}


  return (
      <div>
        <h1>Registration Form  </h1>

        <div>Name: <input type="text" placeholder="Enter Your First Name"></input></div>
        <br></br>
        <div>Email: <input type="text"></input></div>
        <br></br>
        <div>Mobile Number: <input type="text"></input></div>
        <br></br>
        <div>City: <input type="text"></input></div>
        <br></br>
        <div>Country: <select>
        <option>-Select Country-</option>
            <option value="india">India</option>
            <option value="australia">Australia</option>
            <option value="america">America</option>
            <option value="russia">Russia</option>
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
        
        <div><button onClick={formSubmit}> Submit </button> 
        <button>Clear</button></div>

      </div>
    )
  }


export default Form
