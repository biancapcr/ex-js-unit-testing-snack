// viene definita una implementazione minima solo per rendere il test eseguibile
function createSlug(title) {
  // viene verificato che il titolo sia una stringa
  if (typeof title !== "string") {
    throw new Error("titolo non valido");
  }

  // viene rimossa la spaziatura ai bordi
  const trimmed = title.trim();

  // viene verificato che non sia vuoto
  if (trimmed.length === 0) {
    throw new Error("titolo non valido");
  }

  // viene restituito uno slug base
  return trimmed.toLowerCase().split(" ").filter(Boolean).join("-");
}

describe("snack 6 - createSlug", () => {
  test("lancia un errore se il titolo è vuoto", () => {
    // viene definito un titolo vuoto
    const title = "";

    // viene verificato che venga lanciato un errore
    expect(() => createSlug(title)).toThrow();
  });

  test("lancia un errore se il titolo contiene solo spazi", () => {
    // viene definito un titolo composto solo da spazi
    const title = "   ";

    // viene verificato che venga lanciato un errore
    expect(() => createSlug(title)).toThrow();
  });

  test("lancia un errore se il titolo non è una stringa", () => {
    // viene definito un valore non valido
    const title = 123;

    // viene verificato che venga lanciato un errore
    expect(() => createSlug(title)).toThrow();
  });
});
