import React from 'react'
import './UserInput.css'

const userInput = (props) => {
    return (
        <input 
            className="betterInput" 
            type="text" 
            onChange={props.change} value={props.username}
        />
    );
};

export default userInput;