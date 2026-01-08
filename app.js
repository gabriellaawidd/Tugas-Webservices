const express = require('express');
const app = express();
const filmRoutes = require('./routes/filmRoutes');

app.use(express.json());
app.use('/api', filmRoutes);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});