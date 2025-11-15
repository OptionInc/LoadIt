document.getElementById('pasteBtn').addEventListener('click', async () => {
    const input = document.querySelector('#e input');

    try {
        const text = await navigator.clipboard.readText();
        input.value = text;
    } catch (err) {
        console.error('Erreur lors du collage :', err);
        alert('Impossible de coller le texte. Vérifie les autorisations du navigateur.');
    }
});