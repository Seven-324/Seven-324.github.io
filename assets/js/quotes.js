// RANDOM QUOTE GENERATOR CODE!
// Create a tht generates random quotes
// Displays one quote daily

function quotesGenerator() {
    var quotes = [
        "\"Do not go where the path may lead, go instead where there is no path and leave a trail.\" -Ralph Waldo Emerson",
        "\"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.\" - Helen Keller",
        "\"Always remember that you are absolutely unique. Just like every one else.\" - Margaret Mead",
        "\"The future belongs to those who believe in the beauty of their dreams.\" -Eleanor Roosevelt",
        "\"It is during our darkest moments that we must focus to see the light.\" - Aristotle",
        "\"When you reach the end of your rope, tie a knot in it and hang on.\" -Franklin D. Roosevelt",
        "\"If you set your goal ridiculously high amd it\'s failure, you will fail above every one else\'s success.\" -James Cameron"
    ];
    var randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quotespace').innerHTML = randomQuotes;
};