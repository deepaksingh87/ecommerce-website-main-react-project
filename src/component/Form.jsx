import React from 'react'
import './Style.css';
import Cities from '../data/Cities';
import Sdata from '../data/Sdata';

function Form() {
  return (
    <div>
      <div className="container">
        <div className="inner-container">
          <h1>get started with online form and deepak</h1>
          <form onSubmit={(e) => { e.preventDefault(); alert("form submitted") }}>
            <label>Enter Name:</label><input type="text" placeholder="enter name" className="input1" required /><br /><br />
            <label>Enter Email:</label><input type="email" placeholder="enter email" className="input2" required /><br /><br />
            <label>Enter Password:</label><input type="password" placeholder="enter password" className="input3" required /><br /><br />
            <label>Enter Confirm:</label><input type="password" placeholder="enter confirm password" className="input4" required /><br /><br />
            <label>Enter Number:</label><input type="number" placeholder="enter phone number" className="input5" required /><br /><br />
            <label>Select city:</label>
            <select className="select1">
              {Sdata.map((value, i) => <option key={i}>{value}</option>)}
            </select><br /><br />
            <label>Select city:</label>
            <select className="select1" name="city">
              {Cities.map((values, s) => <option key={s}>{values.name}</option>)}
            </select><br /><br />
            <textarea cols="100" rows="9" placeholder="enter address detail" /><br /><br />
            <input type="checkbox" className="checkbox" required /><label>Agree with term and condition</label><br /><br />
            <button type="submit" className="btn" >submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Form