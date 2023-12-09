import {insertUser} from "../services/userService.js"

export async function user(){
    const data = {
        firstName:"Vikas Singh"
    }

    await insertUser(data);
}