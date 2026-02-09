// viene importata la funzione da testare
const createSlug = require("./createSlug");

test("la funzione createSlug restituisce una stringa in lowercase", () => {
  // viene definita una stringa con lettere maiuscole
  const text = "QUESTO È UN TEST";

  // viene eseguita la funzione
  const result = createSlug(text);

  // viene verificato che il risultato sia tutto minuscolo
  expect(result).toBe(result.toLowerCase());
});
