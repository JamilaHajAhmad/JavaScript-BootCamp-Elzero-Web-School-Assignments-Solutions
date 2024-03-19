import {a,b,c} from "./mod-two.js";
let modOne = {
    numOne: a,
    numTwo: b,
    numThree: c,
}

export default function() {
    return modOne.numOne+modOne.numTwo+modOne.numThree;
}