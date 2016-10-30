function findNb (m) {
  let n = 1
  let count = 0
  while (count < m) {
    count += Math.pow(n, 3)
    n++
  }
  if (count !== m) return -1
  return n - 1
}

export default findNb
