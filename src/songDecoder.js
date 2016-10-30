let songDecoder = (str) => {
  return str.replace(/(WUB)+/g, ' ').trim()
}

export default songDecoder
