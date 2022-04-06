//import './App.css';
import LOGIN from './LOGIN'
import SIGNUP from './SIGNUP'
import { useState } from 'react';
import { Box,makeStyles, Typography, TextField, FormControl, FormLabel, RadioGroup,FormControlLabel, Radio, Checkbox, Button } from '@material-ui/core';

import { addUser, getUsers } from '../service/api';

import Customerhome from './applicant-home/Customerhome'
import Comphome from './company-home/Comphome'
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
  }

 
})

function Home(props) {

    const classname = useStyles();
  const [isSignin, setIsSignin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [isRender, setIsRender] = useState(false);

  const onLoginSuccess = async (res) => {
      var res={};
      // props.values[0].setCust(true)
      // props.values[1].setComp(true)
      var EMAIL1 = document.getElementById("email1").value;
      res.email=EMAIL1;
      // console.log(res);
      var PASSWORD1= document.getElementById("password2").value;
      res.password=PASSWORD1;
      var APPLICANT1 = document.getElementById("applicant1").value;
      var COMPANY1 = document.getElementById("company1").value;
      var array = await getUsers(res);
      // props.values[0].setCust(true)
      // props.values[1].setComp(true)
      console.log(array);
      console.log(props.values[0].setCust);
      if((array.personn)===APPLICANT1){
        props.values[0].setCust(true);
      props.values[1].setComp(false);
      console.log(props.values[0].isCust);
    console.log(props.values[1].isComp);
      }
      if((array.personn)===COMPANY1){
        props.values[1].setComp(!props.values[1].isComp);
        props.values[0].setCust(false);
        console.log(props.values[0].isCust);
    console.log(props.values[1].isComp);
      }

      
      
      // if(array)
      // setIsSignin(!isSignin);
      // console.log(APPLICANT1===);
//       if(document.getElementById('applicant1').checked) {
//           // res.personn=APPLICANT;
//           props.values[0].setCust(true);
//   //Male radio button is checked
//     // console.log("Applicant")
//     }else if(document.getElementById('company1').checked) {
//       // res.personn=COMPANY;
//       props.values[1].setComp(true);
//     // console.log("Company")
// }

    //   for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
    //     // console.log(APPLICANT1===element.personn);
    //     if((element.email===EMAIL1) &&(element.password===PASSWORD1)){
    //       if(APPLICANT1===element.personn){
    //           ans1=1;
    //       }
    //       else{
    //         ans2=1;
    //       }
              
    //   }

    // }
    // console.log(ans1);
    // console.log(ans2);
    // console.log(props.values[1].isComp);
    // if(ans1===1){
    //   props.values[0].setCust(true);
    //   props.values[1].setComp(false);
    // }
    // else if(ans2===1){
    //   props.values[1].setComp(true);
    //   props.values[0].setCust(false);
    // }
    // else{
    //   alert("Enter valid details")
    // }
    
  }

    const onSignupSuccess =async (res) => {
      var res={};
      var NAME = document.getElementById("name").value;
      res.name=NAME;
      var EMAIL = document.getElementById("email").value;
      res.email=EMAIL;
      var PASSWORD= document.getElementById("password").value;
      res.password=PASSWORD;
      var APPLICANT = document.getElementById("applicant").value;
      var COMPANY = document.getElementById("company").value;
      setIsRender(true)
      // var RESUME = document.getElementById("resume").value;
      // res.resume={RESUME};
      if(document.getElementById('applicant').checked) {
          res.personn=APPLICANT;
          props.values[0].setCust(true);
  //Male radio button is checked
    // console.log("Applicant")
    }else if(document.getElementById('company').checked) {
      res.personn=COMPANY;
      props.values[1].setComp(true);
    // console.log("Company")
}
console.log(res);
        // setAccount(res.profileObj);
        // setShowloginButton(false);
        // setShowlogoutButton(true);
           await addUser(res);
    };

function MyForm1() {

  return (
    <Box className={classname.signup_container}>
    <form >
      <Box className={classname.email_container}>
        <Typography className={classname.form_text}>Email </Typography>
        <Box className={classname.signup_email}>
            <input 
          type="email" id="email1"
        />
        </Box>
        
      </Box>
      <Box className={classname.email_container}>
        <Typography className={classname.form_text}>Password </Typography>
        <Box className={classname.signup_email}>
          <input 
          type="password" id="password2"
        />
        </Box>
        
      </Box>
      <Box className={classname.name}>
        <Box className={classname.email_container}>

        
        <Typography className={classname.form_text}>Applicant</Typography>
        <Box className={classname.signup_email_1}>
        <input type="radio" id="applicant1" name="job_port" value="Applicant"></input>
          </Box>
          </Box>
          <Box className={classname.email_container}>

          
          <Typography className={classname.form_text}>Company</Typography>
          <Box className={classname.signup_email_2}>
        <input type="radio" id="company1" name="job_port" value="Company"></input>
        </Box>
        </Box>
      </Box>
      <Box className={classname.sub}>
        <input type="submit" value="submit" onClick={()=>onLoginSuccess()} id="signinsubmit"/>
      </Box>
    </form>
    </Box>
  )
}


    function MyForm2() {

  return (
    <Box className={classname.signup_container}>
    <form >
      <Box className={classname.email_container}>
        <Typography className={classname.form_text}>Name</Typography>
        
        <Box className={classname.signup_email}>

        
        <input 
          type="text" id="name"
        />
        </Box>
      
      </Box>
      <Box className={classname.email_container}>
        <Typography className={classname.form_text}>
            Email
        </Typography>
      <Box className={classname.signup_email}>
          <input 
          type="email" id="email"
        />
        </Box>
      </Box>
      <Box className={classname.email_container}>
        <Typography className={classname.form_text}>Password </Typography>
        <Box className={classname.signup_email}>
        <input 
          type="password" id="password"
        />
        </Box>
      </Box>
      <Box className={classname.name}>
        <Box className={classname.email_container}>

        
        <Typography className={classname.form_text}>
          Applicant
        </Typography>
        <Box className={classname.signup_email_1}>
            <input type="radio" id="applicant" name="job_port" value="Applicant"></input>
        </Box>
        </Box>

        <Box className={classname.email_container}>

        
        <Typography className={classname.form_text}>
          Company
        </Typography>
        <Box className={classname.signup_email_2}>
            <input type="radio" id="company" name="job_port" value="Company"></input>
        </Box>
        </Box>
        
      </Box>
      <Box className={classname.sub}>
        <input type="submit" onClick={()=>onSignupSuccess()} id="signupsubmit"/>
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
            <LOGIN values={[{isSignin,setIsSignin},{isSignup,setIsSignup}]}/>
            <SIGNUP values={[{isSignin,setIsSignin},{isSignup,setIsSignup}]}/> 
          </Box>     
      </Box>
      <Box className={classname.container}>
        <Box className= {classname.main}>
          
            {(!isSignin&&!isSignup)? <Typography className={classname.title}>Welcome to Job Portal</Typography>:(isSignin?<MyForm1 />:<MyForm2 />)}
        </Box>
      </Box>

      

        
    </Box>
  );
};

export default Home