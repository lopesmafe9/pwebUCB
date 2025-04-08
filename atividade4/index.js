const express = require('express');
const app = express();
const port = 3000;

// armazenamento em memória
let estoque = [];

// adicionar produto
app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
  const { id, nome, qtd } = req.params;
  const existente = estoque.find(produto => produto.id === id);
  if (existente) {
    return res.send('produto já existe.');
  }
  estoque.push({ id, nome, qtd: parseInt(qtd) });
  res.send(`produto ${nome} adicionado com sucesso!`);
});

// listar produtos
app.get('/listar', (req, res) => {
  res.json(estoque);
});

// remover produto
app.get('/remover/:id', (req, res) => {
  const { id } = req.params;
  estoque = estoque.filter(produto => produto.id !== id);
  res.send(`produto com id ${id} removido.`);
});

// editar quantidade
app.get('/editar/:id/:qtd', (req, res) => {
  const { id, qtd } = req.params;
  const produto = estoque.find(produto => produto.id === id);
  if (produto) {
    produto.qtd = parseInt(qtd);
    res.send(`quantidade do produto ${produto.nome} atualizada para ${qtd}.`);
  } else {
    res.send('produto não encontrado.');
  }
});

app.listen(port, () => {
  console.log(`servidor rodando em http://localhost:${port}`);
});
