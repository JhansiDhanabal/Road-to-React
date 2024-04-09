import React from 'react';
import "../styles/imagestyle.css";

const Image = ({src,alt}) =>{
    return (
        <img src={src} alt={alt} className='logo-image'></img>
    );
}

export default Image;