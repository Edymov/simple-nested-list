import { TreeNode } from '../types'
import { atom } from 'nanostores'
import { nanoid } from 'nanoid'
import { addNodeToTree, deleteTreeNode } from '../helpers'

export const treeStore = atom<Array<TreeNode>>([])

export const createNode = () => {
  const tree = treeStore.get()
  treeStore.set([...tree, { id: nanoid(), label: 'root' }])
}

export const addNode = (sourceId: string, label = 'Node') => {
  const tree = treeStore.get()

  const newTree = addNodeToTree(tree, sourceId, {
    id: nanoid(),
    label
  })

  treeStore.set([...newTree])
}

export const deleteNode = (id) => {
  const tree = treeStore.get()

  const newTree = deleteTreeNode(tree, id)

  treeStore.set([...newTree])
}
