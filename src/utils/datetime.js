const formatTimeElapsed = (timeElapsedx) => {
  const getSeconds = `0${timeElapsedx % 60}`.slice(-2)
  const minutes = `${Math.floor(timeElapsedx / 60)}`
  const getMinutes = `0${minutes % 60}`.slice(-2)
  const getHours = `0${Math.floor(timeElapsedx / 3600)}`.slice(-2)

  return `${getHours} : ${getMinutes} : ${getSeconds}`
}

const formatDate = (date) => {
  const seconds = date.getSeconds()
  const minutes = date.getMinutes()
  const hours = date.getHours()
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

export default { formatTimeElapsed, formatDate }
