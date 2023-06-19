import React from 'react'
import styled from 'styled-components'

import { COMPONENT_COLORS, FONT_COLORS, FONT_SIZE } from '../constants'

export const CommentContainer = styled.div`
  padding: 12px;
  margin-top: 20px;
  border-radius: 16px;
  background-color: ${COMPONENT_COLORS.isabelle};

  .comment__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .comment__name {
    font-weight: 800;
    font-size: ${FONT_SIZE.sm};
    color: ${COMPONENT_COLORS.hotToddy};
  }

  .comment__content,
  .comment__date {
    font-size: ${FONT_SIZE.xs};
    color: ${FONT_COLORS.secondary};
  }
`

export const Comment = ({ name, content, createdAt }) => {
  return (
    <CommentContainer>
      <div className="comment__header">
        <span className="comment__name">{name}</span>

        <span className="comment__date">{createdAt}</span>
      </div>

      <p className="comment__content">{content}</p>
    </CommentContainer>
  )
}
