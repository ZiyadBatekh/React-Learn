import React, { FormEvent, useRef, useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({
    name: "",
    age: 0,
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
    
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="name">Name</label>
        <input
        value={person.name}
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter your name"
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="age">age</label>
        <input
        value={person.age}
          onChange={(event) =>
            setPerson({ ...person, age: parseInt(event.target.value) })
          }
          type="number"
          className="form-control"
          id="age"
          placeholder="Password"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
