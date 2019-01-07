// Complete the implementation of the following functions so that
// the output is [0, 3, 6, 9, 12]

const arr = [0, 1, 2, 3, 4];

const triple = el => {
  return el*3
};

Array.prototype.map = function(fun) {
  r_arr = []
  for (let el of arr){
    r_arr.push(fun(el))
  }
  return r_arr
};

console.log(arr.map(triple));
