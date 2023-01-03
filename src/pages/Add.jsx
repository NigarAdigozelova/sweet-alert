import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [data,setData]=useState(  {name:"",age:null});
  const navigate=useNavigate()
  function handleChange(e) { 
setData({
  ...data,[e.target.name]:e.target.value
})
    
  }
  function handleClick() {
    axios.post("http://localhost:3000/data ",data)
    navigate('/')
  }
  return (
    <>
      <div style={{display:"flex",alignItems:"center",height:"100vh",justifyContent:"center"}}>
        <form method='post' >
          <TextField onChange={(e)=>handleChange(e)} name="name" id="name" label="Name" variant="outlined" />
          <TextField onChange={(e)=>handleChange(e)} name="age" id="age" label="Age" variant="outlined" />
          <Button onClick={()=>handleClick()} variant="contained" color="warning">ADD</Button>


        </form>
      </div>

    </>
  )
}

export default Add
