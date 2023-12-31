import express from 'express';
import passport  from '../helpers/passport-config.js';
import userController from '../controllers/userController.js';

const router = express.Router(); 

router.get('/', (req, res) => {
  res.render('pages/auth');
});
router.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));
router.get('/auth/google/callback', passport.authenticate('google',{successRedirect: 'http://localhost:3001/',
  failureRedirect: "/login",session: false }));
router.get('/auth/google/success',userController.googleSignUp);

export default router;