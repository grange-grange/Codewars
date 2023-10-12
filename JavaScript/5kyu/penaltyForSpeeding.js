/*You have been speeding on a motorway and a police car had to stop you. The policeman is a funny guy that likes to play games. Before issuing penalty charge notice he gives you a choice to change your penalty.

Your penalty charge is a combination of numbers like: speed of your car, speed limit in the area, speed of the police car chasing you, the number of police cars involved, etc. So, your task is to combine the given numbers and make the penalty charge to be as small as possible.

For example, if you are given numbers [45, 30, 50, 1] your best choice is 1304550

Examples:

['45', '30', '50', '1'] => '1304550'

['100', '10', '1'] => '100101'

['32', '3'] => '323'*/


// #1
function penalty(a_list){
  return a_list.sort((a, b) => {
    if (a.length === b.length) {
      return  a < b ?  -1 :  1
    }
    return compare(a, b)
  }).join('')  
}

function compare(a, b) {  
  let l = Math.max(a.length, b.length)
  for (let i = 0; i < l; i++) {
    let x = a[i] || a[a.length - 1]
    let y = b[i] || b[b.length - 1]
    if (x < y) return -1
    if (x > y) return 1
  }
  return 1
}

//#2 omg))

function penalty(a_list){
  return a_list.sort((a, b) => a + b > b + a ? 1 : -1).join('')
}