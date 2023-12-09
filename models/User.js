import mongoose from "mongoose";

/**
 * @typedef {object} UserSchema
 * @property {string} firstName
 */

/**
 * @typedef {import("mongoose").Model<UserSchema>} User
 */

/**
 * @type {import("mongoose").Schema<UserSchema>}
 */
const UserSchema = mongoose.Schema({
    firstName:{type:String},
},
    {
        timestamps:true
    }
)

/**
 * @type {User}
 */
const User = mongoose.model("User",UserSchema);
export default User;

