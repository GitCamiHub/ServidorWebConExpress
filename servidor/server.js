require('dotenv').config(); 
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = process.env.PUBLIC_PATH || 'dist';



const buildPath = path.join(__dirname, '..', PUBLIC_PATH);


app.use(express.static(buildPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
 
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});




