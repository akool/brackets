module.exports = function check(str, bracketsConfig) {
  let isRemoved = false;

  while (str) {
    isRemoved = false;

    for (let brackets of bracketsConfig) {
      const pair = brackets.join('');

      if (str.includes(pair)) {
        str = str.replace(pair, '');
        isRemoved = true;
      }
    }
    
    if (!isRemoved) break;
  }

  return !str.length;
}