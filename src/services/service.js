class ServicoExercicio {

    Somar(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Os Valores não são números");
        }
        if (num1 <= 0 || num2 <= 0) {
            throw new Error("Os valores devem ser positivos e diferentes de zero");
        }
        return num1 + num2;
    }
  
    Subtrair(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Os Valores não são números");
        }
        if (num1 <= 0 || num2 <= 0) {
            throw new Error("Os valores devem ser positivos e diferentes de zero");
        }
        return num1 - num2;
    }
  
    Multiplicar(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Os Valores não são números");
        }
        if (num1 <= 0 || num2 <= 0) {
            throw new Error("Os valores devem ser positivos e diferentes de zero");
        }
        return num1 * num2;
    }
  
    Dividir(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Os Valores não são números");
        }
        if (num1 <= 0 || num2 <= 0) {
            throw new Error("Os valores devem ser positivos e diferentes de zero");
        }
        return num1 / num2;
    }
}

module.exports = ServicoExercicio;
