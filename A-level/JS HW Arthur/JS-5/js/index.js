/*
Создать input type file стилизировать его на подобие.
При выборе файла, вывести его имя ниже, 
если забрано несколько файлов одновременно то вывести имена файлов как список
Дополнительно
Создать функцию фейковой загрузки файла (функция предоставлена в коде лекции)
Сделать загрузку файлов последовательной, показывать индикатор загрузки 
(текст Loading, spinner и тд) пока файл загружается ( код уже предоставлен в лекции)
Дополнительно 2 (Promise.all)
Показать на экране то количество лоадеров сколько файлов было выбрано
Убрать лоадеры после того как все файлы будут загружены
Дополнительно 3
Показать на экране то количество лоадеров сколько файлов было выбрано
Сделать загрузку файлов последовательно (как в 1м варианте) 
заменяя индикатор загрузки на имя файла
*/
  const file = document.getElementById("file");
  const container = document.getElementById("container")
  const list = document.createElement("ul")

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function fakeUploadFile (file, ms) {
    return new Promise(resolve => {
      setTimeout(()=> resolve(file), ms)
    })
  }
//   file.addEventListener("change", async event => {
//     const files = event.target.files;
//     for (let file of files) {
//         const item = document.createElement("li");
//         item.innerText = "LOADING...";
//         item.style = "font-size:22px";
//         const ms = randomInteger(600, 1200);
//         list.appendChild(item);
//         const uploadedFile = await fakeUploadFile(file, ms);
//         item.innerText = `${uploadedFile.name}, ${uploadedFile.size} kbytes`;
//     }
//     elem.appendChild(list);
// });
// container.appendChild(list);
// ================================
 
  file.addEventListener("change", async event => {
    const files = event.target.files;
    list.innerHTML = "";
    for (let i = 0; i < files.length; i++) {
      const item = document.createElement("li");
      item.innerText = "LOADING...";
      item.style = "font-size:22px";
      list.appendChild(item);
    }
    const nodeList = list.querySelectorAll("li")
    for (let i = 0; i < files.length; i++) {
      const ms = randomInteger(600, 1200);
      const uploadedFile = await fakeUploadFile(files[i], ms);
      nodeList.item(i).innerText = `${uploadedFile.name}, ${uploadedFile.size} kbytes`;
    }
  });
  container.appendChild(list);

// ================================
  
/* 
  Написать функцию raceButton (часть кода представлена в коде лекции), 
  которая принимает кол-во кликов первым агрументом 
  и 2 аругментом принимаят время за которое юзер должен успеть сделать эти клики.
  Гонка должна начаться после 1го нажатия на кнопку. В конце вывести результат победа или поражение.
  Дополнительно 1
  Изменять цвет кнопки в зависимости от победы и поражения,
  Добавить disable если пользователь проиграл или сделал нужное количество кликов
  Дополнительно 2
  Нажимая на кнопку показывать сколько кликов осталось до победы.
  Дополнительно 3
  Показывать сколько времени осталось
 */
  function clicksTimer (ms) {
    return new Promise(resolve => {
      setTimeout(() => resolve({btn: "You LOSE!",bgc: "red"}),ms)
    });
  }

  function clicksCounter (button, clickCount) {
    return new Promise(resolve => {
      let count = 0;
      if (count >= clickCount) {
        resolve({ btn: "You WIN!", bgc: "green"})          
      }
      else {
        button.onclick = () => {
          count++;
          if (count >= clickCount) {
            resolve({ btn: "You WIN!",  bgc: "green"})
          }
        }
      }
    }) 
  }

  function raceButton(clickCount, waitMs) {
    const container2 = document.createElement("div");
    const button = document.createElement("button");
    button.style.width = "250px";
    button.style.height = "60px";
    button.style.margin = "15px";
    button.innerText = `Click me ${clickCount} times`;
    let count = 0;
    let t1 = 0;
    button.addEventListener("click", async function () {
      count++;
      let t = performance.now();
      let t2 = t - t1;
      let t3 = waitMs - (t2 === t ? 0 : t2);
      button.innerText = `${clickCount - count} clicks to win, time left ${t3} ms`;
      if (count === 1) {
        t1 = performance.now();
        const race = await Promise.race([clicksTimer(waitMs), clicksCounter(button, clickCount-1)]);
        button.innerText = race.btn;
        button.style.backgroundColor = race.bgc;
        button.disabled = true;
      }
    })
    container2.appendChild(button);
    container2.appendChild(button);
    container.appendChild(container2);
  }

  raceButton(10, 5000);
  raceButton(1, 3000);
  raceButton(5, 2000);