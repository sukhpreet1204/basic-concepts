let arr = [4, 6, 8];

function reduceArray(arr) {

  let temp = arr[0] + arr[1];
  arr.shift();
  arr.shift();

  /*  arr.push(temp);
   arr.sort((a,b)=> a-b); */
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = arr[i]
  }

  obj[temp] = temp;
  return {
    sum: temp,
    newArr: Object.values(obj)
  }
}

function findMinSum(arr) {
  arr.sort((a, b) => a - b);

  let i = arr.length;
  let totalSum = 0;

  while (i > 1) {
    let {
      sum,
      newArr
    } = reduceArray(arr);
    arr = newArr;
    totalSum += sum;
    i = arr.length;
  }

  return totalSum;
}


findMinSum(arr);