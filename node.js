// Node.js backend using Express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const products = [
    // Array of product objects
];
const cors = require('cors');
app.use(cors());
app.get('/api/products', (req, res) => {
    res.json(products);
});

app.delete('/api/products/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    const { password } = req.body;

    if (password === '7788') {
        products.splice(index, 1); // Remove the product
        res.json({ message: 'Product deleted successfully' });
    } else {
        res.status(403).json({ message: 'Incorrect password! Access denied.' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
``