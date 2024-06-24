const ServicoExercicio = require('../../src/services/service');

describe('ServicoExercicio', () => {
    let servicoExercicio;

    beforeEach(() => {
        servicoExercicio = new ServicoExercicio();
    });

    it('deve retornar a multiplicação de dois números positivos', () => {
        const result = servicoExercicio.Multiplicar(3, 4);
        expect(result).toBe(12);
    });

    it('deve lançar um erro quando multiplicar por zero', () => {
        const result = () => servicoExercicio.Multiplicar(5, 0);
        expect(result).toThrowError('Os valores devem ser positivos e diferentes de zero');
    });

    it('deve lançar um erro quando multiplicar números negativos', () => {
        const result = () => servicoExercicio.Multiplicar(-3, 4);
        expect(result).toThrowError('Os valores devem ser positivos e diferentes de zero');
    });

    it('deve lançar um erro quando tentar multiplicar letra por número', () => {
        const result = () => servicoExercicio.Multiplicar('a', 2);
        expect(result).toThrowError('Os Valores não são números');
    });
});
