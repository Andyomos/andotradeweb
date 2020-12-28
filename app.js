import express from 'express';
import morgan from 'morgan';
import UsersRoutes from './routes/auths.js';
import cors from 'cors';
import { homePage, aboutPage, newUser, errorPage, } from './controllers/app.js'

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use('/signupusers', UsersRoutes);




app.get('/', homePage);
app.get('/about', aboutPage);
app.get('/login', newUser)

app.use(errorPage)



export default app;