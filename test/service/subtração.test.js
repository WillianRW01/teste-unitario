const ServicoExercicio = require('../../src/services/service');

describe ('ServicoExercico', () => {
    let servicoExercicio;

    beforeEach (() =>
    {
        servicoExercicio = new ServicoExercicio();
    });

    it ('Subtração deve retornar a substração de dois números positivos', ()=> {
        const result = servicoExercicio.Subtrair(2,1)

        expect(result).toBe(1);
    });

    it('Somar letra',() =>{
        const result = () => servicoExercicio.Subtrair('a',2)

        expect(result).toThrowError('Os Valores não são números')
    });
})