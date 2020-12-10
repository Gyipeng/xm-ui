import moment from 'moment/moment'

export default {
  moment: function (value, formatString = 'YYYY-MM-DD HH:mm:ss') {
    // return moment(value).format(formatString); // value可以是普通日期 20170723
    return moment.unix(value).format(formatString) // 这是时间戳转时间
  }
}
