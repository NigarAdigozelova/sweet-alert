import { CircularProgress } from '@mui/material'
import React from 'react'

const Loading = () => {
  return (
    <>
    <div style={{marginTop:"20px",height:"100vh",display:"flex",alignItems:"center"}}>
    <CircularProgress color="secondary" />
    </div>
    </>
  )
}

export default Loading
