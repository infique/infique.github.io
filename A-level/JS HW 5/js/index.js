// ---------- Task 1 '3 person' ----------
    let a = {
        name: 'Ivan',
        surname: 'Ivanov'
    }
    let b = {
        name: 'Petro',
        surname: 'Petrov'
    }
    let c = {
        name: 'Dmitro',
        surname: 'Dimitrov'
    }

// ---------- Task 2 'different fields' ----------
    a.age = 25
    b.married = true
    c.fathername = 'Dimitrovich'

// ---------- Task 3 'fields check' ----------
    alert('age' in a)
    alert('married' in b)
    alert('fathername' in c)

// ---------- Task 4 'array of persons' ----------
    'use strict'

    const persons = [
    {
        name: 'Ivan',
        surname: 'Ivanov',
        age: 25, 
    },
    {
        name: 'Petro',
        surname: 'Petrov',
        married: false
    },
    {
        name: 'Dmitro',
        surname: 'Dimitrov',
        fathername: 'Dimitrovich'
    }
    ]
    persons[3] = {
        name: 'Anna',
        surname: 'Annova',
        fathername: 'Antonovna',
        age: 35,
        married: false
    }

// ---------- Task 5 'loop of persons' ----------

    for (let key in persons){
        console.log(persons[key])
    }

// ---------- Task 6 'loop of name aend surname' ----------

    for (let key in persons){
        console.log(Object.values([persons[key].name, persons[key].surname]))
    }

// ---------- Task 7 'loop of loop of values' ----------

    for (let key in persons){
        console.log(Object.values(persons[key]))
    }

// ---------- Task 8 'fullName' ----------

    for (key in persons){
        persons[key]['fullName'] = `${persons[key].name} ${persons[key].surname} ${persons[key].fathername}` 

        if (typeof (persons[key].fathername) === "undefined") {
        persons[key]['fullName'] = `${persons[key].name} ${persons[key].surname}`
        } 
    }
    console.log(persons)

// ---------- Task 9 'serialize' ----------

    let json = JSON.stringify(persons)
    console.log(json)

// ---------- Task 10 'deserialize' ----------

    let personJ = {"name":"Slavko","surname":"Slavkov","fathername":"Slavkovich"}
    personJ = JSON.parse('{"name":"Slavko","surname":"Slavkov","fathername":"Slavkovich"}')
    persons[4] = personJ
    
    console.log(persons)

// ---------- Task 11 'HTML' ----------

    let table  = '<table cellpadding="6" cellspacing="3" border="1">\n'

    for (let key in persons) {
        table +=   `<tr><td>${key}</td><td>${persons[key].name}</td><td>${persons[key].surname}</td></tr>\n`
    }
    table += '</table>';
    document.write(table)

// ---------- Task 12,13 'HTML optional fields' & 'HTML tr color'----------

    let table  = '<table cellpadding="6" cellspacing="3" border="1">\n'
    table += '<tr style="color:red;background-color: pink"><td></td><td>NAME</td><td>SURNAME</td><td>FATHERNAME</td><td>AGE</td><td>MARRIED</td></tr>'
    for (let key in persons) {
        table +=   `<tr style="background-color: yellow">
                        <td style="color:green;background-color: pink">${key}</td>
                        <td>${persons[key].name}</td>
                        <td>${persons[key].surname}</td>
                        <td>${persons[key].fathername}</td>
                        <td>${persons[key].age}</td>
                        <td>${persons[key].married}</td>
                    </tr>\n`
    }
    table += '</table>';
    document.write(table)


