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

describe('Ao chamar o controller de getById', () => {
    describe('quando o "id" informado não é válido', () => {
        const response = {};
        const request = {};

        before(() => {
            request.params = {};

            response.status = sinon.stub().returns(response);
            response.send = sinon.stub().returns();

            sinon.stub(movieService, 'getById')
                .resolves(false);
        });

        after(() => {
            movieService.getById.restore();
        });

        it('é chamado o status com o código 404', async () => {
            await movieController.getById(request, response);

            expect(response.status.calledWith(404)).to.be.equal(true);
        });

        it('é chamado com o send com a mensagem "Movie Not Found"', async () => {
            await movieController.getById(request, response);

            expect(response.send.calledWith('Movie Not Found')).to.be.equal(true);
        });
    });

    describe('quando é inserido com sucesso', () => {
        const response = {};
        const request = {};

        before(() => {
            request.params = 1

            response.status = sinon.stub().returns(response);
            response.send = sinon.stub().returns();

            sinon.stub(movieService, 'getById')
              .resolves({
                id: 1,
                title: 'Example Movie',
                directBy: 'Jane Dow',
                releaseYear: 1999,
            });
        });

        after(() => {
            movieService.getById.restore();
        });

        it('é chamado o status com o código 200', async () => {
            await movieController.getById(request, response);

            expect(response.status.calledWith(200)).to.be.equal(true);
        });

        it('é chamado o send com as propriedades do filme encontrado', async () => {
            await movieController.getById(request, response);

            expect(response.send.calledWith({
                id: 1,
                title: 'Example Movie',
                directBy: 'Jane Dow',
                releaseYear: 1999,
            })).to.be.equal(true);
        });
    });
});