/*There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Important
Please look at the examples and clarifications below, to ensure you understand the task correctly :)

Examples
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
Clarifications
There is only ONE queue serving many tills, and
The order of the queue NEVER changes, and
The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
N.B. You should assume that all the test input will be valid, as specified above.

P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool*/

//ЕЩЕ НАДО ДОПИЛИВАТЬ!

function queueTime(customers, n) {
  if (customers == 0) {
    return 0;
  } else if (n === 1) {
    return customers.reduce((a, b) => a + b);
  }
  
  if (customers.length < n) {
    n = customers.length;
  }
  
  let tills = [[customers[0]]];
  let freeTill = 0;
  let freeTillSum = customers[0];
  for (let i = 1; i < n; i++) {
    tills.push([0]);
  }
  for (let i = 1; i < customers.length; i++) {    
    for (let j = 0; j < n; j++) {
      console.log(tills[j]);
      if (freeTillSum !== 0 && tills[j].reduce((a,b) => a + b) < freeTillSum) {
        freeTill = j;
      }     
    }
    console.log(freeTill);
    tills[freeTill].push(customers[i]);    
    console.log(tills);
    freeTillSum = tills[freeTill].reduce((a,b) => a + b);
    console.log(freeTillSum);
  }
  
  let tillSum = [];
  for (let i = 0; i < n; i++) {
    tillSum.push(tills[i].reduce((a, b) => a + b));
  }
  
  return Math.max.apply(null, tillSum);
}

