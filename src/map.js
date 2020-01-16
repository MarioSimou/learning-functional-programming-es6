// array.map(fn)

const map = array => fn => array.reduce((a,v) => [...a, fn(v)],[])

console.log(map([1,2,3,4])(x => x * 2))
console.log(map([5,6,7,8,9,10])(x => -x))
console.log(map(['a','b','c','d'])(x => x.toUpperCase()))