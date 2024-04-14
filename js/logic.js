let woorden = ["amsterdam", "rotterdam", "utrecht", "eindhoven", "tilburg", "groningen", "almere", "breda", "nijmegen", "enschede", "haarlem", "arnhem", "zaanstad", "amersfoort", "apeldoorn", "hoofddorp", "maastricht", "leiden", "dordrecht", "zoetermeer", "zwolle", "deventer", "delft", "alkmaar", "heerlen", "venlo", "leeuwarden", "hilversum", "hengelo", "amstelveen", "purmerend", "oss", "schiedam", "spijkenisse", "helmond", "vlaardingen", "almelo", "gouda", "zaandam", "lelystad", "hoorn", "ede", "assen", "nieuwegein", "veenendaal", "zeist", "hardenberg", "emmen", "oosterhout", "doetinchem", "kerkrade", "kampen", "weert", "worden", "sittard", "heerhugowaard", "rijswijk", "middelburg", "emmeloord", "zwijdrecht", "waalwijk", "huizen", "vlissingen", "ridderkerk", "soest", "roermond", "drachten", "heerenven", "medemblik", "tiel", "harderwijk", "maarssen", "venray", "hoogeveen", "barendrecht", "nijkerk", "voorburg", "beverwijk", "goes", "zutphen", "heemskerk", "wageningen", "castricum", "gorinchem", "uden", "ijsselstein", "epe", "sneek", "geleen", "maassluis", "wijchen", "papendrecht", "oldenzaal", "bussum", "valkenswaard", "meppel", "ypenburg", "winterswijk", "boxtel", "brunssum", "leusden", "best", "delfzijl", "barneveld", "veendam", "dronten", "terneuzen", "geldrop", "uithoorn", "culemborg", "dalfsen", "zaltbommel", "werkendam", "zevenaar", "oisterwijk", "leiderdorp", "geldermalsen", "heemstede", "beuningen", "duiven", "dongen", "wassenaar", "veghel", "waddinxveen", "ommoord", "vught", "hoensbroek", "baarn", "diemen", "haaksbergen", "sliedrecht", "steenbergen", "wierden", "schijndel", "neunen", "putten", "scheveningen", "aalsmeer", "goirle", "voorschoten", "losser", "lisse", "borssele", "volendam", "hellevoetsluis", "elburg", "hoogezand", "brummen", "oegstgeest", "geertruidenberg", "leerdam", "borne", "heiloo", "elst", "tubbergen", "tegelen", "raalte", "stadskanaal", "cranendonck", "vianen", "tongelre", "leek", "lichtenvoorde", "wisch", "nunspeet", "aalten", "zeewolde", "benthuizen", "groesbeek", "pijnacker", "winschoten", "hillegom", "alblasserdam", "rhoon", "eersel", "bergeyk", "rhenen", "weesp", "naaldwijk", "velp", "middelharnis", "enkhuizen", "urk", "steenwijk", "naarden", "sint-oedenrode", "zandvoort", "korrewegwijk", "gennep", "bergschenhoek", "merenwijk", "eibergen", "schiebroek", "rijen", "lindenholt", "harlingen", "gemert", "harenkarspel", "staphorst", "sassenheim", "mijdrecht", "boskoop", "dieren", "bennekom", "coevorden", "breukelen", "woudrichem", "lopik", "lombardijen", "vreewijk", "bloemhof", "twello", "dokkum", "grave", "franeker", "joure", "reeuwijk", "heesch", "wolvega", "vaassen", "korvel", "lunteren", "zuidwijk", "rozenburg", "boxmeer", "appingedam", "lochem", "schoonhoven", "vriezenveen", "marsdijk", "bemmel", "klazienaveen", "pendrecht", "hattem", "noordwijkerhout", "ommen", "made", "eijsden", "uitgeest", "lunetten", "goederreede", "monster", "laren", "camminghaburen", "doesburg", "goor", "woudenberg", "stein", "carnisse", "opmeer", "oosterbeek", "prinsenbeek", "someren", "hoogland", "oosterpark", "bleiswijk", "zierikzee", "oirschot", "borculo", "doorn", "spangen", "ermelo", "hatert", "eerbeek", "lemmer", "leesten", "haelen", "bloemendaal", "halsteren", "oudewater", "bladel", "liesveld", "burgum", "voorthuizen", "asten", "beilen", "veldhuizen", "renkum", "mierlo", "haren", "strijen", "statenkwartier", "kudelstaart", "oosterwolde", "warnsveld", "lent", "bolsward", "heeze", "bargeres", "zaandijk", "huizum", "heerde", "scherpenzeel", "arcen", "slikkerveer", "kapelle", "princenhage", "vroomshoop", "beek", "sappemeer", "axel", "lindenheuvel", "rijsburg", "budel", "hilvarenbeek", "angelslo", "oosteinde", "bedum", "neede", "groenewoud", "udenhout", "bolnes", "heer", "tholen", "broekhoven", "rheden", "edam", "emmerhout", "honselersdijk", "stiens", "limmen", "feijenoord", "teteringen", "elsloo", "nederweert", "meerhoven", "randenbroek", "zuidhorn", "reusel", "gorredijk", "roden", "hengstdal", "vaals", "hasselt", "vleuten", "delden", "abcoude", "zundert", "delfshaven", "panningen", "overschie", "peelo", "raamsdonksveer", "kerkdriel", "yerseke", "scharn", "amby", "selwerd", "berghem", "heino", "eelde", "waalre", "heythuysen", "orden", "leersum", "woudhuis", "bunnik", "gilze", "druten", "kortenhoef", "driemanspolder", "muiden"];

