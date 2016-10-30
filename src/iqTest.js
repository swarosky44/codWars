function iqTest (numbers) {
  let result = {
    odd: [],
    even: []
  }
  numbers.split(' ').forEach((itm, idx) => itm % 2 === 0 ? result.even.push(idx + 1) : result.odd.push(idx + 1))
  return result.odd.length > result.even.length ? result.even[0] : result.odd[0]
}

console.log(iqTest('2 4 7 8 10'))
