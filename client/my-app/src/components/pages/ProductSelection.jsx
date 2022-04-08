// import logo from './logo.svg';
// import React from 'react';
import React, {useState} from 'react';
import Box from '@mui/material/Box';
import './ProductSelection.css';
// import './Heading.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { InputUnstyled } from '@mui/base';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

// import Autocomplete from '@mui/material/Autocomplete';
const userInput = {email:"", vendor:"", device:""}


export default function MainInputs(props) {

  const [inputs, setInputs] = useState(userInput);
  // const [sendToServer, setsendToServer] = useState(userInput);

  // const [returnedResult, setreturnedResult] = useState([{}]);

  function handleChange(event){
    // console.log(event.target)

    const { name, value } = event.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
    // setsendToServer({
    //   ...inputs,
    //   [name]: value,
    // });
    
    // setsendToServer({email:email, vendor:vendor,device:device})

    // const x = {email: event.target.value}
    // const {email, vendor, device} = event.target.value
    // setInputs({email: event.target.value})
    // console.log(inputs)

  }
  function handleClick(event){

    // console.log(sendToServer.email)
    // console.log(Object.keys(inputs)[0])
    // inputs.keys())

    // NOT AURE ABOUT THIS SNIPPET, MIGHT CAUSE ERROR AFTER 2ND CLICK
    // const { email, vendor, device } = inputs;
    // console.log(vendor)
    // console.log(device)
    // setsendToServer({email:email, vendor:vendor,device:device})

    // setsendToServer({
    //   ...sendToServer,
    //   [name2]: value2,
    // });
    
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
      // sendToServer
    // this.setState({playerName: json[0]})
    })

    // fetch(`http://127.0.0.1:5000/product_selection`,{
    //   'methods':'GET',
    //   headers : {
    //     'Content-Type':'application/json'
    //   }
    // })
    // .then(response => response.json())
    // .then(json=> setreturnedResult(json.result))
    // // .then(json=> console.log(json.result))
    // .catch(error => console.log(error))
    // // setreturnedResult(returnedResult)
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: 'center' },        
      }}
      noValidate
      autoComplete="off"
      style={{ textAlign: "left", marginTop: 20 }}
    >
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
        <TextField 
        fullWidth 
        id="outlined-basic" 
        label="Manufacturer" 
        variant="outlined" 
        onChange={handleChange}
        value={inputs.vendor}
        name="vendor"
        />
        <TextField 
        fullWidth 
        id="outlined-basic" 
        label="Device" 
        variant="outlined"
        onChange={handleChange}
        value={inputs.device}
        name="device"
         />

      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">1. Do you work from home?</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          row
          // onChange={}
        >
          <FormControlLabel value="female" control={<Radio />} label="Yes" />
          <FormControlLabel value="male" control={<Radio />} label="No" />
          <FormControlLabel value="other" control={<Radio />} label="What?" />
        </RadioGroup>
        <FormLabel id="demo-radio-buttons-group-label">2. Will your device be connected to a public or a private network or both?</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          row
        >
          <FormControlLabel value="female" control={<Radio />} label="Public" />
          <FormControlLabel value="male" control={<Radio />} label="Private" />
          <FormControlLabel value="other" control={<Radio />} label="both?" />
        </RadioGroup>
        <FormLabel id="demo-radio-buttons-group-label">3. Are you a programmer?</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          row
        >
          <FormControlLabel value="female" control={<Radio />} label="Yes" />
          <FormControlLabel value="male" control={<Radio />} label="No" />
          <FormControlLabel value="other" control={<Radio />} label="What?" />
        </RadioGroup>
        <FormLabel id="demo-radio-buttons-group-label">4. Do you intend to store data in locally in this device or on the cloud?</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          row
        >
          <FormControlLabel value="female" control={<Radio />} label="local" />
          <FormControlLabel value="male" control={<Radio />} label="cloud" />
          <FormControlLabel value="other" control={<Radio />} label="What?" />
        </RadioGroup>
        <FormLabel id="demo-radio-buttons-group-label">5. Do you work with distributed systems?</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          row
        >
          <FormControlLabel value="female" control={<Radio />} label="Yes" />
          <FormControlLabel value="male" control={<Radio />} label="No" />
          <FormControlLabel value="other" control={<Radio />} label="What?" />
        </RadioGroup>
        <FormLabel id="demo-radio-buttons-group-label">6. Are you an ioT nerd?</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          row
        >
          <FormControlLabel value="female" control={<Radio />} label="Yes" />
          <FormControlLabel value="male" control={<Radio />} label="No" />
          <FormControlLabel value="other" control={<Radio />} label="What?" />
        </RadioGroup>
        <FormLabel id="demo-radio-buttons-group-label">7. Do you use smart devices such as Amazon Alexa or Google Home?</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          row
        >
          <FormControlLabel value="female" control={<Radio />} label="Yes" />
          <FormControlLabel value="male" control={<Radio />} label="No" />
          <FormControlLabel value="other" control={<Radio />} label="What?" />
        </RadioGroup>
        <FormLabel id="demo-radio-buttons-group-label">8. Do you intend to install any antivirus software on you new device?</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          row
        >
          <FormControlLabel value="female" control={<Radio />} label="Yes" />
          <FormControlLabel value="male" control={<Radio />} label="No" />
          <FormControlLabel value="other" control={<Radio />} label="What?" />
        </RadioGroup>
        <FormLabel id="demo-radio-buttons-group-label">9. Do you intend to use a VPN on you new device?</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          row
        >
          <FormControlLabel value="female" control={<Radio />} label="Yes" />
          <FormControlLabel value="male" control={<Radio />} label="No" />
          <FormControlLabel value="other" control={<Radio />} label="What?" />
        </RadioGroup>
      </FormControl>
      <Button onClick={handleClick} variant="contained">Submit</Button>
      
      <div className='mt-2'>
        {/* {returnedResult.result.map(result => {
          // return <span key={JSON.stringify(result)._id}>{JSON.stringify(result)}</span>
          // return <span>{JSON.stringify(result)}</span>
        })} */}
        {/* {returnedResult.result} */}
      </div>

    </Box>
  );
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const top100Films = [
//   { "manufacturer": 'apple', "device": 'apple' },
//   { "title": 'samsung', "year": 'galaxy' },
// ]


// {/* <div className='mt-2'>
// {props.returnedResult && props.returnedResult.map(each_result =>{
//   return(
//     <div key={each_result._id}>
//       {/* {each_result.cve.CVE_data_meta.ID} */}
//     </div>
//   )
// })}
// </div> */}

// {/* <div className="mt-2">
// {/* Display the article details if article is not None */} 
// {props.articles && props.articles.map(article =>{
//     return (

//       <div key= {article.id}>
//         <h2 className="text-primary"> { article.title} </h2>
//         <p> { article.body } </p>
//         <p> { article.date } </p>
//         <hr/>
//       </div>
//     )

//     })}
// </div> */}



  // useEffect(()=>{
  //   fetch(`http://127.0.0.1:5000/entries`,{
  //     'methods':'GET',
  //     headers : {
  //       'Content-Type':'application/json'
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(json=> setreturnedResult(json.result))
  //   .then(json=> console.log(json.result))
  //   .catch(error => console.log(error))
  // },[input])
  // input