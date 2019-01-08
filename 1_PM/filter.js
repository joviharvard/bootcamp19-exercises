// Complete the implementation below such that all elements of the array
// that are not multiples of 7 are removed

const arr = [7, 8, 15, 14, 13, 70, 44, 35, 88, 77, false, "7", "hi", null];

const multOf7 = el => !(el % 7) && typeof el === 'number';
  /*if (el % 7 === 0 && typeof el === 'number'){
    return true
  }
  else {
    return false
  }
}; */

Array.prototype.filter = function(fun) {
  r_arr = []
  for (let el of this){
    if (fun(el) === true) {
      r_arr.push(el)
    }
  }
  return r_arr
};

const newArr = arr.filter(multOf7);

console.log(newArr);
