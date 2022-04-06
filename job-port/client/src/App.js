
import './App.css'
import Home from './components/Home';
import Comphome from './components/company-home/Comphome'
import Customerhome from './components/applicant-home/Customerhome'
import { useState } from 'react';
import { Box } from '@material-ui/core';


function App() {
  

  const [isHome, setHome] = useState(false)
  const [isCust, setCust] = useState(false)
  const [isComp, setComp] = useState(false)
// <Box>
    //   {!isCust && !isComp}?<Home />
    // </Box>

    // isCust?<Customerhome />:(isComp?<Comphome values={{isComp,setComp}}/>:<Home values={[{isCust, setCust},{isComp,setComp}]}
  return (
    <div className="app_">
        {(!isCust && !isComp)?<Home values={[{isCust, setCust},{isComp,setComp}]}/>:(isCust && !isComp)?<Customerhome />:(!isCust && isComp)?<Comphome values={{isComp,setComp}}/>:<Home values={[{isCust, setCust},{isComp,setComp}]}/>}
    </div>
  );
}

export default App; 
