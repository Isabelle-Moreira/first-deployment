const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors')
app.use(cors())
app.get('/api/data', (req, res) => {
res.json({ message: 'Dados do backend!'});
});
app.listen(port, () => {
console.log(`Servidor Express rodando em http://localhost:${port}`);
});