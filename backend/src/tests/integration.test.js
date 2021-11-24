const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
const server = require('../api/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('Register', () => {
  describe('Quando usuário é criado com sucesso', () => {
    let response = {};

    beforeAll(async () => {
      const mongo = await MongoMemoryServer.create();
      const uri = mongo.getUri();
      const OPTIONS = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };

      const connectionMock = await MongoClient.connect(uri, OPTIONS);

      sinon.stub(MongoClient, 'connect').resolves(connectionMock);

      response = await chai.request(server)
        .post('/register')
        .send({
          nome: 'Gabriel Pimentel Fernandes',
          password: 'senha123',
          email: 'gabriel@gmail.com',
        });
    });

    afterAll(async () => {
      MongoClient.connect.restore();
      const mongo = await MongoMemoryServer.create();
      await mongo.stop();
    });

    it('Retorna um objeto', () => {
      expect(response.body.user).to.be.an('object');
    });

    it('Retorna os campos "email" e "nome"', () => {
      expect(response.body).to.have.property('email');
      expect(response.body).to.have.property('nome');
    });

    it('Retorna o código de status 201 e o objeto usuário', () => {
      expect(response).to.have.status(201);
    });
  });
});
