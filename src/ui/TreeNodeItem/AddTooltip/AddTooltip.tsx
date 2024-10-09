import { FC, useState, KeyboardEvent } from 'react'
import { LuPlus, LuX, LuCheck } from 'react-icons/lu'
import { Tooltip } from 'react-tippy'
import { Button } from '../../Button'

import { _Content, _Input } from './styles'
import 'react-tippy/dist/tippy.css'

type Props = {
  onClick: (label: string) => void
  disabled: boolean
}

export const AddTooltip: FC<Props> = ({ onClick, disabled }) => {
  const [open, setOpen] = useState(false)
  const [label, setLabel] = useState('')
  const handleToggleClick = () => {
    setOpen((prev) => !prev)
  }

  const handleClose = () => {
    handleToggleClick()
    setLabel('')
  }

  const handleAdd = () => {
    onClick(label)
    handleClose()
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAdd()
    }
    if (e.key === 'Escape') {
      handleClose()
    }
  }

  return (
    <Tooltip
      open={open}
      interactive
      position="bottom"
      arrow
      trigger="click"
      html={
        <_Content>
          <_Input value={label} onChange={(e) => setLabel(e.target.value)} onKeyDown={handleKeyDown} />
          <Button leftIcon={<LuCheck />} onClick={handleAdd} />
          <Button leftIcon={<LuX />} onClick={handleToggleClick} />
        </_Content>
      }
    >
      <Button leftIcon={<LuPlus />} onClick={handleToggleClick} disabled={disabled} />
    </Tooltip>
  )
}
