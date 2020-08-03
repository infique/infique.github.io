/* 
ЗАДАНИЕ 1
    Напиши функцию глубокого копирования объектов и массивов.
    Она должна делать не только копию переданного объекта/массива,
    но и копии вложенных них объектов/массивов. 
    Также, копироваться должны объекты встроенного в JS конструктора Date.
*/
    // const a = { 
    //     x: 1, 
    //     y: 2, 
    //     z: [1, 2, 3], 
    //     u: undefined, 
    //     v: null, 
    //     w: new Date(2014, 1, 1, 12, 0, 0),
    // };
    // const b = deepCopy(a); // b — это отдельный объект
    // b.x = 10;
    // console.log(a.x);// 1
    // // a.z и b.z указывают на разные массивы:
    // b.z.push(4);
    // console.log(a.z); // [1, 2, 3]
    // // a.w и b.w независимы друг от друга
    // b.w.setFullYear(2015); 
    // console.log(a.w.getFullYear()); // 2014 

    // function deepCopy(obj) {
    //     let copy;
    //     if (obj instanceof Date) {
    //         copy = new Date();
    //         copy.setTime(obj.getTime());
    //         return copy;
    //     }
    //     if (obj instanceof Array) {
    //         copy = [];
    //         for (let i = 0, length = obj.length; i < length; i++) {
    //             copy[i] = deepCopy(obj[i]);
    //         }
    //         return copy;
    //     }
    //     if (obj instanceof Object) {
    //         copy = {};
    //         for (let key in obj) {
    //             if (obj.hasOwnProperty(key)) copy[key] = deepCopy(obj[key]);
    //         }
    //         return copy;
    //     }
    // }

/* 
    ЗАДАНИЕ 2
    Напиши функцию, считающую число свойств в объекте:
*/
    // const a = { a: 1, b: 2 };
    // console.log(getCount(a));//2

    // const b = function () {}; 
    // console.log(getCount(b));// 0

    // const c = [1, 2, 3]; 
    // console.log(getCount(c));// 3

    // const d = [];
    // d[100] = 1; 
    // console.log(getCount(d));// 1
        
    // function getCount (obj, options = {}){
    //     return Object.keys(obj).length;
    // }

    /* вторая часть ЗАДАНИЯ 2
    дополнительно Добавить не обязательный параметр options, 
    который может иметь следующие ключи skipNull - true/flase skipUndefined - true/flase 
    */

    // const a = { a: 1, b: 2,c:null };
    // console.log(getCount(a)); // 3
    // console.log(getCount(a,{skipNull:true})); // 2

    // const b = { a: 1, b: 2,c:undefined }; 
    // console.log(getCount(b)); // 3 
    // console.log(getCount(b,{skipUndefined:true})); // 2

    // const c = { a: 1, b: 2,c:undefined,d:null }; 
    // console.log(getCount(c)); // 4 
    // console.log(getCount(c,{skipUndefined:true})); // 3 
    // console.log(getCount(c,{skipNull:true})); // 3
    // console.log(getCount(c,{skipUndefined:true, skipNull:true })); // 2*

    // const d = [undefined,null]
    // console.log(getCount(d)); // 2 
    // console.log(getCount(d,{skipNull:true})); // 1 
    // console.log(getCount(d,{skipUndefined:true})); // 1 
    // console.log(getCount(d,{skipUndefined:true, skipNull:true })); // 0*

    // function getCount (obj, option = {}) {
    //         let count = 0;
    //         let arr = Object.values(obj);
    //         for (key in obj) {
    //             count++;
    //             if (obj[key] === undefined &&
    //                 option.skipUndefined === true ||
    //                 obj[key] === null &&
    //                  option.skipNull) count--;
    //         };
    //         return count;
    // };

/* 
ЗАДАНИЕ 3
    Напиши функцию pluck , которая берет массив объектов и возвращает массив значений определенного поля:
*/
    // const characters = [
    //     { 'name': 'barney', 'age': 36 },
    //     { 'name': 'fred', 'age': 40 },
    //     ];

    //     function pluck(arr, value) {
    //         return arr.map(obj => obj[value]);
    //     }
    //     console.log(pluck(characters, 'name')); // ['barney', 'fred']
    //     console.log(pluck(characters, 'age'))

