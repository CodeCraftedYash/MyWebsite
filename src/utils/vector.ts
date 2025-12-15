/**
 * this will take a degree in number from the user
 * make a boundry of 360 degree so the rotation is wrapped up
 * convert this degree into radian using radians = degrees * (pi/100)
 * Variables : x gets SINE of the rotation and y gets the COS of the rotation
 * return x and y
 */
export const Vectorize = (rotation:number) => {
    const r = rotation % 360;
    const radians = r * (Math.PI / 180);
    const x:number = Math.cos(radians);
    const y:number = Math.sin(radians);
    return {x,y};
}