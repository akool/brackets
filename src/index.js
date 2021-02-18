module.exports = function check(str, bracketsConfig) {
  let flag = false;

  while (str) {
    flag = false;

    for (let brackets of bracketsConfig) {
      const pair = brackets[0] + brackets[1];

      if (str.includes(pair)) {
        str = str.replace(pair, '');
        flag = true;
      }
    }
    
    if (!flag) break;
  }

  return !str.length;
}
