// Style constants
export const COMPONENT_COLORS = {
  navajo: '#FFDFB1',
  caramel: '#FFD495',
  chardonnay: '#FFC571',
  fallow: '#BF9F70',
  hotToddy: '#A67125',
}

export const FONT_COLORS = {
  primary: '#160B0A',
  secondary: '#432C26',
  title: '#432C26',
  body: '#38211D',
  link: '#486758',
  breadcrumbLink: '#2A62A3'
}

export const FONT_SIZE = {
  xl: '48px',
  lg: '32px',
  md: '28px',
  sm: '18px',
  xs: '16px',
}

// Page layout constants and contact data
export const CATEGORIES = [
  { id: 1, label: 'Акустические гитары', link: '#', linkType: null },
  { id: 2, label: 'Электрогитары', link: '#', linkType: null },
  { id: 3, label: 'Бас-гитары', link: '#', linkType: null },
  { id: 4, label: 'Классические гитары', link: '#', linkType: null },
  { id: 5, label: 'Укулеле', link: '#', linkType: null },
]

export const ADDITIONAL_MENU_ITEMS = [
  { id: 6, label: 'О нас', link: '/about-us', linkType: null },
]

export const CONTACTS = [
  { id: 8, label: '+7-835-456-xx-xx', link: '88002000600', linkType: 'tel' },
]

export const FOOTER_BLOCKS = [
  {
    title: 'Каталог',
    linksList: CATEGORIES,
  },
  {
    title: 'О нас',
    content:
      'Магазин гитар и музыкальных инструментов. Исключительно душевная атмосфера.',
  },
  {
    title: 'Контакты',
    content: 'Магазин гитар, г.Новочеркасск, ул. Московская, 7.',
    linksList: CONTACTS,
  },
]
