/* 
	Reverse a singly linked list.
	Input: 1->2->3->4->5->NULL
	Output: 5->4->3->2->1->NULL
*/
var reverseList = (head) => {
    if(head === null || head.next === null) return head
    let temp = reverseList(head.next)
    head.next.next = head
    head.next = null
    return temp
};