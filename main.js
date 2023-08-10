jokes();
function jokes(){
    nexxt();
    const setHeader = {
        headers: {
            Accept:"application/json"
        }
    }
    var joke = document.querySelector('p');
    fetch('https://icanhazdadjoke.com' , setHeader)
    .then((res) => res.json())
    .then((data) =>{
        joke.innerHTML = data.joke
    })
}
function  nexxt() {
    var bot = document.querySelector('span');
    bot.innerHTML = 'Next';
}
