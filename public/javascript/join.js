const joinFormHandler = async function(event) {
event.preventDefault();

const usernameEl = document.querySelector("#username-input-join");
const useremailEl = document.querySelector("#useremail-input-join");
const passwordEl = document.querySelector("#password-input-join");

<<<<<<< HEAD
//console.log('='.repeat(50) + '\n join.js line 08 \n' + '='.repeat(50));
=======
console.log('='.repeat(50) + '\n join.js line 08 \n' + '='.repeat(50));
>>>>>>> 2ff0a2195187cfb77e960a8194eb97ba9059d7c4

fetch("/api/user", {
    method: "post",
    body: JSON.stringify({
        user_name: usernameEl.value,
        user_email: useremailEl.value,
        password: passwordEl.value
    }),
    headers: { "Content-Type": "application/json" }
    })
    .then(function() {
        document.location.replace("/dashboard");
    })
    .catch(err => console.log(err));
};

document
    .querySelector("#join-form")
    .addEventListener("submit", joinFormHandler);