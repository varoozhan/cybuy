// import logo from './logo.svg';
// import React from 'react';
import React, {useState} from 'react';
import Box from '@mui/material/Box';
import './MainInputs.css';

// import './Heading.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { InputUnstyled } from '@mui/base';

// import Autocomplete from '@mui/material/Autocomplete';
const userInput = {email:"", vendor:"", device:""}


export default function MainInputs(props) {

  const [inputs, setInputs] = useState(userInput);
  const [sendToServer, setsendToServer] = useState(userInput);

  const [returnedResult, setreturnedResult] = useState([{}]);

  function handleChange(event){
    // console.log(event.target)

    const { name, value } = event.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
    setsendToServer({
      ...inputs,
      [name]: value,
    });
    
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
      body:JSON.stringify(sendToServer)
      }
    ).then(response => {
      return response.json()
    })
    .then(json => {
      console.log(json)
      setreturnedResult(json)
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
      <span className="btn">
        <Button onClick={handleClick} variant="contained">Submit</Button>
      </span>
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