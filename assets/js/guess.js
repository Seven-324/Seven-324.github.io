// MINI LUCKY GAME CODE!
// Generates random letter
// Gets third letter of each word
// Displays compared results to players, if third letter matches random letter or not

function miniLuckyGame(userInput) {
    var randomLetters = generateRandomLetter();
    var thirdLetter = userInput.substring(2,3);
    
    if (randomLetters == thirdLetter){
        document.getElementById('resultinfo').innerHTML = "Generated random letter is " + randomLetters + ". While your third letter is " + thirdLetter + ". You were lucky! There is a match!";
    }else{
        document.getElementById('resultinfo').innerHTML = "Generated random letter is " + randomLetters + ". While your third letter is " + thirdLetter + ". No luck mate! Try again.";
    }
    };
    
    function generateRandomLetter() {
        var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] ;
        var randomLetter = letters[Math.floor(Math.random() * letters.length)];
        return randomLetter;
    };