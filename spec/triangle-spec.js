import { Triangle } from "./../js/triangle.js";

describe('Triangle', function() {

    it('should test whether a Triangle has three sides', function() {
        var triangle = new Triangle(3,4,5);
        expect(triangle.side1).toEqual(3);
        expect(triangle.side2).toEqual(4);
        expect(triangle.side3).not.toEqual(6);
    });

    it('should correctly determine whether three lengths can be made into a triangle', function() {
        var triangle = new Triangle(12,3,3);
        debugger;
        expect(triangle.checkType()).toEqual("not a triangle");
    });
});

describe('Triangle2', function () {
    var reusableTriangle;
    
    beforeEach(function () {
        reusableTriangle = new Triangle(5,5,5);
    });

    it('should show how beforeEach() works', function () {
        console.log(reusableTriangle);
    });
});