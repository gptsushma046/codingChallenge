import  handleRequestAPI from '../controller/requestController';
import express from 'express';
const router = express.Router();

router.route('/').get(handleRequestAPI);
export {router} ; 