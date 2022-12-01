import allCountries from './data.js';

const my_main_div = document.getElementById('main_div')
console.log(allCountries);
const newarr = ['all']
allCountries.map(country => {

    

    if (!newarr.includes(country.continents[0])) {
        newarr.push(country.continents[0])
    }
    else {
        console.log('labas')
    }



    // console.log(country.name.common)

    const one_country_info = document.createElement('div');
    const my_country_name = document.createElement('h2')

    my_country_name.innerHTML = country.name.common

    one_country_info.id = 'ah'
    one_country_info.appendChild(my_country_name)
    

    const my_img = document.createElement('img')
    my_img.src = country.flags.png
    one_country_info.appendChild(my_img)


    const my_country_capital = document.createElement('h3')
    if (Array.isArray(country.capital)){
        // console.log(country.capital[0])
        my_country_capital.innerText = country.capital[0]
    }
    else {
        // console.log('info nerasta')
        my_country_capital.innerText = 'info nerasta'
    }

    one_country_info.appendChild(my_country_capital)
    

    const my_country_continet = document.createElement('h4')
    my_country_continet.innerText = country.continents[0]
    my_country_continet.classList.add('continent')

   

    if (country.continents[0] == 'Africa') {
        my_country_continet.style.background = 'orange'
    }
    if (country.continents[0] == 'Europe') {
        my_country_continet.style.background = 'lightblue'
    }
    if (country.continents[0] == 'Asia') {
        my_country_continet.style.background = 'yellow'
    }
    if (country.continents[0] == 'Oceania') {
        my_country_continet.style.background = '#03fc28'
    }
    if (country.continents[0] == 'North America') {
        my_country_continet.style.background = '#03e3fc'
    }
    if (country.continents[0] == 'South America') {
        my_country_continet.style.background = '#9803fc'
    }
    if (country.continents[0] == 'Antarctica') {
        my_country_continet.style.background = '#fc03db'
    }
    
    one_country_info.appendChild(my_country_continet)

    
    const my_country_currencies = document.createElement('h5')
    my_country_currencies.textContent = 'Currency - '

    for (let i in country.currencies) {
        my_country_currencies.innerText += ' ' + country.currencies[i].name
        
    }
    one_country_info.appendChild(my_country_currencies)

    

    const my_country_lang = document.createElement('h6')
    my_country_lang.textContent = 'Languages - '

    for (let i in country.languages) {
        my_country_lang.innerText += ' ' + country.languages[i]
    }
    one_country_info.appendChild(my_country_lang)
    
    


    
    const my_country_borders = document.createElement('h7')
    my_country_lang.textContent = 'Borders - '

    for (let i in country.borders) {
        // console.log(country.borders[i])
        my_country_borders.innerText += ' ' + country.borders[i]
    }
    
    one_country_info.appendChild(my_country_borders)

    
    my_main_div.appendChild(one_country_info)

})


const continents_buttons = document.querySelector('header')

newarr.forEach(continents => {
    const menu_buttons = document.createElement('button')
    menu_buttons.id = 'labas'
    menu_buttons.innerText = continents
    continents_buttons.appendChild(menu_buttons)
})

const all_button = document.querySelector('header button:nth-child(1)');
const africa_button = document.querySelector('header button:nth-child(2)');
const NorthAmerica_button = document.querySelector('header button:nth-child(3)');
const SouthAmerica_button = document.querySelector('header button:nth-child(4)');
const europe_button = document.querySelector('header button:nth-child(5)');
const asia_button = document.querySelector('header button:nth-child(6)');
const oceania_button = document.querySelector('header button:nth-child(7)');
const antarctica_button = document.querySelector('header button:nth-child(8)');

all_button.addEventListener('click', hideAll)
africa_button.addEventListener('click', hideAfrica)
NorthAmerica_button.addEventListener('click', hideNorthAmerica)
SouthAmerica_button.addEventListener('click', hideSouthAmerica)
europe_button.addEventListener('click', hideEurope)
asia_button.addEventListener('click', hideAsia)
oceania_button.addEventListener('click', hideOceania)
antarctica_button.addEventListener('click', hideAntarctica)


var divs = my_main_div.getElementsByTagName('div')



function hideAll() {
    for(let i = 0; i < divs.length; i++) {
        divs[i].style.display = 'block';
    }
}


function hideAfrica() {
    for(let i = 0; i < divs.length; i++){
        const name = divs[i].querySelector('h4').textContent;
        
        if (name == 'Africa') {
            divs[i].style.display = 'block';
        }
        else {
            divs[i].style.display = 'none';
        }
    }
}


function hideNorthAmerica() {
    for(let i = 0; i < divs.length; i++){
        const name = divs[i].querySelector('h4').textContent;
        
        if (name == 'North America') {
            divs[i].style.display = 'block';
        }
        else {
            divs[i].style.display = 'none';
        }
    }
}


function hideSouthAmerica() {
    for(let i = 0; i < divs.length; i++){
        const name = divs[i].querySelector('h4').textContent;
        
        if (name == 'South America') {
            divs[i].style.display = 'block';
        }
        else {
            divs[i].style.display = 'none';
        }
    }
}

function hideEurope() {
    for(let i = 0; i < divs.length; i++){
        const name = divs[i].querySelector('h4').textContent;
        
        if (name == 'Europe') {
            divs[i].style.display = 'block';
        }
        else {
            divs[i].style.display = 'none';
        }
    }
}

function hideAsia() {
    for(let i = 0; i < divs.length; i++){
        const name = divs[i].querySelector('h4').textContent;
        
        if (name == 'Asia') {
            divs[i].style.display = 'block';
        }
        else {
            divs[i].style.display = 'none';
        }
    }
}

function hideOceania() {
    for(let i = 0; i < divs.length; i++){
        const name = divs[i].querySelector('h4').textContent;
        
        if (name == 'Oceania') {
            divs[i].style.display = 'block';
        }
        else {
            divs[i].style.display = 'none';
        }
    }
}

function hideAntarctica() {
    for(let i = 0; i < divs.length; i++){
        const name = divs[i].querySelector('h4').textContent;
        
        if (name == 'Antarctica') {
            divs[i].style.display = 'block';
        }
        else {
            divs[i].style.display = 'none';
        }
    }
}




