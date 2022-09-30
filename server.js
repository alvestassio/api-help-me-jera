const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
require('./src/config/config');

app.use(cors());
app.use(express.json({ extended: false }));

app.use('/api/v1/tag', require('./src/route/tag-route'));
app.use('/api/v1/user', require('./src/route/user-route'));
app.use('/api/v1/question', require('./src/route/question-route'));

app.listen(PORT, () => {
  console.log('HTTP Server listening');
});
