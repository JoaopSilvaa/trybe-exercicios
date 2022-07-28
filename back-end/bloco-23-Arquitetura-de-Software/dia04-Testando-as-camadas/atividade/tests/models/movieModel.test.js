const { expect } = require('chai');
const sinon = require('sinon');

const moviesModel = require('../../models/movieModel');
const connection = require('../../models/connection');

/*
  Como ainda não temos a implementação, vamos fixar
  um objeto simulando os métodos que iremos desenvolver,
  porém, eles não terão nenhum comportamento
*/

// const moviesModel = {
//     create: () => {}
// }

describe('Insere um novo filme no DB', () => {
    const payloadMovie = {
        title: 'Example Movie',
        directBy: 'Jane Dow',
        releaseYear: 1999,
    } 

    before(async () => {
        const execute = [{ insertId: 1 }];

        sinon.stub(connection, 'execute').resolves(execute);
    });

    after(async () => {
        connection.execute.restore();
    });

    describe('quando é inserido com sucesso', () => {

        it('retorna um objeto', async () => {
            const response = await moviesModel.create(payloadMovie);

            expect(response).to.be.a('object');
        });

        it('o objeto possui o "id" do filme inserido', async () => {
            const response = await moviesModel.create(payloadMovie);

            expect(response).to.have.a.property('id');
        });
    });
});

describe('Quando busca um filme com o "id"', () => {
    
    describe('quando o "id" não é encontrado', () => {
        before(async () => {
            const execute = [[]];
            sinon.stub(connection, 'execute').resolves(execute);
        });
    
        after(async () => {
            connection.execute.restore();
        });
        it('retorna null', async () => {
            const response = await moviesModel.getById();

            expect(response).to.be.equal(null);
        })
    });

    
    describe('quando o "id" é encontrado', () => {
        before(() => {
            sinon.stub(moviesModel, 'getById').resolves(
                {
                    id: 1,
                    title: 'Example Movie',
                    directBy: 'Jane Dow',
                    releaseYear: 1999,
                } 
            
            );
        });
    
        after(() => {
            moviesModel.getById.restore();
        });
        it('mostra o objeto', async () => {
            const response = await moviesModel.getById(1);
        
            expect(response).to.be.an('object');  
            expect(response).to.be.contains(
                {
                    id: 1,
                    title: 'Example Movie',
                    directBy: 'Jane Dow',
                    releaseYear: 1999,
                });  
        });
    });
});