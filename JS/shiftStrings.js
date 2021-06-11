/*
Perform circular left shift and then right shift on a string
*/


function getShiftedString(s, leftShifts, rightShifts){
    s = getLeftShift(s, leftShifts);
    return getRightShift(s, rightShifts);
}

function getLeftShift(s, leftShifts){
    leftShifts = leftShifts % s.length;     //a string of length 5 but shifted left 7 times is same as shifting it 2 times
    return s.slice(leftShifts) + s.slice(0, leftShifts);
}

function getRightShift(s, rightShifts){
    return getLeftShift(s, -rightShifts);
}

console.log(getShiftedString('abcde', 7, 1));

//slice() can accept negative indices.