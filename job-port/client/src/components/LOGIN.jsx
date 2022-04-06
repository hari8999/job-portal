import { useContext } from 'react';
import { Box, Typography, makeStyles, Button } from '@material-ui/core';
import { useState } from 'react';
const useStyles = makeStyles({
 sign_in:{
        
  },

})


function Left(props) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = ()=>{
    setIsOpen(!isOpen)
     props.values[0].setIsSignin(!props.values[0].isSignin)
     props.values[1].setIsSignup(false)
    console.log(isOpen)
}
  return (
    <Box className={useStyles.sign_in}>
      <Button onClick={handleClick}>
        LOGIN
      </Button>
      
      

      {/* <handleClick /> */}
    </Box>
  );
}

export default Left