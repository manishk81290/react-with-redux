import React from 'react';
import ColorChange from '../hoc/ColorChange';

const About=()=>{
    return(
        <div className="container">
            <h1 className="center blue-text">About</h1>
            <p className="center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum dolore odit quas temporibus architecto non ducimus inventore modi cupiditate, iure assumenda, doloremque accusamus et maiores unde numquam optio esse enim.
            </p>
        </div>
    )
}

export default ColorChange(About);