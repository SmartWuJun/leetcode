/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start

function getNext (n) {

  let t = 0;
  while (n) {
    t += (n % 10) * (n % 10);
    n = Math.floor(n / 10);
  }
  return t;

}

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let pre = n, cur = n;
  while (pre !== 1) {
    pre = getNext(pre);
    cur = getNext(getNext(cur));
    if (pre === cur && pre !== 1) {
      return false
    }
    console.log(pre, cur)
  }
  return true;
};
// @lc code=end

