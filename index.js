var planet = 0,
    weight = 0,
    result;
var planetForm = document.getElementById('planet')
var weightForm = document.getElementById('weight')
let textSection = document.getElementById('show-mass')
let imageSection = document.getElementById('show-image')

// let imageElement = document.getElementById('image-section')

/* experiment */
let position;
const aplanet = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupitor', 'Saturn', 'Uranus', 'Neptune', 'Pluto', 'Moon']
const agravity = [0.38, 0.91, 1, 0.38, 2.34, 1.06, 0.92, 1.19, 0.06, 16.6]
const images = ['assets/mercury.png', 'assets/venus.png', 'assets/earth.png', 'assets/mars.png', 'assets/jupitor.png', 'assets/saturn.png', 'assets/uranus.png', 'assets/neptune.png', 'assets/pluto.png', 'assets/moon.png']

planetForm.addEventListener('change', function () {
    planet = this.value;
});

weightForm.addEventListener('input', function () {
    weight = this.value;
});

addEventListener('load', function () {
    planetForm.selectedIndex = 0;
    // weightForm.value, planetImg, planetName = '';
    result,
    weight,
    position = 0;
    planet = ''
});


function clicked() {
    
for(planets of aplanet){
    if(planets === planet){
        position = aplanet.indexOf(planets);
        break;
    }
}
    result = agravity[position] * weight;
    textSection.innerHTML = `The Weight of the Object in the ${aplanet[position]} is ${result} KG`;
    imageSection.src = `${images[position]}`
}
