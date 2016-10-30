function sumOfDigits (num) {
  if (num >= 10) {
    num = `${num}`.split('').reduce((pre, cur) => (+pre) + (+cur))
    return sumOfDigits(num)
  }
  return num
}

console.log(sumOfDigits(16))
