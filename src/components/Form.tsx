import React, { FormEvent, useRef, useState } from "react";
import {FieldValues, useForm} from "react-hook-form";


interface FormData {
  name: string; 
  age: number;
}
const Form = () => {
 const {register , handleSubmit , formState : {errors}} = useForm<FormData>()
 const onSubmit = (data:FieldValues) => console.log(data);
 

  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group mb-3">
        <label htmlFor="name">Name</label>
        <input
        {...register('name' , {required : true , minLength: 3})}
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter your name"
        />
        {errors.name?.type === "required" && <p className="text-danger">name is required</p>}
        {errors.name?.type === "minLength" && <p className="text-danger">The name must be at least 3 characters</p>}
      </div>
      <div className="form-group mb-3">
        <label htmlFor="age">age</label>
        <input
        {...register('age' , {required : "true"})}
          type="number"
          className="form-control"
          id="age"
          placeholder="Password"
        />

        {errors.age?.type === "required" && <p className="text-danger">Age is required</p>}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
