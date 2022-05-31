
//表达式求值
function calc (str, l, r) {

  let op = -1, lowci = 10000, curci, temp = 0;

  for (let i = l; i < r; i++) {
    switch (str[i]) {
      case '+':
      case '-': curci = temp + 1; break;
      case '*':
      case '/': curci = temp + 2; break;
      case '(': temp = temp + 100; break;
      case ')': temp = temp - 100; break;
    }
    if (lowci > curci) {
      lowci = curci;
      op = i
    }
  }
  if (op == -1) {
    console.log(str)
    let num = 0;
    for (let i = l; i <= r; i++) {
      if (str[i] < '0' || str[i] > '9') continue;
      num = num * 10 + Number(str[i])
    }
    console.log('num: ', num);
    return num
  }

  let lstr = str.substr(l, op)
  // console.log('lstr: ', str[op]);
  let a = calc(lstr, 0, lstr.length - 1)
  let b = calc(str.substr(op + 1, r), 0, str.substr(op + 1, r).length - 1)
  switch (str[op]) {
    case '*': return a * b;
    case '/': return a / b;
    case '+': return a + b;
    case '-': return a - b;
  }
}
const s = '3*7+8*(7-5)'
let a = calc(s, 0, s.length - 1);
console.log('a: ', a);
let c = a + 0;