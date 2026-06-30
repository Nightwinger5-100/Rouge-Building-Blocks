//get the stored games to compare values
import { games } from "./storedGames.js";
const adviceDiv = document.getElementById("advice");

//depending on the choices of the user it will give advice based on the data given
//if the current data cannot give specific advice, generic advice will be given
//each game has it's own advice depending on the player's advice choice
function decidedAdvice(userResponses, similarGame) {
    let genericAdvice = null;
    let playtime = null;
    let classes = null;
    let permaUpgrades = null;
    let equippables = null;
    let unlockables = null;
    let advice = "";
    let gameSpecificAdvice = "";

    //the gameSpecificAdvice
    if (similarGame.advice && similarGame.advice[userResponses.improvement]) {
        gameSpecificAdvice = `<br><br><strong>Advice based on ${similarGame.name}:</strong><br>` + similarGame.advice[userResponses.improvement];
    }

    if (userResponses.improvement === "increase_playtime") {

        if (Number(userResponses.playtime) < Number(similarGame.playtime)) {
            playtime = "- Consider increasing area size, adding more optional encounters, or additional progression within a run.";
        }

        if (!playtime) {
            genericAdvice = "- Consider slowing player progression or slow the availability of strong upgrades.";
            return genericAdvice + gameSpecificAdvice;
        }

        return playtime + gameSpecificAdvice;
    }

    else if (userResponses.improvement === "decrease_playtime") {

        if (Number(userResponses.playtime) > Number(similarGame.playtime)) {
            playtime = "- Consider reducing main content, shorten areas, or increase player power progression.";
        }

        if (!playtime) {
            genericAdvice = "- Consider buffing upgrades so players progress through runs more quickly.";
            return genericAdvice + gameSpecificAdvice;
        }

        return playtime + gameSpecificAdvice;
    }

    else if (userResponses.improvement === "replayability") {

        if (Number(userResponses.classes) < Number(similarGame.classes)) {
            classes = "- Add more playable classes, characters, or etc.";
        }

        if (Number(userResponses.perma_upgrades) < Number(similarGame.perma_upgrades)) {
            permaUpgrades = "- Try adding more permanent progression and unlockable upgrades.";
        }

        if (Number(userResponses.equippable_items) < Number(similarGame.equippable_items)) {
            equippables = "- Increase item variety.";
        }

        if (Number(userResponses.unlockable_items) < Number(similarGame.unlockable_items)) {
            unlockables = "- Adding more unlockable items, relics, weapons, etc. Can encourage players to replay to see new synergies.";
        }
        
        //combine the advuce
        if (classes) advice += classes + "<br><br>";
        if (permaUpgrades) advice += permaUpgrades + "<br><br>";
        if (equippables) advice += equippables + "<br><br>";
        if (unlockables) advice += unlockables + "<br><br>";

        //no advice to give if the data is 1-1 > will lead to additional questionaires
        if (!advice) {
            advice = "- Your game's replayability is already comparable to the matched game.";
        }

        return advice + gameSpecificAdvice;
    }

    //no advice to give because of missing advice choice
    return "No advice available.";
}


//get all the responses
if (adviceDiv) {
    const responses = {
        playtime: localStorage.getItem("playtime"),
        classes: localStorage.getItem("classes"),
        perma_upgrades: localStorage.getItem("perma_upgrades"),
        equippable_items: localStorage.getItem("equippable_items"),
        unlockable_items: localStorage.getItem("unlockable_items"),
        similar_game: localStorage.getItem("most_similar_game"),
        improvement: localStorage.getItem("improvement")
    }

    const similarGame = games.find(game => game.name === responses.similar_game); //game.find(function(game){return game.name === responses.similar_game;}

    const advice = decidedAdvice(responses, similarGame);

    adviceDiv.innerHTML = `
        <p><strong>Advice:</strong> <br> ${advice}</p>
    `;
}