let lengte = woorden.length;
let gekozenIndex = Math.floor(Math.random() * lengte);
let gekozenWoord = woorden[gekozenIndex].toLowerCase(); // toLowerCase() toegevoegd
let gokKansen = 7;
let geradenlijst = [];
let hangmanParts = [
    "  +---+\n" +
    "  |   |\n" +
    "      |\n" +
    "      |\n" +
    "      |\n" +
    "      |\n" +
    "=========",
    "  +---+\n" +
    "  |   |\n" +
    "  O   |\n" +
    "      |\n" +
    "      |\n" +
    "      |\n" +
    "=========",
    "  +---+\n" +
    "  |   |\n" +
    "  O   |\n" +
    "  |   |\n" +
    "      |\n" +
    "      |\n" +
    "=========",
    "  +---+\n" +
    "  |   |\n" +
    "  O   |\n" +
    " /|   |\n" +
    "      |\n" +
    "      |\n" +
    "=========",
    "  +---+\n" +
    "  |   |\n" +
    "  O   |\n" +
    " /|\\  |\n" +
    "      |\n" +
    "      |\n" +
    "=========",
    "  +---+\n" +
    "  |   |\n" +
    "  O   |\n" +
    " /|\\  |\n" +
    " /    |\n" +
    "      |\n" +
    "=========",
    "  +---+\n" +
    "  |   |\n" +
    "  O   |\n" +
    " /|\\  |\n" +
    " / \\  |\n" +
    "      |\n" +
    "========="
];


//logging for tests
console.log(gekozenWoord);

function initGame() {
    let displayWord = "";
    for (let i = 0; i < gekozenWoord.length; i++) {
        displayWord += "_";
    }
    document.getElementById("displayWord").innerHTML = displayWord;
    document.getElementById("guessChances").innerHTML = gokKansen;
    document.getElementById("hangman-ascii").innerHTML = hangmanParts[0];
}

window.onload = initGame;

function guessLetter() {
    let inputElement = document.getElementById("letterInput");
    let letter = inputElement.value.toLowerCase();

    //Incorrect value alerts
    if (!inputElement.value) {
        alert("Please enter a letter");
        return;
    }
    if (geradenlijst.includes(letter)) {
        alert("Letter already guessed");
        return;
    }
    if(letter == !NaN) {
        alert("Please enter a letter");
        return
    }
    if (!/^[a-z]$/.test(letter)) {
        alert("Please enter a valid letter");
        return;
    }

    inputElement.value = "";
    geradenlijst.push(letter);

    let updatedDisplay = "";
    let allLettersGuessed = true;
    let letterCorrect = false;

    for (let i = 0; i < gekozenWoord.length; i++) {
        if (geradenlijst.includes(gekozenWoord[i])) {
            updatedDisplay += gekozenWoord[i];
            if(gekozenWoord[i] == letter){
                letterCorrect = true;
            }
        } else {
            updatedDisplay += "_";
            allLettersGuessed = false;
        }
    }
    document.getElementById("displayWord").innerHTML = updatedDisplay;

    if (allLettersGuessed) {
        alert("You won, congratulations!");
    }else if(!letterCorrect){
        gokKansen--;
        document.getElementById("guessChances").innerHTML = gokKansen;
        document.getElementById("hangman-ascii").innerHTML = hangmanParts[6 - gokKansen];
        if (gokKansen == 0) {
            alert("You lost. The city was: " + gekozenWoord);
            reset();
        }
    }

}

function gok() {
    let geradenLetter = document.lingo.gok.value.toLowerCase();
    let woordRaden = document.lingo.woord.value;
    let geradenWoord = document.lingo.woord.value.split("");
    let origineelWoord = document.lingo.origineelWoord.value; // nieuw toegevoegd veld


    //Controleer of de letter in het woord is
    for (let i = 0; i < origineelWoord.length; i++) {
        if (origineelWoord[i] == geradenLetter) {
            geradenWoord[i] = geradenLetter;
        }
    }

    document.lingo.woord.value = geradenWoord.join("");
    document.lingo.gok.value = ""; // Reset het invoerveld

    if(!geradenlijst.includes(gekozenWoord[i])){
        gokKansen--;
        document.getElementById("guessChances").innerHTML = gokKansen;
        document.getElementById("hangman-ascii").innerText = hangmanParts[7 - gokKansen];
    }
    if (gokKansen == 0) {
        alert("You lost. The word was: " + gekozenWoord);
        reset();
    }
}

function reset() {
    gekozenIndex = Math.floor(Math.random() * lengte);
    gekozenWoord = woorden[gekozenIndex].toLowerCase();
    geradenlijst = [];
    gokKansen = 7;
    initGame();

    console.log(gekozenWoord);
}


document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    document.getElementById("button").click();
  }
});