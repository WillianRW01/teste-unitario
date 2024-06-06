const ServicoExercicio = require('../../src/services');

describe ('ServicoExercico', () => 
{
    let ServicoExercicio;

    beforeEach (() =>
    {
        ServicoExercicio= new ServicoExercicio();
    })

    it ('Somar deve retornar a soma de dois números positivos', ()=> {
        const result = ServicoExercicio.Somar(2,3)

        expect(result).toBe(5);
    })
})