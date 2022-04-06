import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    salary:{
        type:String,
        required:false
    },
    j_type:{
        type:String,
        required:true
    },

});

const jobpost = mongoose.model('JobPost', JobSchema);

export default jobpost;