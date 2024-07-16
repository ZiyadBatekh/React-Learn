import React, { FormEvent, useRef, useState } from "react";
import {FieldValues, useForm} from "react-hook-form";

const Form = () => {
 const {register , handleSubmit} = useForm()

 const onSubmit = (data:FieldValues) => console.log(data);
 

  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group mb-3">
        <label htmlFor="name">Name</label>
        <input
        {...register('name')}
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter your name"
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="age">age</label>
        <input
        {...register('age')}
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
