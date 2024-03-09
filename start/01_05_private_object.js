// Write your code here
const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "wilson",
  [password]: "1234",
  age: 40
}
console.log(user.username);
console.log(user.password);