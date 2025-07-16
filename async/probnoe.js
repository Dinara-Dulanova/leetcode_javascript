// Задача 1
// Необходимо создать функцию, которая возвращает другую функцию для последовательной обработки строк из очереди с заданной задержкой между действиями
// 1.	Основная функция принимает один параметр, который задает задержку в миллисекундах
// 2.	Возрващемая функция принимает строковые значения и добавляет их в очередь обработки
// 3.	Обработка строк должна происходить следующим образом:
//     - Каждую строку из очереди нужно обрабатывать поочередно
//     - Каждый символ строки выводится с задержкой, которая была задана при создании основной функции
//     - После обработки всех символов текущей строки автоматически начинается обработка следующей строки в очереди

// function createRender(timeout) {
//     let queue = [];
//     let isProcessing = false;
//
//     async function processinQueue() {
//         while (queue.length > 0) {
//             let word = queue.shift();
//             for (let i = 0; i< word.length; i++) {
//                 await new Promise(resolve => {
//                     console.log(word[i])
//                     setTimeout(resolve, timeout)
//                 })
//
//             }
//         }
//         isProcessing = false;
//     }
//
//     return function (str) {
//         queue.push(str);
//         if (!isProcessing) {
//             isProcessing = true;
//             processinQueue();
//         }
//     }
// }
//
// const render = createRender(500);
// render("Hello");
// render("World");
// render("123")
