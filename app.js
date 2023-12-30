const express = require('express'),
    app = express();

var axios = require('axios'),
    steamapi = require('steamapi');

require('dotenv').config();

var steam = new steamapi(process.env.STEAM_API_KEY);