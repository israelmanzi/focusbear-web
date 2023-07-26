import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const login = async () => {
    try {
        const { data } = await axios.get(`${process.env.API_URL + '/auth/clickup'}`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        });
        if (data.token && data.refresh_token) {
            console.log("refresh_token", data.refresh_token);
        }
    } catch (error) {
        console.error("login error in requester", error);
        throw error;
    }
};