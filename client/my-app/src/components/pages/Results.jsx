// import './Results.css';
import React, {useState} from 'react';
import {useLocation} from 'react-router-dom';
import ReactSpeedometer from "react-d3-speedometer"
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Results() {
    const location = useLocation();
    const [inputs, setInputs] = useState(location.state);
    var description = 0

    function resultsDescription(){
        if(inputs.score_average < 2.5){
            description = "Not risky, purchasing the product will be a safe bet!"
        } else if(inputs.score_average > 2.5 && inputs.score_average < 5){
            description = "Slightly Risky, every product has its fair share of risk associated with it. This is pretty normal. Depending on your risk tolerance, this may or may not be a good product to purchase."
        } else if(inputs.score_average > 5 && inputs.score_average < 7.5){
            description = "Moderately risky, you may be able to mitigate some risk by reassessing the security measures you take in your own home."
        } else if(inputs.score_average > 2.5 && inputs.score_average < 5){
            description = "High Risk! It’s probably best if you don’t purchase this device or change some of the security measures you take regarding the devices you already use. Try searching for alternative or competitor’s products instead."
        }else{
            description = "ALERT! Extreme risk! You should consider purchasing another product and/or reassessing the security measures you take in your home."
        }
        return description
    }

    function handleClickNext(){

    }

    console.log(inputs)
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
                <Typography variant="h2" >
                    Results!
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography variant="h5" >
                Your "{inputs.vendor} {inputs.device}" device returns a risk score of:
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <ReactSpeedometer
                    minValue={0}
                    maxValue={100}
                    startColor='#33CC33'
                    endColor='#FF0000'
                    value={inputs.score_average*10}
                    valueTextFontSize='25px'
                    // width='350'
                    // height='350'
                />
            </Grid>
            <Grid item xs={3}>
                <Typography variant="h5" >
                {resultsDescription()}
                </Typography>
            </Grid>
            {/* <Grid item xs={3}>
            <Button 
            style={{ margin:'30px 0 0 0' }} 
            onClick={handleClickNext} 
            variant="contained">
                Analysis
            </Button>
            </Grid> */}
        </Grid>  

    );
}

export default Results;