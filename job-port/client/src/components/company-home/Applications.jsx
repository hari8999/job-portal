
import { useContext } from 'react';
import { Box, Typography, makeStyles, Button } from '@material-ui/core';
import { useState } from 'react';
import { getApplications } from '../../service/api';


function Left(props) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = async ()=>{
    var app= await getApplications()
    console.log(app);
    props.values[2].setAppli(app);
    setIsOpen(!isOpen)
     props.values[0].setIsApplications(!props.values[0].isApplications)
     props.values[1].setIsAddjob(false)
    console.log(isOpen)
}
  return (
    <Box >
      <Button onClick={handleClick}>
        APPLICATIONS
      </Button>
      
      

      {/* <handleClick /> */}
    </Box>
  );
}

export default Left