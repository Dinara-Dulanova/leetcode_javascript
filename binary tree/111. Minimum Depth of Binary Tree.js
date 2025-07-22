var minDepth = function(root) {
    if (root == null) return 0;
    let minD = 1;
    let queue = [{node: root, depth:1}]
    while (queue.length != 0) {
        let {node, depth} = queue.shift()
        if (node.left === null && node.right === null) {
            return depth;
        }
        if (node.left) queue.push({node:node.left, depth:depth+1})
        if (node.right) queue.push({node: node.right, depth:depth+1})
    }
    return minD
};

