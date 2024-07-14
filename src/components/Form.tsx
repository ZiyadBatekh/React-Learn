import React, { FormEvent } from 'react'

const Form = () => {

  const handleSubmit = (event:FormEvent) =>{
    event.preventDefault();
    console.log("Submitted");
    
  }
  return (
    <form onSubmit={handleSubmit}>
    <div className="form-group mb-3">
      <label htmlFor="name">Name</label>
      <input type="email" className="form-control" id="name" placeholder="Enter your name" />
    </div>
    <div className="form-group mb-3">
      <label htmlFor="age">age</label>
      <input type="number" className="form-control" id="age" placeholder="Password" />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  )
}

export default Form