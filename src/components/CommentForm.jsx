import { useContext, useState } from 'react'
import styled from 'styled-components'

import { COMPONENT_COLORS, FONT_COLORS, FONT_SIZE } from '../constants'
import { InstrumentContext } from '../context'
import { InstrumentsInstance } from '../api'
import { getStringDate } from '../functions'
import { useParams } from 'react-router-dom'
import { openErrorNotification } from '../functions/openErrorNotification'

const Container = styled.div`
  font-size: ${FONT_SIZE.sm};
  margin-bottom: 50px;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  input,
  textarea {
    flex-grow: 1;
    resize: none;
    height: 70px;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 20px;
    font-size: inherit;
    font-family: inherit;
    border: 2px solid ${COMPONENT_COLORS.caramel};
    line-height: 1.3;
  }

  input {
    max-width: 400px;
    height: 40px;
  }

  input:focus,
  textarea:focus {
    border-color: ${COMPONENT_COLORS.hotToddy};
    outline: none;
  }

  button {
    color: ${COMPONENT_COLORS.caramel};
    padding: 12px;
    background: ${COMPONENT_COLORS.caramel};
    border: none;
    color: ${FONT_COLORS.primary};
    border-radius: 4px;
    font-size: ${FONT_SIZE.sm};
    cursor: pointer;
    width: 170px;
  }
`

export const CommentForm = ({ fetch }) => {
  const { instrument } = useContext(InstrumentContext)

  const [content, setContent] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    InstrumentsInstance.post('/comments', {
      name,
      content,
      created_at: getStringDate(),
      instrument_id: instrument.id,
    })
      .then(() => {
        setContent('')
        setName('')
        fetch()
      })
      .catch((error) => openErrorNotification(error.message, 'REQUEST_ERROR'))
      .finally(() => {
        setContent('')
        setName('')
      })
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Имя(обязательно)</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Комментарий</label>
          <textarea
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <button type="submit">
            Отправить
          </button>
        </div>
      </form>
    </Container>
  )
}
