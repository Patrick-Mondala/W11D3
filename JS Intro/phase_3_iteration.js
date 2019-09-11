Array.prototype.bubblesort = function () {
    let sorted = false
    let dup = this.slice(0);
    while (!sorted) {
        sorted = true;
        for(idx = 0; idx < dup.length - 1; idx++) {
            if (dup[idx] > dup[idx + 1]) {
                let temp = dup[idx];
                dup[idx] = dup[idx + 1];
                dup[idx + 1] = temp;
                sorted = false;
            }
        }
    }
    return dup
}

// console.log([0,5,3,4,2,1].bubblesort());

String.prototype.substrings = function () {
    let result = [];
    for (i = 0; i < this.length; i++) {
        for (i2 = i; i2 < this.length; i2++) {
            result.push([this.slice(i, i2 + 1)]);
        }
    }
    return result;
}

// console.log("hello".substrings());