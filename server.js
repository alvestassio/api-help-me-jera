const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
require('./src/config/config');

app.use(cors());
app.use(express.json({ extended: false }));

app.use('/api/v1/user', require('./src/route/user-route'));

app.listen(PORT, () => {
    console.log('HTTP Server listening');
});
