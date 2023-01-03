import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{background:"linear-gradient(90deg, rgba(36,0,31,1) 0%, rgba(255,186,186,1) 35%, rgba(253,103,210,1) 100%)"}}>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <Button variant='contained'  color="inherit"><Link to='/'>Home</Link></Button>
          <Button variant='contained' style={{marginLeft:"20px"}} color="inherit"><Link to='/add'>Add</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
   </>
  )
}

export default Navbar
