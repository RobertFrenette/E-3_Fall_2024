import 'dotenv/config';
import path from 'path';

import express, { NextFunction, Request, Response } from 'express';
import teamRouter from './routes/team';
import driverRouter from './routes/driver';

const PORT: number = parseInt(process.env.PORT as string, 10) ?? 3000;

const app = express();

// enable CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
app.get('/', function (req, res) {
    res.sendFile('/index.html');
});

app.use('/api/team', teamRouter);
app.use('/api/driver', driverRouter);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
