import axios from 'axios';
import {payload} from "./createPayLoad";

const url = 'https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals';
var apiData:any=[];

axios({
    method: "GET",
    url: url 
    }).then((response)=>{
        const payloadObj = new payload;
        Object.assign(apiData,payloadObj.createPayload(response.data));
   }).catch(err=>{
       console.log("No data is available, Please check https://eacp.energyaustralia.com.au/codingtest/api-docs/#/");
   });

export {apiData};

