// document.getElementById("btn-submit").addEventListener("click", function () {
//   console.log("submit");
// });

document.getElementById("btn-submit").addEventListener("click", function () {
  const email = document.getElementById("user-email").value;
  const password = document.getElementById("user-password").value;

  if (email == "money@gmail.com" && password == "123456") {
    window.location.href = "bank.html";
    console.log("valid");
  } else {
    alert("invalid . Please type form valid information");
  }

  console.log(email, password);
});
