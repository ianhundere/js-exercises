const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = 1
let j = 1
list.forEach(function(i) {
  list.forEach(function(j) {
    let result = i*j
  console.log(`${i} x ${j} =${result}` )
 })
})