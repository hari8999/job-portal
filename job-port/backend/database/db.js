import mongoose from 'mongoose';

const Connection = async (username,password) =>{
    
    const URL=`mongodb+srv://${username}:${password}@cluster0.8a4n4.mongodb.net/JOB_PORTAL?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true});
        console.log("You have successfully connected to MongoDB database");
    }
    catch(error){
        console.log("Error while connecting to MongoDB",error);
    }
}

export default Connection;