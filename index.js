console.log("hello world");


const arr = [1, 0, 10, '0', NaN, false, undefined, null, 'false', 'true', '1', ""];

 for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
        console.log(arr[i]);
    };
};