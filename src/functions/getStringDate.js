export const getStringDate = () => {
  const date = new Date()

  const year = date.getFullYear()
  const day = date.getDate()
  const month = date.getMonth()

  return `${year}-${day}-${month}`
}
