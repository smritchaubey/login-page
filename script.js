const form = document.querySelector("form");
const form = document.forms[0];
 const p = document.createElement("p");
 const article = document.querySelector("article");
console.log(form.elements.username.value);
form.addEventListener("submit", handleSubmit);
let password, username;
 let users_credentials = [];

 function handleSubmit(e) {
e.preventDefault();
 password = form.elements.password.value;
 username = form.elements.username.value;
console.log(username);
console.log(password);
users_credentials.push({ username, password });
  console.log(users_credentials);

 p.textContent = "Form Submitted!!!🥳";
  p.style.top = "2rem";
 article.insertAdjacentElement("afterend", p);

  setTimeout(() => {
   p.remove();
   }, 5000);
}