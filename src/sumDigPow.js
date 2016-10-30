function sumDigPow(a, b) {
  let result = []
  while(a < b) {
    +`${a}`.split('').reduce((pre, cur, idx) => (+pre) + Math.pow(cur, (idx + 1))) === a && result.push(a)
    a++
  }
  return result
}

console.log(sumDigPow(1, 10))
