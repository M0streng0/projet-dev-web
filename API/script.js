async function recupererPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    const post = await response.json();
    console.log("Titre :", post.title);
    console.log("Contenu :", post.body);
  } catch (error) {
    console.error("Erreur lors de la récupération du post :", error);
  }
}

recupererPost();