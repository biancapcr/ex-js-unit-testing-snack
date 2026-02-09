// viene definito un array di post di esempio
const posts = [
  { id: 1, title: "primo post", slug: "primo-post" },
  { id: 2, title: "secondo post", slug: "secondo-post" },
  { id: 3, title: "terzo post", slug: "terzo-post" },
];

// viene definita una implementazione minima solo per rendere il test eseguibile
function findPostById(postsArray, id) {
  // viene verificato che l'array sia un array
  if (!Array.isArray(postsArray)) {
    throw new Error("posts non validi");
  }

  // viene verificato che l'id sia numerico
  if (typeof id !== "number") {
    throw new Error("id non valido");
  }

  // viene verificato che ogni post abbia la struttura richiesta
  postsArray.forEach((post) => {
    const hasId = Object.prototype.hasOwnProperty.call(post, "id");
    const hasTitle = Object.prototype.hasOwnProperty.call(post, "title");
    const hasSlug = Object.prototype.hasOwnProperty.call(post, "slug");

    if (!hasId || !hasTitle || !hasSlug) {
      throw new Error("post non conforme");
    }
  });

  // viene restituito il post con id corrispondente, se presente
  return postsArray.find((post) => post.id === id);
}

describe("snack 7 - findPostById - comportamento", () => {
  test("restituisce il post corretto dato l’array di post e l’id", () => {
    // viene definito l'id da cercare
    const idToFind = 2;

    // viene cercato il post
    const result = findPostById(posts, idToFind);

    // viene verificato che il post restituito sia quello atteso
    expect(result).toEqual({
      id: 2,
      title: "secondo post",
      slug: "secondo-post",
    });
  });

  test("restituisce undefined se l'id non esiste", () => {
    // viene definito un id non presente
    const idToFind = 999;

    // viene cercato il post
    const result = findPostById(posts, idToFind);

    // viene verificato che non venga trovato alcun post
    expect(result).toBeUndefined();
  });
});

describe("snack 7 - findPostById - conformità dati", () => {
  test("ogni post ha le proprietà id, title e slug", () => {
    // viene verificato che ogni post abbia le proprietà richieste
    posts.forEach((post) => {
      expect(post).toHaveProperty("id");
      expect(post).toHaveProperty("title");
      expect(post).toHaveProperty("slug");
    });
  });

  test("lancia un errore se viene passato un id non numerico", () => {
    // viene definito un id non numerico
    const idToFind = "2";

    // viene verificato che la funzione rifiuti l'id non numerico
    expect(() => findPostById(posts, idToFind)).toThrow();
  });

  test("lancia un errore se un post non ha la proprietà slug", () => {
    // viene creato un array non conforme
    const invalidPosts = [
      { id: 1, title: "ok", slug: "ok" },
      { id: 2, title: "manca slug" },
    ];

    // viene verificato che la funzione rifiuti la struttura non conforme
    expect(() => findPostById(invalidPosts, 1)).toThrow();
  });
});
