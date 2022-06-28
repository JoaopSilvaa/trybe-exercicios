const { expect } = require('chai');
const sinon = require('sinon');

const moviesService = require('../../services/movieService');
const moviesModel = require('../../models/movieModel');

describe ('Insere um novo filme no DB', () => {
    describe('quando o payload informado não é válido', () => {
        const payload = {};

        it('retorna um boolean', async () => {
            const response = await moviesService.create(payload);

            expect(response).to.be.a('boolean');
        });

        it('o boolean contém "false"', async () => {
            const response = await moviesService.create(payload);

            expect(response).to.be.equal(false);
        });
    });

    describe('quando é inserido com sucesso', () => {
        const payloadMovie = {
            title: 'Example Movie',
            directBy: 'Jane Dow',
            releaseYear: 1999,
        };
        
        before(() => {
            const ID_EXAMPLE = 1;

            sinon.stub(moviesModel, 'create').resolves({ id: ID_EXAMPLE });
        });

        after(() => {
            moviesModel.create.restore();
        });

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

describe('Procura um movie com o id', () => {
    describe('quando o "id" informado não é válido', () => {
        it('retorna um boolean', async () => {
            const response = await moviesService.getById('3');

            expect(response).to.be.a('boolean');
        });

        it('o boolean contém "false"', async () => {
            const response = await moviesService.getById('3');

            expect(response).to.be.equal(false);
        });
    });

    describe('quando é pesquisado com um id correto', () => {
        const payloadMovie = 
        {
            id: 1,
            title: 'Example Movie',
            directBy: 'Jane Dow',
            releaseYear: 1999,
        }

        before(() => {
            sinon.stub(moviesService, 'getById').resolves(payloadMovie);
        });

        after(() => {
            moviesService.getById.restore();
        });

        it('retorna um objeto', async () => {
            const response = await moviesService.getById(1);

            expect(response).to.be.a('object');
        });

        it('retorna o objeto para a procura', async () => {
            const response = await moviesService.getById(1);

            expect(response).to.have.equal(payloadMovie);
        });
    });
});