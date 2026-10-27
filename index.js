const express = require("express");
const executarSQL = require(`./services/index.js`)
const app = express();


app.use(express.json());
app.get("/", (req, res) => {
    res.send("Olá mundo");
});


app.get("/usuarios", async (req, res) => {
    try {
        const query = await executarSQL("SELECT * FROM usuarios;");
        res.json(query.rows);
    } catch (error) {
        res.json({
            mensagem: error.message
        })
    }



    res.send(`Buscar usuario`);
});
app.post("/usuarios", async (req, res) => {
    try {
        const { nome, email, senha } = req.body;
        const emailExiste = await executarSQL(`SELECT * FROM usuarios WHERE
    email = "${email}"`);

        if (emailExiste.rowCount > 0) {
            res.json({
                tipo: "warning",
                mensagem: "Email já cadastrado"

            });
        }

        const query = await executarSQL(`INSERT INTO usuarios (nome, email, senha) VALUES($1, $2, $3) RETURNING *;`,
            [nome, email, senha]);

        if (query.rowCount > 0) {
            res.json({
                tipo: "success",
                mensagem: "Registro criado com sucesso"
            })
        } else {
            res.json({
                tipo: "warning",
                mensagem: "falha ao criar registro"
            })
        }
    } catch (error) {
        res.json({
            mensagem: error.message
        })
    }
});

app.put("/usuarios/:id", async (req, res) => {
    try }
        const { nome, email, senha } = req.body;
        const { id } = req.params;

        const query = await executarSQL(`UPDATE usuarios SET nome=$1, 
            email=$2, senha=$3 WHERE id = ${id} RETURNING *;`, [nome, email,
            senha]);

        if (query.rowCount > 0) {
            res.json({
                mensagem: error.message
            });





        });

app.delete("/usuarios", (req, res) => {
    try }
        const { id } = req.params;

        const query = await executarSQL(`DELETE FROM usuarios WHERE (id)
            RETURNING *;`);

        if (query.rowCount > 0) {
            res.json({
                tipo: "sucess"
                mensagem: 
            });
});






app.use((req, res) => {
    res.status(404).send("Rota não encontrada");

});

app.listen(3000, () => {
    console.log("servidor on: http://localhost:3000");

});

