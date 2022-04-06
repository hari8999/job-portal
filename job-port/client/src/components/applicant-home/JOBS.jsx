
import { useContext } from 'react';
import { Box, Typography, makeStyles, Button } from '@material-ui/core';
import { useState } from 'react';
import { getJobs } from '../../service/api';
const useStyles = makeStyles({
 sign_in:{
        height:'120px'
  },

})

function Left(props) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = async ()=>{
    var ar=[];
    var jobsss = await getJobs();
    
    props.values[2].setData(jobsss)
    console.log(ar);

    
    
    setIsOpen(!isOpen)
     props.values[0].setIsJobs(isOpen)
    //  props.values[1].isSignup(false)
    // console.log(isOpen)
}
  return (
    <Box className={useStyles.sign_in}>
      <Button onClick={handleClick}>
        JOBS
      </Button>
      
      

      {/* <handleClick /> */}
    </Box>
  );
}

export default Left
