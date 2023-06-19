import { MENU_ITEMS } from '../constants'

export const getCategoryNameByType = (type) =>
  MENU_ITEMS.find((category) => category.link === type).label
