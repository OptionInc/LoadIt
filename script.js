// script.js
const input = document.getElementById("myInput");

// Coller depuis le presse-papier
document.getElementById("pasteBtn").addEventListener("click", async () => {
  try {
    const text = await navigator.clipboard.readText();
    input.value = text;
  } catch (err) {
    alert("Impossible de coller depuis le presse-papier : " + err);
  }
});

// Envoyer l'URL au serveur pour téléchargement
document.getElementById("downloadBtn").addEventListener("click", () => {
  const url = input.value.trim();
  if (!url) return alert("Ajoute un lien TikTok !");
  window.location.href = `/download?url=${encodeURIComponent(url)}`;
});
