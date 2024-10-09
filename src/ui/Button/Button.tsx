import type { FC, ReactNode } from 'react'
import { _Button } from './styles'

type Props = {
  children?: ReactNode
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  onClick?: () => void
  disabled?: boolean
}

export const Button: FC<Props> = ({ children, leftIcon, rightIcon, disabled = false, onClick }) => {
  return (
    <_Button disabled={disabled} onClick={onClick}>
      {leftIcon}
      {children}
      {rightIcon}
    </_Button>
  )
}
