/*Given an object with an arbitrary number of properties, any number of which may be objects or arrays, replace all values which are strictly equal to the string: "dynamic" with a given string occurring anywhere in that object or a child object or array.

Your solution should be recursive.

Your solution should be "in place" meaning it return the original object, not a copy.

Your solution should also include some type safety. If a value that isn't an object or array is passed as the first argument, it should just return whatever was passed in.*/
function solution (data, replace) {
  for (let key in data) {
    if (data[key] instanceof Object) {
      solution(data[key], replace)
    }
    let str = JSON.stringify(data[key])
    str = str.replace(/dynamic/, replace)
    data[key] = JSON.parse(str)
  }
  return data
}