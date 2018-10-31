import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';
import expressValidator from 'express-validator';
import userRoutes from './routes/user.routes';
import transactionRouter from './routes/transaction.routes';


// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: '.env.example' });

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

app.use(session({
    secret: 'keyboard-cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, expires: false}
}));


app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Authorization, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use((req, res, next) => {
    req.session.user = {id: 21};
    next();
});

/**
 * Primary API routes.
 */
app.use('/api/user', userRoutes);
app.use('/api/transactions', transactionRouter);

export default app;