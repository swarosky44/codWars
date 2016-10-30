function longestConsec(strarr, k) {
  let n = strarr.length
  let sliceStrarr = []
  let result = ''

  if (!n || k > n || k <= 0) return result

  for (let i = 0; i <= n - k; i++) {
    sliceStrarr.push(strarr.slice(i, i + k))
  }

  console.log(sliceStrarr)

  for (let s of sliceStrarr) {
    let curResult = s.reduce((pre, cur) => pre + cur)
    result = curResult.length > result.length ? curResult : result
  }

  return result
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))
