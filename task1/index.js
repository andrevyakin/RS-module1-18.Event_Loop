setTimeout(() => {
    console.log('setTimeout');
}, 0);
const promise = new Promise((resolve) => {
    console.log('Promise');
    resolve();
});
promise.then(() => {
    console.log('Promise resolve');
});
console.log('End');

// Event Loop
// 1 console.log('setTimeout') попадает в Task Queue и ждет.
// 2 console.log('Promise') попадает в Call Stack и выполняется первой.
// 3 console.log('Promise resolve')  подадает в Microtask Queue и ждет.
// 4 console.log('End'); попадает в Call Stack и выполняется второй.
// 5 console.log('Promise resolve') из Microtask Queue попадает в Call Stack и выполняется третьей.
// 6 console.log('setTimeout') из Task Queue попадает в Call Stack и выполняется четвертой.

//Console
// 1. Promise
// 2. End
// 3. Promise resolve
// 4. setTimeout