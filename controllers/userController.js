import {insertUser} from "../services/userService.js"

export const user = async(_,res) =>{
    try{
        const data = {
            name:"RFREARN",
            sampleData:true,
            seeYouSoon:true
        }
        return res.status(200).json({data:data});
    }catch(err){
        return res.status(500).json({error:err});
    }
}