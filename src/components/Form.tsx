import React, { FormEvent, useRef, useState } from "react";
import {FieldValues, useForm} from "react-hook-form";
import z from"zod";
import {zodResolver} from "@hookform/resolvers/zod";


const schema = z.object({
  name:z.string().min(3, {message:"Name must be at least 3 characters"}),
  age: z.number({invalid_type_error:"Age is required"}).min(18)
})

type FormData = z.infer<typeof schema>


const Form = () => {
 const {register , handleSubmit , formState : {errors}} = useForm<FormData>({resolver : zodResolver(schema)})
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
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
        
      </div>
      <div className="form-group mb-3">
        <label htmlFor="age">age</label>
        <input
        {...register('age', {valueAsNumber:true})}
          type="number"
          className="form-control"
          id="age"
          placeholder="Password"
        />

       {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
