// const fetch = require("node-fetch");

// data = {
//     fullname: "Rahul",
//     orgname: "IIIT",
//     empid: "1234",
//     mobnum: "123456789",
//     emailid: "rin1998@gmail.com",
// }
// fetch('http://localhost:5000/register',{
//     method: "POST",
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
// }).then(res => res.json())
// .then(data => console.log(data))
// .catch((err) => console.log(err));

const fs = require('fs');
const data = require('./menu')

data.push({
    "category" : "Pastry",
    "item" : "Pizza",
    "picurl" : "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

fs.writeFile("menu.json", JSON.stringify(data), err => {
    if (err) throw err;
    console.log('wrote');
})