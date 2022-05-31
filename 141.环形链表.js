/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let pre = head, cur = head;
  if (!head) return false;
  while (cur && cur.next) {
    pre = pre.next;
    cur = cur.next.next;
    if (pre === cur) {
      return true;
    }
  }
  return false;

};
// @lc code=end

