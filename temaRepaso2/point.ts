
export class Point {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    // Getters

    getX(): number

    {
          return this.x;
    } 

    getY(): number 
    
    {
         return this.y;
    }

    // Setters
    
    setX (nuevaX:number): void 
    {
        this.x = nuevaX;
    }

    setY (nuevaY:number): void 

    {
        this.y =nuevaY;
    }

    // Método toString para representar el punto como texto

    toString(): string
    {
        return   `(${this.x},${this.y})`;
    }

    // Método para calcular la distancia al origen (0,0)

  distanceToOrigin(): number {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    // Método para calcular la distancia a otro punto

   calculateDistance(anotherPoint: Point): number {
        const dx = this.x - anotherPoint.x;
        const dy = this.y - anotherPoint.y;
        return Math.sqrt(dx ** 2 + dy ** 2);
    }
// Método para calcular el cuadrante del punto

     calculateQuadrant(): number 
{
    if (this.x === 0 || this.y === 0) 
        {
        return 0;
    } 
    
    else if (this.x > 0 && this.y > 0) 
        {
        return 1;
    } 
    else if (this.x < 0 && this.y > 0)
         {
        return 2;
    } 
    else if (this.x < 0 && this.y < 0)
         {
        return 3;
    } 
    else {
        return 4;
    }
}

 // Método para encontrar el punto más cercano en un array

  calculateNearest(points: Point[]): Point {
   
    if (points.length === 0) {
        throw new Error("El array de puntos no puede estar vacío");
    }
    return points.reduce((nearest, current) => 
        this.calculateDistance(current) < this.calculateDistance(nearest) ? current : nearest
    );
    }
}
