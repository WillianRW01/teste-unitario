const ServicoExercicio = require('../../src/services/service');

describe('ServicoExercicio', () => {
    let servicoExercicio;

    beforeEach(() => {
        servicoExercicio = new ServicoExercicio();
    });

    it('deve retornar a divisão de dois números positivos', () => {
        const result = servicoExercicio.Dividir(4, 2);
        expect(result).toBe(2); 
    });

    it('deve lançar um erro quando dividir por zero', () => {
        const result = () => servicoExercicio.Dividir(5, 0);
        expect(result).toThrowError('Os valores devem ser positivos e diferentes de zero');
    });

    it('deve lançar um erro quando dividir números negativos', () => {
        const result = () => servicoExercicio.Dividir(-4, 2);
        expect(result).toThrowError('Os valores devem ser positivos e diferentes de zero');
    });

    it('deve lançar um erro quando tentar dividir letra por número', () => {
        const result = () => servicoExercicio.Dividir('a', 2);
        expect(result).toThrowError('Os Valores não são números');
    });
});
