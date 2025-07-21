// рекурсия
var inorderTraversal = function(root) {
    let rez = []
    function dfs(node) {
        if (node == null) return
        dfs(node.left)
        rez.push(node.val);
        dfs(node.right)
    }
    dfs(root)
    return rez
};

// без рекурсии
// паттерн "идем налево с push, потом pop, потом направо".
// то есть какая логика получается
// мы идем до самого левого ребенка и паралелльно все кладем в сетк
// затем как только до него дошли то верхушку дерева (то есть самое левое) кладем в результат
// затем благодяря условию (stack.length !=0 мы будем подниматься выше к родителю этого ребенка и обработаетм его правого ребенка
function inorderTraversal(root) {
    let rez = [];
    let stack = [];
    let current = root;
    while (stack.length !=0 || current !== null) {
        while (current != null) {
            stack.push(current);
            current = current.left
        }

        current = stack.pop();
        rez.push(current.val)
        current = current.right
    }

    return rez
}

