import express from 'express';
import passport  from '../middlewares/passport-config.js';
import userController from '../controllers/userController.js';
// import redisClient from '../middlewares/redis-config.js';

const router = express.Router(); 

router.get('/', (req, res) => {
  res.send('Hello');
});
router.get('/auth/login/success',async (req,res) => {
  try{
    // console.log("Hi")
    // console.log(req.sessionID);
    // let date = new Date();
    // const user = await redisClient.get(`sess:${req.sessionID}`);
    // console.log("USER: ",user.passport.user._json);
    // console.log(new Date() - date);
    // res.status(200).json({
		// 	error: false,
		// 	message: "Successfully Loged In",
		// 	user: user.passport,
		// });
  }catch(err){
    // console.log(err);
    // res.status(201).json({
		// 	error: true,
		// 	message: "error",
		// });
  }
})
router.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));
router.get('/auth/google/callback', passport.authenticate('google', {
  session: true,
}), (req, res) => {
  console.log(req.user);
    res.redirect('http://localhost:3001/');
});
router.get('/auth/google/success',userController.googleSignUp);

export default router;