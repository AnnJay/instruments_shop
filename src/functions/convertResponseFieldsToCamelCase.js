import camelCase from 'lodash.camelcase'
import mapKeys from 'lodash.mapkeys'

export const convertResponseFieldsToCamelCase = (response) => {
  const convertedData = []

  response.forEach((item) => {
    convertedData.push(mapKeys(item, (v, k) => camelCase(k)))
  })

  return convertedData
}
