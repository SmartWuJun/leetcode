/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 *
 * https://leetcode-cn.com/problems/partition-list/description/
 *
 * algorithms
 * Medium (62.53%)
 * Likes:    376
 * Dislikes: 0
 * Total Accepted:    92.2K
 * Total Submissions: 147.5K
 * Testcase Example:  '[1,4,3,2,5,2]\n3'
 *
 * 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
 * 
 * 你应当 保留 两个分区中每个节点的初始相对位置。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,4,3,2,5,2], x = 3
 * 输出：[1,2,2,4,3,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [2,1], x = 2
 * 输出：[1,2]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目在范围 [0, 200] 内
 * -100 
 * -200 
 * 
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (!head) return head;
  let small = new ListNode(), big = new ListNode();
  let bigNode = big, smallNode = small;
  let cur = head, next;
  for (let cur = head, next; cur; cur = next) {
    next = cur.next;
    cur.next = null;
    if (cur.val >= x) {
      bigNode.next = cur;
      bigNode = cur;
    } else {
      smallNode.next = cur;
      smallNode = cur;
    }
  }
  smallNode.next = big.next;
  return small.next;
  while (cur) {
    console.log('cur: ', cur.val, p1, p2);
    if (cur.val >= x) {
      p2.next = cur
      p2 = cur

    } else {
      p1.next = cur;
      p1 = cur;

    }
    cur = cur.next;
    p1.next = null;
    p2.next = null;

  }
  p1.next = h2.next;
  return h1.next;

};
// @lc code=end

