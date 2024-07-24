const app = require('../../index'); // Altere para o caminho correto
const request = require('supertest');

describe('Teste API para dividir', () => {
    test('deve dividir dois números', async () => {
        const response = await request(app)
            .post('/api/dividir')
            .send({ num1: 8, num2: 2 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: 4 });
    });

    test('deve retornar erro se num1 não for número', async () => {
        const response = await request(app)
            .post('/api/dividir')
            .send({ num1: 'a', num2: 2 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ error: "Os Valores não são números" });
    });

    test('deve retornar erro se num2 não for número', async () => {
        const response = await request(app)
            .post('/api/dividir')
            .send({ num1: 8, num2: 'b' });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ error: "Os Valores não são números" });
    });

    test('deve retornar erro se num2 for zero', async () => {
        const response = await request(app)
            .post('/api/dividir')
            .send({ num1: 8, num2: 0 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ error: "Os valores devem ser positivos e diferentes de zero" });
    });
});
