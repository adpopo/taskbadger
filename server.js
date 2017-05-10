'use strict';

// dependencies
require('dotenv').config({path: __dirname + '/../.env'});

const express = require('express');
const bodyParser = require('body-parser');
const sms = require('./controllers/smsController.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const server = app.listen(process.env.PORT || 3000, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

// sending Badger SMS message
app.post('/send', (req, res) => {
  // Sending SMS via Nexmo
  sms.message.sendSms(
    process.env.FROM_NUMBER, req.body.toNumber, req.body.message, {type: 'unicode'},
    (err, responseData) => {
    	if (responseData) {
	    	console.log(responseData);
	    }
        res.end(JSON.stringify(responseData));
	}
  );
});