/*ЗАДАНИЕ 4
    Создать список категорий (можно на свое усматрение)
        -----angular
        -----react
        -----vue
    Добавить select с лимитами 5/10/25
    по клику на категорию запрашивать данные с соответствующей категории и
    показывать список фидов учитывая лимит
    по клику на лимит апрашивать данные и обновлять список фидов учитываю текующую категорию
*/

    // const wrapper = document.getElementById("wrapper");
    // const form = document.getElementById("form");
    // const result = document.getElementById("result");
    // const loader = document.getElementById("loader");
    // loader.style.display = "none";
    // const limit = document.getElementById("limit");
    // const category = document.getElementById("category");
    // const pagin = document.getElementById("pagin");
    // const prev = document.getElementById("prev");
    // const next = document.getElementById("next");

    // prev.style.display = "none";
    // next.style.display = "none";

    // let a = null;
    // let b = null;
    // let distCount = 0;
    // let count = 0;
    // let arrDistCount = [];

    // async function getRedditData(limits = limit.value, after = null, before = null) {
    //     prev.style.display = "none";
    //     next.style.display = "none";
    //     result.innerHTML = "";
    //     loader.style.display = "flex";
    //     let data = await fetch(`https://www.reddit.com/r/${category.value}.json?limit=${limits}&dist=${limits}&after=${after}&count=${count}&before=${before}&count=${count}`);
    //     let res = await data.json();
    //     labelAfter = res.data.after;
    //     if (labelAfter === null) {
    //         next.disabled = true;
    //     }
    //     labelBefore = res.data.before;
    //     if (labelBefore === null) {
    //         prev.disabled = true;
    //     }
    //     distCount = res.data.dist;

    //     for (let elemArr of res.data.children) {
    //         const {data} = elemArr;
    //         const liContainer = document.createElement("li");
    //         liContainer.setAttribute("style","display:flex; justify-content: space-between; border-bottom: 2px solid coral; align-items:center; margin: 5px auto;");
    //         const p = document.createElement("p");
    //         p.setAttribute("style", "display:flex; flex-direction: column; flex-basis: 15%;")
    //         p.innerHTML = `<p>Posted by</p><p>${data.author}</p>`;
    //         liContainer.appendChild(p);
    //         const titleContainer = document.createElement("p");
    //         titleContainer.setAttribute("style", "padding: 5px; display:flex; justify-content:flex-start; flex-basis: 65%;");
    //         const a = document.createElement("a");
    //         a.setAttribute("href",`${data.url}`);
    //         a.setAttribute("target","_blank");
    //         a.setAttribute("style", "text-decoration: none; font-size: 22px; display:flex; align-items:center; color: #5c50ff;");

    //         if (data.thumbnail.includes("https:")) {
    //             const image = document.createElement("img");
    //             image.setAttribute("src", data.thumbnail);
    //             image.setAttribute("style", "width: auto; height: 50px;");
    //             a.appendChild(image);
    //         }
    //         const title = document.createElement("p");
    //         title.setAttribute("style", "padding-left: 10px");
    //         title.innerText = `${data.title}`;
    //         a.appendChild(title);
    //         titleContainer.appendChild(a);
    //         const createScore = document.createElement("p");
    //         createScore.setAttribute("style", "display:flex; flex-direction: column; flex-basis: 15%;");
    //         const create = document.createElement("span");
    //         create.innerHTML = `Created: ${new Date(data.created*1000).toLocaleDateString()}`;
    //         createScore.appendChild(create);
    //         const score = document.createElement("span");
    //         score.innerHTML = `Score ${data.score}`;
    //         createScore.appendChild(score);
    //         const comments = document.createElement("span");
    //         comments.innerHTML = `Comments: ${data.num_comments}`;
    //         createScore.appendChild(comments);
    //         liContainer.appendChild(titleContainer);
    //         liContainer.appendChild(createScore);
    //         result.appendChild(liContainer);
    //     }
    //     loader.style.display = "none";
    //     prev.style.display = "flex";
    //     next.style.display = "flex";
    //     }

    //     function attachEvent (event, handler, node) {
    //         node.addEventListener(event, handler);
    //         return () => {
    //             node.removeEventListener(event, handler);
    //         };
    //     };
    //     function getRedditDataForForm() {
    //         arrDistCount = [];
    //         count = 0;
    //         getRedditData();
    //     }
    //     attachEvent("change", getRedditDataForForm, form)
    //     function paginationNext() {
    //         prev.disabled = false;
    //         arrDistCount.push(distCount)
    //         count = arrDistCount.reduce((acc, curVal) => acc + curVal, 0);
    //         getRedditData(limits = limit.value, labelAfter, before = null);
    //     }
    //     attachEvent("click", paginationNext, next)
    //     function paginationPrev() {
    //         next.disabled = false;
    //         getRedditData(limits = arrDistCount[arrDistCount.length-1], after = null, labelBefore)
    //         arrDistCount = arrDistCount.slice(0, arrDistCount.length-1);
    //         count = arrDistCount.reduce((acc, curVal) => acc + curVal, 0);
    //     }
    //     attachEvent("click", paginationPrev, prev)




