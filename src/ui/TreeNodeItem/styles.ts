import styled from 'styled-components'

export const _TreeNodeLabel = styled.p`
  display: flex;
  align-items: center;
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  gap: 8px;
`

export const _TreeLabelContent = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const _TreeNodeItem = styled.li<{ level: number }>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-left: ${({ level }) => `${level * 16}px`};
  counter-increment: list-item;
  ${_TreeNodeLabel} {
    &::before {
      content: counters(list-item, '.') '. ';
    }
  }
`

export const _Actions = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
`

export const _Children = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
