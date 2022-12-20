const getData = (callback) => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .then((user) => {
            console.log('Success');
            callback(user);
        })
        .catch((error) => {
            console.log(error);
        });
}
getData(() => {
    console.log('user received');
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('promise resolved');
        }, 500);
        console.log('in promise');
        setTimeout(() => {
            console.log('last set timeout');
        }, 400);
    });
    promise.then((result) => {
        console.log(result);
    });
});
console.log('End')

// Event Loop
// 1. console.log('Success') попадает в Microtask Queue и ждет
// 2. console.log('End') попадает в Call Stack и выполняется первым
// 3. console.log('Success') подадает из Microtask Queue в Call Stack и выполняется второй
// 4. console.log('user received'); попадает в Call Stack и выполняется третьей
// 5. console.log('in promise') попадает в Task Queue
// 6. console.log('in promise') попадает из Task Queue в Call Stack и выполняется четвертой
// 7. console.log('last set timeout') попадает в Task Queue
// 8. console.log('last set timeout') попадает из Task Queue в Call Stack и выполняется пятой
// 9. console.log(result) попадет сначала в Task Queue потом в Microtask Queue потом в Call Stack и выполниться шестой

// Console
// 1. End
// 2. Success
// 3. user received
// 4. in promise
// 5. last set timeout
// 6. promise resolved