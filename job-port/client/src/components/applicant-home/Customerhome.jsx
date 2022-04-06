//import './App.css';
import APPLY from './Apply'
import JOBS from './JOBS'
import { useState } from 'react';
import { Box,makeStyles, Typography, TextField, FormControl, FormLabel, RadioGroup,FormControlLabel, Radio, Checkbox, Button } from '@material-ui/core';

import { addUser } from '../../service/api';
import { getJobs } from '../../service/api';
import { applyJob } from '../../service/api';


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
    // background: '#5F5F5F',
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
   marginLeft:'53%',
   marginTop:'10px'
  },
  form_text:{
      paddingRight:'5px'
  },
  outer:{
    display:'flex',
    borderColor:'black',
    marginTop:'10px'
    
  },
  jobsd:{
    margin:'2px 2px',
    padding:'10px 10px'
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
  const [isJobs, setIsJobs] = useState(false);
  const [isApply, setIsApply] = useState(false);
  const [data,setData] = useState([]);
    const[user, setUser]=useState({});
    const [applied,setApplied] = useState(false);
    const [applied1,setApplied1] = useState(false);

//   const onLoginSuccess =() /*async (res)*/ => {
//     var name = document.getElementById("namme").value;
//         console.log(name);
//         // setAccount(res.profileObj);
//         // setShowloginButton(false);
//         // setShowlogoutButton(true);
//         // await addUser(res.profileObj);  
//     };

  // function Applyform(){
  //   return (
  //     <form>

  //     </form>
  //   )
  // }

    const onSignupSuccess =async (res) => {
      var res={};
      setApplied(!applied);
      setIsApply(!isApply);
      // var buttons = document.getElementsByid("applied")
      // buttons.innerText="Applied"
      var Title = document.getElementById("title").value;
      res.title=Title;
      var SALARY = document.getElementById("salary").value;
      res.salary=SALARY;
      var JOBTYPE= document.getElementById("job_type").value;
      res.job_type=JOBTYPE;
      var SOP = document.getElementById("sop").value;
      res.sop=SOP;
      
      // console.log(res);
        // setAccount(res.profileObj);
        // setShowloginButton(false);
        // setShowlogoutButton(true);
      await applyJob(res);
    };



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
        <Typography className={classname.form_text}>Salary Mentioned:</Typography>
        <Box className={classname.signup_email}>
            <input 
          type="text" id="salary"
        />
        </Box>
        
      </Box>
      <Box className={classname.email_container}>
        <Typography className={classname.form_text}>Job Type Mentioned:</Typography>
        <Box className={classname.signup_email}>
             <input 
          type="text" id="job_type"
        />

        </Box>
      </Box>
      <Box className={classname.email_container}>
        <Typography className={classname.form_text}>SOP:</Typography>
      <Box className={classname.signup_email}>
          <input 
          type="text" id="sop"
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

  const handleEvent=async(res)=>{
        // res=user;
        var SOP= document.getElementsByid("sop").value;
        setIsApply(!isApply)
        // res.sop=SOP;

        // await applyJob(res)


  }

  function handleClick (){
    // setUser(user1);
    // console.log(user);
    setIsApply(!isApply)
    
    //  props.values[1].isSignup(false)
    // console.log(isOpen)
}

  return (
    <Box className={classname.app}>
      <Box className={classname.header}>
          <Button> Job Portal</Button>

          <Box className={classname.sub_header}>
              <JOBS values={[{isJobs, setIsJobs},{isApply, setIsApply},{data,setData}]}/>
  
          </Box>
      </Box>
      <Box className= {classname.container}>
        <Box className= {classname.main}>
          {(!isJobs && !isApply)? <Typography className={classname.title}>Welcome to Job Portal</Typography>:((isJobs)?<Box>{data&&data.map((user,index)=>(
            isApply?<MyForm2 values={{applied,setApplied}}/>:<div className={classname.outer}style={
    {
     border: '2px solid black'
    }
  } ><div className={classname.jobsd} >
                <div className={classname.inner}>Job Title:&nbsp;&nbsp;
                {user.title} 
              </div>
              <div className={classname.inner}>Description:&nbsp;&nbsp;
                {user.description} 
              </div>
              <div className={classname.inner}>Salary:&nbsp;&nbsp;
                 {user.salary} 
              </div>
              <div className={classname.inner}>Job:&nbsp;&nbsp;
                 {user.j_type}
              </div>
              </div>
              <div className={classname.button1}>
                <button value="submit"id="applied" onClick={handleClick} className={classname.button2}>
                      Apply
                </button>
              </div>
              </div>
          ))}</Box>:<Typography className={classname.title}>Welcome to Job Portal</Typography>)}
      </Box>
      </Box>
      
        
    </Box>
  );
}

export default Home