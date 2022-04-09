// import './Quesitons.css';
import React, {useState, useEffect,useRef} from 'react';
import { InputUnstyled } from '@mui/base';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import {useLocation} from 'react-router-dom';
import {Link, useNavigate} from 'react-router-dom';

var NUM = 9;     
var radioButtonsChecked = new Array(NUM).fill(false);

function Questions(props) {
  const location = useLocation();
  const [inputs, setInputs] = useState(location.state);
  // const questionCounter = 0
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
    console.log(inputs)

  }
  // useRef(() => {     
  //   setInputs(inputs=> ({
  //     ...inputs,
  //     ["yes"]: radioButtonsChecked.filter(value => value === true).length,
  //   })) 
  // }, [])

  function handleClick(event){

    // console.log(inputs)




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
      console.log(json)

    })
    // navigate('/Results',{state:inputs});

  }

  return (
    <div>
      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">1. Do you work from home?</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          // defaultValue="yes"
          name="0"
          row
          // value="0"
          onChange={handleChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          <FormControlLabel value="other" control={<Radio />} label="What?" />
        </RadioGroup>
        <FormLabel id="demo-radio-buttons-group-label">2. Will your device be connected to a public or a private network or both?</FormLabel>
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
        <FormLabel id="demo-radio-buttons-group-label">3. Are you a programmer?</FormLabel>
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
          <FormControlLabel value="other" control={<Radio />} label="What?" />
        </RadioGroup>
        <FormLabel id="demo-radio-buttons-group-label">4. Do you intend to store data in locally in this device or on the cloud?</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          // defaultValue="yes"
          name="3"
          row
          // value="3"
          onChange={handleChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="local" />
          <FormControlLabel value="no" control={<Radio />} label="cloud" />
          <FormControlLabel value="other" control={<Radio />} label="What?" />
        </RadioGroup>
        <FormLabel id="demo-radio-buttons-group-label">5. Do you work with distributed systems?</FormLabel>
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
          <FormControlLabel value="other" control={<Radio />} label="What?" />
        </RadioGroup>
        <FormLabel id="demo-radio-buttons-group-label">6. Are you an ioT nerd?</FormLabel>
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
          <FormControlLabel value="other" control={<Radio />} label="What?" />
        </RadioGroup>
        <FormLabel id="demo-radio-buttons-group-label">7. Do you use smart devices such as Amazon Alexa or Google Home?</FormLabel>
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
          <FormControlLabel value="other" control={<Radio />} label="What?" />
        </RadioGroup>
        <FormLabel id="demo-radio-buttons-group-label">8. Do you intend to install any antivirus software on you new device?</FormLabel>
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
          <FormControlLabel value="other" control={<Radio />} label="What?" />
        </RadioGroup>
        <FormLabel id="demo-radio-buttons-group-label">9. Do you intend to use a VPN on you new device?</FormLabel>
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
          <FormControlLabel value="other" control={<Radio />} label="What?" />
        </RadioGroup>
      </FormControl>
      <Button onClick={handleClick} variant="contained">Submit</Button>

    </div>
  );
}

export default Questions;