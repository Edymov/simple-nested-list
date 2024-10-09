import { useStore } from '@nanostores/react'

import { _Container, _Segment } from './styles'
import { TreeNodeItem } from './ui/TreeNodeItem'
import { Button } from './ui/Button'
import { treeStore, createNode, addNode, deleteNode } from './stores/treeStore'
import { TreeNode } from './types'

const App = () => {
  const tree = useStore(treeStore)
  const handleAdd = (node: TreeNode) => addNode(node.id, node.label)
  const handleDelete = (node: TreeNode) => deleteNode(node.id)

  return (
    <_Segment>
      <_Container>
        {tree.length > 0 ? (
          <ol>
            {tree.map((treeNode) => (
              <TreeNodeItem key={treeNode.id} data={treeNode} onAdd={handleAdd} onRemove={handleDelete} />
            ))}
          </ol>
        ) : (
          <Button onClick={createNode}>Создать дерево</Button>
        )}
      </_Container>
    </_Segment>
  )
}

export default App
