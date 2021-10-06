import { Circle } from "./circle";
import { getRandomInRange, getRandomColor } from "./utils";

export class Stage {
    constructor() {
        this._circles = []
        this._createCircles()
    }
    
    update() {
        this._circles.forEach(circle => {
            
            this.checkWorldBounds(circle)
            this._updateCirclesVelocity()
            this.checkCirclesCollision()  
           
        });
    }
    
    _updateCirclesVelocity() {
        this._circles.forEach((circle1)=>{
            const x= circle1.position.x+circle1.velocity.x;
            const y = circle1.position.y+circle1.velocity.y;
            circle1.updatePosition(x, y);
         })
    }

    checkWorldBounds(circle){
        circle.position.x += circle.velocity.x
        circle.position.y += circle.velocity.y
        
        if(circle.position.x>=window.innerWidth-circle.radius/2){
            circle.velocity.x = -Math.abs(circle.velocity.x)   
                     
        }else if(circle.position.x<=circle.radius/2){
            circle.velocity.x=Math.abs(circle.velocity.x)            
        }else if(circle.position.y>=window.innerHeight-circle.radius/2){
            circle.velocity.y=-Math.abs(circle.velocity.x)            
        }else if(circle.position.y<=circle.radius/2){
            circle.velocity.y=Math.abs(circle.velocity.x)           
        }
    }



    // chengeCircleVector(i, j){
        
    //     let x1 = this._circles[i].position.x
    //     let x2 = this._circles[j].position.x
    //     let y1 = this._circles[i].position.y
    //     let y2 = this._circles[j].position.y 
    //     let x10 = this._circles[i].velocity.x 
    //     let y10 = this._circles[i].velocity.y 
    //     let x20 = this._circles[j].velocity.x 
    //     let y20 = this._circles[j].velocity.y 


    //     let tgI = (((2 * (x1-x2) / (y1-y2)) - (y1 / x10)) / (1 + (y1 / y2) * 2 * (x1-x2) / (y1-y2) / (1 - (x1-x2)/(y1-y2)*(x1-x2)/(y1-y2))) ) 
    //     console.log(tgI,tgJ);


    //     this._circles[i].velocity.x = ((x10+y10)/(1+tgI))
    //     this._circles[i].velocity.y = (x10+y10)-((x10+y10)/(1+tgI))
    //     this._circles[j].velocity.x = ((x20+y20)/(1+tgJ))
    //     this._circles[j].velocity.y = (x20+y20)-((x20+y20)/(1+tgJ))
    //     console.log(this._circles[i].velocity.x);
    //     // this._circles[i].velocity.y*=(-1)
    //     // this._circles[i].velocity.x*=(-1)
    //     // this._circles[j].velocity.y*=(-1)
    //     // this._circles[j].velocity.x*=(-1)

    //     if(this._circles[i].velocity.x + this._circles[i].velocity.y > 2){
            
    //     }
    // }
    
    // getCollision() {
        
    //     for(let i = 0;i < this._circles.length;i++){
    //         for(let j = i+1 ; j < this._circles.length; j++){
    //             const distance =Math.sqrt(Math.pow((this._circles[j].position.x-this._circles[i].position.x), 2)+Math.pow((this._circles[j].position.y-this._circles[i].position.y), 2));
                
    //             if(distance <= this._circles[i].radius/2 + this._circles[j].radius/2+ this._circles[i].velocity.x + this._circles[i].velocity.y + this._circles[j].velocity.x + this._circles[j].velocity.y){
    //                 this.chengeCircleVector(this._circles[i],this._circles[j])                    
    //             }
    //         }
    //     }
    // }
    _checkCollision(circle1, circle2) {
        return Math.sqrt(Math.pow((circle2.position.x-circle1.position.x), 2)+Math.pow((circle2.position.y-circle1.position.y), 2));
       
    }
    checkCirclesCollision() {
        for(let i = 0; i< this._circles.length;i++){
            for(let j =i;j<this._circles.length;j++){
                const distance= this._checkCollision(this._circles[i], this._circles[j])  
                if((this._circles[i].radius/2 + this._circles[j].radius/2)>=distance){
                    this. _resolveCollision(this._circles[i], this._circles[j])
                }
            }
        }     
    }  
        
        _createCircles() {
        for (let i = 0; i < 50; i++) {
            const radius =  128
            const color = getRandomColor()
            const x = getRandomInRange(radius/2, window.innerWidth-radius/2)
            const y = getRandomInRange(radius/2, window.innerHeight-radius/2)
            let obj = {}
            const circle = new Circle(x, y, radius, color, obj)
            document.body.appendChild(circle.element)
            this._circles.push(circle)
        }
    }


    // _createCircles() {
    //     for (let i = 0; i < 55; i++) {
    //         const radius=getRandomInRange(25,50);
    //         //  const radius= 150
    //         const color=getRandomColor();
    //         const x = getRandomInRange(radius, window.innerWidth-radius)
    //        circle.updatePosition(circle.position.x, circle.position.y);
    //          const y = getRandomInRange(radius, window.innerHeight-radius)
    //         const circle = new Circle(x, y, radius, color)
    //         window.document.body.appendChild(circle.element);
    //         this._circles.push(circle)
    //     }
        
    // }


    _resolveCollision(circle1, circle2) {

            const xVelocityDiff = circle1.velocity.x - circle2.velocity.x;
            const yVelocityDiff = circle1.velocity.y - circle2.velocity.y;
            const distance=this._checkCollision(circle1, circle2)  
            const xDist = circle2.position.x - circle1.position.x;
            const yDist = circle2.position.y - circle1.position.y;
            let VCollisionNorm={x:xDist/distance, y:yDist/distance}
            let speed=xVelocityDiff *VCollisionNorm.x + yVelocityDiff*VCollisionNorm.y ;
            if (speed >=0) {
        
                circle1.velocity.x -= 0.9*speed*VCollisionNorm.x
                circle1.velocity.y -= 0.9*speed*VCollisionNorm.y
        
                circle2.velocity.x =0.9*speed*VCollisionNorm.x
                circle2.velocity.y = 0.9*speed*VCollisionNorm.y
        
                
            }  
        
        }
    }

