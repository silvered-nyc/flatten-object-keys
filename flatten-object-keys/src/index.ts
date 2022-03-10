import { isArray, isPlainObject, flatMap, concat, map, keys } from "lodash";
export const flattenObjectKeys = (
  obj: any,
  parentKey: any = undefined
): string[] => {
  let result: string[];
  if (isArray(obj)) {
    let idx = 0;
    result = flatMap(obj, function (obj) {
      return flattenObjectKeys(obj, (parentKey || "") + "[" + idx++ + "]");
    });
  } else if (isPlainObject(obj)) {
    result = flatMap(keys(obj), function (key) {
      return map(flattenObjectKeys(obj[key], key), function (subkey) {
        return (parentKey ? parentKey + "." : "") + subkey;
      });
    });
  } else {
    result = [];
  }
  return concat(result, parentKey || []);
};
