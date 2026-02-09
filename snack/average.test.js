// viene importata la funzione da testare
const average = require("./average");

test("la funzione average calcola la media aritmetica di un array di numeri", () => {
  // viene definito un array di numeri
  const numbers = [2, 4, 6, 8];

  // viene eseguita la funzione
  const result = average(numbers);

  // viene verificato che la media sia corretta
  expect(result).toBe(5);
});
