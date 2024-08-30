
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


app.use(bodyParser.json());


const encriptarRoute = require('./routes/encriptar');
const desencriptarRoute = require('./routes/desencriptar');

app.use('/api/encriptar', encriptarRoute);
app.use('/api/desencriptar', desencriptarRoute);


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
