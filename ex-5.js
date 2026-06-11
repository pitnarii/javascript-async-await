// Exercise #5
// let getJohnProfile = () => {
//   return new Promise(function (_, reject) {
//     setTimeout(
//       () =>
//         reject({
//           errorCode: 500,
//           message: "👿 Failed to request data from server",
//         }),
//       2000
//     );
//   });
// };
// Start coding here

let getJohnProfile = async () => {
  try {
    const error = await new Promise((_, reject) =>
      setTimeout(
        () => {
          reject({
            errorCode: 500,
            message: "👿 Failed to request data from server",
          });
        }, 2000)
    );
  } catch (error) {
    console.log(error)
  }
};
getJohnProfile()

