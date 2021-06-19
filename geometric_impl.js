import { GeometricBase } from "./geometric_base.js";

const geoBase = new GeometricBase();

class GeometricImpl {
    getPrintSqrt() {
        return geoBase.getSquare(10);
    }
}

let gem = new GeometricImpl();

console.log(gem.getPrintSqrt());


console.log(geoBase.getSquare(12));