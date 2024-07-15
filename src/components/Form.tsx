import React, { FormEvent, useRef } from 'react'

const Form = () => {

  const nameRef = useRef<HTMLInputElement>(null)
  const ageRef = useRef<HTMLInputElement>(null)

  const person = {name:'' , age: 0};

  const handleSubmit = (event:FormEvent) =>{
    event.preventDefault();
    if(nameRef.current !== null)
      person.name = nameRef.current.value;
    if(ageRef.current !== null)
      person.age = parseInt(ageRef.current.value)

    console.log(person);
    
    
  }
  return (
    <form onSubmit={handleSubmit}>
    <div className="form-group mb-3">
      <label htmlFor="name">Name</label>
      <input ref={nameRef} type="text" className="form-control" id="name" placeholder="Enter your name" />
    </div>
    <div className="form-group mb-3">
      <label htmlFor="age">age</label>
      <input ref={ageRef} type="number" className="form-control" id="age" placeholder="Password" />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  )
}

export default Form