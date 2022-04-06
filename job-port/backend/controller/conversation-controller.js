import JobPost  from "../modal/JobPost.js";
import jobsget from "../modal/JobGet.js";


export const newJob = async (request, response) => {

    try {
        const Jobnew = new JobPost(request.body);
        await Jobnew.save();
        // response.status(200).json(Jobnew);
    } catch (error) {
        response.status(500).json(error);
    }

} 

export const getJobss = async (request, response) => {
    try {
        const jobs = await JobPost.find({});
        console.log(jobs);
        response.status(200).json(jobs);
    } catch (error) {
        response.status(500).json(error);
    }

}