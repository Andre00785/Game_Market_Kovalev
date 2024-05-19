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


// let itemsArray =[
//     {
//         firstname: "Юрій",
//         lastname: "Кожанов",
//         age: "16",
//         state: "Військовозобов'язаний",
//         brain: "Зарозумілий",
//         prise: "5000$",
//         photo: "https://thumb.tildacdn.com/tild6662-3264-4935-b833-323663316232/-/format/webp/yamaha_f310.jpg",
//     },
//     {
//         firstname: "Вадим",
//         lastname: "Марценюк",
//         age: "16",
//         state: "Військовозобов'язаний",
//         brain: "Зарозумілий",
//         prise: "5001$",
//         photo: "https://chepuha.shop/image/cache/catalog/01-Foto/music/3_4/rds34/Polcraft-PLG-3834-RDS-5-700x700.jpg",
//     },
//     {
//         firstname: "Олег",
//         lastname: "Недзвецький",
//         age: "16",
//         state: "Військовозобов'язаний",
//         brain: "Зарозумілий",
//         prise: "4999$",
//         photo: "https://simfo.in.ua/image/cache/catalog/guitars/%2034%20WH/1O9A0229-700x700.jpg",
//     },
//     {
//         firstname: "Андрій",
//         lastname: "Ковальов",
//         age: "15",
//         state: "Військовозобов'язаний",
//         brain: "Зарозумілий",
//         prise: "10000$",
//         photo: "https://static.ukrinform.com/photos/2022_11/1668510371-412.png",
//     },
// ]

let itemsArray =[
    {
        firstname: "Анжела",
        lastname: "Лознюк",
        age: "Українська мова",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/10/photo_2023-10-25_15-46-33-1.jpg",
    },
    {
        firstname: "Наталія",
        lastname: "Зинюк",
        age: "Хімія і Біологія",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2024/01/zynjuk-natalija-mykolayivna.jpg",
        pro: "Профіль",
    },
    {
        firstname: "Наталія",
        lastname: "Венцель",
        age: "Директор",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna.jpg",
    },
    {
        firstname: "Лариса",
        lastname: "Забелло",
        age: "Англійська мова",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/zabello-larysa-oleksandrivna.jpg",
    },
    {
        firstname: "Ірина",
        lastname: "Глібко",
        age: "Англійська мова",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/01/hlibko-iryna-anatoliyevna.jpg",
    },
    {
        firstname: "Ірина",
        lastname: "Боровська-Карандюк",
        age: "Українська мова",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/borovska-karandyuk-iryna-anatoliyivna.jpg",
    },
    {
        firstname: "Василь",
        lastname: "Бабій",
        age: "Фізична культура",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/babiy-vasyl-dmytrovych.jpg",
    },
    {
        firstname: "Тарас",
        lastname: "Савінков",
        age: "Англійська мова",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/savinkov-taras-yevhenovych.jpg",
    },
    {
        firstname: "Марія",
        lastname: "Медведєва",
        age: "Географія",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/medvedyeva-mariya-vasylivna.jpg",
    },
    {
        firstname: "Вікторія",
        lastname: "Нелипович",
        age: "Математика",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna.jpg",
    },
    {
        firstname: "Віталій",
        lastname: "Шатківський",
        age: "Інформатика",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815.jpg",
    },
    {
        firstname: "Іван",
        lastname: "Севрук",
        age: "Захист України",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/sevruk-ivan-hryhorovych.jpg",
    },
    {
        firstname: "Олена",
        lastname: "Чугунова",
        age: "Математика",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/chuhunova-olena-vasylivna.jpg",
    },
    {
        firstname: "Наталія",
        lastname: "Гончарук",
        age: "Англійська мова",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/honcharuk-nataliya-oleksandrivna.jpg",
    },
    {
        firstname: "Діна",
        lastname: "Варганова",
        age: "Інформатика",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/varhanova-dina-oleksandrivna.jpg",
    },
    {
        firstname: "Марія",
        lastname: "Гетманська",
        age: "Психолог",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hetmanska-mariya-oleksandrivna.jpg",
    },
    {
        firstname: "Наталія",
        lastname: "Кучер",
        age: "Фізика",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna.jpg",
    },
    {
        firstname: "Олена",
        lastname: "Геча",
        age: "Історія",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hecha-olena-anatoliyivna.jpg",
    },
]

let itemsDiv = document.getElementById("items");

if (itemsDiv) {
         itemsArray.forEach((item, index) =>{
             // console.log(item)
             itemsDiv.innerHTML += 
             `
             <div class = "item">
             <h2>Вчитель №${index+1} з ${itemsArray.length}</h2>
             <p>Ім'я: ${item.lastname} ${item.firstname}</p>
             <p>Предмет: ${item.age}</p>
             <p><img src="${item.photo}" class= "user-photo"></p>
             <p>Переглянути: ${item.pro}</p>
             </div>
             `
         })
    
     } else {
         console.log('Блок товарів не знайдено')
     }

