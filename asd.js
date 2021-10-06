// import { Circle } from "./circle.js";
// import { getRandomInRange , getRandomColor} from "./utils.js";

// export class Stage {
//     constructor() {
//         this._circles = []
//         this._createCircles()
//     }

//     update() {
//         this._checkWorldBounds()

//         this._updateCirclesVelocity()
//         this._checkCirclesCollision()
//     }

//     _createCircles() {
//         for (let i = 0; i < 2; i++) {
//             // const radius=getRandomInRange(25,50);
//              const radius= 150
//             const color=getRandomColor();
//             const x = getRandomInRange(radius, window.innerWidth-radius)
//             const y = getRandomInRange(radius, window.innerHeight-radius)
//             const circle = new Circle(x, y, radius, color)
//             circle.updatePosition(circle.position.x, circle.position.y);
//             window.document.body.appendChild(circle.element);
//             this._circles.push(circle)
//         }
        
//     }

//     _updateCirclesVelocity() {
//         this._circles.forEach((circle1)=>{
//             const x= circle1.position.x+circle1.velocity.x;
//             const y = circle1.position.y+circle1.velocity.y;
//             circle1.updatePosition(x, y);
//          })
//     }

//     _checkWorldBounds() {
//         this._circles.forEach((circle1)=>{
//             if(circle1.position.x>window.innerWidth-circle1.radius){
//                 circle1.velocity.x=-1
//             }
    
//             if(circle1.position.x<circle1.radius){
//                 circle1.velocity.x=1
//             }
            
//             if(circle1.position.y>window.innerHeight-circle1.radius){
//                 circle1.velocity.y=-1
                
//             }
//             if(circle1.position.y<circle1.radius){
//                 circle1.velocity.y=1
//             }
//         })
//     }

//     _checkCirclesCollision(circle1, circle2) {
//         this._circles.forEach((circle1, index1)=>{
//             this._circles.forEach((circle2,index2)=>{

//             if (index1!==index2) {
//                const distance= this._checkCollision(circle1, circle2)
             
//             if (circle1.radius + circle2.radius>=distance) {
                    
//                this. _resolveCollision(circle1, circle2)
//             }
                
//             }
//             })
//          })
//     }

//     _checkCollision(circle1, circle2) {
//         return Math.sqrt(Math.pow((circle2.position.x-circle1.position.x), 2)+Math.pow((circle2.position.y-circle1.position.y), 2));
       
//     }
//    _rotate(velocity, angle) {
//     return {
//             x: velocity.x * Math.cos(angle)- velocity.y * Math.sin(angle),
//             y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
//             }
            
//         }
//     _resolveCollision(circle1, circle2) {

//             const xVelocityDiff = circle1.velocity.x - circle2.velocity.x;
//             const yVelocityDiff = circle1.velocity.y - circle2.velocity.y;
        
//             const xDist = circle2.position.x - circle1.position.x;
//             const yDist = circle2.position.y - circle1.position.y;
        
//             if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
        
//                 //const angle = -Math.atan2(circle2.position.y - circle1.position.y, circle2.position.x - circle1.position.x);
//         const angle=-Math.atan2()
//                 const m1 = circle1.mass;
//                 const m2 = circle2.mass;
//                 const u1 = this._rotate(circle1.velocity, angle);
//                 const u2 = this._rotate(circle2.velocity, angle);
        
//                 const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2*m2/ (m1 + m2), y: u1.y };
//                 const v2 = { y: u2.y * (m1 - m2) / (m1 + m2) + u1.y * 2*m2 / (m1 + m2), x: u2.x };
        
//                 const vFinal1 = this._rotate(v1, -angle);
//                 const vFinal2 = this._rotate(v2, -angle);
        
//                 circle1.velocity.x = vFinal1.x;
//                 circle2.velocity.y = vFinal2.y;
        
//                 circle1.velocity.x = vFinal1.x;
//                 circle2.velocity.y = vFinal2.y;let x1=1


let x2=3
let y1=2
let y2=5


let tgI = (((2 * (x1-x2) / (y1-y2)) / (1- (x1-x2) / (y1-y2) * (x1-x2) / (y1-y2)) - (y1 / x1)) / ((1 + (y1 / y2) * 2 * (x1-x2) / (y1-y2) / (1 - (x1-x2)/(y1-y2)*(x1-x2)/(y1-y2))) )) 

console.log(tgI);

let tgI = (((2 * (x1-x2) / (y1-y2)) / (1- (x1-x2) / (y1-y2) * (x1-x2) / (y1-y2)) - (y1 / x1)) / ((1 + (y1 / y2) * 2 * (x1-x2) / (y1-y2) / (1 - (x1-x2)/(y1-y2)*(x1-x2)/(y1-y2))) )) 

console.log(tgI);