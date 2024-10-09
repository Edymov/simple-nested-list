import { TreeNode } from '../types'

export const addNodeToTree = (tree: TreeNode[], sourceId: string, newNode: TreeNode) => {
  if (!tree.length) return []

  const parentIndex = tree.findIndex((node) => node.id === sourceId)

  if (parentIndex !== -1) {
    if (!tree[parentIndex].children) {
      tree[parentIndex].children = []
    }
    tree[parentIndex].children.push(newNode)
  } else {
    for (const node of tree) {
      if (node.children) {
        addNodeToTree(node.children, sourceId, newNode)
      }
    }
  }

  return tree
}

export const deleteTreeNode = (tree: TreeNode[], id: string) => {
  if (!tree.length) return []

  const index = tree.findIndex((node) => node.id === id)
  if (index !== -1) {
    tree.splice(index, 1)
  } else {
    tree.forEach((node) => {
      if (node.children) {
        node.children = deleteTreeNode(node.children, id)
      }
    })
  }
  return tree
}
