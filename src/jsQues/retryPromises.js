function retry(fn, retries, delay, attempt = 1) {
  return fn().catch((err) => {
    if (retries <= 0) {
      return Promise.reject(err);
    }

    console.log(`retry ${attempt} failed`);

    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    }).then(() => retry(fn, retries - 1, delay, attempt + 1));
  });
}

let count = 0;

async function testFn() {
  count++;
  console.log("Calling API:", count);

  if (count < 3) {
    throw new Error("Failed");
  }

  return "Success";
}


retry(testFn, 3, 2000)
  .then(console.log)
  .catch((err) => console.log("Final Error:", err.message));



















/////////


// async function retry(fn, retries, delay) {
//   for (let i = 1; i <= retries; i++) {
//     try {
//       return await fn();
//     } catch (err) {
//       console.log(`retry ${i} failed`);

//       if (i === retries) {
//         throw err;
//       }

//       await new Promise((res) => setTimeout(res, delay));
//     }
//   }
// }