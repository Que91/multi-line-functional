import React from  'react'


const PersonalForm =() =>
 <>
<form className="personalInfoForm">
  <h1 className="header">Personal info</h1>
  <h2 className="subHeader">
    Please provide your name, email address, and phone number.
  </h2>
  <label className="personalInfoLabel" htmlFor="name">
    Name
  </label>
  <input
    className="personalInput"
    id="name"
    type="text"
    placeholder="e.g. Stephen King"
    name="name"
    autoComplete="off"
    required
  ></input>
  <label className="personalInfoLabel" htmlFor="email">
    Email Address
  </label>
  <input
    className="personalInput"
    type="email"
    placeholder="e.g. stephenking@lorem.com"
    id="email"
    autoComplete="off"
    required
  ></input>
  <label className="personalInfoLabel" htmlFor="phone">
    Phone Number
  </label>
  <input
    className="personalInput"
    type="tel"
    placeholder="e.g. 1 234 567 890"
    id="phone"
    autoComplete="off"
    required
  ></input>
</form>
</>


export default PersonalForm