import { CATEGORIES } from '../constants'

export const getCategoryNameByType = (type) =>
  CATEGORIES.find((category) => category.link === type).label
