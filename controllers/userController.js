import userService from "../services/userService.js"
import functions from "../functions/helpers.js";
import jwt from 'jsonwebtoken';


export const googleSignUp = async (req,res) =>{
    try{
        // // console.log("START: ",req);
        // const inputData = req.user;
        // console.log(req.user);
        // const userDetails = await userService.findUser({ google_client_id : inputData.id});
        // let tokenSession;
        // if(userDetails == undefined){
        //     let {referral_code, referral_identifier} = await functions.generateReferralCode(inputData.name.givenName);
        //     let userData = {
        //         first_name : inputData.name.givenName,
        //         last_name : inputData.name.familyName,
        //         display_name : inputData.displayName,
        //         email_id : inputData.emails[0].value,
        //         google_client_id : inputData.id,
        //         profile_picture : inputData.photos[0].value,
        //         referral_code : referral_code,
        //         referral_identifier : referral_identifier
        //     }
        //     let createUser = await userService.createUser(userData);
        //     console.log(createUser);
        //     //to be continued
        // }
        let tokenSession = "sdhfjlkhasdjkfh"
        return res.status(200).json({tokenSession:tokenSession});
    }catch(err){
        return res.status(500).json({error:err});
    }
}


const userController = {
    googleSignUp
}

export default userController;