/* ЗАДАНИЕ 5
    Некая сеть фастфудов предлагает несколько видов гамбургеров:
        маленький (50 тугриков, 20 калорий)
        большой (100 тугриков, 40 калорий)
    Гамбургер может быть с одним из нескольких видов начинок (обязательно):
        сыром (+ 10 тугриков, + 20 калорий)
        салатом (+ 20 тугриков, + 5 калорий)
        картофелем (+ 15 тугриков, + 10 калорий)
    Дополнительно, гамбургер можно посыпать приправой (+ 15 тугриков, 0 калорий) и полить майонезом (+ 20 тугриков, + 5 калорий).
    Напиши программу, расчиытвающую стоимость и калорийность гамбургера. 
    Используй ООП подход (подсказка: нужен класс Гамбургер, константы, методы для выбора опций и рассчета нужных величин).
    Код должен быть защищен от ошибок. 
    Представь, что твоим классом будет пользоваться другой программист. 
    Если он передает неправильный тип гамбургера, например, или неправильный вид добавки, должно выбрасываться исключение (ошибка не должна молча игнорироваться).
    Написанный класс должен соответствовать следующему jsDoc описанию (то есть содержать указанные методы, которые принимают и возвращают данные указанного типа и выбрасывают исключения указанного типа. Комментарии ниже можно скопировать в свой код):
*/

/**
* Класс, объекты которого описывают параметры гамбургера.
*
* @constructor
* @param size Размер
* @param stuffing Начинка
* @throws {HamburgerException} При неправильном использовании */
// function Hamburger(size, stuffing) {
//     let stuffingName = {};
//     stuffing[stuffingName] = 1;
//     this.stuffing = stuffing;
// }
// Hamburger.constructor = Hamburger;
// /* Размеры, виды начинок и добавок */
// Hamburger.SIZE_SMALL = { name: 'easy burger', price: 50, calories: 20 };
// Hamburger.SIZE_LARGE = { name: 'hard burger', price: 100, calories: 40 };

// Hamburger.STUFFING_CHEESE = { name: 'cheese', price: 10, calories: 20 }
// Hamburger.STUFFING_SALAD = { name: 'salad', price: 20, calories: 5 };
// Hamburger.STUFFING_POTATO = { name: 'potato', price: 15, calories: 10 };

// Hamburger.TOPPING_MAYO = { name: 'mayo', price: 15, calories: 0 };
// Hamburger.TOPPING_SPICE = { name: 'spice', price: 20, calories: 5 };


// /**
// * Добавить добавку к гамбургеру. Можно добавить несколько
// * добавок, при условии, что они разные.
// * @param topping Тип добавки
// * @throws {HamburgerException} При неправильном использовании
// */
// Hamburger.prototype.addTopping = function (topping) {
//     let stuffing = this.getStuffing();
//     if (this.getStuffing(stuffing) < 1) {
//         throw new Error('Stuffing count can\'t be less then 1')
//     }else {
//         stuffing[name] = 1;
//     }
// };



// /**
// * Убрать добавку, при условии, что она ранее была
// * добавлена.
// *
// * @param topping Тип добавки
// * @throws {HamburgerException} При неправильном использовании */
// Hamburger.prototype.removeTopping = function (topping) {}



