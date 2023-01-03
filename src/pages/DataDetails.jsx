import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const DataDetails = () => {
    
    const {id}=useParams()
    const [data,setData]=useState({})
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:3000/data/${id}`)
        .then((resp)=>setData(resp.data));

    },[id])
    function handleClick() {
    
      axios.delete(`http://localhost:3000/data/${id}`).then((resp)=>console.log(resp,"user deleted"));
      navigate('/')
      
    }
  return (
   <>
   <h1>ID-{data.id}</h1>
   <p>Name-{data.name} </p>
   <p>Age-{data.age} </p>
   <Button onClick={()=>handleClick()} variant="contained" color="error" style={{marginRight:"20px"}}>Delete {data.name}</Button>
   <Link to="/"> Go back</Link>
   
   </>
  )
}

export default DataDetails
