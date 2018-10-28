import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';
import expressValidator from 'express-validator';
import session from 'express-session';
import userRoutes from './routes/user.routes';
import transactionRouter from './routes/transaction.routes';
import { UserModel } from './models/User.model';

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: '.env.example' });

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(session({
    secret: 'keyboard cat',
    cookie: { maxAge: 60000 }
}));

app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

app.use((req, res, next) => {
    if (!req.session.user) {
        const user: UserModel = {
            id: 30,
            name: 'Khabib',
            balance: 100,
        };
        console.log('<-----session is lost');
        req.session.user = user;
    }

    next();
});

/**
 * Primary API routes.
 */
app.use('/api/user', userRoutes);
app.use('/api/transactions', transactionRouter);

export default app;