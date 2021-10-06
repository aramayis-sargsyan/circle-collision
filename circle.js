import { getRandomInRange } from "./utils";

export class Circle {
    constructor(x, y, radius, color,obj) {
    this.position = {x: x, y: y}
    this.velocity = {x: getRandomInRange(-5, 5), y: getRandomInRange(-5, 5)}
    this.radius = radius;
    this.element = document.createElement("div")
    this.element.style.width = radius+"px"
    this.element.style.height = radius+"px"
    this.element.style.borderRadius = "50%"
    this.element.style.border = "2px solid #000000"
    this.element.style.position ="absolute"
    this.element.style["border-color"] = color
    this.updatePosition()

}

buildCircle() {
    
}

updatePosition() {
        this.element.style.left = this.position.x - this.radius/2 +'px'
        this.element.style.top = this.position.y - this.radius/2 +'px'
    }

}
