import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import routeHandler from './router.js';

// Configure dotenv
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT;

// Serve static files from the "public" folder
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routeHandler);


app.get('*', function (req, res) {
    res.send('Sorry, this is an invalid URL.');
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});