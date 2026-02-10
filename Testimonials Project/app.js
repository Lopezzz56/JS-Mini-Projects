
let testimonials = [
    {testimonial: "It is necessary to fall in love... if only to provide an alibi for all the random despair you are going to feel anyway.", author:" ALbert Camus"},
    {testimonial: "Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.", author:"Princess Diana"},
    {testimonial: "Any one who considers arithmetical methods of producing random digits is, of course, in a state of sin.", author:" John von Neumann "},
    {testimonial: "In all natural disasters through time, man needs to attach meaning to tragedy, no matter how random and inexplicable the event is.", author:" Nathaniel Philbrick"},
    {testimonial: "Creativity is the process of having original ideas that have value. It is a process; it's not random.", author:" Ken Robinson"},
    {testimonial: "Self-control means wanting to be effective at some random point in the infinite radiations of my spiritual existence.", author:"Franz Kafka "},

]

let counter =0;


function updateUI(){
document.querySelector('.testcontent').textContent = `${testimonials[counter].testimonial} "`;
document.querySelector('.author').textContent = testimonials[counter].author;
}
function next(){
    counter = (counter+1) % testimonials.length;
    updateUI()
}
function prev(){
    counter = (counter -1 + testimonials.length) % testimonials.length;
    updateUI()
}

document.querySelector('.next-btn').addEventListener("click", next)
document.querySelector('.prev-btn').addEventListener("click", prev)

updateUI()