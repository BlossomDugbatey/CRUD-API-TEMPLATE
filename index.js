import express from 'express';

// import bodyParser from 'body-parser'; /**allows us take in incoming post request */

const app = express();

const PORT = 5001;

app.use('/', (req, res)=> res.json('Hello World!') )

// app.use(bodyParser.json()); /** meaning we'll be using json data in our whole application */

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))