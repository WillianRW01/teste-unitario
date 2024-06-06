const ServicoExercicio = require('../../src/services/service');

describe ('ServicoExercico', () => {
    let servicoExercicio;

    beforeEach (() =>
    {
        servicoExercicio = new ServicoExercicio();
    });

    it ('Somar deve retornar a soma de dois números positivos', ()=> {
        const result = servicoExercicio.Somar(2,3)

        expect(result).toBe(5);
    });

    it('Somar letra',() =>{
        const result = () => servicoExercicio.Somar('a',2)

        expect(result).toThrowError('Os Valores não são números')
    });
})