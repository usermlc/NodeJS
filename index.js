const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Обслуговування статичних файлів
app.use(express.static(path.join(__dirname, 'public')));

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
