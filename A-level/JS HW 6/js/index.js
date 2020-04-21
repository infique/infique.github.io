// ========== "a" ==========

    function a(){
        alert("Привет!");
    }
    a()

// ========== cube ==========

    function cube(x){
        return Math.pow(x, 3);
    }
    cube(3)

   
// ========== avg2 ==========

    function avg2(a,b){
        return (a + b) / 2
    }
    avg2(1,2)
    avg2(10,5)

// ========== sum3 ==========

    function sum3(a,b,c) {
        if (a + b + c){
            return a + b + c;
        }else if (a + b) {
            return a + b;
        }else {
            return a;
        }
    } 
    sum3(1,2,3);
    sum3(5,10,100500);
    sum3(5,10);

// ========== intRandom ==========

    function intRandom (min,max) {
        if (typeof max === "undefined"){
            max = min
            min = 0;
        }
        let result = Math.floor(Math.random() * (max - min + 1)) + min;
        return result;
    }
    intRandom(2,15);
    intRandom(-1,1);
    intRandom(0,1);
    intRandom(10);

// ======== greetAll =========

    function greetAll() {
        let heroes = 'Hello'

        for (let i = 0; i < arguments.length; i++){
            heroes += i === 0 ? '' + arguments[i] : ',' + arguments[i]
        }
        alert(heroes)
    }
    greetAll(" Superman");
    greetAll(" Superman, SpiderMan");
    greetAll(" Superman, SpiderMan, Captain Obvious");

// ========== sum ===========

    function sum() {
        let result = 0;
        for (i = 0; i < arguments.length; i++) {
          result += arguments[i];
        }
        return result;
      }
    sum(1);
    sum(2);
    sum(10, 20, 40, 100);

// ========== Union ===========

    function aSample(){
        a() 
    }

    function cubeSample(){
        cube(3) 
    }

    function avg2Sample(){
        avg2(1,2)
        avg2(10,5)
    }

    function sum3Sample(){
        sum3(1,2,3);
        sum3(5,10,100500);
        sum3(5,10);
    }

    function intRandomSample(){
        intRandom(2,15);
        intRandom(-1,1);
        intRandom(0,1);
        intRandom(10);
    }

    function greetAllSample(){
        greetAll(" Superman");
        greetAll(" Superman, SpiderMan");
        greetAll(" Superman, SpiderMan, Captain Obvious");
    }

    function sumSample(){
        sum(1);
        sum(2);
        sum(10, 20, 40, 100);
    }

    let sample = prompt("Введите название задания");
    switch (sample.toLowerCase()){
        case "a": aSample()
                  break;
        case "cube": cubeSample()
                  break;
        case "avg2": avg2Sample()
                  break;
        case "sum3": sum3Sample()
                  break;
        case "intRandom": intRandomSample()
                  break;
        case "greetAll": greetAllSample()
                  break;
        case "sum": sumSample()
                  break;
    }


// ========== Union 2 ===========
