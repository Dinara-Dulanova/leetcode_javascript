var isPalindrome = function(head) {
    let stack = [];
    let current = head;
    while (current !== null) {
        stack.push(current.val);
        current = current.next;
    }

    for (let  i = 0 ; i < stack.length/2; i++) {
        if (stack[i] === stack[stack.length-1-i]) {
            continue
        } else {
            return false
        }
    }

    return true
}

//вариант с временем O(n) и по памяти O(1)
//fast движется в 2 раза быстрее, чем slow.
//Пока fast не дойдёт до конца, slow окажется в середине.
// Если fast не null (список нечётной длины), slow сдвигается ещё на один шаг вперёд, чтобы сравнения начались с правильного места.
// prev указывает на начало развёрнутой первой половины (левая часть).
// slow указывает на начало второй половины (правая часть).
// Поэлементно сравниваются значения в обеих частях.
var isPalindrome = function(head) {
    let slow = head, fast = head, prev = null;
    while (fast && fast.next) {
        fast = fast.next.next;
        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }
    if (fast) slow = slow.next;
    while (prev && slow) {
        if (prev.val !== slow.val) return false;
        prev = prev.next;
        slow = slow.next;
    }
    return true;
};



//почему то не проходит тест на литкоде [1,0,0]
// var isPalindrome = function(head) {
//     let current = head;
//     let count = 0;
//     let stack = []
//     //посчитаю количество
//     while (current !== null) {
//         count++;
//         current = current.next
//     }
//     //вернусь в начало и дойду до середина, положу значения в стек
//     //потом могу идти дальше и сравнивать со значениями из стека, если равны то и я дошла до конца, то true
//     //если не равны то false
//     current = head;
//     for (let  i =0 ; i < count/2; i++) {
//         stack.push(current.val)
//         current = current.next
//     }
//     if (count % 2 === 1) {
//         current = current.next;
//     }
//     while (current != null) {
//         if (current.val != stack.pop()) return false;
//         else {
//             current = current.next
//         }
//     }
//     return true
// };