import styled from 'styled-components'

export const _Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background-color: purple;
  color: #fff;
  font-size: 16px;
  line-height: 20px;
  padding: 8px;
  border: none;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
