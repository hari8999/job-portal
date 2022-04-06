import React from 'react'
import { Button } from '@material-ui/core';
import { useState } from 'react';

function Right(props) {


  const [isOpen, setIsOpen] = useState(true);

  const handleClick = ()=>{
    setIsOpen(!isOpen)
    // props.hasV = setIsOpen(!isOpen)
    // props.isOpen=isOpen
    // props.isOpen = isOpen
     props.values[1].setIsSignup(!props.values[1].isSignup)
      props.values[0].setIsSignin(false)
    console.log(props)
}
  return (
    <Button onClick={handleClick}>
        SIGNUP
      </Button>
  );
}

export default Right