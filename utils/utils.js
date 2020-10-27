import utils from './xm-utils'

const rclass = /[\t\r\n\f]/g
const rnotwhite = (/\S+/g)

function getClass (elem) {
  return (elem.getAttribute && elem.getAttribute('class')) || ''
}

export default utils.extend({}, utils, {

})
