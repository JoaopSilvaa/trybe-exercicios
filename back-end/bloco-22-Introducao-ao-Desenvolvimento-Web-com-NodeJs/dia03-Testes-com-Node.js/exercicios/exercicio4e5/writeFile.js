const fs = require('fs');

const writeFile = (arquivo, conteudo) => {
    fs.writeFileSync(arquivo, conteudo);
    return 'ok';
}

module.exports = writeFile;