const ServicoExercicio = require('../../src/services/service');

describe('ServicoExercicio', () => {
    let servicoExercicio;

    beforeEach(() => {
        servicoExercicio = new ServicoExercicio();
    });

    it('Subtração deve retornar a subtração de dois números positivos', () => {
        const result = servicoExercicio.Subtrair(5, 3);
        expect(result).toBe(2);
    });

    it('deve lançar um erro quando subtrair por zero', () => {
        const result = () => servicoExercicio.Subtrair(5, 0);
        expect(result).toThrowError('Os valores devem ser positivos e diferentes de zero');
    });

    it('deve lançar um erro quando subtrair números negativos', () => {
        const result = () => servicoExercicio.Subtrair(-5, 3);
        expect(result).toThrowError('Os valores devem ser positivos e diferentes de zero');
    });

    it('deve lançar um erro quando tentar subtrair letra por número', () => {
        const result = () => servicoExercicio.Subtrair('a', 2);
        expect(result).toThrowError('Os Valores não são números');
    });
});
