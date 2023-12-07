// GLOBAL VARIABLES
let cycloid, cycloidCircle;
let origin, noOfDivision = 200;

// Slider Elements;
let radiusSlider = document.getElementById('radiusSlider');
let startDegSlider = document.getElementById('startPointSlider');
let endDegSlider = document.getElementById('endDegSlider');

// cycloid and circle properties
let radius = radiusSlider.value;
let startDeg = startDegSlider.value;
let endDeg = endDegSlider.value;
let perimeter =  2*Math.PI*radius;
let coordinateAxisLength;

// ****************** GLOBAL VARIABELS SECTION ENDS ***********************

function setup() {
    //intital canvas setup
    createCanvas(innerWidth * 0.95, innerHeight * 0.8);
    angleMode(DEGREES);

    origin = createVector(1 * radius + 20, height - radius);
    coordinateAxisLength = { x1: origin.x, x2: width - origin.x, y1: origin.y, y2: height + origin.y };
    // Declaring Objects
    cycloidCircle = new CycloidCircle(radius, origin);
    cycloid = new Cycloid(radius, startDeg, origin, noOfDivision,endDeg)

}

function draw() {
    background('white');

    // updating origin and draw axis
    origin.x = 1 * radius + 20;
    origin.y = height - radius;
    CoordinateAxises(origin.x, origin.y, coordinateAxisLength,2);


    // drawing objects
    let newPos =  {x: origin.x + ((perimeter/360)*endDeg), y: origin.y};
    cycloidCircle.update(radius, startDeg, newPos);
    cycloid.update(radius, startDeg, endDeg,origin);
}

function updateSliderTexts(sliderElem, textElemId) {
    document.getElementById(textElemId).innerHTML = sliderElem.value;
    radius = radiusSlider.value;
    startDeg = startDegSlider.value;
    endDeg = endDegSlider.value;
    perimeter =  2*PI*radius;
}
