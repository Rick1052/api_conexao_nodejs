// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, etre outras funcionalidades
const express = require("express");
// Charmar a função Express
const router = express.Router();
// Incluir o arquivo que possui a conexão com o banco de dados
const db = require('./../db/models/index');

// Criar a rota cadastrar
router.post("/users", async (req, res) => {

    // Receber os dados enviados no corpo da requisição
    var dados = req.body;
    console.log(dados);

    // Salvar no banco de dados
    await db.Users.create(dados).then((dadosUsuario) => {
        // Pausar o processamento e retornar os dados em formato de objeto
        return res.json({
            mensagem: "Usuário cadastrado com sucesso!",
            dadosUsuario
        });
    }).catch(() => {
        // Pausar o processamento e retornar a mensagem de erro
        return res.json({
            mensagem: "Erro: Usuário não cadastrado com sucesso!"
        });
    })


    return res.json({
        mensagem: "Usuário cadastrado com sucesso!"
    });
})

// Exportar a instrução que está dentro da constante router
module.exports = router;