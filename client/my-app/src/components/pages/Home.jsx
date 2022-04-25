import React, {useState} from 'react';
// import {useLocation} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import main_logo from "../../assets/home.png";

function Home() {
    const navigate = useNavigate();

    function handleClickNext(){
        navigate('/product_selection');

    }

    return (
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="top"
        style={{ minHeight: '100vh', marginTop:'50px' }}
        >
            <Grid item xs={3}>
                <Typography variant="h4" >
                    Check to see if a device you want to buy is vulnerable to cyber attacks!
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <img
                    src={main_logo}
                    alt="CYBUY"
                    loading="lazy"
                />
            </Grid>
            <Grid item xs={3}>
                <Button 
                style={{ margin:'30px 0 0 0' }} 
                onClick={handleClickNext} 
                variant="contained">
                    Let's Get Started
                </Button>
            </Grid>
        </Grid>  

    );
}

export default Home;