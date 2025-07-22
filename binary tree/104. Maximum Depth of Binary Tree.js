// думаю тут DFS

//рекурсивно
var maxDepth = function(root) {
    if (root === null) return 1
    let leftD =  maxDepth(root.left)
    let rightD =  maxDepth(root.right)
    return 1 + Math.max(leftD,rightD)
};

//без рекурсии со стеком
var maxDepth = function(root) {
    if (root === null) return 0;
    let maxD = 0;
    let stack = [{node: root, depth: 1}]
    while (stack.length != 0) {
        let {node, depth} = stack.pop();
        maxD = Math.max(depth, maxD);
        if (node.left) {stack.push({node: node.left, depth: depth+1})}
        if (node.right) {stack.push({node: node.right, depth: depth+1})}
    }

    return maxD
};

