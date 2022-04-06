
import React from 'react'
import { Button } from '@material-ui/core';
import { useState } from 'react';

function MyForm() {

  return (
    <form>
      <label>Enter your name:
        <input 
          type="text" 
        />
      </label>
      <input type="submit" />
    </form>
  )
}

function Right(props) {


  const [isOpen, setIsOpen] = useState(true);

  const handleClick = ()=>{
    setIsOpen(!isOpen)
    // props.hasV = setIsOpen(!isOpen)
    // props.isOpen=isOpen
    // props.isOpen = isOpen
     props.values[1].setIsApply(isOpen)
      // props.values[0].setIsSignin(false)
    console.log(props)
}
  return (
    <Button onClick={handleClick}>
        APPLY
      </Button>
  );
}

export default Right