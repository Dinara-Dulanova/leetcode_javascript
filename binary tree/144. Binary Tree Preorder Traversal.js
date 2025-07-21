// DFC (preorder) поэтому стек и pop + push

//а еще мне нужно будет вытаскивать сначала леове в результат, поэтому я в стек кладу сначала правое (чтобы левое оказалосб выше и я могла его pop достать раньше)
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
