const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1> Welcome to Hot Restaurant! </h1>');
});

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});