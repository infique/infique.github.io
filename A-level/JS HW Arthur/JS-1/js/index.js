/*
	- Написать функцию которая возвращает promise. 
	- Promise должен вернуть результаты через 2 секунды и вернуть "Hello world" 
*/
	let myPromise = () => {
	    return new Promise((resolve => {
	        setTimeout(() => {
	            resolve('Hello world')
	        }, 2000)
	    }))
	}
	myPromise().then(console.log)

/*
	Написать функцию которая принимает параметр data . И выполняет следующие  
		- функция должна возвращать Promise
		- eсли данные не являются числами, верните обещание, отклоненное сразу же, и укажите в данных «error»  
		- eсли данные являются нечетным числом, верните обещание, разрешенное через 1 секунду, со значением «odd» 
		- eсли данные являются четным числом, верните обещание, отклоненное через 2 секунды, со значением «even»  
*/

	let dataPromise = (data) => {
	    return new Promise((resolve, reject) => {
	        if (typeof data !== 'number') {
	            reject('ERROR')
	        }
	        if (data % 2 !== 0) {
	            setTimeout(() => {
	                resolve('odd')
	            }, 1000)
	        }
	        if (data % 2 === 0) {
	            setTimeout(() => {
	                reject('even')
	            }, 2000)
	        }
	    })
	}
	dataPromise(3)
	    .then(result => console.log(result))
	    .catch(err => console.log(err));

/* 
	- Используя функци из предыдущего задания написать функцию которая обрабатывает массив
	- Функция должна принимать массив как параметр а возвращать объект
	- Где ключ объекта это элемент массива и значение odd, even, not a number 
*/

	let arr = [1, 22, 4, 55, 5, 'hello', 'hi']

	let func = function (arr) {
	    return new Promise(function (resolve) {
	        let obj = {}
	        for (let i = 0; i < arr.length; i++) {
	            let key = arr[i]
	            dataPromise(key)
	                .then(result => console.log(result, obj[key] = result))
	                .catch(err => console.log(err, obj[key] = err));
	        }
	        resolve(obj)
	    })
	}

	func(arr)
	    .then(obj => console.log("obj", obj))




