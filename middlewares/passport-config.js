import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';

dotenv.config();

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: process.env.GOOGLE_CALLBACK_URL,
			scope: ["profile", "email"]
		},
		async (accessToken, refreshToken, profile, done) => {
			return done(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
  });

passport.deserializeUser((user, done) => {
	done(null, user);
});

export default passport;