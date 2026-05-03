Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;

    if (promises.length === 0) {
      resolve([]);
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise) 
        .then((data) => {
          results[index] = data; 
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};
let a =  Promise.myAll([1, Promise.resolve(2)]);
a.then((res) => {
  console.log(res); 
}).catch((err) => {
  console.error(err);
});
