let text = "this is string";

function reverseStr(string) {
  let str = string.split(" ");
  let res = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = str[i].length; j > 0; j--) {
      res += str[i][j - 1];
    }
    res += " ";
  }
  return res;
}

console.log(reverseStr(text));
