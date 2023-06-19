import camelCase from 'lodash.camelcase'
import mapKeys from 'lodash.mapkeys'

export const convertObjectsFieldsToCamelCase = (obj) =>
  mapKeys(obj, (_, key) => camelCase(key))

export const convertResponseFieldsToCamelCase = (response) => {
  const convertedData = []

  response.forEach((item) => {
    convertedData.push(convertObjectsFieldsToCamelCase(item))
  })

  return convertedData
}
