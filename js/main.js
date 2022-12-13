
// const users = [
//     {
//         userName: "Abduqahhor",
//         lastName: "Valihanov",
//         phone: "+998935556787"
//     },

//     {
//         userName: "Abduvahob",
//         lastName: "Alimov",
//         phone: "+998935556787"
//     },

//     {
//         userName: "Abdusalimbek",
//         lastName: "Rahmonov",
//         phone: "+998935556787"
//     }
// ]

// const userList = document.querySelector("#list");

// for (let u = 0; u < users.length; u++) {

//     const currentUsers = users[u];
//     const { userName, lastName, phone } = currentUsers;

//     userList.innerHTML += `
//         <li>
//             <h3>${userName}</h3>
//             <h3>${lastName}</h3>
//             <span>${phone}</span>
//         </li>
//     `
// }




// const userForm = document.querySelector("#form");
// const userName = document.querySelector("#name");
// const lastName = document.querySelector("#last-name");
// const phone = document.querySelector("#phone");



// userForm.addEventListener("submit", function (evt) {
//     evt.preventDefault();

//     const userNameValue = userName.value;
//     const lastNameValue = lastName.value;
//     const phonevalue = phone.value;

//     if (userNameValue && lastNameValue && phonevalue) {
//         const newUser = {
//             userName: userNameValue,
//             lastName: lastNameValue,
//             phone: phonevalue
//         }

//         users.push(newUser);

//         const { userName, lastName, phone } = newUser;
//         userList.innerHTML += `
//         <li>
//             <h3>${userName}</h3>
//             <h3>${lastName}</h3>
//             <span>${phone}</span>
//         </li>`
//     }

//     evt.target.reset();
// })






// const users = [
//     {
//         userName: "Abdusalom",
//         last_name: "Abdusalamov",
//         phone: "+998936348844"
//     },

//     {
//         userName: "Jasurbekjon",
//         last_name: "Usmonov",
//         phone: "+998936348844"
//     },

//     {
//         userName: "Salimbek",
//         last_name: "Athamov",
//         phone: "+998934668866"
//     },

//     {
//         userName: "Sherzod",
//         last_name: "Nurmamedov",
//         phone: "+998946446446"
//     }
// ]

// const usersInfo = document.querySelector("#list");

// for (let i = 0; i < users.length; i++) {

//     let currentUsers = users[i]
//     let { userName, last_name, phone } = currentUsers;

//     usersInfo.innerHTML +=
//         `<li>
//         <h3>${userName}</h3>
//         <h3>${last_name}</h3>
//         <strong>${phone}</strong>
//     </li>`

// }


// const userForm = document.querySelector("#form");
// const userName = document.querySelector("#name");
// const last_name = document.querySelector("#last-name");
// const phone = document.querySelector("#phone");


// userForm.addEventListener("submit", function (evt) {
//     evt.preventDefault();

//     let userNameValue = userName.value;
//     let last_nameValue = last_name.value;
//     let phoneValue = phone.value;

//     if (userNameValue && last_nameValue && phoneValue) {
//         let newUser = {
//             userName: userNameValue,
//             last_name: last_nameValue,
//             phone: phoneValue
//         }

//         users.push(newUser);

//         let { userName, last_name, phone } = newUser;
//         usersInfo.innerHTML +=
//             `<li>
//             <h3>${userName}</h3>
//             <h3>${last_name}</h3>
//             <strong>${phone}</strong>
//         </li>`
//     }

//     evt.target.reset();
// })






// const product = [
//     {
//         proName: "Apple",
//         proPrice: "2.3",
//         proMassa: "5",
//         proNumber: "001"
//     },

//     {
//         proName: "Banana",
//         proPrice: "3.4",
//         proMassa: "3",
//         proNumber: "002"
//     },

//     {
//         proName: "Orane",
//         proPrice: "2.9",
//         proMassa: "10",
//         proNumber: "003"
//     },
// ]

// const userProduct = document.querySelector("#list");


// for (let p = 0; p < product.length; p++) {

//     let currentProduct = product[p];
//     let { proName, proPrice, proMassa, proNumber } = currentProduct;

//     userProduct.innerHTML +=
//         `<li>
//         <h3>${proName}</h3>
//         <strong>${proPrice}</strong>
//         <u>${proMassa}</u>
//         <span>${proNumber}</span>
//     </li>`
// }


// const proForm = document.querySelector("#form");
// const proName = document.querySelector("#productName");
// const proPrice = document.querySelector("#productPrice");
// const proMassa = document.querySelector("#productMassa");
// const proNumber = document.querySelector("#productNumber");


// proForm.addEventListener("submit", function (evt) {
//     evt.preventDefault();


//     let proNameValue = proName.value;
//     let proPriceValue = proPrice.value;
//     let proMassaValue = proMassa.value;
//     let proNumberValue = proNumber.value;

//     if (proNameValue && proPriceValue && proMassaValue && proNumberValue) {
//         let newObjpro = {
//             proName: proNameValue,
//             proPrice: proPriceValue,
//             proMassa: proMassaValue,
//             proNumber: proNumberValue
//         }

//         product.push(newObjpro);


//         let { proName, proPrice, proMassa, proNumber } = newObjpro;
//         userProduct.innerHTML +=
//             `<li>
//             <h3>${proName}</h3>
//             <strong>${proPrice}</strong>
//             <u>${proMassa}</u>
//             <span>${proNumber}</span>
//         </li>`
//     }

//     evt.target.reset();

// })








const product = [
    {
        proName: "Apple",
        proPrice: "2.3",
        proMassa: "5",
        proNumber: "001"
    },

    {
        proName: "Banana",
        proPrice: "3.4",
        proMassa: "3",
        proNumber: "002"
    },

    {
        proName: "Orane",
        proPrice: "2.9",
        proMassa: "10",
        proNumber: "003"
    },
]



const userProduct = document.querySelector("#list");

for (let p = 0; p < product.length; p++) {

    let currentProduct = product[p];
    let { proName, proPrice, proMassa, proNumber } = currentProduct;

    userProduct.innerHTML +=
        `<li>
        <h3>${proName}</h3>
        <strong>${proPrice}</strong>
        <u>${proMassa}</u>
        <span>${proNumber}</span>
    </li>`
}


const proForm = document.querySelector("#form");
const proName = document.querySelector("#productName");
const proPrice = document.querySelector("#productPrice");
const proMassa = document.querySelector("#productMassa");
const proNumber = document.querySelector("#productNumber");


proForm.addEventListener("submit", function (evt) {
    evt.preventDefault();


    let proNameValue = proName.value;
    let proPriceValue = proPrice.value;
    let proMassaValue = proMassa.value;
    let proNumberValue = proNumber.value;

    if (proNameValue && proPriceValue && proMassaValue && proNumberValue) {
        let newObjpro = {
            proName: proNameValue,
            proPrice: proPriceValue,
            proMassa: proMassaValue,
            proNumber: proNumberValue
        }

        product.push(newObjpro);

        let { proName, proPrice, proMassa, proNumber } = newObjpro;

        userProduct.innerHTML +=
            `<li>
        <h3>${proName}</h3>
        <strong>${proPrice}</strong>
        <u>${proMassa}</u>
        <span>${proNumber}</span>
    </li>`
    }

    evt.target.reset();

})