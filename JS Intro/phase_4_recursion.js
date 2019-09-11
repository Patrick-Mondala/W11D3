range = function (start, end) {
  if (start > end ) return [];

  return [start].concat(range(start + 1, end));

}

// console.log(range(1,10));

sumRec = function (arr) {
  if (arr.length === 0) return 0;
  let first_num = arr.shift();
  return first_num+sumRec(arr);
}

// console.log(sumRec([1,2,3,4]))

exponent1 = function (base, exp) {
  if (exp === 0) return 1;
  return base * exponent(base, exp - 1);
}

// console.log(exponent1(2, 3));

exponent2 = function (base, n) {
    if (n === 0) return 1;
    if (n === 1) return base;

    if (n % 2 === 0) {
        return exponent2(base, n/2) * exponent2(base, n/2)
    } else {
        return base * (exponent2(base, (n - 1) / 2) * exponent2(base, (n - 1) / 2))
    }
}

// console.log(exponent2(2,4)); even exponent
// console.log(exponent2(2,3)); odd exponent

fibonacci = function (n) {
  if (n <= 0) return [];
  if (n === 1) return [1];
  if (n === 2) return [1,1];
  let previous_fib = fibonacci(n - 1);
  previous_fib.push(previous_fib.slice(-1)[0] + previous_fib.slice(-2)[0]);
  return previous_fib
}

// console.log(fibonacci(6));


deepDup = function (arr) {
  return arr.map( el => {
    return el instanceof Array ?  deepDup(el) : el
  })
  // let duped = [];
  // if(arr.length === 0) return [];
  // for(i = 0; i < arr.length; i++) {
  //   // debugger 
  //   if(arr[i] instanceof Array) {
  //     duped.push(deepDup(arr[i]));
  //   } else {
  //     duped.push(arr[i]);
  //   }
  // }
  // return duped;
}

// console.log(deepDup([2, 4,[3, 4, [2, 3]],5]));

bSearch = function(arr, target) {
  if (arr.length === 0) {
    return -1;
  }
  let mid = Math.floor(arr.length / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return bSearch(arr.slice(0, mid), target);
  } else if (arr[mid] < target) {
    let result = bSearch(arr.slice(mid + 1), target);
    if (result === -1) return -1;
    return mid + 1 + result;
  }
}

// console.log(bSearch([1,2,3,4,5,6,7,8,9,10], 2));


mergeSort = function(arr) {
  if (arr.length <= 1) return arr;
  let mid = 
}