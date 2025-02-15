/**
 * 实现一个深拷贝函数
 * @param {*} obj 
 * @returns 
 */

function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  const cache = new WeakMap();
  function _deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (cache.has(obj)) return cache.get(obj);
    const clone = Array.isArray(obj) ? [] : {};
    cache.set(obj, clone);
    for (let key in obj) {
      if (typeof obj[key] === 'object') {
        clone[key] = _deepClone(obj[key]);
      } else {
        clone[key] = obj[key];
      }
    }
    return clone;
  }
  
  return _deepClone(obj);
}

// test deepClone
const obj = {
  a: [],
  b: {
    c: 2,
    d: {
      e: 3,
    }
  }
}
obj.sub = obj;
obj.a.push(obj);
const newObject = deepClone(obj);
console.log(newObject);