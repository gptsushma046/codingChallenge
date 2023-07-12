import {apiData} from "../model/requestAPI";
import {Request,Response,NextFunction} from 'express';

async function handleRequestAPI(req:Request,res:Response,next:NextFunction){
    try{
        return res.status(200).json(apiData)
    }
    catch(err){
        return next(err)
    }
};
export=handleRequestAPI;
