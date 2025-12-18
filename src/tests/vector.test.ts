import { Vectorize } from "../utils/vector"
import { describe,expect,test } from 'vitest';
/* describe('Degree to Radians to sinX and CosX', () => {

    const testCases = [
        {
            input: {
                degree:0
            },
            expected: {
                x:0,y:1
            }
        },
        {
            input: {
                degree:1
            },
            expected: {
                x:1,y:0
            }
        }
    ]
    for( const testCase of testCases){
        test(`Degree = ${testCase.input.degree}`,()=>{
            const {x,y} = Vectorize(testCase.input.degree);
            expect(x,y).toEqual(testCase.expected.x,testCase.expected.y)
        })
    }
}) */

 describe("Vectorize", () => {
  test("0 degrees", () => {
    const { x, y } = Vectorize(0);
    expect(y).toBeCloseTo(0);
    expect(x).toBeCloseTo(1);
  });
  test("90 degrees", () => {
    const { x,y } = Vectorize(90);
    expect(y).toBeCloseTo(1)
    expect(x).toBeCloseTo(0)
  });
  test("180 degrees", () => {
    const { x,y } = Vectorize(180);
    expect(y).toBeCloseTo(0)
    expect(x).toBeCloseTo(-1)
  });
  test("270 degrees", () => {
    const { x,y } = Vectorize(270);
    expect(y).toBeCloseTo(-1)
    expect(x).toBeCloseTo(0)
  });
  test("360 degrees", () => {
    const { x,y } = Vectorize(360);
    expect(y).toBeCloseTo(0)
    expect(x).toBeCloseTo(1)
  });
  test("15 degrees", () => {
    const { x,y } = Vectorize(15);
    expect(y).toBeCloseTo(0.26)
    expect(x).toBeCloseTo(0.965)
  });
});
