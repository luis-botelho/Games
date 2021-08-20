// Eu fiz um módulo e importei usando o o require, pada diminiur o tamanho do meu código e deixar mais organizado.
// Cada Game é um objeto, armazenados em uma lista de categorias, e cada categoria está armazenada em uma lista de categorias  
const games = require('./games')
const express = require('express');
const app = express(); 
const port = 3050; 

app.use(express.json());// 

app.get('/',(req,res) => {
    res.send('<h1>Games</h1>');
});
// não vou criar o crud aqui por conta de serem objetos, então o usúario não pode criar um nova categoria de objetos apenas criar um game por vez em cada categoria.
app.get('/games', (req, res) => {
    res.send(games);
});
app.get('/games/:id', (req, res) => {
    const id = req.params.id -1;
    const game = games[id];
    res.send(game);
});
// old games 
// CREATE =>
app.post('/antigos', (req, res) => {
    const game = req.body;
    obj = JSON.stringify(game);
    games.oldSchool.push(JSON.parse(obj));
    res.send(`Game adicionado`);
});
// READ 
app.get('/antigos', (req,res) => {
    res.send(games.oldSchool);
});
app.get('/antigos/:id', (req,res) => {
    const id = req.params.id -1;
    const game = games.oldSchool[id]
    res.send(game);
});
// UPDATE - PUT 
app.put('/antigos/:id', (req, res) =>{
    const id = req.params.id -1;
    res.send(`${games.oldSchool[id]}`);
    const game = req.body;
    obj = JSON.stringify(game);
    games.oldSchool[id] = JSON.parse(obj); 
});
// DELETE -
app.delete('/antigos/:id', (req, res) =>{
    const id = req.params.id -1;
    if (!games.oldSchool[id] || id < 0 || id >= games.oldSchool.length){
        res.send("<h1>Game não encontrado</h1>");
        console.error(404);
    }
    games.oldSchool.splice(id, 1);
    res.send('Você cancelou o GAME')
});
// fps
// CREATE =>
app.post('/fps', (req, res) => {
    const game = req.body;
    obj = JSON.stringify(game);
    games.fps.push(JSON.parse(obj));
    res.send(`Game adicionado`);
});
//READ
app.get('/fps', (req,res) => {
    res.send(games.fps);
});
app.get('/fps/:id', (req,res) => {
    const id = req.params.id -1;
    const game = games.fps[id];
    res.send(game);
});
// UPDATE - PUT 
app.put('/fps/:id', (req, res) =>{
    const id = req.params.id -1;
    res.send(`${games.fps[id]}`);
    const game = req.body;
    obj = JSON.stringify(game);
    games.fps[id] = JSON.parse(obj);  
});
// DELETE -
app.delete('/fps/:id', (req, res) =>{
    const id = req.params.id -1;
    if (!games.fps[id] || id < 0 || id >= games.fps.length){
        res.send("<h1>Game não encontrado</h1>");
        console.error(404);
    }
    games.fps.splice(id, 1);
    res.send('Você cancelou o GAME')
});
// moba
// CREATE =>
app.post('/moba', (req, res) => {
    const game = req.body;
    const id = game.length +1;
    obj = JSON.stringify(game);
    games.moba.push(JSON.parse(obj));
    res.send(`Game adicionado`);
});
// READ
app.get('/moba', (req, res) =>{
    res.send(games.moba);
});
app.get('/moba/:id', (req, res) =>{
    const id = req.params.id -1;
    const game = games.moba[id];
    res.send(game);
});
// UPDATE - PUT 
app.put('/moba/:id', (req, res) =>{
    const id = req.params.id -1;
    res.send(`${games.moba[id]}`);
    const game = req.body;
    obj = JSON.stringify(game);
    games.moba[id] = JSON.parse(obj);  
});
// DELETE -
app.delete('/moba/:id', (req, res) =>{
    const id = req.params.id -1;
    if (!games.moba[id] || id < 0 || id >= games.moba.length){
        res.send("<h1>Game não encontrado</h1>");
        console.error(404);
    }
    games.moba.splice(id, 1);
    res.send('Você cancelou o GAME')
});
// rogue
// CREATE =>
app.post('/rogueLike', (req, res) => {
    const game = req.body;
    const id = game.length +1;
    obj = JSON.stringify(game);
    games.rogueLikes.push(JSON.parse(obj));
    res.send(`Game adicionado`);
});
// READ 
app.get('/rogueLike', (req, res) =>{
    res.send(games.rogueLikes);
});
app.get('/rogueLike/:id', (req, res) =>{
    const id = req.params.id -1;
    const game = games.rogueLikes[id];
    res.send(game);
});
// UPDATE - PUT 
app.put('/rogueLike/:id', (req, res) =>{
    const id = req.params.id -1;
    res.send(`${games.rogueLikes[id]}`);
    const game = req.body;
    obj = JSON.stringify(game);
    games.rogueLikes[id] = JSON.parse(obj);  
});
// DELETE -
app.delete('/rogueLike/:id', (req, res) =>{
    const id = req.params.id -1;
    if (!games.rogueLikes[id] || id < 0 || id >= games.rogueLikes.length){
        res.send("<h1>Game não encontrado</h1>");
        console.error(404);
    }
    games.rogueLikes.splice(id, 1);
    res.send('Você cancelou o GAME')
});
// open
//CREAT
app.post('/openWorld', (req, res) => {
    const game = req.body;
    const id = game.length +1;
    obj = JSON.stringify(game);
    games.openWorld.push(JSON.parse(obj));
    res.send(`Game adicionado`);
});
// READ
app.get('/openWorld', (req, res) =>{
    res.send(games.openWorld);
});
app.get('/openWorld/:id', (req, res) =>{
    const id = req.params.id -1;
    const game = games.openWorld[id];
    res.send(game);
});
// UPDATE - PUT 
app.put('/openWorld/:id', (req, res) =>{
    const id = req.params.id -1;
    res.send(`${games.openWorld[id]}`);
    const game = req.body;
    obj = JSON.stringify(game);
    games.openWorld[id] = JSON.parse(obj);  
});
// DELETE -
app.delete('/openWorld/:id', (req, res) =>{
    const id = req.params.id -1;
    if (!games.openWorld[id] || id < 0 || id >= games.openWorld.length){
        res.send("<h1>Game não encontrado</h1>");
        console.error(404);
    }
    games.openWorld.splice(id, 1);
    res.send('Você cancelou o GAME')
});
// MMo
//CREAT
app.post('/mmoRpg', (req, res) => {
    const game = req.body;
    const id = game.length +1;
    obj = JSON.stringify(game);
    games.mmoRpg.push(JSON.parse(obj));
    res.send(`Game adicionado`);
});
// READ
app.get('/mmoRpg', (req, res) =>{
    res.send(games.mmoRpg);
});
app.get('/mmoRpg/:id', (req, res)=>{
    const id = req.params.id -1;
    const game = games.mmoRpg[id];
    res.send(game);
});
// UPDATE - PUT 
app.put('/mmoRpg/:id', (req, res) =>{
    const id = req.params.id -1;
    res.send(`${games.mmoRpg[id]}`);
    const game = req.body;
    obj = JSON.stringify(game);
    games.mmoRpg[id] = JSON.parse(obj);  
});
// DELETE -
app.delete('/mmoRpg/:id', (req, res) =>{
    const id = req.params.id -1;
    if (!games.mmoRpg[id] || id < 0 || id >= games.mmoRpg.length){
        res.send("<h1>Game não encontrado</h1>");
        console.error(404);
    }
    games.mmoRpg.splice(id, 1);
    res.send('Você cancelou o GAME')
});
app.listen(port, ()=>{
    console.info(`App is running in http://localhost:${port}`)
});

