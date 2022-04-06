
import mongoose from 'mongoose';

const jobsgetSchema = new mongoose.Schema({
    title:{
        type:String, required:true
    },

    description:{
        type:String,
        required:true
    },

    salary:{
        type:String
    },
    j_type:{
        type:String,
        required:true
    }
});

const jobsget = mongoose.model('jobsget',jobsgetSchema);

export default jobsget;