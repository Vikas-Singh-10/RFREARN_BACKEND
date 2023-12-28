import mongoose from "mongoose";
const timestamps = require('mongoose-timestamp');
const uniqueValidator = require('mongoose-unique-validator');

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
    first_name: { type: String, default: "" , trim: true },
    last_name:{ type: String, default: "" , trim: true},
    display_name:{ type: String, default: "" , trim: true},
    profile_name: { type: String, default: "", trim: true},
    email_id: { type: String, default: "", trim: true },
    google_client_id: { type: String, default: "", trim: true, unique: true},
    profile_picture: { type: String, default: "", trim: true },
    referral_code: { type: String, default: "" },
    referral_identifier : { type: Number, default: 0},
    referred_code: { type: String, default: "" },
    active: { type: Boolean, default: true },
    last_logged_in: { type: Date, default: new Date().toISOString() },
    status: { type: String, enum: ['active', 'deleted'], default: "active" },
    is_registered: { type: Boolean, default: false}
});


UserSchema.plugin(timestamps);
UserSchema.plugin(uniqueValidator);

UserSchema.index({
    display_name: 1,
    google_client_id: 1,
    email_id: 1,
    referral_code: 1,
}, {
    name: "user_compound_index"
});

/**
 * @type {User}
 */
const User = mongoose.model("User",UserSchema);
export default User;

