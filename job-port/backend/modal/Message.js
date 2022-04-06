import mongoose from 'mongoose';

const applySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    salary: {
        type: String,
        required:true

    },
    job_type: {
        type: String,
        required:true
    },
    sop:{
        type:String,
        required:true
    }
}    
)

const applyJob = mongoose.model('Applyjob', applySchema);

export default applyJob;