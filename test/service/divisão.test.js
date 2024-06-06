const ServicoExercicio = require('../../src/services/service');

describe('ServicoExercicio', () => {
    let servicoExercicio;

    beforeEach(() => {
        servicoExercicio = new ServicoExercicio();
    });

    it('deve retornar a divisão de dois números', () => {
        const result = servicoExercicio.Dividir(2, 2);

        expect(result).toBe(1); 
    });

    it('deve lançar um erro quando tentar dividir letra por número', () => {
        const result = () => servicoExercicio.Dividir('a', 2);

        expect(result).toThrowError('Os Valores não são números');
    });
});
