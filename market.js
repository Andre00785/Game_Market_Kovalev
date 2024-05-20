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

// let itemsArray =[
//     {
//         firstname: "Анжела",
//         lastname: "Лознюк",
//         age: "Українська мова",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/10/photo_2023-10-25_15-46-33-1.jpg",
//         pro: "Профіль",
//     },
//     {
//         firstname: "Наталія",
//         lastname: "Зинюк",
//         age: "Хімія і Біологія",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2024/01/zynjuk-natalija-mykolayivna.jpg",
//         pro: "Профіль",
//     },
//     {
//         firstname: "Наталія",
//         lastname: "Венцель",
//         age: "Директор",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna.jpg",
//         pro: "Профіль",
//     },
//     {
//         firstname: "Лариса",
//         lastname: "Забелло",
//         age: "Англійська мова",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/zabello-larysa-oleksandrivna.jpg",
//         pro: "Профіль",
//     },
//     {
//         firstname: "Ірина",
//         lastname: "Глібко",
//         age: "Англійська мова",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/01/hlibko-iryna-anatoliyevna.jpg",
//         pro: "Профіль",
//     },
//     {
//         firstname: "Ірина",
//         lastname: "Боровська-Карандюк",
//         age: "Українська мова",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/borovska-karandyuk-iryna-anatoliyivna.jpg",
//         pro: "Профіль",
//     },
//     {
//         firstname: "Василь",
//         lastname: "Бабій",
//         age: "Фізична культура",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/babiy-vasyl-dmytrovych.jpg",
//         pro: "Профіль",
//     },
//     {
//         firstname: "Тарас",
//         lastname: "Савінков",
//         age: "Англійська мова",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/savinkov-taras-yevhenovych.jpg",
//         pro: "Профіль",
//     },
//     {
//         firstname: "Марія",
//         lastname: "Медведєва",
//         age: "Географія",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/medvedyeva-mariya-vasylivna.jpg",
//         pro: "Профіль",
//     },
//     {
//         firstname: "Вікторія",
//         lastname: "Нелипович",
//         age: "Математика",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna.jpg",
//         pro: "Профіль",
//     },
//     {
//         firstname: "Віталій",
//         lastname: "Шатківський",
//         age: "Інформатика",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815.jpg",
//         pro: "Профіль",
//     },
//     {
//         firstname: "Іван",
//         lastname: "Севрук",
//         age: "Захист України",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/sevruk-ivan-hryhorovych.jpg",
//         pro: "Профіль",
//     },
//     {
//         firstname: "Олена",
//         lastname: "Чугунова",
//         age: "Математика",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/chuhunova-olena-vasylivna.jpg",
//         pro: "Профіль",
//     },
//     {
//         firstname: "Наталія",
//         lastname: "Гончарук",
//         age: "Англійська мова",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/honcharuk-nataliya-oleksandrivna.jpg",
//         pro: "Профіль",
//     },
//     {
//         firstname: "Діна",
//         lastname: "Варганова",
//         age: "Інформатика",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/varhanova-dina-oleksandrivna.jpg",
//         pro: "Профіль",
//     },
//     {
//         firstname: "Марія",
//         lastname: "Гетманська",
//         age: "Психолог",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hetmanska-mariya-oleksandrivna.jpg",
//         pro: "Профіль",
//     },
//     {
//         firstname: "Наталія",
//         lastname: "Кучер",
//         age: "Фізика",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna.jpg",
//         pro: "Профіль",
//     },
//     {
//         firstname: "Олена",
//         lastname: "Геча",
//         age: "Історія",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hecha-olena-anatoliyivna.jpg",
//         pro: "Профіль",
//     },
// ]

let itemsArray =[
    {
        title1_1:"Мотокоса 3000",
        title1_2:"https://cdn.27.ua/sc--media--prod/default/0e/2b/cb/0e2bcbfe-04ce-4fd0-b14f-580bddec354a.jpg",
        title1_3:"https://th.bing.com/th/id/OIP.MuBGFZpCweYeml-Mh8tjlgHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7",
        title1_4:"https://ukrpublic.com/images/2021/08/06/image_large.jpg",
        title1_5: "5499 грн",
        title1_6: "4497 грн",
        title1_7:"Ціна за купоном 4395 грн",


    },
    {
        title1_1:"Мотокоса 3465",
        title1_2:"https://th.bing.com/th/id/OIP.lxJWJ5Tghwcbm_18j1ltdQHaIG?w=171&h=187&c=7&r=0&o=5&pid=1.7",
        title1_3:"https://th.bing.com/th/id/OIP.MuBGFZpCweYeml-Mh8tjlgHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7",
        title1_4:"https://ukrpublic.com/images/2021/08/06/image_large.jpg",
        title1_5: "5499 грн",
        title1_6: "4497 грн",
        title1_7:"Ціна за купоном 4395 грн",


    },
    {
        title1_1:"Мотокоса 9494",
        title1_2:"https://th.bing.com/th/id/OIP.Yrb9Bl1asb4RROM9jrThNwHaLb?w=121&h=187&c=7&r=0&o=5&pid=1.7",
        title1_3:"https://th.bing.com/th/id/OIP.MuBGFZpCweYeml-Mh8tjlgHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7",
        title1_4:"https://ukrpublic.com/images/2021/08/06/image_large.jpg",
        title1_5: "5499 грн",
        title1_6: "4497 грн",
        title1_7:"Ціна за купоном 4395 грн",


    },
    {
        title1_1:"Мотокоса 949432",
        title1_2:"https://images.ua.prom.st/570224242_w640_h640_motokosa-stihl-fs.jpg",
        title1_3:"https://th.bing.com/th/id/OIP.MuBGFZpCweYeml-Mh8tjlgHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7",
        title1_4:"https://ukrpublic.com/images/2021/08/06/image_large.jpg",
        title1_5: "5499 грн",
        title1_6: "4497 грн",
        title1_7:"Ціна за купоном 4395 грн",


    },
]

let itemsDiv = document.getElementById("items");

if (itemsDiv) {
         itemsArray.forEach((item, index) =>{
             // console.log(item)
             itemsDiv.innerHTML += 
             `
             <div id="item" class="item">

                <div class="item-title">${item.title1_1}</div>

                <div><img src="${item.title1_2}" class= "user-photo"></div>

                <div class="parts-pay">
                    <div><img src="${item.title1_3}" class= "user-photo1"></div>
                    <div><img src="${item.title1_4}" class= "user-photo2"></div>
                </div>

                <div class="prise">
                    <div class="kdkd">${item.title1_5}</div>
                    <div>${item.title1_6}</div>
                </div>

                <div class="prise bonus">
                    <div class="txt122">${item.title1_7}</div>
                </div>

                
            </div>
             `
         })
    
     } else {
         console.log('Блок товарів не знайдено')
     }

