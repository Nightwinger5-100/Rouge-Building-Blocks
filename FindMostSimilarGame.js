console.log("FindMostSimilarGame loaded");
import { games } from './storedGames.js';

function compareGame(userResponses, game) {
    let score = 0;

    if (userResponses.rougetype === game.rougetype) {
        score += 2;
    }

    const matchingGenres = userResponses.genres.filter(
        genre => game.genres.includes(genre)
    );

    score += matchingGenres.length;

    if (userResponses.playtime === game.playtime) {
        score += 1;
    }

    return score;
}

document.getElementById('questionnaireForm').addEventListener('submit', function(e) {
    e.preventDefault();

    console.log("Form submitted");

    document.getElementById("result").style.display = "block";

    const responses = {
        name: document.getElementById('name').value,
        rougetype: document.querySelector('input[name="rougetype"]:checked')?.value,
        genres: Array.from(
            document.querySelectorAll('input[name="genres"]:checked')
        ).map(checkbox => checkbox.value),
        playtime: document.querySelector('input[name="playtime"]:checked')?.value,
    };

    let bestMatch = null;
    let highestScore = -1;

    for (const game of games) {
        const score = compareGame(responses, game);

        if (score > highestScore) {
            highestScore = score;
            bestMatch = game;
        }
    }

    const resultDiv = document.getElementById('result');
    console.log(bestMatch);
    console.log(highestScore);
    console.log(resultDiv);
    resultDiv.innerHTML = `
        <h3>Closest Match</h3>
        <p>${bestMatch.name}</p>
        <p>Score: ${highestScore}</p>
    `;
});

document.getElementById('questionnaireForm').addEventListener('submit', function(e) {
    e.preventDefault();

    console.log("Form submitted");

    document.getElementById("result").style.display = "block";

    document.getElementById("nextSlide").style.display = "block";

    const responses = {
        name: document.getElementById('name').value,
        rougetype: document.querySelector('input[name="rougetype"]:checked')?.value,
        genres: Array.from(
            document.querySelectorAll('input[name="genres"]:checked')
        ).map(checkbox => checkbox.value),
        playtime: document.querySelector('input[name="playtime"]:checked')?.value,
    };

    let bestMatch = null;
    let highestScore = -1;

    for (const game of games) {
        const score = compareGame(responses, game);

        if (score > highestScore) {
            highestScore = score;
            bestMatch = game;
        }
    }

    const resultDiv = document.getElementById('result');
    console.log(bestMatch);
    console.log(highestScore);
    console.log(resultDiv);
    resultDiv.innerHTML = `
        <h3>Closest Match</h3>
        <p>${bestMatch.name}</p>
        <p>Score: ${highestScore}</p>
    `;
});

document.getElementById('questionnaireFormTwo').addEventListener('submit', function(e) {
    e.preventDefault();

    console.log("Form submitted");

    document.getElementById("result").style.display = "block";

    document.getElementById("nextSlide").style.display = "block";

    const responses = {
        name: document.getElementById('name').value,
        rougetype: document.querySelector('input[name="rougetype"]:checked')?.value,
        genres: Array.from(
            document.querySelectorAll('input[name="genres"]:checked')
        ).map(checkbox => checkbox.value),
        playtime: document.querySelector('input[name="playtime"]:checked')?.value,
    };

    let bestMatch = null;
    let highestScore = -1;

    for (const game of games) {
        const score = compareGame(responses, game);

        if (score > highestScore) {
            highestScore = score;
            bestMatch = game;
        }
    }

    const resultDiv = document.getElementById('result');
    console.log(bestMatch);
    console.log(highestScore);
    console.log(resultDiv);
    resultDiv.innerHTML = `
        <h3>Closest Match</h3>
        <p>${bestMatch.name}</p>
        <p>Score: ${highestScore}</p>
    `;
});