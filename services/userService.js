import User from "../models/User.js";

export async function insertUser(data){
    return await User.create(data);
} 