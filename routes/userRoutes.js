import express from 'express';
import passport  from '../helpers/passport-config';
import userController from '../controllers/userController';

const router = express.Router(); 

router.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));
router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/error', session: false }),
  (req, res) => {
    res.redirect('/success');
  });
router.use('/success',userController.googleSignUp);


export default router;