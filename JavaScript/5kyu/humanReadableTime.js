/*Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/

function humanReadable (seconds) {
  const toStr = (x) => {
    return x === 0 
    ? `00`
    : x.toString().length === 1
    ? `0${x}`
    : x.toString()
  }
  const h = (x) => Math.floor(seconds / 3600)
  const m = (x) => Math.floor(seconds % 3600 / 60)
  const s = (x) => Math.floor(seconds % 60)
  
  return `${toStr(h(seconds))}:${toStr(m(seconds))}:${toStr(s(seconds))}`
}