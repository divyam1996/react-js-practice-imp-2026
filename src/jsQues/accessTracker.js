// //// with onordered time

// function createAccessTracker() {
//   const map = new Map();

//   function toMinutes(time) {
//     const hours = Math.floor(time / 100);
//     const minutes = time % 100;
//     return hours * 60 + minutes;
//   }

//   // Binary search to find last smaller element
//   function findPrevious(arr, target) {
//     let left = 0, right = arr.length - 1;
//     let result = null;

//     while (left <= right) {
//       let mid = Math.floor((left + right) / 2);

//       if (arr[mid] < target) {
//         result = arr[mid];
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }

//     return result;
//   }

//   return function (id, time) {
//     const current = toMinutes(time);

//     if (!map.has(id)) {
//       map.set(id, [current]);
//       return null;
//     }

//     const arr = map.get(id);

//     // Find closest previous time
//     const prev = findPrevious(arr, current);

//     // Insert current time in sorted order
//     let i = arr.length - 1;
//     arr.push(current); // expand array

//     while (i >= 0 && arr[i] > current) {
//       arr[i + 1] = arr[i];
//       i--;
//     }
//     arr[i + 1] = current;

//     // Check condition
//     if (prev !== null && (current - prev) > 30) {
//       return prev;
//     }

//     return null;
//   };
// }

// const tracker = createAccessTracker();
// console.log(tracker(1, 1100)); 
// console.log(tracker(1, 1000));
// console.log(tracker(1, 1200)); 



/// without undordered time

function createAccessTracker() {
  const map = new Map();

  function toMinutes(time) {
    const hours = Math.floor(time / 100);
    const minutes = time % 100;
    return hours * 60 + minutes;
  }

  return function (id, time) {
    const current = toMinutes(time);

    if (map.has(id)) {
      const last = map.get(id);
      const diff = current - last;

      map.set(id, current); // always update

      if (diff > 30) {
        return last; // return previous time (in minutes)
      } else {
        return null;
      }
    } else {
      map.set(id, current);
      return null;
    }
  };
}

const tracker = createAccessTracker();
console.log(tracker(1, 1100)); 
console.log(tracker(1, 1000));
console.log(tracker(1, 1200)); 