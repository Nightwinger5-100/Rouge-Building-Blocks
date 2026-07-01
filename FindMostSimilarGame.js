//get the stored games to compare values
import { games } from "./storedGames.js";
const resultDiv = document.getElementById("result");

//the difference of brightness between low, med, and high actvity
function compareBrightness(userBrightness, game) {

    return (
        Math.abs(userBrightness.low - game.brightness.low) +
        Math.abs(userBrightness.med - game.brightness.med) +
        Math.abs(userBrightness.high - game.brightness.high)
    );
}

//each choice thats asimilar increaers the "score value" Game with the highest score wins
function compareGame(userResponses, game) {
    let score = 0;

    if (userResponses.roguetype === game.roguetype) {
        score += 2;
    }

    //get each matching item in the array and add it to the score
    const matchingGenres = userResponses.genres.filter(
        genre => game.genres.includes(genre) //function(genre){return game.genres.includes(genre);}
    );
    
    score += matchingGenres.length;

    if (userResponses.playtime === game.playtime) {
        score += 1;
    }

    if (userResponses.classes === game.classes) {
        score += 1;
    }

    if (userResponses.perma_upgrades === game.perma_upgrades) {
        score += 1;
    }

    if (userResponses.equippable_items === game.equippable_items) {
        score += 1;
    }

    if (userResponses.unlockable_items === game.unlockable_items) {
        score += 1;
    }

    //Brightness stuff is optional
    const lowBrightness = localStorage.getItem("low_brightness");

    const medBrightness = localStorage.getItem("med_brightness");

    const highBrightness = localStorage.getItem("high_brightness");

    // Only compare screenshots if user uploaded them
    if (lowBrightness && medBrightness && highBrightness) {

        
        const userBrightness = {
            low: Number(lowBrightness),
            med: Number(medBrightness),
            high: Number(highBrightness)
        };

        //get the difference of brightness
        const brightnessDifference = compareBrightness(userBrightness, game);

        // less difference = more similar

        console.log("The brightness difference is: " + brightnessDifference);
        if (brightnessDifference < 15) {
            score += 3;
        }
        else if (brightnessDifference < 30) {
            score += 2;
        }
        else if (brightnessDifference < 50) {
            score += 1;
        }
    }


    return score;
}

//get all the responses
if (resultDiv) {
    const responses = {
        name: localStorage.getItem("gameName"),
        roguetype: localStorage.getItem("rogueType"),
        genres: JSON.parse(localStorage.getItem("genres") || "[]"),
        playtime: localStorage.getItem("playtime"),
        classes: localStorage.getItem("classes"),
        perma_upgrades: localStorage.getItem("perma_upgrades"),
        equippable_items: localStorage.getItem("equippable_items"),
        unlockable_items: localStorage.getItem("unlockable_items")
    }

    let bestMatch = null;
    let highestScore = -1;

    //find the highest score out of all the games and games and return that game and score
    for (const game of games) {
        const score = compareGame(responses, game);

        if (score > highestScore) {
            highestScore = score;
            bestMatch = game;
        }
    }

    //store the result
    localStorage.setItem("most_similar_game", bestMatch.name);

    resultDiv.innerHTML = `
        <h2>${bestMatch.name}</h2>
        <p>Match Score: ${highestScore}</p>
        <p>Roguetype: ${bestMatch.roguetype}</p>
        <p>Genres: ${bestMatch.genres.join(", ")}</p>
    `;
}