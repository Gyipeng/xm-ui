export function formatTime2Hour (timestamp) {
  if (!timestamp || typeof timestamp !== 'number') return ''
  const date = new Date(timestamp)
  return `${date.getHours()}:${date.getMinutes()}`
}

/**
 * 将整数转换成 时：分：秒的格式
 * @param second
 * @returns {string}
 */
export function realFormatSecond (second) {
  const secondType = typeof second
  if (secondType === 'number' || secondType === 'string') {
    second = parseInt(second, 10)
    const mimute = Math.floor(second / 60)
    second -= mimute * 60
    return `${(`0${mimute}`).slice(-2)}:${(`0${second}`).slice(-2)}`
  }
  return '00:00'
}

/**
 * 从remark中取出音频时间
 * @returns {number}
 */
export function formatAudioTime (remark) {
  if (!remark || typeof remark !== 'string') return 0
  try {
    const { audioTime } = JSON.parse(remark)
    return audioTime
  } catch (e) {
    return 0
  }
}

export function formatTime2Date (timestamp) {
  if (!timestamp || typeof timestamp !== 'number') return ''
  const date = new Date(timestamp)
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
}
