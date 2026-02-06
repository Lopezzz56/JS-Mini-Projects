let quotes = [
    {quote: "It is necessary to fall in love... if only to provide an alibi for all the random despair you are going to feel anyway.", author:" ALbert Camus"},
    {quote: "Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.", author:"Princess Diana"},
    {quote: "Any one who considers arithmetical methods of producing random digits is, of course, in a state of sin.", author:" John von Neumann "},
    {quote: "In all natural disasters through time, man needs to attach meaning to tragedy, no matter how random and inexplicable the event is.", author:" Nathaniel Philbrick"},
    {quote: "Creativity is the process of having original ideas that have value. It is a process; it's not random.", author:" Ken Robinson"},
    {quote: "Self-control means wanting to be effective at some random point in the infinite radiations of my spiritual existence.", author:"Franz Kafka "},

]

let colors = [
    "#ACDDDE",
    "#CAF1DE",
    "#E1F8DC",
    "#FEF8DD",
    "#FFE7C7",
    "#F7D8BA",
]

function randomquotegenerator(){
    let quote = quotes[Math.floor(Math.random()*quotes.length)];
    document.getElementById('quote').textContent = quote.quote;
    document.getElementById('author').textContent = '-'+quote.author;
}

document.querySelector('.quotegen').addEventListener("click", function(){
    randomquotegenerator();
randomcolorgenerator();
})


function randomcolorgenerator(){
    let color = colors[Math.floor(Math.random()*colors.length)];
    document.body.style.backgroundColor = color;
}

