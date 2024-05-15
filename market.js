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
        photo: "",
    },
    {
        firstname: "Юрій",
        lastname: "Кожанов",
        age: "16",
        state: "Військовозобов'язаний",
        brain: "Зарозумілий",
        prise: "5000$",
        photo: "",
    },
    {
        firstname: "Юрій",
        lastname: "Кожанов",
        age: "16",
        state: "Військовозобов'язаний",
        brain: "Зарозумілий",
        prise: "5000$",
        photo: "",
    },
    {
        firstname: "Юрій",
        lastname: "Кожанов",
        age: "16",
        state: "Військовозобов'язаний",
        brain: "Зарозумілий",
        prise: "5000$",
        photo: "",
    },
]

if (itemsDiv) {
         itemsArray.forEach((item, index) =>{
             // console.log(item)
             itemsDiv.innerHTML += 
             `
             <div class = "item">
             <h2>Товар №${index+1} з ${itemsArray.length}</h2>
             <p>${item.lastname} ${item.firstname}</p>
             </div>
             `
         })
    
     } else {
         console.log('Блок товарів не знайдено')
     }

