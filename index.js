import app from "./server.js";
import sls from 'serverless-http'

export const run = sls(app);