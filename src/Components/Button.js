import React from 'react';

function Button(props) {
    const className = props.class || "btn btn-default";
    const text = props.text;
    function handleClick(e) {
        e.preventDefault();
        if(props.click) {
            props.click();
        }
      }

    return(
        <button className={className} onClick={handleClick}>{text}</button>
    )
  };

export default Button;