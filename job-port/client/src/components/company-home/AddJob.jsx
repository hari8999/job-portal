

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
     props.values[1].setIsAddjob(!props.values[1].isAddjob)
      props.values[0].setIsApplications(false)
    console.log(props)
}
  return (
    <Button onClick={handleClick}>
        ADDJOB
      </Button>
  );
}

export default Right