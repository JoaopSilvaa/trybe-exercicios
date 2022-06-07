const fs = require('fs').promises;

const readAll = async () => {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);
    const strings = simpsons.map(({id, name}) => `${id} - ${name}`);

    strings.forEach((string) => console.log(string));
};


const getSimpsonById = async (id) => {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

    const simpsons = JSON.parse(fileContent);
    const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

    if(!chosenSimpson) throw new Error('id não encontrado');
    return chosenSimpson;
}


const filterSimpson = async () => {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

    const simpsons = JSON.parse(fileContent);
    const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
    await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}


const createSimpsonsFamily = async () => {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

    const simpsons = JSON.parse(fileContent);
    const familyIds = [1,2,3,4];
    const simpsonsFamily = simpsons.filter((simpson) => familyIds.includes(Number(simpson.id)));
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

const addNelson = async () => {
    const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');

    const simpsonsFamily = JSON.parse(fileContent);
    simpsonsFamily.push({id: '8', name: 'Nelson Muntz'});
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

const replaceNelson = async () => {
    const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');

    const simpsonsFamily = JSON.parse(fileContent);
    const simpsonsFamilyWithoutNelson = simpsonsFamily.filter((simpson) => simpson.id !== '8');
    const simpsonsFamilyWithMaggie = simpsonsFamilyWithoutNelson.concat([{id: '15', name: 'Maggie Simpson'}]);
    return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamilyWithMaggie));
}

main = async () => {
    await readAll();
    const simpson = await getSimpsonById(1);
    console.log(simpson);
    filterSimpson();
    createSimpsonsFamily();
    addNelson();
    replaceNelson();
}

main();

// const persons = require('./simpsons.json');
// const readPersons = async () => {
//     try {
//         await persons.map((person) => console.log(`${person.id} - ${person.name}`) );
//     } catch (err) {
//         console.log(err.message);
//     }
// }

// const readId = (id) => {
//     return new Promise((resolve, reject) => {
//         const dataPerson = persons.find((person) => person.id == id);
//         if (dataPerson === undefined) reject (new Error('id não encontrado'));
//         return resolve(dataPerson)
//     });
// }


// const remove = async () => {
//     try {
//         const removeTen = await persons.indexOf(person.id == 10);
//         persons.splice(removeTen);
//         const removeSix = await persons.indexOf(person.id == 6);
//         persons.splice(removeSix);
//     } catch (err) {
//         console.log(err.message);
//     }
// }

// readPersons();
// console.log('---------------------------------------');
// readId(11)
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err.message));
// console.log('---------------------------------------');
// readId(3)
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err.message));
// console.log('---------------------------------------');
// remove();