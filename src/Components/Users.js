export default function getUsers(users, quantity) {
  let userArray = [];
  while (users > 0) {
    const user = { id: `${quantity}`, name: `User ${quantity}` };
    userArray.push(user);
    // console.log(user)
    quantity = quantity + 1;
    users = users - 1;
  }
  return userArray;
}
