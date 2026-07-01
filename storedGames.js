//current list of games
//The brightness values have already been calculated, I'm just storing them so they don't need to be calculated every time
//But I do also store the image for each game

export const games = [
    {
        name: "Hades",
        roguetype: "roguelite",
        genres: ["Action", "Hack and Slash", "RPG"],
        playtime: "30",
        classes: "3",
        perma_upgrades: "20+",
        equippable_items: "200",
        unlockable_items: "500+",

        screenshots: {
            low: "./images/imageCompare/Hades/low_Hades.png",
            med: "./images/imageCompare/Hades/med_Hades.png",
            high: "./images/imageCompare/Hades/high_Hades.png"
        },

        brightness: {
        low: 75,
        med: 52,
        high: 70
        },

        advice: {
            replayability:
                "Hades increases replayability through weapon aspects, permanent progression, character relationships, and story progression that follow from each run.",

            increase_playtime:
                "Hades runs follows several biomes, bosses, and gradual progression. Consider additional areas, optional encounters, or just general exploration.",

            decrease_playtime:
                "Try to implement how Hades keeps players moving quickly through encounters and movement."
        }
    },

    {
        name: "The Binding of Isaac",
        roguetype: "roguelite",
        genres: ["Action", "Bullet Hell", "Dungeon Crawler"],
        playtime: "30",

        screenshots: {
            low: "./images/imageCompare/Issac/low_Issac.png",
            med: "./images/imageCompare/Issac/med_Issac.png",
            high: "./images/imageCompare/Issac/high_Issac.png"
        },

        brightness: {
        low: 33,
        med: 51,
        high: 53
        },

        advice: {
            replayability:
                "Isaac contains tons of replayability from it's massive item variety, item synergies, alternate paths, and many unlockable characters.",

            increase_playtime:
                "Isaac extends runs through branching routes and optional content like secret rooms. Consider adding alternative paths or hidden areas.",

            decrease_playtime:
                "Try reducing area count or shortening progression between major milestones."
        }
    },

    {
        name: "Slay the Spire",
        roguetype: "roguelite",
        genres: ["Card Game", "Deck Builder", "Strategy"],
        playtime: "60",

        screenshots: {
            low: "./images/SlayTheSpire/low_StS.png",
            med: "./images/SlayTheSpire/med_StS.png",
            high: "./images/HadeSlayTheSpires/high_StS.png"
        },

        brightness: {
        low: 43,
        med: 46,
        high: 53
        },

        advice: {
            replayability:
                "Slay the Spire relies on build diversity, synergies, relic combinations, and multiple playable characters. Try implementing more unique items that players can use to conjure more unique runs.",

            increase_playtime:
                "Additional events, encounters, or branching paths can increase the duration of each run.",

            decrease_playtime:
                "Reducing the number of encounters or shortening progression between rewards can speed up runs."
        }
    }
];
