// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

const hasFalsyValue = obj => {
  for (let el of Object.values(obj)){
    if (typeof el === "object"){
      if (hasFalsyValue(el) === false){
        return false
      }
    }
    else {
      if (!!el === false) {
        return false
      } 
    }
  }
  return true;
};

const obj = {
  name : "Jovi",
  number : 1,
  other: {
    man: 0,
  }
}

console.log(hasFalsyValue(obj))