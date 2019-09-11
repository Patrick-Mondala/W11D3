Array.prototype.uniq = function () {
  let result = []
  this.forEach( el => { 
    if (!result.includes(el)) result.push(el);
  })
  return result
}

// console.log([1, 2, 2, 3, 3, 3].uniq());

Array.prototype.twoSum = function () {
    let result = []
    for(idx = 0; idx < this.length - 1; idx++) {
        for(idx2 = idx + 1; idx2 < this.length; idx2++) {
            if (this[idx] + this[idx2] === 0) {
                result.push([idx, idx2])
            }
        }
    }
    return result
}

// console.log([2, 8, -3, -8].twoSum());

Array.prototype.transpose = function () {
    let result = []
    for(idx = 0; idx < this.length; idx++) {
      let sub_array = [] 
      for(idx2 = 0; idx2 < this[idx].length; idx2++) {
        sub_array.push(this[idx2][idx]);
      }
      result.push(sub_array)
    }
    return result 
}

// console.log([[1,2],[3,4]].transpose());