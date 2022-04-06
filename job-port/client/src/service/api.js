
import axios from 'axios';

const url = 'https://job-portal-6.herokuapp.com/';

export const addUser = async (data) => {
    try {
        // console.log(data);
        
        let response = await axios.post(`${url}/add`, data);
        //  console.log(response.data);
        return response.data;
    } catch (error) {
        console.log('Error while calling addUser API ', error);
    }
}

export const getUsers = async (data) => {
    try {
        // let response = await axios.get(`${url}/users`);
        // console.log(response.data);
        let response = await axios.post(`${url}/users`,data);
        return response.data
    } catch (error) {
        console.log('Error while calling getUsers API ', error);
    }
}

export const addJob = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data);
    } catch (error) {
        console.log('Error while calling setConversation API ', error);
    }
}

export const getJobs = async () => {
    try {
        let response = await axios.get(`${url}/conversation/get`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log('Error while calling getConversation API ', error);
    }
}

export const getApplications = async () => {
    try {
        let response = await axios.get(`${url}/message/get`);
        return response.data
    } catch (error) {
        console.log('Error while calling getMessages API ', error);
    }
}

export const applyJob = async (data) => {
    console.log(data);
    try {
        return await axios.post(`${url}/message/add`, data);
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
}