function deepClone(obj, map = new WeakMap()) {
    // Your implementation
//////////////////weak map circular reference object ke liye kiya h else iski need nhi h
    if (obj == null || typeof obj !== 'object') return obj;

    if (map.has(obj)) {
        return map.get(obj);
    }

    if (obj instanceof Date) {
        return new Date(obj.getTime(obj))
    }

    let clone = Array.isArray(obj) ? [] : {};

    map.set(obj, clone);

    for (let key in obj) {
        clone[key] = deepClone(obj[key]);
    }

    return clone;


}

//For the purpose of user debugging.
deepClone({ a: { b: { c: 3 } } });

module.exports = deepClone;







function deepClone(currentObj) {
    // Your implementation

    if (currentObj === null || typeof currentObj!== "object") {
        return currentObj;
    }
    let newObj = Array.isArray(currentObj) ? [] : {}; 
  for (let key in currentObj) { 
    let property = currentObj[key];
    if (typeof property === "object") {
      newObj[key] = deepClone(property); 
    } else {
      newObj[key] = property; 
    }
  }
  return newObj;
}

//For the purpose of user debugging.
deepClone({ a: { b: { c: 3 } } });

module.exports = deepClone;