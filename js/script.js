function generateQuote() {
    const quotes = [
        {
            quote: "Curse you, Perry the Playpus",
            author: "Dr. Doofenshmirtz"
        },
        {
            quote: "If I had a nickel everytime I was doomed by a puppet, I'd have two nickels",
            author: "Dr. Doofenshmirtz"
        },
        {
            quote: "It all began on the day of my actual birth",
            author: "Dr. Doofenshmirtz"
        },
        {
            quote: "But Then They Add Some Terrible Twist!",
            author: "Dr. Doofenshmirtz"
        },
        {
            quote: "I love inside jokes. I'd love to be a part of one someday.",
            author: "Michael Scott"
        },
        {
            quote: "I'm not superstitious, but I am a little stitious.",
            author: "Michael Scott"
        },
        {
            quote: "Did I stutter?!",
            author: "Stanley Hudson"
        },
        {
            quote: "I knew exactly what to do. But in a much more real sense, I had no idea what to do",
            author: "Michael Scott"
        }
    ];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotation").innerHTML = "&quot;" + quotes[arrayIndex].quote + "&quot;";
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;
}

window.onload = function () {
    generateQuote();
}

document.getElementById("generate").addEventListener('click', generateQuote);