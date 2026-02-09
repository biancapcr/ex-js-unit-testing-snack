// viene importata la funzione da testare
const getInitials = require("./getInitials");

test("la funzione getInitials restituisce le iniziali di un nome completo", () => {
  // viene definito un nome completo di esempio
  const fullName = "Mario Rossi";

  // viene eseguita la funzione
  const result = getInitials(fullName);

  // viene verificato che le iniziali siano corrette
  expect(result).toBe("MR");
});
