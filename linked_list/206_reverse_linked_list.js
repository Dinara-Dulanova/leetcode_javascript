var reverseList = function(head) {
    let current = head;
    let prev = null;
    let next;
    while (current != null) {
        next = current.next;
        current.next = prev;
        current.prev = next;
        prev = current;
        current = next;
    }
};