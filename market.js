// // //перевірка підключеного файлу скриптів
// // console.log('підключено файл скриптів market.js')

// //визначення масиву товарів
// let itemsArray = ['Газонокосарка 56',
// 'Електриччний триметр',
// 'Електрична газонокосарка',
// 'Акумулятор',
// 'Електриччний триметр',
// 'Електрична газонокосарка',
// 'Акумулятор',
// 'Електриччний триметр',
// 'Електрична газонокосарка',
// 'Акумулятор',
// 'Електриччний триметр',
// 'Електрична газонокосарка',
// 'Акумулятор',
// 'Електриччний триметр',
// 'Електрична газонокосарка',
// 'Акумулятор',
// 'Електриччний триметр',
// 'Електрична газонокосарка',
// 'Акумулятор',
// 'Електриччний триметр',
// 'Електрична газонокосарка',
// 'Акумулятор',
// ]

// //отримання елементу з ідентифікатором items
// let itemsDiv = document.getElementById("items");

// //перевірка існування знайденого блоку
// if (itemsDiv) {
//     itemsArray.forEach((item, index) =>{
//         // console.log(item)
//         itemsDiv.innerHTML += 
//         `
//         <div class = "item">
//         <h2>Товар №${index+1} з ${itemsArray.length}</h2>
//         <p>${item}</p>
//         </div>
//         `
//     })

// } else {
//     console.log('Блок товарів не знайдено')
// }

// // //Виведення елементів відсортованого масиву
// // itemsArray.sort().forEach((item, index) =>{
// //     console.log(index + '-й елемент: ', item)
// // }) 

// // //сортування масиву
// // itemsArray = itemsArray.sort()

// // for (let i = 0; i < itemsArray.length; i++) {
// //     console.log(i + '-й елемент: ', itemsArray[i])
// // }


let itemsArray =[
    {
        firstname: "Юрій",
        lastname: "Кожанов",
        age: "16",
        state: "Військовозобов'язаний",
        brain: "Зарозумілий",
        prise: "5000$",
        photo: "https://thumb.tildacdn.com/tild6662-3264-4935-b833-323663316232/-/format/webp/yamaha_f310.jpg",
    },
    {
        firstname: "Вадим",
        lastname: "Марценюк",
        age: "16",
        state: "Військовозобов'язаний",
        brain: "Зарозумілий",
        prise: "5001$",
        photo: "https://chepuha.shop/image/cache/catalog/01-Foto/music/3_4/rds34/Polcraft-PLG-3834-RDS-5-700x700.jpg",
    },
    {
        firstname: "Олег",
        lastname: "Недзвецький",
        age: "16",
        state: "Військовозобов'язаний",
        brain: "Зарозумілий",
        prise: "4999$",
        photo: "https://simfo.in.ua/image/cache/catalog/guitars/%2034%20WH/1O9A0229-700x700.jpg",
    },
    {
        firstname: "Андрій",
        lastname: "Ковальов",
        age: "15",
        state: "Військовозобов'язаний",
        brain: "Зарозумілий",
        prise: "10000$",
        photo: "https://static.ukrinform.com/photos/2022_11/1668510371-412.png",
    },
]

let itemsDiv = document.getElementById("items");

if (itemsDiv) {
         itemsArray.forEach((item, index) =>{
             // console.log(item)
             itemsDiv.innerHTML += 
             `
             <div class = "item">
             <h2>Партієць №${index+1} з ${itemsArray.length}</h2>
             <p>Ім'я: ${item.lastname} ${item.firstname}</p>
             <p>Вік: ${item.age}</p>
             <p>Доля: ${item.state}</p>
             <p>Характер: ${item.brain}</p>
             <p><img src="${item.photo}" class= "user-photo"></p>
             <p>Ціна: ${item.prise}</p>
             </div>
             `
         })
    
     } else {
         console.log('Блок товарів не знайдено')
     }

