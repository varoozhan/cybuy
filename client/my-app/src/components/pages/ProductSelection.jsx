import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useNavigate} from 'react-router-dom';
import main_logo from "../../assets/other.png";
let w = window.innerWidth;
let h = window.innerHeight;

const userInput = {email:"", vendor:"", device:"", version:"", yes:0}


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
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="top"
    style={{ minHeight: '100vh',backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(${main_logo})`, backgroundSize: w + 'px ' + h + 'px'}}
    >
      <Grid style={{width:"50%", marginTop:'50px'}} item xs={3}>
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
      <Grid style={{width:"50%", margin:'29px 0 0 0'}} 
        item xs={3}>
        <TextField 
        fullWidth 
        id="outlined-basic" 
        label="Manufacturer" 
        variant="outlined" 
        onChange={handleChange}
        value={inputs.vendor}
        name="vendor"
        // style={{opacity: 1}}
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
      <Grid style={{width:"50%", margin:'30px 0 0 0'}} item xs={3}>
        <TextField 
        fullWidth 
        id="outlined-basic" 
        label="Version" 
        variant="outlined"
        onChange={handleChange}
        value={inputs.version}
        name="version"
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
