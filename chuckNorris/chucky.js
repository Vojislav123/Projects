let selection = 'random';

const urlBase = 'https://api.chucknorris.io/jokes/random';
const chuckImg = document.getElementById('chuckImg');
const randomButton = document.getElementById('randomButton');
const animalJoke = document.getElementById('animalJoke');
const celebrityJoke = document.getElementById('celebrityJoke');
const religiousJoke = document.getElementById('religiousJoke');
const explicitJoke = document.getElementById('explicitJoke');
const scienceJoke = document.getElementById('scienceJoke');
const sportJoke = document.getElementById('sportJoke');
const devJoke = document.getElementById('devJoke');
const movieJoke = document.getElementById('movieJoke');
const historyJoke = document.getElementById('historyJoke');

const printJoke = document.getElementById('printJoke');

function randomClicked() {
    spinImg();
    fetch(urlBase)
        .then(res => {
            return res.json()
        }).then(data => {
            printJoke.innerHTML = data.value;
        })
}

function animalClicked() {
    spinImg();
    fetch(urlBase+'?category=animal')
        .then(res => {
            return res.json()
        }).then(data => {
            printJoke.innerHTML = data.value;
        })
}

function celebrityClicked() {
    spinImg();
    fetch(urlBase+'?category=celebrity')
        .then(res => {
            return res.json()
        }).then(data => {
            printJoke.innerHTML = data.value;
        })
}

function religiousClicked() {
    spinImg();
    fetch(urlBase+'?category=religion')
        .then(res => {
            return res.json()
        }).then(data => {
            printJoke.innerHTML = data.value;
        })
}

function explicitClicked() {
    spinImg()
    fetch(urlBase+'?category=explicit')
        .then(res => {
            return res.json()
        }).then(data => {
            printJoke.innerHTML = data.value;
        })
}

function scienceClicked() {
    spinImg();
    fetch(urlBase+'?category=science')
        .then(res => {
            return res.json()
        }).then(data => {
            printJoke.innerHTML = data.value;
        })
}

function sportClicked() {
    spinImg();
    fetch(urlBase+'?category=sport')
        .then(res => {
            return res.json()
        }).then(data => {
            printJoke.innerHTML = data.value;
        })
}
function devClicked() {
    spinImg();
    fetch(urlBase+'?category=dev')
        .then(res => {
            return res.json()
        }).then(data => {
            printJoke.innerHTML = data.value;
        })
}

function movieClicked() {
    spinImg();
    fetch(urlBase+'?category=movie')
        .then(res => {
            return res.json()
        }).then(data => {
            printJoke.innerHTML = data.value;
        })
}

function historyClicked() {
    spinImg();
    fetch(urlBase+'?category=history')
        .then(res => {
            return res.json()
        }).then(data => {
            printJoke.innerHTML = data.value;
        })
}

function spinImg() {
    chuckImg.classList.add('rotate');
    chuckImg.addEventListener('animationend', () => {
    chuckImg.classList.remove('rotate');
  }, { once: true });
}


randomButton.addEventListener('click', randomClicked);
animalJoke.addEventListener('click', animalClicked);
celebrityJoke.addEventListener('click', religiousClicked);
religiousJoke.addEventListener('click', celebrityClicked);
explicitJoke.addEventListener('click', explicitClicked);
scienceJoke.addEventListener('click', scienceClicked);
sportJoke.addEventListener('click', sportClicked);
devJoke.addEventListener('click', devClicked);
movieJoke.addEventListener('click', movieClicked);
historyJoke.addEventListener('click', historyClicked);