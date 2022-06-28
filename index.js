var planet = 0,
    weight = 0,
    result,
    planetImg,
    planetName;
var planetForm = document.getElementById('planet')
var weightForm = document.getElementById('weight')
let textSection = document.getElementById('show-mass')
let imageSection = document.getElementById('show-image')

let imageElement = document.getElementById('image-section')

planetForm.addEventListener('change', function () {
    planet = parseInt(this.value);
});

weightForm.addEventListener('input', function () {
    weight = this.value;
});

addEventListener('load', function () {
    planetForm.selectedIndex = 0;
    weightForm.value, planetImg, planetName = '';
    result,
    weight,
    planet = 0;
});


function clicked() {
    result = 0;
    switch (planet) {
        case 1: result = 0.38 * weight;
            planetImg = '/assets/mercury.png'
            planetName = 'Mercury'
            break;
        case 2: result = 0.91 * weight;
            planetImg = '/assets/venus.png'
            planetName = 'Venus'
            break;
        case 3: result = 1 * weight;
            planetImg = '/assets/earth.png'
            planetName = 'Earth'
            break;
        case 4: result = 0.38 * weight;
            planetImg = '/assets/mars.png'
            planetName = 'Mars'
            break;
        case 5: result = 2.34 * weight;
            planetImg = '/assets/jupitor.png'
            planetName = 'Jupitor'
            break;
        case 6: result = 1.06 * weight;
            planetImg = '/assets/saturn.png'
            planetName = 'Saturn'
            break;
        case 7: result = 0.92 * weight;
            planetImg = '/assets/uranus.png'
            planetName = 'Uranus'
            break;
        case 8: result = 1.19 * weight;
            planetImg = '/assets/neptune.png'
            planetName = 'Neptune'
            break;

        case 9: result = 0.06 * weight;
            planetImg = '/assets/pluto.png'
            planetName = 'Pluto'
            break;
        case 10: result = 16.6 * weight;
            planetImg = '/assets/moon.png'
            planetName = 'Moon'
            break;
        default: result = 0;
            break;
    }

    if (result !== 0) {

        textSection.innerHTML = `The Weight of the Object in ${planetName} is ${result} KG`;
        imageSection.src = `${planetImg}`


    } else {
        textSection.innerHTML = 'Please Select The Planet'
    }
}
