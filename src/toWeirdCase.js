let toWeirdCase = str => {
  let final = (itm) => {
    return itm.replace(/\w/g, (match, offset) => {
      if (offset === 0 || offset % 2 === 0) {
        return match.toUpperCase()
      } else {
        return match.toLowerCase()
      }
    })
  }
  if (str.indexOf(' ') > -1) {
    return str.split(' ').map(itm => final(itm)).join(' ')
  } else {
    return final(str)
  }
}

export default toWeirdCase
