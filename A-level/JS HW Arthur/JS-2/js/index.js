/*
    - Написать wait которая получает в качестве параметра время задержки 
    - возвращает promise по завершению ожидания
*/
    async function wait(ms) {
        let promise = new Promise((resolve) => {
            setTimeout(() => resolve('OK'), ms)
        })
        let res = await promise;
        console.log(res)
    }
/*
    - выполнить несколько функций wait с задержкой 2с каждой, последовательно и замерять результат используя
*/
    async function first() {
        let a = performance.now()
        await wait(2000)
        await wait(2000)
        let b = performance.now()
        console.log(b - a)
    }
    first()
/*
    - cократить выполнение вызова функций из предыдущего задания в 2 раза
*/ 
    async function second() {
        let a = performance.now()
        await Promise.all([wait(2000), wait(2000)])
        let b = performance.now()
        console.log(b - a)
    }
    second()