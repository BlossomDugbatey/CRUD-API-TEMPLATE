import express from 'express';
import bodyParser from 'body-parser'; /**allows us take in incoming post request */
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5001;

app.use(bodyParser.json()); /** meaning we'll be using json data in our whole application */

app.use('/users', usersRoutes)

app.get('/', (req, res)=> res.json('Hello World!') )

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))