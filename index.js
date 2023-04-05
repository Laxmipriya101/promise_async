// function count(time, nums) {
//   return new Promise((res, rej) => {
//     let count = 5;
//     if (nums > 0) {
//       setTimeout(() => {
//         res(count++);
//         nums();
//       }, time);
//     } else {
//       rej("Number should be greater than 0");
//     }
//   });
// }
// count(1000, () => console.log("Data").then((data) => console.log(data))).catch(
//   (err) => console.log(err)
// );

// let count = 0;
// setTimeout(() => {
//   console.log(++count);
//   setTimeout(() => {
//     console.log(++count);
//     setTimeout(() => {
//       console.log(++count);
//       setTimeout(() => {
//         console.log(++count);
//         setTimeout(() => {
//           console.log(++count);
//           setTimeout(() => {
//             console.log(++count);
//             setTimeout(() => {
//               console.log(++count);
//             }, 7000);
//           }, 6000);
//         }, 5000);
//       }, 4000);
//     }, 3000);
//   }, 2000);
// }, 1000);

// const printNumber = (time, func) => {
//   return new Promise((resolve, reject) => {
//     if (func) {
//       setTimeout(() => {
//         resolve(func());
//       }, time);
//     } else {
//       reject("Put a valid Number");
//     }
//   });
// };
// printNumber(0, () => console.log("Number printed"))
//   .then(() => {
//     return printNumber(1000, () => console.log("1"));
//   })
//   .then(() => {
//     return printNumber(2000, () => console.log("2"));
//   })
//   .then(() => {
//     return printNumber(3000, () => console.log("3"));
//   })
//   .then(() => {
//     return printNumber(4000, () => console.log("4"));
//   })
//   .then(() => {
//     return printNumber(5000, () => console.log("5"));
//   })
//   .then(() => {
//     return printNumber(6000, () => console.log("6"));
//   })
//   .then(() => {
//     return printNumber(7000, () => console.log("7"));
//   });

// function prime(num) {
//   return new Promise((resolve, reject) => {
//     let count = 0;
//     for (let i = 0; i < num / 2; i++) {
//       if (num % i === 0) {
//         count++;
//       }
//     }
//     if (count === 1) {
//       resolve("Number is prime");
//     } else {
//       reject("Number is not prime");
//     }
//   });
// }
// prime(17)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// prime(20)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// function AlphaFunc(alpha, timeout, callBack) {
//   setTimeout(() => {
//     console.log(alpha);
//     callBack();
//   }, timeout);
// }
// function Abc() {
//   AlphaFunc("A", 2000, () => {
//     AlphaFunc("E", 3000, () => {
//       AlphaFunc("I", 1000, () => {
//         AlphaFunc("O", 6000, () => {
//           AlphaFunc("U", 5000, () => {});
//         });
//       });
//     });
//   });
// }
// Abc();

// const promiseA = new Promise((resolve, reject) => {
//   resolve(777);
// });

// promiseA.then((val) => console.log("asynchronous logging has val:", val));
// console.log("immediate logging");

// const promiseFunc = new Promise((resolve, reject) => {
//   resolve(10);
//   reject(13);
// });
// promiseFunc.then((x) => console.log(x)).catch((err) => console.log(err));

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "foo");
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

function createOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("createOrder");
      resolve();
    }, 1000);
  });
}
function paymentRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("payment");
      resolve();
    }, 1000);
  });
}

async function orderPlaced() {
  try {
    console.log("inside try block");
    await createOrder();
    await paymentRequest();
    console.log("after waiting");
  } catch (err) {
    console.log("inside catch block");
  } finally {
    console.log("inside finally block");
  }
}
orderPlaced();

// setTimeout(() => {
//   setTimeout(() => {
//     setTimeout(() => {
//       console.log("EA21");
//     }, 3000);
//   }, 2000);
// }, 1000);
