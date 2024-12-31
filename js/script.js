const themes = {
    steden: ["amsterdam", "rotterdam", "utrecht", "groningen", "haarlem", "maastricht", "eindhoven", "nijmegen", "arnhem", "leeuwarden", "enschede", "zwolle", "apeldoorn", "tilburg", "delft", "denhaag", "alkmaar", "leiden", "breda", "venlo"],
    dieren: ["hond", "kat", "konijn", "paard", "hamster", "slang", "parkiet", "panda", "vos", "wolf", "beer", "egel", "koe", "varken", "schaap", "goudvis", "zeehond", "uil", "spin", "schildpad"],
    films: ["avengers", "frozen", "batman", "superman", "spiderman", "jurassicworld", "blackpanther", "incredibles", "harrypotter", "hobbit", "matrix", "minions", "moana", "coco", "aladdin", "lionking", "shrek", "pirates", "dune", "starwars"],
    beroepen: ["politie", "brandweer", "piloot", "kapper", "verpleegkundige", "programmeur", "schilder", "architect", "timmerman", "slager", "journalist", "fotograaf", "acteur", "muzikant", "manager", "advocaat", "rechter", "wetenschapper", "elektricien", "tuinier"],
    eten: ["hamburger", "frikandel", "broodje", "pannenkoek", "sushi", "ijs", "chips", "wafel", "taco", "burrito", "soep", "salade", "spaghetti", "lasagne", "fruitsalade", "chocolade", "koekje", "croissant", "wrap", "omelet"]
};

let selectedTheme = "steden";
let currentWord = "";
let remainingChances = 7;
let guessedLetters = [];

function initGame() {
    const words = themes[selectedTheme];
    currentWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    remainingChances = 7;

    updateWordDisplay();
    document.getElementById("guessChances").textContent = remainingChances;
}

function updateWordDisplay() {
    const displayWord = currentWord
        .split("")
        .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
        .join(" ");
    document.getElementById("displayWord").textContent = displayWord;
}

function guessLetter() {
    const letterInput = document.getElementById("letterInput");
    const guessedLetter = letterInput.value.toLowerCase();
    letterInput.value = "";

    if (!guessedLetter || !/^[a-z]$/.test(guessedLetter)) {
        showPopup("Voer een geldige letter in.");
        return;
    }
    if (guessedLetters.includes(guessedLetter)) {
        showPopup("Je hebt deze letter al geraden!");
        return;
    }

    guessedLetters.push(guessedLetter);

    if (currentWord.includes(guessedLetter)) {
        updateWordDisplay();
        if (!document.getElementById("displayWord").textContent.includes("_")) {
            showPopup("Gefeliciteerd! Je hebt het woord geraden!");
            resetGame();
        }
    } else {
        remainingChances--;
        document.getElementById("guessChances").textContent = remainingChances;

        if (remainingChances === 0) {
            showPopup(`Helaas, je hebt verloren! Het woord was: ${currentWord}`);
            resetGame();
        }
    }
}

function changeTheme() {
    selectedTheme = document.getElementById("theme").value;
    resetGame();
}

function resetGame() {
    initGame();
}

function showPopup(message) {
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popup-message");
    popupMessage.textContent = message;
    popup.classList.remove("hidden");
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.add("hidden");
}

window.onload = () => {
    initGame();
    document.getElementById("letterInput").addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            guessLetter();
        }
    });
};
