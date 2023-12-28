import userService from "../services/userService";

export const generateReferralCode = async (nameString) => {
    try {
        nameString = nameString.replace(/[^0-9a-z]/gi, '').toUpperCase();
        let referralString = '';
        let referral_identifier = 100;
        let append = ''
        let appendCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (nameString.length == 0) {
            for (let i = 0, n = appendCharset.length; i < 3; ++i) {
                append += appendCharset.charAt(Math.floor(Math.random() * n));
            }
            referralString = append;
        } else if (nameString.length == 1) {
            for (let i = 0, n = appendCharset.length; i < 2; ++i) {
                append += appendCharset.charAt(Math.floor(Math.random() * n));
            }
            referralString = `${nameString}${append}`;
        } else if (nameString.length == 2) {
            for (let i = 0, n = appendCharset.length; i < 1; ++i) {
                append += appendCharset.charAt(Math.floor(Math.random() * n));
            }
            referralString = `${nameString}${append}`;
        } else {
            referralString = nameString.substring(0, 3);
        }
        let matchedUserDetails = await userService.getLatestUserWithSameReferralCode(referralString);
        if(matchedUserDetails.length > 0){
            referralString = `${referralString}${matchedUserDetails[0].referral_identifier} + 1`;
            referral_identifier = matchedUserDetails[0].referral_identifier + 1;
        }else{
            referralString = `${referralString}${referral_identifier}`;
        }
        return {referralString,referral_identifier};
    } catch (err) {
        logger.debug('----generateReferralStringCode-ERROR---', err.stack);
        return 'ERROR'
    }
}


const functions = {
    generateReferralCode
}

export default functions;