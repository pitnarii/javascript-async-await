// Exercise #4
// let getJohnProfile = () => {
//   return new Promise(function (resolve) {
//     setTimeout(
//       () =>
//         resolve({
//           name: "John",
//           age: 20,
//           hobbies: ["Coding", "Football"],
//         }),
//       1000
//     );
//   });
// };
// Start coding here

let getJohnProfile = async () => {
  const data = await new Promise(resolve =>
    setTimeout(() => {
      resolve({
        name: "John",
        age: 20,
        hobbies: ["Coding", "Football"],
      });
    }, 1000)
  );
  return data;
};
  
getJohnProfile().then((data) => {
  console.log(data);
});