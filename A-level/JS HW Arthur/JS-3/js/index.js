// reverse -> "hello".reverse()

	String.prototype.showReverse = function (str) {
	    return this.split("").reverse().join("");
	}
	console.log('hello'.showReverse())

// isPolindrom -> "hello”.isPolindrom()

	String.prototype.isPalindrome = function (str) {
	    let result = this.split('').reverse().join('');
	    return this == result
	}
	console.log('m2am'.isPalindrome())
	console.log('mam'.isPalindrome())

// map -> “hello".map(callback)

	String.prototype.map = function (callb) {
	    let result = callb(this)
	    return result;
	}

	let str = 'hello'.map(function (res) {
	    return res.toUpperCase()
	})
	console.log(str)



// Array.prototype.filter

	Array.prototype.filter = function (callb) {
	    let arr = [];

	    for (let item of this) {
	        let res = callb(this[item], item, this)

	        if (res) {
	            arr.push(this[item])
	        }
	    }
	    return arr;
	};

	let arr = [6, 1, 4, 2, 3, 4, 2, 1]
	let newArr = arr.filter(function (num) {
	    return num < 3;
	});
	console.log(arr);
	console.log(newArr);



// Array.prototype.reduce

	Array.prototype.reduce = function (reduceFn, initialValue) {
	    let value = initialValue;

	    for (let i = 0; i < this.length; i++) {
	        const currentEl = this[i];
	        value = reduceFn(value, currentEl, i, this);
	    }

	    return value;
	};

	let a = [1, 2, 3, 54,].reduce(function (prev, next) {
	    return prev + next
	}, 0)
	console.log(a)


// Array.prototype.map

	Array.prototype.map = function (callb) {
	    let mapArr = []
	    for (let i = 0; i < this.length; i++) {
	        mapArr[i] = callb(this[i], this)
	    }
	    return mapArr;
	}

	let arr2 = [1, 2, 3, 4, 5]
	let mapFn = arr2.map(function (num) {
	    return num * 10;
	});
	console.log(arr2);
	console.log(mapFn);




// Array.prototype.push

	Array.prototype.push = function (arr, ...el) {
	    for (let i = 0; i < el.length; i++) {
	        let elements = el[i];
	        this[this.length] = elements
	    }
	    console.log(this)
	    return this.length;


	}

	let arr3 = [1, 2, 4];
	console.log(arr3.push(1, 2, 34));
	console.log(arr3)



// Array.prototype.unshift

	Array.prototype.unshift = function (...values) {
	    for (let i = this.length - 1; i >= 0; i--) {
	        this[i + values.length] = this[i]
	    }

	    for (let i = 0; i < values.length; i++) {
	        this[i] = values[i];
	    }
	    console.log(arr4)
	    return this.length;
	}

	var arr4 = [3, 4, 5]
	console.log(arr4.unshift(1, 1, 1, 1, 1, 1));


