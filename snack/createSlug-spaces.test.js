test("la funzione createSlug sostituisce gli spazi con il carattere -", () => {
  // viene definita una stringa con spazi
  const text = "Questo è un test";

  // viene eseguita la funzione
  const result = createSlug(text);

  // viene verificato lo slug corretto
  expect(result).toBe("questo-e-un-test");
});
