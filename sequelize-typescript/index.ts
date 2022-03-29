import express, {Request, Response, Express} from 'express';
import bodyParser from 'body-parser';
const port = process.env.PORT || 3000;
const app = express();
import db from './src/models';
import dotenv from 'dotenv';
dotenv.config();
import routes from './src/routes/user.routes';
import {errors} from 'celebrate';

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);
app.use(errors());
db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
})
