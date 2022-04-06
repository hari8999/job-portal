//import './App.css';
import APPLICATIONS from './Applications'
import ADDJOB from './AddJob'
import { useState } from 'react';
import { Box,makeStyles, Typography, TextField, FormControl, FormLabel, RadioGroup,FormControlLabel, Radio, Checkbox, Button } from '@material-ui/core';
import { addUser, addJob, getJobs } from '../../service/api';




const useStyles = makeStyles({
  app:{
  //  display:'block',
    height:'100vh',
    backgroundColor:'#CCEEFF'
    // backgroundImage:URL('https://wallpaperaccess.com/full/1900913.jpg')
  },
  header:{
    display:'flex',
    // height:'100px',
    //background:'pink'
  },
  
  main:{
      //background:'red',
      height: '95vh',


  },
  sub_header:{
    marginLeft: 'auto',
    display:'flex',
    alignItems:'center',
    marginRight: '50px'
  },
  container:{
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title:{
    marginTop: '100%',
    fontWeight:'bold',
    fontSize: '30px'
  },
  signup_container:{
    marginTop: '70%',
    // /
    height: "50%",
    display: 'flex',
    alignItems: 'center',
    //justifyContent: 'center'
  
  },
  email_container:{
    display:'flex',
    padding:'5px 2px'

  },
  signup_email:{
    marginLeft:'auto'
  },
  signup_email_1:{
    marginLeft:'2px'
  },
  signup_email_2:{
    marginLeft:'1px'
  },
  sub:{
   marginLeft:'60%',
   marginTop:'10px'
  },
  form_text:{
      paddingRight:'5px'
  },
  outer:{
    display:'flex',
    borderColor:'black',
    
  },
  jobsd:{
    margin:'2px 2px',
    padding:'10px 10px',
  },
  button1:{
    marginTop:'40px',
    padding:'15px 15px',
    marginLeft:'auto',
  },
  button2:{
    backgroundColor:''
  },
  inner:{
    padding:'5px 5px'
  }

 
})

function Home() {

    const classname = useStyles();
  const [isApplications, setIsApplications] = useState(false);
  const [isAddjob, setIsAddjob] = useState(false);
  const [appli, setAppli] =useState([]);

//   const onLoginSuccess =() /*async (res)*/ => {
//     var name = document.getElementById("namme").value;
//         console.log(name);
//         // setAccount(res.profileObj);
//         // setShowloginButton(false);
//         // setShowlogoutButton(true);
//         // await addUser(res.profileObj);  
//     };

    const onSignupSuccess =async (res) => {
      var res={};
      setIsAddjob(!isAddjob)
      var TITLE = document.getElementById("title").value;
      res.title=TITLE;
      var DESCRIPTION = document.getElementById("description").value;
      res.description=DESCRIPTION;
      var SALARY= document.getElementById("salary").value;
      res.salary=SALARY;
      var J_TYPE = document.getElementById("j_type").value;
      res.j_type=J_TYPE;
      console.log(res);
        // setAccount(res.profileObj);
        // setShowloginButton(false);
        // setShowlogoutButton(true);
           await addJob(res);
    };

    function MyForm1(){

        return(
            <Box>
                Hello From Applicants
            </Box>
        )
    }


    function MyForm2() {

  return (
    <Box className={classname.signup_container}>
    <form >
      <Box className={classname.email_container}>
        <Typography className={classname.form_text}>Job Title:</Typography>
        <Box className={classname.signup_email}>
        <input 
          type="text" id="title"
        />
        </Box>
      </Box>
      <Box className={classname.email_container}>
        <Typography className={classname.form_text}>Job Description:</Typography>
        <Box className={classname.signup_email}>
        <input 
          type="text" id="description"
        />
        </Box>
      </Box>
      <Box className={classname.email_container}>
        <Typography className={classname.form_text}>Salary:</Typography>
        <Box className={classname.signup_email}>
        <input 
          type="text" id="salary"
        />
        </Box>

      </Box>
      <Box className={classname.email_container}>
        <Typography className={classname.form_text}>Mode of Work:</Typography>
        <Box className={classname.signup_email}>
        <input 
          type="text" id="j_type"
        />
        </Box>
      </Box>
      <Box className={classname.sub}>
        <input type="submit" onClick={onSignupSuccess} id="signupsubmit"/>
      </Box>
    </form>
    </Box>
  )
}
  return (
    <Box className={classname.app}>
      <Box className={classname.header}>

        
          
        <Button> Job Portal</Button>

        <Box className={classname.sub_header}>
            <APPLICATIONS values={[{isApplications, setIsApplications},{isAddjob, setIsAddjob},{appli,setAppli}]}/>
            <ADDJOB values={[{isApplications, setIsApplications},{isAddjob, setIsAddjob}]}/>
        </Box>

        

      </Box>

      <Box className= {classname.container}>
        <Box className= {classname.main}>
          {(!isApplications&&!isAddjob)? <Typography className={classname.title}>Welcome to Job Portal</Typography>:((isApplications && !isAddjob)?<Box>{appli&&appli.map((appli1)=>(
            <div className={classname.jobsd}style={
    {
     border: '2px solid black'
    }
  }><div className={classname.inner}>
                Job Title:&nbsp;&nbsp;{appli1.title} 
              </div>
              <div className={classname.inner}>
                Salary Mentioned for Job:&nbsp;&nbsp;{appli1.salary} 
              </div>
              <div className={classname.inner}>
                 Mode of Work Mentioned in Job:&nbsp;&nbsp;{appli1.job_type} 
              </div>
              <div className={classname.inner}>
                 SOP:&nbsp;&nbsp;{appli1.sop}
              </div>
  
              
              </div>
          ))}</Box>:(!isApplications && isAddjob)?<MyForm2 />:<Typography className={classname.title}>Welcome to Job Portal</Typography>)}
      </Box>
        </Box>
    </Box>
  );
}

export default Home