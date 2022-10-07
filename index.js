// practice
function submitData() {
    return fetch("http://localhost:3000/users", configurationObject)
    .then(res => res.json())
    .then((data) => document.body.innerHTML = data.id)

    .catch(error => document.body.innerHTML = error.message)
}
const userInfo = {
    name: "Steve",
    email: "steve@steve.com"
};
const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(userInfo),
}




// // // Add your code here
// function submitData() {
//     return fetch("http://localhost:3000/users", configurationObject)
//     .then(res => res.json())
//     .then((data) => document.body.innerHTML = data.id)

//     .catch(error => document.body.innerHTML = error.message)
// }
// const userInfo = {
//     name: "Steve",
//     email: "steve@steve.com"
// };
// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify(userInfo),
// }

