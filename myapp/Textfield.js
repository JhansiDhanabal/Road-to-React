import React from "react";
import "../styles/inputtext.css";

const Textfield = ({placeholder, name, type,value, onChangeHandler}) =>{
    return(
        <input type={type} name={name} value={value} placeholder={placeholder} 
        onChange={
            (event) =>{
                let value=event.target.value;
                console.log('clicked');
                onChangeHandler(value);
            }
        }
        ></input>
    );
}

export default Textfield;