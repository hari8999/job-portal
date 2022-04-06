
import User from "../modal/Loginuser.js";
import SignupUser from "../modal/Signupuser.js";


export const addUser = async (request, response) => {
    try {
         console.log(request);

        const newUser = new SignupUser(request.body);
        await newUser.save();
        response.status(200).json(newUser);
    } catch (error) {
        response.status(500).json(error);
    }
}

export const getUser = async (request, response) => {
    try {
        // const user = await SignupUser.find({},{"email":1, "password":1,"personn":1})
        // ;
        const user = await SignupUser.findOne({ "email": request.body.email, "password":request.body.password});
        console.log(user);
        response.status(200).json(user);
    } catch (error) {
        response.status(500).json(error);
    }
}

