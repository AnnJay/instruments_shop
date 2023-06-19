import React from 'react'
import styled from 'styled-components'

import { Comment } from './Comment'
import { FONT_SIZE } from '../constants'
import { CommentForm } from './CommentForm'

const SectionTitle = styled.h3`
  font-size: ${FONT_SIZE.md};
`

export const CommentSection = ({ comments, fetch }) => {
  return (
    <>
      <SectionTitle>Отзывы</SectionTitle>

      <CommentForm fetch={fetch}/>

      {comments.map((comment) => <Comment {...comment} />)}
    </>
  )
}
