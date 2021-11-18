import testingOperation from "../../../helpers/testingOperations/testingOperations.js";

const twoPotency = (stateCopy,operation) =>{
    
    console.log("Two Potency")

    let extractNumbers = /sqr\(([0-9 | .]+)\).sqr\(([0-9 | .]+)\)/g;
    let numbers = extractNumbers.exec(operation);
    console.log(numbers);

    let value1 = Number.parseFloat(numbers[1]);
    let value2 = Number.parseFloat(numbers[2]);

    value1 = value1*value1;
    value2 = value2*value2;


    // operations
    let suma = /(sqr\([0-9 | .]+\))\+(sqr\([0-9 | .]+\))/g;
    let resta = /(sqr\([0-9 | .]+\))\-(sqr\([0-9 | .]+\))/g;
    let multiplicacion = /(sqr\([0-9 | .]+\))\*(sqr\([0-9 | .]+\))/g;
    let division = /(sqr\([0-9 | .]+\))\÷(sqr\([0-9 | .]+\))/g;

    testingOperation(stateCopy,operation,suma,resta,multiplicacion,division,value1,value2);
}

export default twoPotency;