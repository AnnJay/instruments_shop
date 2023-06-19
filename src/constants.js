// Style constants
export const COMPONENT_COLORS = {
  navajo: '#FFDFB1',
  caramel: '#FFD495',
  chardonnay: '#FFC571',
  fallow: '#BF9F70',
  hotToddy: '#A67125',
  isabelle: '#EEECE7',
  grayOrange: '#E3E0D8',
}

export const FONT_COLORS = {
  primary: '#160B0A',
  secondary: '#432C26',
  title: '#432C26',
  body: '#38211D',
  link: '#486758',
  breadcrumbLink: '#2A62A3',
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
  {
    id: 1,
    label: 'Акустические гитары',
    link: 'acoustic',
    linkType: null,
    imgSrc: '#',
  },
  {
    id: 2,
    label: 'Электрогитары',
    link: 'electric',
    linkType: null,
    imgSrc: '#',
  },
  { id: 3, label: 'Бас-гитары', link: 'bas', linkType: null, imgSrc: '#' },
  {
    id: 4,
    label: 'Классические гитары',
    link: 'classic',
    linkType: null,
    imgSrc: '#',
  },
  { id: 5, label: 'Укулеле', link: 'ukulele', linkType: null, imgSrc: '#' },
]

export const CATEGORIES_CARD_DATA = {
  acoustic: {
    type: 'acoustic',
    imgSrc: '/images/categories/acoustic.png',
    description:
      'В широком ассортименте представлены классические акустические гитары, инструменты с металлическими струнами, шести и двенадцатиструнные, укулеле, левосторонние модели, со звукоснимателем и без. ',
  },
  electric: {
    type: 'electric',
    imgSrc: '/images/categories/electric.png',
    description:
      'При выборе электрогитары стоит уделить особое внимание материалу корпуса, стилю исполняемой музыки, качественным характеристикам инструмента.',
  },
  bas: {
    type: 'bas',
    imgSrc: '/images/categories/bas.png',
    description:
      'Просты в настройке и имеют теплое динамичное звучание. Кроме того, можно не опасаться, что из-за севшей батарейки инструмент выйдет из строя прямо посреди выступления.',
  },
  classic: {
    type: 'classic',
    imgSrc: '/images/categories/classic.png',
    description:
      'Классические гитары хороши своей простотой и универсальностью.',
  },
  ukulele: {
    type: 'ukulele',
    imgSrc: '/images/categories/ukulele.png',
    description: 'Мягкий и жизнерадостный тембр, достаточно низкая громкость.',
  },
}

export const ADDITIONAL_MENU_ITEMS = [
  { id: 6, label: 'О нас', link: 'about-us', linkType: null },
]

// Contact information
export const ADDRESS_LINE = 'Магазин гитар, г.Новочеркасск, ул. Московская, 7.'
export const PHONE_NUMBER_VIEW = '+7-835-456-xx-xx'

export const CONTACTS = [
  { id: 8, label: PHONE_NUMBER_VIEW, link: '88002000600', linkType: 'tel' },
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
    content: ADDRESS_LINE,
    linksList: CONTACTS,
  },
]

// Links for home page slider
export const SLIDER_IMAGES = [
  '/images/homeSlider/slider_acoustic.webp',
  '/images/homeSlider/slider_electric.webp',
  '/images/homeSlider/slider_bas.webp',
  '/images/homeSlider/slider_ukulele.webp',
]
