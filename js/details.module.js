function goToDetails(id) {
    window.location.href = `home.html?id=${id}`;

}



const params = new URLSearchParams(window.location.search);
const gameId = params.get('id');
console.log(gameId);


async function getGameDetails(id) {
    const options = {
        method: 'GET',
        headers: {
		'x-rapidapi-key': 'f60b893e9amsh728d4e8db625caep1c94f1jsn60c3839929a2',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
    };

    try {

        const res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
        const game = await res.json();

        const gameDetails = new displayDetails(
            game.thumbnail,
            game.title,
            game.genre,
            game.description,
            game.developer,
            game.platform,
            game.status,
            game.id,
            game.game_url
        );
        console.log(game);


        gameDetails.render();

    } catch (err) {
        console.error(err);

    }
}

if (gameId) {
    getGameDetails(gameId);
} else {
    console.log("No ID found in URL — Not on game details page.");
}


console.log("Game ID from URL is:", gameId);

