import React from 'react'
import styled from 'styled-components'

import { PageLayout } from '../pageLayout'
import { CategoryCard, HomePageSlider } from '../components'
import { CATEGORIES_CARD_DATA, FONT_COLORS, SLIDER_IMAGES } from '../constants'
import { MainTitle } from '../pageLayout'

export const GridContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    'acoustic classic  classic bas'
    'acoustic classic  classic bas'
    'acoustic ukulele  ukulele bas'
    'acoustic ukulele  ukulele bas'
    'electric electric electric electric'
    'electric electric electric electric';

  .category {
    min-height: 150px;
    gap: 30px;
    font-weight: 500;
    color: ${FONT_COLORS.primary};
    font-size: 20px;
    line-height: 1.3;
  }

  .category__acoustic {
    grid-area: acoustic;
  }

  .category__classic {
    grid-area: classic;
  }

  .category__ukulele {
    grid-area: ukulele;
  }

  .category__bas {
    grid-area: bas;
  }

  .category__electric {
    grid-area: electric;
  }

  .category__acoustic,
  .category__bas {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;


    img {
      height: 450px;
    }
  }

  .category__bas {
    flex-direction: column-reverse;

    img {
      height: 450px;
    }
  }

  .category__electric,
  .category__classic,
  .category__ukulele {
    padding: 15px;
    display: flex;
    justify-content: space-between;

    img {
      width: 100%;
    }
  }

  .category__electric {
    flex-direction: row-reverse;
    align-items: flex-end;

    img {
      width: 450px;
    }
  }
`

export const HomePage = () => {
  const content = (
    <>
      <MainTitle>
        Широкий ассортимент струнных инструментов на любой вкус
      </MainTitle>
      <HomePageSlider images={SLIDER_IMAGES} />

      <GridContainer>
        <CategoryCard
          elementClass="category category__acoustic"
          {...CATEGORIES_CARD_DATA.acoustic}
        />
        <CategoryCard
          elementClass="category category__classic "
          {...CATEGORIES_CARD_DATA.classic}
        />
        <CategoryCard
          elementClass="category category__ukulele"
          {...CATEGORIES_CARD_DATA.ukulele}
        />
        <CategoryCard
          elementClass="category category__bas"
          {...CATEGORIES_CARD_DATA.bas}
        />
        <CategoryCard
          elementClass="category category__electric"
          {...CATEGORIES_CARD_DATA.electric}
        />
      </GridContainer>
    </>
  )

  return <PageLayout content={content} />
}
