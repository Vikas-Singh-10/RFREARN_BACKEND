import {insertUser} from "../services/userService.js"

export async function user(){
    const data = {
        firstName:"RFREARN"
    }

    await insertUser(data);
}