//83 Remove Duplicates from Sorted List
//первый вариант
var deleteDuplicates = function(head) {
    let hash = {};
    let dumpy = head;
    let prev = null;
    while (dumpy != null) {
        if (hash[dumpy.val] == undefined) {
            hash[dumpy.val] = 1;
            if (prev) {
                prev.next = dumpy
            }
            prev = dumpy
        }
        dumpy = dumpy.next;
    }
    if (prev) {
        prev.next = null
    }
    return head
};

//второй ариант с акцентом что это отсортированный массив
var deleteDuplicates = function(head) {
    let dumpy = head;
    let prev = dumpy;
    while (dumpy) {
        if (dumpy.val == prev.val) {
            while (dumpy && prev.val == dumpy.val) {
                dumpy = dumpy.next
            }
            prev.next = dumpy
        } else {
            prev = dumpy;
            dumpy = dumpy.next
        }

    }
    return head
}
