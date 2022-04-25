// import './Quesitons.css';
import React, {useState} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import {useLocation} from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import main_logo from "../../assets/other.png";

let w = window.innerWidth;
let h = window.innerHeight;
var NUM = 9;     
var radioButtonsChecked = new Array(NUM).fill(false);


function Questions() {

  const location = useLocation();
  const [inputs, setInputs] = useState(location.state);
  const navigate = useNavigate();

  function handleChange(event){
    // console.log(event.target.value)
    const { name, value } = event.target;

    if(value === "yes"){
      radioButtonsChecked[parseInt(name)] = true
    }else{
      radioButtonsChecked[parseInt(name)] = false
    }
    // console.log(radioButtonsChecked)
    setInputs(inputs=> ({
      ...inputs,
      ["yes"]: radioButtonsChecked.filter(value => value === true).length,
    })) 

  }
  
  function handleClickPrevious(){
    navigate('/product_selection');
  }

  function handleClick(event){

    fetch("http://127.0.0.1:5000/product_selection", {
      method:"POST",
      cache: "no-cache",
      headers:{
          "content_type":"application/json",
      },
      body:JSON.stringify(inputs)
      }
    ).then(response => {
      return response.json()
    })
    .then(json => {
    navigate('/Results',{state: json});

    })

  }

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="top"
      style={{ minHeight: '100vh',backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(${main_logo})`, backgroundSize: w + 'px ' + h + 'px'}}
      >
      <Grid item xs={3} style={{ marginTop:'50px'}}>
      <Typography variant="body1" >
        1. Will you be using this device with its own security precautions or do you plan to install additional antivirus software?
        </Typography>
        </Grid>   
        <Grid item xs={3}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          // defaultValue="yes"
          name="0"
          row
          // value="0"
          onChange={handleChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="On its own" />
          <FormControlLabel value="no" control={<Radio />} label="With Antivirus Software " />
          <FormControlLabel value="other" control={<Radio />} label="Unsure" />
        </RadioGroup>
      </Grid> 
      <Grid item xs={3}>
      <Typography variant="body1" >
        2. Do you intend to directly connect to a network or use a VPN with your new device?
        </Typography>
        </Grid>   
        <Grid item xs={3}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          // defaultValue="yes"
          name="0"
          row
          // value="0"
          onChange={handleChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Directly" />
          <FormControlLabel value="no" control={<Radio />} label="VPN" />
          <FormControlLabel value="other" control={<Radio />} label="Unsure" />
        </RadioGroup>
      </Grid>   
      <Grid item xs={3}>
      <Typography variant="body1" >
        3. Do you use smart devices such as Amazon Alexa or Google Home? 
        </Typography>
        </Grid>   
        <Grid item xs={3}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          // defaultValue="yes"
          name="1"
          row
          // value="1"
          onChange={handleChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Public" />
          <FormControlLabel value="no" control={<Radio />} label="Private" />
          <FormControlLabel value="other" control={<Radio />} label="both?" />
        </RadioGroup>
      </Grid> 
      <Grid item xs={3}>
      <Typography variant="body1" >
        4. Do you intend to store data in locally in this device or on the cloud?
        </Typography>
        </Grid>   
        <Grid item xs={3}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          // defaultValue="yes"
          name="2"
          row
          // value="2"
          onChange={handleChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          <FormControlLabel value="other" control={<Radio />} label="Unsure?" />
        </RadioGroup>
      </Grid> 
      <Grid item xs={3}>
      <Typography variant="body1" >
        5. Do you intend to install any antivirus software on you new device?
        </Typography>
        </Grid>   
        <Grid item xs={3}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          // defaultValue="yes"
          name="3"
          row
          // value="3"
          onChange={handleChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Local" />
          <FormControlLabel value="no" control={<Radio />} label="cloud" />
          <FormControlLabel value="other" control={<Radio />} label="Unsure?" />
        </RadioGroup>
      </Grid> 
      <Grid item xs={3}>
      <Typography variant="body1" >
        6. Have you been the target of a cyberattack in the past?
        </Typography>
        </Grid>   
        <Grid item xs={3}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          // defaultValue="yes"
          name="4"
          row
          // value="4"
          onChange={handleChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          <FormControlLabel value="other" control={<Radio />} label="Unsure?" />
        </RadioGroup>
      </Grid> 
      <Grid item xs={3}>
      <Typography variant="body1" >
        7. Do you work with distributed systems?
        </Typography>
        </Grid>   
        <Grid item xs={3}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          // defaultValue="yes"
          name="5"
          row
          // value="5"
          onChange={handleChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          <FormControlLabel value="other" control={<Radio />} label="Unsure?" />
        </RadioGroup>
      </Grid> 
      <Grid item xs={3}>
      <Typography variant="body1" >
        8. Do you work from home?         
        </Typography>
        </Grid> 
        <Grid item xs={3}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          // defaultValue="yes"
          name="6"
          row
          // value="6"
          onChange={handleChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          <FormControlLabel value="other" control={<Radio />} label="Unsure?" />
        </RadioGroup>
      </Grid>
      <Grid item xs={3}>
      <Typography variant="body1" >
        9. Are you a programmer?
        </Typography>
        </Grid>   
        <Grid item xs={3}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          // defaultValue="yes"
          name="7"
          row
          // value="7"
          onChange={handleChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          <FormControlLabel value="other" control={<Radio />} label="Unsure?" />
        </RadioGroup>
      </Grid> 
      <Grid item xs={3}>
      <Typography variant="body1" >
        10. Are you an ioT nerd?
          </Typography>
          </Grid>   
        <Grid item xs={3}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          // defaultValue="yes"
          name="8"
          row
          // value="8"
          onChange={handleChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          <FormControlLabel value="other" control={<Radio />} label="Unsure?" />
        </RadioGroup>
      </Grid> 
      <Grid item xs={3}>
        <Button 
        style={{ margin:'30px 0 0 0' }} 
        onClick={handleClickPrevious} 
        variant="contained">
          Previous
        </Button>
        <Button 
        style={{ margin:'30px 0 0 50px' }}
        onClick={handleClick} 
        variant="contained" >
          Results!
        </Button>
      </Grid> 
    </Grid>
  );
}

export default Questions;