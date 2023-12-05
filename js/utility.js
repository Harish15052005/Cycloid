
function radToDeg(rad) {
    return float(rad * (180 / Math.PI));
}

function degToRad(deg) {
    return float(deg * (Math.PI / 180));
}

function CoordinateAxises(x, y, length, thickness, clr) {
    let strokeClr = clr || 'black';
    let strokeWght = thickness || 3;
    stroke(strokeClr);
    strokeWeight(strokeWght)
    line(x, y - length.y1, x, y + length.y2);
    line(x - length.x1, y, x + length.x2, y);
    strokeWeight(2);
}

function makePoint(x, y, thickness, color) {
    c = color || 'black';
    fill(c);
    stroke(c);
    circle(x, y, thickness);
    fill('black');
    stroke('black');
}

function mouseCords() {
    text('x: ' + mouseX + ' y: ' + mouseY, mouseX, mouseY);
}