// /**
// * Получить список добавок.
// * @return {Array} Массив добавленных добавок, содержит константы * Hamburger.TOPPING_*
// */
// Hamburger.prototype.getToppings = function () {
//     return 
// }


// /**
//  * Узнать размер гамбургера
//  */
// Hamburger.prototype.getSize = function () {
//         let size = this.getSize().size;
//         let stuffing = this.getStuffing();
      
//         for (let key in stuffing) {
//           let thisStuffItem = getStuffing(key);
//           size += thisStuffItem.size * stuffing[key];
//         }
//         return size;    
// };



// /**
//  * Узнать начинку гамбургера
//  */
// Hamburger.prototype.getStuffing = function () {
//   return this.stuffing;
// };


// /**
// * УЗНАТЬ ЦЕНУ ГАМБУРГЕРА
// * @return {Number} Цена в тугриках */
// Hamburger.prototype.calculatePrice = function () {
//     let sum = this.getPrice().price;
//     let stuffing = this.getStuffing();
      
//     for (let key in stuffing) {
//       let thisStuffItem = getStuffing(key);
//       sum += thisStuffItem.price * stuffing[key];
//     }
//     return sum;
// };


// /**
// * УЗНАТЬ КАЛОРИЙНОСТЬ ГАМБУРГЕРА
// * @return {Number} Калорийность в калориях */
// Hamburger.prototype.calculateCalories = function () {
//     let sum = this.getCalories().calories;
//     let stuffing = this.getStuffing();

//     for (let key in stuffing) {
//         let thisStuffItem = this.getStuffing(key);
//     sum += thisStuffItem.calories * stuffing[key];
//   }
//   return sum;
// };


// /**
// * Представляет информацию об ошибке в ходе работы с гамбургером. 
// * Подробности хранятся в свойстве message.
// * @constructor
// */
// function HamburgerException (message){    
//     this.message = message || 'Error'
// }



// /*Внимательно прочти эти комментарии перед решением.
// Это задача на ООП. Тебе надо сделать класс, который получает на вход информацию о гамбургере, и на выходе дает информацию о весе и цене. Никакого взаимодействия с
// пользователем и внешним миром класс делать не должен - все нужные данные ты передаешь ему явно. Ни спрашивать ничего, ни выводить.
// Почему? Потому что каждый должен заниматься своим делом, класс должен только обсчитывать гамбургер, а вводом-выводом пусть занимаются другие. Иначе мы получим кашу, где разные функции смешаны вместе.
// Типы начинок, размеры надо сделать константами. Никаких магических строк не должно быть.
// Переданную информацию о параметрах гамбургера класс хранит внутри в своих полях. Вот как может выглядеть использование этого класса:
// */
// // маленький гамбургер с начинкой из сыра
// const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE); // добавка из майонеза
// hamburger.addTopping(Hamburger.TOPPING_MAYO);
// // спросим сколько там калорий
// console.log("Calories: %f", hamburger.calculateCalories()); // сколько стоит
// console.log("Price: %f", hamburger.calculatePrice());
// // я тут передумал и решил добавить еще приправу hamburger.addTopping(Hamburger.TOPPING_SPICE);
// // А сколько теперь стоит?
// console.log("Price with sauce: %f", hamburger.calculatePrice());
// // Проверить, большой ли гамбургер?
// console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
// // Убрать добавку
// hamburger.removeTopping(Hamburger.TOPPING_SPICE);
// console.log("Have %d toppings", hamburger.getToppings().length); // 1
// // При неправильном использовании класс сообщает об этом с помощью выброса исключения
// // не передали обязательные параметры
// const h2 = new Hamburger(); // => HamburgerException: no size given
// // передаем некорректные значения, добавку вместо размера
// const h3 = new Hamburger(Hamburger.TOPPING_SPICE, Hamburger.TOPPING_SPICE); // => HamburgerException: invalid size 'TOPPING_SAUCE'
// // добавляем много добавок
// const h4 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE); hamburger.addTopping(Hamburger.TOPPING_MAYO); hamburger.addTopping(Hamburger.TOPPING_MAYO);
// // HamburgerException: duplicate topping 'TOPPING_MAYO'