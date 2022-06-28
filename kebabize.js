function kebabize(str) {
  let arr = str.split("");
 
  for (let i = arr.length - 1; i >= 0; i--) {
    if (Number(arr[i]) || arr[i] === "0") {
      arr.splice(i, 1);
      console.log('number')
    }
    else if (arr[i] === arr[i].toUpperCase() && !Number.isInteger(arr[i]) && i !== 0) {
      arr.splice(i, 0, "-");
    }
  }
  if (arr[0] === "-") {
    arr.splice(0, 1);
  }
  return arr.join("").toLowerCase();
} 
