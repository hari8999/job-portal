import express from 'express';


import { newJob, getJobss } from '../controller/conversation-controller.js';
import { addUser, getUser } from '../controller/user-controller.js';
import { newApplyjob, getApplica }from '../controller/message-controller.js';


const route = express.Router();
 
// route.get('/add',(req,res) =>{
//     res.send('This Works') 
// });

route.post('/add', addUser);
// route.get('/users', getUser);
route.post('/users', getUser);

route.post('/conversation/add', newJob);
route.get('/conversation/get', getJobss);

route.post('/message/add', newApplyjob);
 route.get('/message/get', getApplica);


export default route;