let humanReadable = (num) => {
  let result = ''
  if (num < 60) {
    result = secondsReadable(num)
  } else if (60 <= num && num < 3600) {
    result = minutesReadable(num)
  } else {
    result = hoursReadable(num)
  }
  return result
}

let secondsReadable = num => {
  return `00:00:${num < 10 ? '0' + num : num}`
}

let minutesReadable = num => {
  let seconds = num % 60
  let minutes = Math.floor(num / 60)
  return `00:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
}

let hoursReadable = num => {
  let hours = Math.floor(num / 3600)
  let minutes = Math.floor((num - hours * 3600) / 60)
  let seconds = num - hours * 3600 - minutes * 60


  return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
}

export default humanReadable
