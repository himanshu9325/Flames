function calculateFLAMES() {
    var yourName = document.getElementById("yourName").value.toLowerCase().replace(/ /g, "");
    var partnerName = document.getElementById("partnerName").value.toLowerCase().replace(/ /g, "");
    var lettersToRemove = "";

    // Find common letters to remove
    for (var i = 0; i < yourName.length; i++) {
        var index = partnerName.indexOf(yourName[i]);
        if (index !== -1) {
            lettersToRemove += yourName[i];
            partnerName = partnerName.slice(0, index) + partnerName.slice(index + 1);
        }
    }

    // Remove common letters from names
    for (var i = 0; i < lettersToRemove.length; i++) {
        yourName = yourName.replace(lettersToRemove[i], "");
    }

    partnerName = partnerName.replace(new RegExp("[" + lettersToRemove + "]", "g"), "");

    var totalLetters = yourName.length + partnerName.length;
    var flames = "FLAMES";
    var result = "";

    // Determine relationship based on remaining letters
    if (totalLetters > 0) {
        var index = (totalLetters - 1) % flames.length; // Subtract 1 to get the correct index
        result = flames[index];
    }

    displayResult(result);
}

function displayResult(result) {
    var resultDiv = document.getElementById("result");
    var message = "";

    switch (result) {
        case "F":
            message = "Friendship";
            break;
        case "L":
            message = "Love";
            break;
        case "A":
            message = "Affection";
            break;
        case "M":
            message = "Marriage";
            break;
        case "E":
            message = "Enemy";
            break;
        case "S":
            message = "Sister (or Sweetheart)";
            break;
        default:
            message = "Invalid input!";
            break;
    }

    resultDiv.innerText = message;
}
