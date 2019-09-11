Array.prototype.myEach = function (callback) {
  for(idx = 0; idx < this.length; idx++) {
    callback(this[idx], idx);
  }
}


//[1,2,3,4].myEach( function (el) { console.log( el*2)});

Array.prototype.myMap = function (callback) {
    let result = []
    for (idx = 0; idx < this.length; idx++) {
        result.push(callback(this[idx]));
    }
    return result
}

// console.log([1,2,3,4].myMap( function (el) { return (el * 2)}));

Array.prototype.myReduce = function(callback, initial_value) {
  let idx 
  let accumulator
    if (initial_value !== undefined) {
        idx = 0;
        accumulator = initial_value;
    } else {
        idx = 1;
        accumulator = this[0]
    }

    this.myEach(function (el, i) {
      if(i >= idx) {
          accumulator = callback(accumulator, el);
      }
    })
    
    return accumulator
}
// console.log([1, 2, 3, 4].myReduce(function (acc, el) { return el * 2}));