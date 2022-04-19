// import logo from './logo.svg';
// import React from 'react';
import React, {useState} from 'react';
import Box from '@mui/material/Box';
// import './ProductSelection.css';
// import './Heading.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import {Link, useNavigate} from 'react-router-dom';


// import Autocomplete from '@mui/material/Autocomplete';
const userInput = {email:"", vendor:"", device:"", yes:0}


export default function ProductSelection(props) {

  const [inputs, setInputs] = useState(userInput);
  const navigate = useNavigate();

  function handleChange(event){
    // console.log(event.target)
    const { name, value } = event.target;

    setInputs({
      ...inputs,
      [name]: value,
    });

  }
  function handleClick(event){
    navigate('/Questions',{state:inputs});

  }

  function handleClickPrevious(){
    navigate('/');
  }

  return (
    // <Box
    //   component="form"
    //   sx={{
    //     '& > :not(style)': { m: 2, width: 'center' },        
    //   }}
    //   noValidate
    //   autoComplete="off"
    //   style={{ textAlign: "left", marginTop: 20 }}
    // >
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="top"
    style={{ minHeight: '100vh', marginTop:'50px' }}
    >
      <Grid style={{width:"50%"}} item xs={3}>
        <TextField 
          fullWidth 
          id="outlined-basic" 
          label="Your Email" 
          variant="outlined"
          margin="dense"
          onChange={handleChange}
          value={inputs.email}
          name="email"
        />
      </Grid>
      <Grid style={{width:"50%", margin:'29px 0 0 0'}} item xs={3}>
        <TextField 
        fullWidth 
        id="outlined-basic" 
        label="Manufacturer" 
        variant="outlined" 
        onChange={handleChange}
        value={inputs.vendor}
        name="vendor"
        />
      </Grid>
      <Grid style={{width:"50%", margin:'30px 0 0 0'}} item xs={3}>
        <TextField 
        fullWidth 
        id="outlined-basic" 
        label="Device" 
        variant="outlined"
        onChange={handleChange}
        value={inputs.device}
        name="device"
         />
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
        onClick={()=>{handleClick()}} 
        variant="contained">
          Next
        </Button>
      </Grid>
    </Grid>
  );
}
