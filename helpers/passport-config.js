import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import dotenv from 'dotenv';

dotenv.config();

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: "/auth/google/callback",
			scope: ["profile", "email"],
			state: false
		},
		async (accessToken, refreshToken, profile, callback) => {
			return callback(null, profile);
		}
	)
);

export default passport;