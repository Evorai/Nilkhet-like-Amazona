import express from 'express';
import data from './data.js';


const app = express();
app.get('/api/books/:id', (req, res) => {
    debugger;
    const book = data.books.find((x) => x._id === req.params.id);
    if (book) {
        res.send(book);
    } else {
        res.status(404).send({ message: 'Book Not Found' });
    }
});
app.get('/api/books', (req, res) => { res.send(data.books); });
app.get('/', (req, res) => {
    res.send('Server is ready');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});

/*
app.listen(5000, () => {
    console.log('Serve at http://localhost:5000');
});
*/