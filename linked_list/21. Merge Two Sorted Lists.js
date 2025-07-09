var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0);
    let head = dummy;

    // while (list1 != null || list2 != null) {
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            dummy.next = list1;
            list1 = list1.next

        } else {
            dummy.next = list2
            list2 = list2.next
        }

        dummy = dummy.next
    }

    if (list1 == null) {
        dummy.next = list2
    } else {
        dummy.next = list1
    }

    return head.next
};