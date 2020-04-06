// ----------Task 1 html tree----------
    let body = {
        tagName: "body",
        attrs: {},
        subTags: [
            {tagName: "div",
            attrs: {},
            subTags: [
                {tagName: "span",
                text: "Enter a data please",
                children: false
                },
                {tagName: "br",
                attrs: {},
                children: false
                },
                {tagName: "input",
                attrs: {
                    type: "text",
                    id: "name"
                },
                children: false
                },
                {tagName: "input",
                attrs: {
                    type: "text",
                    id: "surname"},
                children: false
                }
                ]
            },
            {tagName: "div",
                attrs: {},
                subTags: [
                    {tagName: "button",
                    text: "Ok",
                    attrs: {
                        id: "ok"
                    }},
                    {tagName: "button",
                    text: "Cancel",
                    attrs: {
                        id: "cancel"
                    }},
                ]
            }
        ]
    }
    console.log(body.subTags[1].subTags[1].text)
    console.log(body.subTags[0].subTags[3].attrs.id)

// ----------Task 2 declarative fields----------
    let notebook = {
        brand: prompt("Enter a brand"),
        type:  prompt("Enter a type, for example: 440 G4"),
        model: prompt("Enter a model, for example: MQL244WV//99"),
        ram: Number(prompt("Enter a RAM 'gb' ")),
        size: prompt("Enter a display size"),
        weight: Number(prompt("Enter a weight '1.2'")),
        resolution: {
            width: Number(prompt("Enter a width in px ")),
            height: Number(prompt("Enter a width in px "))
        },
    };

    let phone = {
        brand: prompt("Enter a brand"),
        model: prompt("Enter a model, for example: ProMax"),
        ram: Number(prompt("Enter a RAM 'gb' ")),
        color: prompt("Enter a color")
    };

    let person = {
        name: prompt("Enter a name"),
        surname: prompt("Enter a surname"),
        married: confirm("Are you married"),
    }

// ----------Task 3 object links----------
    let notebook1 = {
        brand: "HP",
        type:  "440 G4",
        model: "Y7Z75EA",
        ram: 4,
        size: "14",
        weight: 1.8,
        resolution: {
            width: 1920,
            height: 1080,
        },
    };

    let phone1 = {
        brand: "meizu",
        model: "m2",
        ram: 2,
        color: "black",
    };

    let person1 = {
        name: "Donald",
        surname: "Trump",
        married: true,
    }
    notebook1.owner = person1
    phone1.owner = person1
    person1.smartphone = phone1
    person1.laptop = notebook1

    console.log(person1.smartphone.owner.laptop.owner.smartphone === person1.smartphone)

// ----------Task 4 imperative array fill 3----------
    let arr = []
    arr['name'] = prompt("Введите Ваше имя")
    arr['age'] = Number(prompt("Введите Ваш возраст"))
    arr['gender'] = (prompt("Введите Ваш возраст"))

    console.log(arr)

    ----------Task 5 while & confirm----------

    let x = '';
    let y = true;

    while (x !== y){
        x = confirm("Помните пароль?")
    }

// ----------Task 6 array fill----------

    let arr = []
    let z = ''
    while (z != null) {
        z = prompt ('Введите значение')
        arr.push (z);
        if (z === null) 
            break;
        }
    console.log(arr)

// ----------Task 7 array fill nopush ----------

    let arr = []
    let z = ''
    while (z != null) {
        z = prompt ('Введите значение')
        arr[arr.length] = (z);
        if (z === null) 
            break;
        }
        console.log(arr)


// ----------Task 8 infinite probability----------

    for(let i = 0; true; i++){
    if(Math.random() > 0.9) {
            alert(++i)
            break;
        }
    }

//----------Task 9 empty loop----------

    let x = '';
    let y = null;

    while (x = prompt("covid-19?") === y);


//  ----------Task 10 progression sum----------
    const n = 100

    for (let x = z = 1; x < n;z += (x +=3)){
        console.log(z)
    }

//  ----------Task 11 chess one line----------

    const length = 5
    const char = "#"
    const space = " "
    let str = ''

    for (let i = 0; i < Number(length);i++) {
        str += i === 0 ? space : ''
        str += char
        str += space
    }
    console.log(str)

//  ----------Task 12 numbers----------
 
    str = '';
    for (let i = 0; i < 10; i++) {
	    for (j = 0; j < 10; j++) {
            str += j;
            if (j === 9){
                str += "\n";
            }
        }
    }
    console.log(str)

  //  ----------Task 13 chess----------

    const length = 0
    let str = ''
   
    for (i = 8; i > length; i--) {
        for (j = 8; j > length; j--){
            if ((i % 2) === 1) {
                str += '#'
                str += '.'
            } else {
                str += '.'
                str += '#'
            }
            if (j <= 1) {
                str += '\n'
            }
        }
    } 
    console.log(str)


  //  ------------Task 14 cubes----------

    let n = 10
    let arr = []

    for (let i = 0; i < n; i++){
       arr.push(i**3)
    }
    console.log(arr)



  //  ----------Task 15 multiply table----------

    let arr = []
    
    for (let i = 0; i < 10; i++){
        arr[i] = []
        for (let j = 0; j < 10; j++){
                arr[i].push(i * j)
        }   
    }
    console.table(arr)


  //  ----------Task 16 matrix to html table----------

    let a  = '<table cellpadding="6" cellspacing="3" border="1">\n';
        a += '<tr>\n';
    for (var i = 1; i <= 10; i++) 
        a += '<td>' + ((i == 1) ? '' : i) + '</td>\n';
        for (i = 2; i <= 10; i++){
            a += '<tr>\n';
            for (var j = 1; j <= 10; j++)
            a += '<td>' + ((j == 1) ? (i + '') : i * j) + '</td>\n';
            a += '</tr>\n';
        }
        a += '</table>';
    document.write(a)