const express = require('express'),
    app = express();

var axios = require('axios'),
    steamapi = require('steamapi');

require('dotenv').config();

var api_prefix = '/api/v1/';

/* 

function sendTMPApiRequest is used to send requests to the TruckersMP API

*/
function sendTMPApiRequest(url, type = "get") {
  
  switch (type) {
    case "get":
      return axios.get(url);
      break;
    case "post":
      return axios.post(url);
      break;
    default:
      return axios.get(url);
      break;
  }
}


var steam = new steamapi(process.env.STEAM_API_KEY);