// ESTEAMDO AS ROTAS PRA FUNCIONALIDADES GERAIS
const res = require('supertest');
const server = require('./server/Server')

beforeAll(async () => {
    console.log('Iniciando TDD com jest!');
});

afterAll((done) => {
    //o server close irá encerrar nossa aplicação, evitando problemas da porta já estar em uso
    //server.close();
    console.log('servidor fechado');
    done();
});

describe('Testar endpoints', () => {

    //o que será executado antes de todos os testes


    it('Receber mensagem inicial da codesh', async () => {
        const resposta = await res(server)
            .get('/')

        expect(resposta.statusCode).toEqual(200);
        expect(resposta.body).toHaveProperty('message');
        expect(resposta.body.message).toEqual('Fullstack challenge 2021  - Space Flight News (pedroorf@gmail.com)');

    }, 2000);

    it('Receber detalhes do artigo com id 1000', async () => {
        const resposta = await res(server).get('/article/details?id=1000');
        console.log("Message: ", resposta.body.data[0].id)
        expect(resposta.body.data[0].id).toEqual(1000)

    }, 2000)


});
