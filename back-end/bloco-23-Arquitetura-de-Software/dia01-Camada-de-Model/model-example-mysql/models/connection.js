// trabalha com modelos assincronos
const mysql = require('mysql2/promise');

//Criando um pool de conexões, que é uma forma de conseguir reaproveitar
//conexões no mysql, para não ficar reabrindo conexões, para deixar ativa
//e reaproveitá-las, melhorando o desempenho
const connection = mysql.createPool({
    user: 'root',
    password: '210122',
    host: 'localhost',
    database: 'model_example'
});

module.exports = connection;
