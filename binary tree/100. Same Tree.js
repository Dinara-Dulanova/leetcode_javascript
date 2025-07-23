// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
//
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

var isSameTree = function(p, q) {
    let node1 = p;
    let node2 = q;
    let stack1 = [p]
    let stack2 = [q]
    while (stack1.length && stack2.length) {
        node1 = stack1.pop();
        node2 = stack2.pop();
        if (node1 && node2 && node1.val != node2.val) return false
        else {
            if (node1 === null && node2 === null) continue;
            if (node1 === null || node2 === null) return false;
            if (node1.val !== node2.val) return false;

            stack1.push(node1.left)
            stack1.push(node1.right)
            stack2.push(node2.left)
            stack2.push(node2.right)
        }
    }

    if (stack1.length === stack2.length) return true
    return false
};