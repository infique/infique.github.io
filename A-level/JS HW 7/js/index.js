'use strict'
// ========== sort ==========

    // const persons = [
    //   { name: 'Иван', age: 17 },
    //   { name: 'Мария', age: 35 },
    //   { name: 'Алексей', age: 73 },
    //   { name: 'Яков', age: 12 }
    // ]
    
    // const sort = function (array, fieldName, isSortedUp = true) {
    //   return array.sort((a, b) => {
    //     if (a[fieldName] > b[fieldName]) {
    //       return isSortedUp ? 1 : -1
    //     }
    //     if (a[fieldName] < b[fieldName]) {
    //       return isSortedUp ? -1 : 1
    //     }
    //     return 0
    //   })
    // }
    
    // console.log(sort(persons, 'age'))
    // console.log(sort(persons, 'name', false))
    
// ========== array map ==========

    // let arr = ["1", {}, null, undefined, "500", 700];

    // let result  = arr.map(function(item, index, arr) {
    //     let number = parseInt(item);
    //     return isNaN(number) ? item : number;
    // });
    
    // console.log(result);

// ========== array reduce ==========

    // let arr2 = ["0", 5, 3, "string", null];

    // let result = arr2.reduce(function(previousValue, currentValue){

    //     if(typeof(currentValue)==='number'){
    //         previousValue*=currentValue;
    //     }
    //     return previousValue
    //     }, 1)

    // console.log(result);

// ========== object filter ==========

    // var phone = {
    //     brand: "meizu",
    //     model: "m2",
    //     ram: 2,
    //     color: "black",
    // };

    // filter(phone,(key,value) => key == "color" || value == 2);

    // function filter(object, fn){
    //     return Object.entries(object).filter(e => fn(...e)).reduce((a,[b, c] = b) => (a[b] = c, a),{})
    // }
    // console.log(filter(phone,function(key,value){
    // return (key == "color" || value == 2);
    // }));

// ========== object map ==========

    // function map( object, callback ) {
    //     for (let key in object)
    //         Object.assign(object,callback(key, object[key])), delete object[key];
    //     }
    //     let object = {name: 'Ivan', age: 24};
    //     map(object, function(key, value){
    //       let result = {};
    //       result[key+"_"] = value + "$";
    //       return result;   
    //     })
    //     console.log(JSON.stringify(object, null, 4));
        
//========== Sum ==========

    // function sumTo(n) {
    //     if (n == 1) 
    //         return 1;
    //      else {
    //         return n + sumTo(n - 1);
    //     }
    // } 
    // console.log( sumTo(10) );