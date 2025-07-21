// DFC (preorder) поэтому стек и pop + push
var preorderTraversal = function(root) {
    let rez = []
    if (!root) return []
    let stack = [root];
    while (stack.length != 0) {
        let node = stack.pop();
        rez.push(node.val)
        if (node.right) { stack.push(node.right) }
        if (node.left) { stack.push(node.left) }
    }

    return rez
}
