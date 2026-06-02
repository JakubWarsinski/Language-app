import express from 'express';
import routes from './routes';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(express.json());

app.use('', routes);

export default app;
