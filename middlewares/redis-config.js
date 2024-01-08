import Redis from 'ioredis';
import dotenv from 'dotenv';

dotenv.config();

const redisClient = new Redis({
    password: process.env.REDIS_KEY,
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    legacyMode: true
});;

// export const connectToRedis = async (_,res,next) => {
//     try{
//         if(!redisClient){
//             redisClient = new Redis({
//                 password: process.env.REDIS_KEY,
//                 host: process.env.REDIS_HOST,
//                 port: process.env.REDIS_PORT,
//                 legacyMode: true
//             });
//             console.log(`-----CONNECTED-TO-REDIS-SERVER-----`);
//             next();

//         }else{
//             console.log(`-----ALREADY-CONNECTED-TO-REDIS-SERVER-----`);
//             next();
//         }
//     }catch(err){
//         console.log(`---ERROR---${err}`);
//         return res.send({status_code:409,status:'failure',message:'-----REDIS-CONNECTION-FAILED-----'});
//     }
// };

// const redisConfig = {
//     redisClient,
//     connectToRedis
// }

export default redisClient;