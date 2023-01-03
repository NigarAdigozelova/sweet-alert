import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading';
import MyCard from '../components/MyCard';

const Home = () => {
    const [data, setData] = useState(null)
    const [loading,setLoading]=useState(true)
    const URL = "http://localhost:3000/data";
    const getData =async()=>{
      await  axios.get(URL).then((resp) => setData(resp.data));
      setLoading(false)

    }
    useEffect(() => {
        getData()

    }, [])
   
    return (
        <>
            {loading? <Loading/>: <Grid container spacing={2} style={{marginTop:"30px"}}>
                {data && data.map((item, idx) => {
                    return <MyCard key={item.id} data={item} />
                })}
            </Grid>}
        </>
    )
}
export default Home
