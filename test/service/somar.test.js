const ServicoExercicio = require('../../src/services/service');

describe('ServicoExercicio', () => {
    let servicoExercicio;

    beforeEach(() => {
        servicoExercicio = new ServicoExercicio();
    });

    it('Somar deve retornar a soma de dois números positivos', () => {
        const result = servicoExercicio.Somar(2, 3);
        expect(result).toBe(5);
    });

    it('Somar letra deve lançar um erro', () => {
        const result = () => servicoExercicio.Somar('a', 2);
        expect(result).toThrowError('Os Valores não são números');
    });

    it('Somar deve lançar um erro para números negativos', () => {
        const result = () => servicoExercicio.Somar(-1, 3);
        expect(result).toThrowError('Os valores devem ser positivos e diferentes de zero');
    });

    it('Somar deve lançar um erro para zero', () => {
        const result = () => servicoExercicio.Somar(0, 3);
        expect(result).toThrowError('Os valores devem ser positivos e diferentes de zero');
    });
});
