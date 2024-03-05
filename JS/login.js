"use strict";

let userName = $("#username"),
  passWord = $("#password"),
  loginForm = $("#login-form");

let baseURL = `https://fakestoreapi.com`;

async function authorisation() {
  const user = {
    username: userName.value,
    password: passWord.value,
  };

  try {
    if (
      user.password.trim().lenght === 0 ||
      user.username.trim().lenght === 0
    ) {
      alert("Inputni toldiring");
    } else {
      const response = await fetch(`${baseURL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const result = await response.json();
      localStorage.setItem("token", result.token);
      if (localStorage.getItem("token")) {
        window.location.href = "../index.html";
      }
    }
    console.log(user);
  } catch (err) {
    console.log("mana xato :", err);
  }
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  authorisation();
});

// mor_2314
// 83r5^_