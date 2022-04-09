// import './Results.css';
import React, {useState} from 'react';
import {useLocation} from 'react-router-dom';

function Results() {
    const location = useLocation();
    const [inputs, setInputs] = useState(location.state);
    console.log(inputs)
    return (
        <div>
        <div> Results
        </div>
        </div>
    );
}

export default Results;