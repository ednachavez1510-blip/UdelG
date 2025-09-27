// Declaramos un arreglo (array) con varias frases motivacionales
const citas = [
  "Our Song - Debut.",
  "The Way I Loved You - Fearless.",
  "Begin Again - Red.",
  "Out of the Woods - 1989.",
  "Getaway Car - Reputation.",
  "False God - Lover.",
  "The 1 - Folklore.",
];

// Definimos la función que mostrará una cita aleatoria
function generarCancion() {
  const indice = Math.floor(Math.random() * citas.length);
  document.getElementById("quote").innerText = citas[indice];
}
