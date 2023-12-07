class CycloidCircle {
    constructor(radius, pos) {
        this.radius = radius;
        this.Xpos = pos.x;
        this.Ypos = pos.y;
    }

    draw() {
        noFill();
        strokeWeight(4);
        circle(this.Xpos, this.Ypos - radius, 2 * this.radius);
        strokeWeight(2);
    }
    update(radius, startDeg, newPos) {
        this.draw();
        this.radius = radius;
        this.startDeg = startDeg;
        this.Xpos = newPos.x;
        this.Ypos = newPos.y;
    }
}

class Cycloid {
    // x = r(t-sin(t));
    // y = r(1-cos(t));
    constructor(radius, startDeg, origin, n, endPt) {
        this.radius = radius;
        this.startDeg = degToRad(float(startDeg) - 90) || 0;
        this.origin = origin;
        this.n = n;
        this.x = 0; this.y = 0;
        this.endPt = endPt;
    }
    draw() {
        translate(this.origin)
        angleMode(RADIANS);
        let t = this.startDeg
        this.x = this.radius * (t - sin(t));
        this.y = this.radius * (1 - cos(t));
        let offset = this.x - this.offset;
        makePoint(this.x - offset, -this.y, 5, 'red');
        for (t = this.startDeg + (2 * PI) / this.n; t <= degToRad(this.endPt) + this.startDeg; t += (2 * PI) / this.n) {
            this.x = this.radius * (t - sin(t)) - offset;
            this.y = this.radius * (1 - cos(t));
            makePoint(this.x, -this.y, 5, 'red');
        }
        angleMode(DEGREES);
        translate(-this.origin);

    }

    drawOriginCircle()
    {
        strokeWeight(3);
        circle(this.origin.x, this.origin.y - this.radius , 2*this.radius);
        strokeWeight(2);
    }

    update(radius, startDeg, endPt,newOrigin) {
        this.drawOriginCircle();
        this.draw();
        this.radius = radius;
        this.startDeg = degToRad(float(startDeg) - 90);
        this.offset = this.radius * cos(startDeg);
        this.endPt = endPt;
        this.origin = newOrigin;
    }
}
