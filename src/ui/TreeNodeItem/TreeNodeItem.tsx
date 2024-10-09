import { FC, useState, memo, useCallback } from 'react'
import { LuArrowDown, LuArrowRight, LuTrash2 } from 'react-icons/lu'
import { Button } from '../Button'
import { AddTooltip } from './AddTooltip'
import { TreeNode } from '../../types'
import { _Actions, _Children, _TreeNodeItem, _TreeNodeLabel, _TreeLabelContent } from './styles'

type Props = {
  data: TreeNode
  level?: number
  onAdd: (node: TreeNode) => void
  onRemove: (node: TreeNode) => void
}

export const TreeNodeItem: FC<Props> = memo(({ data, onAdd, onRemove, level = 0 }) => {
  const [open, setOpen] = useState(false)
  const handleToggleClick = useCallback(() => {
    setOpen((prev) => !prev)
  }, [])

  const handleAdd = useCallback((label: string) => {
    if (!data.children && !open) {
      handleToggleClick()
    }
    onAdd({ id: data.id, label })
  }, [])

  const handleRemove = useCallback((node: TreeNode) => {
    onRemove(node)
  }, [])

  return (
    <_TreeNodeItem level={level}>
      <_TreeNodeLabel>
        {Number(data?.children?.length) > 0 && (
          <Button leftIcon={open ? <LuArrowDown /> : <LuArrowRight />} onClick={handleToggleClick} />
        )}
        <_TreeLabelContent>{data.label}</_TreeLabelContent>

        <_Actions>
          <AddTooltip onClick={handleAdd} disabled={level >= 7} />
          {level > 0 && <Button leftIcon={<LuTrash2 />} onClick={() => handleRemove(data)} />}
        </_Actions>
      </_TreeNodeLabel>
      {level >= 7 && <p>Вложенность не может быть более 8</p>}

      {open && (
        <_Children>
          {data.children?.map((node) => (
            <TreeNodeItem key={node.id} data={node} onAdd={onAdd} onRemove={handleRemove} level={level + 1} />
          ))}
        </_Children>
      )}
    </_TreeNodeItem>
  )
})
