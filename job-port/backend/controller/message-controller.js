
import Applyjob from "../modal/Message.js";
// import Conversation from '../modal/JobPost.js';


export const newApplyjob = async (request, response) => {
    
     console.log(request)
    try {
        const newApply = new Applyjob(request.body);
        await newApply.save();

        // await Conversation.findByIdAndUpdate(request.body.conversationId, { message: request.body.text });
        response.status(200).json("Message has been sent successfully");
    } catch (error) {
        response.status(500).json(error);
    }

}

export const getApplica = async (request, response) => {
    try {
        const messages = await Applyjob.find({ }, {"title":1,"salary":1,"job_type":1,"sop":1});
        response.status(200).json(messages);
    } catch (error) {
        response.status(500).json(error);
    }

}