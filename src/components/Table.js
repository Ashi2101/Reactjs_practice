import React, { Component } from 'react'

export class Table extends Component {
  

  render() {
    return (
      <div>
        <h1>Employee List</h1>

        <div className='n1'>
  <table>
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile Number</th>
        <th> <button type="button">Confirm</button></th>
    </tr>

    <tr>
        <th>Sharmie</th>
        <th>sharmie@gmail.com</th>
        <th>7566789348</th>
        <th> <button type="button">Yes</button>
        <button type="button">No</button></th>
    </tr>

    <tr>
        <th>Vishal</th>
        <th>vishal@gmail.com</th>
        <th>8643987987</th>
        <th> <button type="button">Yes</button>
        <button type="button">No</button></th>
    </tr>
  </table>
  </div>
      </div>
    )
  }
}

export default Table
