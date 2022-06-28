const { expect } = require('chai');
const sinon = require('sinon');

const movieController = require('../../controllers/movieController');
const movieService = require('../../services/movieService');

describe('Ao chamar o controller de create', () => {
    describe('quando o payload informado não é válido', () => {
        const response = {};
        const request = {};

        before(() => {
            request.body = {};

            response.status = sinon.stub().returns(response);
            response.send = sinon.stub().returns();

            sinon.stub(movieService, 'create')
                .resolves(false);
        });

        after(() => {
            movieService.create.restore();
        });

        it('é chamado o status com o código 400', async () => {
            await movieController.create(request, response);

            expect(response.status.calledWith(400)).to.be.equal(true);
        });

        it('é chamado com o sendo com a mensagem "Dados inválidos"', async () => {
            await movieController.create(request, response);

            expect(response.send.calledWith('Dados inválidos')).to.be.equal(true);
        });
    });

    describe('quando é inserido com sucesso', () => {
        const response = {};
        const request = {};

        before(() => {
            request.body = {
                title: 'Example Movie',
                directedBy: 'Jane Dow',
                releaseYear: 1999,
              }; 

            response.status = sinon.stub().returns(response);
            response.send = sinon.stub().returns();

            sinon.stub(movieService, 'create')
              .resolves(true);
        });

        after(() => {
            movieService.create.restore();
        });

        it('é chamado o status com o código 201', async () => {
            await movieController.create(request, response);

            expect(response.status.calledWith(201)).to.be.equal(true);
        });

        it('é chamado o sendo com a mensagem "Filme criado com sucesso!"', async () => {
            await movieController.create(request, response);

            expect(response.send.calledWith('Filme criado com sucesso!')).to.be.equal(true);
        });
    });
});