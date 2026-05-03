function getSubstrings(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    let temp = "";
    for (let j = i; j < str.length; j++) {
      temp += str[j];
      result.push(temp);
    }
  }

  return result;
}

console.log(getSubstrings("abc"));