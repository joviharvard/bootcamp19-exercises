const assert = require("assert");

const tokenize = str => {
  return str.split(" ")
  console.log(str.split(" "))
};

const reverse = str => {
  let arr = str.split("")
  let r_arr = arr.reverse()
  let r_str = r_arr.join("")
  return r_str
};

const uniqueOnes = arr => {
  let uniq = Array.from(new Set(arr))
  console.log(uniq)
  return uniq
};

const factorial = num => {
  let r_num = 1
  for (let i = 1; i <= num; i++){
    r_num *= i
  }
  return r_num
};

const zip = (arr1, arr2) => {
  if (arr1.length != arr2.length){
    return -1
  }

  ret = []

  for (let i = 0; i < arr1.length; i++){
    let new_arr = []
    new_arr.push(arr1[i])
    new_arr.push(arr2[i])
    ret.push(new_arr)
  }

  return ret
};

const unzip = arr => {
  let arr1 = []
  let arr2 = []
  for (let el of arr){
    arr1.push(el[0])
    arr2.push(el[1])
  }
  return [arr1, arr2]
};

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
  r_str = []
  for (let i = 0; i < str.length; i ++){
    r_str.push(str[(i+num-1)%str.length])
  }
  return r_str.join("")
};

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  now = new Date()
  var mon = new Array();
  mon[0] = "January";
  mon[1] = "February";
  mon[2] = "March";
  mon[3] = "April";
  mon[4] = "May";
  mon[5] = "June";
  mon[6] = "July";
  mon[7] = "August";
  mon[8] = "September";
  mon[9] = "October";
  mon[10] = "November";
  mon[11] = "December";
  let month = mon[now.getMonth()]
  let day = now.getDate()
  let year = now.getFullYear()
  let hour = now.getHours()
  let minute = now.getMinutes()
  return `Today's date is ${month} ${day}, ${year}. It is ${hour} ${minute}.`
};

// Write tests here:

assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
assert(reverse("3df") === "fd3");
// assert(uniqueOnes(["one", "two", "one"]) === ['one', 'two'])
assert(factorial(3) === 6);
console.log(tokenize("Hello bob you are a bob"))
console.log(zip([1,2,3], [4,5,6]))
console.log(unzip([[1,2], [3,4], [5,6]]))
assert(shiftRight("Hello", 3) === "lloHe")
console.log(announceDate())