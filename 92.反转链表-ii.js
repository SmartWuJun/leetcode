/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 *
 * https://leetcode-cn.com/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (52.43%)
 * Likes:    709
 * Dislikes: 0
 * Total Accepted:    110.3K
 * Total Submissions: 210.5K
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 * 
 * 说明:
 * 1 ≤ m ≤ n ≤ 链表长度。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL, m = 2, n = 4
 * 输出: 1->4->3->2->5->NULL
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let ret = new ListNode(-1, head), pre = ret, cnt = right - left + 1;
  while (--left) {
    pre = pre.next;
  }
  pre.next = reverse(pre.next, cnt);
  return ret.next;

};

var reverse = function (head, n) {
  let pre = null, cur = head;
  while (n--) {
    [cur.next, pre, cur] = [pre, cur, cur.next];
  }
  head.next = cur;
  return pre;
}
// @lc code=end

