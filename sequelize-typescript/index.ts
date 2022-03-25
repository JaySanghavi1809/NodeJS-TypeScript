import express, {Request, Response, Express} from 'express';
import bodyParser from 'body-parser';
const app = express();
import db from './app/models';
const port = process.env.PORT || 3000;
import dotenv from 'dotenv';
dotenv.config();
import routes from './app/routes/user.routes';

const router: Express = express();

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);

app.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
})
// const createProjectAssignments = () => {
//     projectassignments.map(projectassignment => {
//         db.ProjectAssignment.create(projectassignment)
//     })
// }
// createProjectAssignments();

// db.ProjectAssignment.create({
//     ProjectId:1,
//     UserId:'0d137b6c-fb3b-40ea-9254-aca0ca6a7149'
// })