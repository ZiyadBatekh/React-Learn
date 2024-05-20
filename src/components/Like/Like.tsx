import { useState } from "react";
import { FcLike,FcLikePlaceholder } from "react-icons/fc";

interface Props{
  onClick:() => void
}
const Like = ({onClick}:Props) => {

  const toggle = () =>{
    setStatus(!status);
    onClick();
  } 
  

  const[status,setStatus]= useState(true)
   if (status) return <FcLike size={40} onClick={toggle}></FcLike>
  return <FcLikePlaceholder size={40} onClick={toggle}></FcLikePlaceholder>
}

export default Like