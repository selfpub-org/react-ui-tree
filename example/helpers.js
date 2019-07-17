/**
 * The function passes deep into the object leaving only the allowed keys.
 *
 * @param {*} obj
 * @param {string[]} allowedKeys
 */
export const filterTree = (obj, allowedKeys = ["children", "__id"]) => {
  if (null === obj || "object" !== typeof obj) return obj;

  if (obj instanceof Array) {
    const copy = [];
    for (let i = 0, len = obj.length; i < len; i++) {
      const item = obj[i];
      copy.push(filterTree(item));
    }
    return copy;
  }

  if (obj instanceof Object) {
    const copy = {};
    for (let attr in obj) {
      if (obj.hasOwnProperty(attr)) {
        if (allowedKeys.includes(attr)) copy[attr] = filterTree(obj[attr]);
      }
    }
    return copy;
  }
};
