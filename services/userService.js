import User from "../models/User.js";

export const findUser = async (query) => {
    return await User.findOne(query);
}

export const createUser = async (data) => {
    return await User.create(data);
}

export const getLatestUserWithSameReferralCode = async (query) => {
    return await User.aggregate([
        {
            $match : query
        },
        {
            $sort : {
                createdAt : -1
            }
        },
        {
            $limit : 1
        },
        {
            $project : {
                _id : 1,
                referral_code : 1,
                referral_identifier : 1
            }
        }
    ])
}

const userService = {
    findUser,
    createUser,
    getLatestUserWithSameReferralCode
}

export default userService;