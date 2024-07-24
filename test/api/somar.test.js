const app = require('../../index'); // Altere para o caminho correto
const request = require('supertest');

describe('Teste API para somar', () => {
    test('deve somar dois números', async () => {
        const response = await request(app)
            .post('/api/somar')
            .send({ num1: 12, num2: 13 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: 25 });
    });

    test('deve retornar erro se num1 não for número', async () => {
        const response = await request(app)
            .post('/api/somar')
            .send({ num1: 'a', num2: 13 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ error: "Os Valores não são números" });
    });

    test('deve retornar erro se num2 não for número', async () => {
        const response = await request(app)
            .post('/api/somar')
            .send({ num1: 12, num2: 'b' });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ error: "Os Valores não são números" });
    });

    test('deve retornar erro se num1 for negativo', async () => {
        const response = await request(app)
            .post('/api/somar')
            .send({ num1: -12, num2: 13 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ error: "Os valores devem ser positivos e diferentes de zero" });
    });
});
