function runCode() {
    console.log('before promise');
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Zero Promise');
            resolve();
        }, 0);
    });
}
setTimeout(() => {
    console.log('Zero');
}, 0);
runCode().then(() => console.log('Zero Promise Invoked'));
console.log('One');

// Event Loop
// 1. console.log('Zero') попадает в Task Queue и ждет
// 2. function runCode подадает в Call Stack
// 3. console.log('before promise') из function runCode выполняется первым
// 4. console.log('Zero Promise') из function runCode попадает в Task Queue и ждет
// 5. console.log('One') попадает в Call Stack и выполняется вторым
// 6. console.log('Zero') из Task Queue попадает в Call Stack и выполняется третьим
// 7. console.log('Zero Promise') из Task Queue попадает в Call Stack и выполняется четвертым
// 8. console.log('Zero Promise Invoked') попадает в Microtask Queue и ждет
// 9. console.log('Zero Promise Invoked') из Microtask Queue подадает в Call Stack и выплняется пятым

//Console
// 1. before promise
// 2. One
// 3. Zero
// 4. Zero Promise
// 5. Zero Promise Invoked