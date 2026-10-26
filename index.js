const express = require("express");
const app = express();

app.get("/",(req, res) => {
    res.send("Olá mundo");
});


app.get("/usuarios",(req, res) => {
    res.send(`Buscar usuario`);
});
app.post("/usuarios",(req, res) => {
    res.send(`Criar usuario`);
});

app.put("/usuarios",(req, res) => {
    res.send(`Editar usuario`);
});

app.delete("/usuarios",(req, res) => {
    res.send(`Deletar usuário`);
});






app.use((req, res)=> {
res.status(404).send ("Rota não encontrada");

});

app.listen(3000, () => {
 console.log("servidor on: http://localhost:3000");
 
});

