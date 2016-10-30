function validParentheses (str) {
  if (str) {
    let matchStr = str.match(/\(+\)+/)
    let flag = false
    let res = {
      'left': [],
      'right': []
    }

    if (matchStr) {
      matchStr[0].split('').forEach(itm => {
        itm === '(' ? res.left.push(itm) : res.right.push(itm)
      })
      if (res.left.length === res.right.length) flag = true
    }

    if (flag) {
      validParentheses(str.replace(matchStr[0], ''))
    }
    return flag
  }
  return true
}

console.log(validParentheses('('))
console.log(validParentheses('()'))
console.log(validParentheses('((())'))
console.log(validParentheses('(())((()()))'))