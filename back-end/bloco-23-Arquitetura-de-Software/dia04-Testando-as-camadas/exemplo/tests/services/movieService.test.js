const { expect } = require('chai');
const sinon = require('sinon');

const movieService = require('../../services/movieService');
const moviesModel = require('../../models/movieModel');

describe ('Insere um novo filme no DB', () => {
    describe('quando o payload informado não é válido', () => {
        const payload = {};

        it('retorna um boolean', async () => {
            const response = await movieService.create(payload);

            expect(response).to.be.a('boolean');
        });

        it('o boolean contém "false"', async () => {
            const response = await movieService.create(payload);

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