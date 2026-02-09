test("la funzione isPalindrome restituisce true per una stringa palindroma", () => {
  // viene definita una stringa palindroma
  const text = "anna";

  // viene eseguita la funzione
  const result = isPalindrome(text);

  // viene verificato che il risultato sia true
  expect(result).toBe(true);
});

test("la funzione isPalindrome restituisce false per una stringa non palindroma", () => {
  // viene definita una stringa non palindroma
  const text = "casa";

  // viene eseguita la funzione
  const result = isPalindrome(text);

  // viene verificato che il risultato sia false
  expect(result).toBe(false);
});
