import {AUDIOFORMAT, VIDEOFORMAT} from './constant'

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

/**
 *
 * @param AudioType 音频类型判断
 * @returns {T | * | BigInt | number | string}
 */
export function judgeAudioType (AudioType) {
  if (!AudioType) return ''
  const Type = AudioType.split('.')
  return Type[Type.length - 1]
}

// 根据文件名后缀区分 文件类型
/*
 * @param: fileName - 文件url
 * @param: 数据返回 1) 无后缀匹配 - false
 * @param: 数据返回 2) 匹配图片 - image
 * @param: 数据返回 3) 匹配 txt - txt
 * @param: 数据返回 4) 匹配 excel - excel
 * @param: 数据返回 5) 匹配 word - word
 * @param: 数据返回 6) 匹配 pdf - pdf
 * @param: 数据返回 7) 匹配 ppt - ppt
 * @param: 数据返回 8) 匹配 视频 - video
 * @param: 数据返回 9) 匹配 音频 - radio
 * @param: 数据返回 10) 其他匹配项 - other
 */
export function matchType (fileName) {
  // 后缀获取
  let suffix = ''
  // 获取类型结果
  let result = ''
  try {
    const flieArr = fileName.split('.')
    suffix = flieArr[flieArr.length - 1]
  } catch (err) {
    suffix = ''
  }
  // fileName无后缀返回 false
  if (!suffix) {
    result = false
    return result
  }
  // 图片格式
  const imglist = ['png', 'jpg', 'jpeg', 'bmp', 'gif', 'PNG', 'JPG', 'JPEG', 'BMP', 'GIF']
  // const imglist = PICFORMAT;
  // 进行图片匹配
  result = imglist.some(item => item == suffix)
  if (result) {
    result = 'image'
    return `${result}/${suffix}`
  }
  // 匹配txt
  const txtlist = ['txt']
  result = txtlist.some(item => item == suffix)
  if (result) {
    result = 'txt'
    return result
  }
  // 匹配 excel
  const excelist = ['xls', 'xlsx']
  result = excelist.some(item => item == suffix)
  if (result) {
    result = 'excel'
    return result
  }
  // 匹配 word
  const wordlist = ['doc', 'docx']
  result = wordlist.some(item => item == suffix)
  if (result) {
    result = 'word'
    return result
  }
  // 匹配 pdf
  const pdflist = ['pdf']
  result = pdflist.some(item => item == suffix)
  if (result) {
    result = 'pdf'
    return result
  }
  // 匹配 ppt
  const pptlist = ['ppt']
  result = pptlist.some(item => item == suffix)
  if (result) {
    result = 'ppt'
    return result
  }
  // 匹配 视频
  // const videolist = ['mp4', 'm2v', 'mkv'];
  const videolist = VIDEOFORMAT
  result = videolist.some(item => item == suffix)
  if (result) {
    result = 'video'
    return `${result}/${suffix}`
  }
  // 匹配 音频
  // const radiolist = ['mp3', 'wav', 'wmv'];
  const radiolist = AUDIOFORMAT
  result = radiolist.some(item => item == suffix)
  if (result) {
    result = 'audio'
    return `${result}/${suffix}`
  }
  // 其他 文件类型
  result = 'other'
  return result
}

/**
 * 文件流转base64
 * @param blob
 * @param callback
 */
export function blobToDataURI (blob, callback) {
  const reader = new FileReader()
  reader.readAsDataURL(blob)
  reader.onload = function (e) {
    callback(e.target.result)
  }
}
