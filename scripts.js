fetch('games.json')
    .then(response => response.json())
    .then(games => {
        const gameList = document.querySelector('.game-list');
        games.forEach(game => {
            const gameCard = document.createElement('div');
            gameCard.className = 'game-card';
            gameCard.innerHTML = `
                <img src="${game.image}" alt="${game.title}">
                <h3>${game.title}</h3>
                <p>${game.description}</p>
                <a href="${game.link}" class="btn">Jouer maintenant</a>
            `;
            gameList.appendChild(gameCard);
        });
    })
    .catch(error => console.error('Erreur lors du chargement des jeux :', error));

// Affiche le contenu principal après l'animation d'introduction
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("main-content").style.display = "block";
    }, 3000); // Correspond à la durée de l'animation (3 secondes)
});