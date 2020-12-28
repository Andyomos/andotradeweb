import http from 'http';
import dotenv from 'dotenv';
dotenv.config();
import app from './app.js';
import mongoose from 'mongoose';

mongoose.connect(process.env.CONNECTIONSTRINGS, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) console.log(err);
    else http.createServer(app).listen(process.env.PORT || 4000, (err) => { 
    if (err) console.log(err.message);
        else console.log(`Listening on port ${process.env.PORT}`);
        console.log("Database Successfully Connected");
    });
});

