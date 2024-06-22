const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());

// Rota para receber respostas de enigmas.html
app.post('/enigmas', (req, res) => {
    const resposta = req.body.answer;
    console.log(`Resposta recebida de enigmas.html: ${resposta}`);
    res.sendStatus(200); // Responde com status HTTP 200 (OK)
});

// Rota para receber respostas de resolucao.html
app.post('/resolucao', (req, res) => {
    const resposta = req.body.answer;
    console.log(`Resposta recebida de resolucao.html: ${resposta}`);
    res.sendStatus(200); // Responde com status HTTP 200 (OK)
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://127.0.0.1:${port}`);
});