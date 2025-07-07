async function getgames(category = 'mmorpg') {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'f60b893e9amsh728d4e8db625caep1c94f1jsn60c3839929a2',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    try {
        const data = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        const games = await data.json();

        row.innerHTML = '';

        games.slice(0, 1000).forEach(game => {
            const gameCard = new displayGame(
                game.thumbnail,
                game.title,
                game.short_description,
                game.genre,
                game.platform,
                game.id
            );
            gameCard.render();
        });

    } catch (error) {
        console.error("Error fetching games:", error);
    }
}
// getgames('mmorpg');
window.addEventListener('DOMContentLoaded', () => {
    getgames('mmorpg');
});


document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); 

        const category = this.textContent.trim().toLowerCase(); 
        getgames(category);

        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});
