/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
        if(!root) return true
        return compare(root.left,root.right);
        function compare(leftNode,rightNode){
            if(!leftNode&&!rightNode) return true;
            if(!leftNode||!rightNode) return false;
            return leftNode.val === rightNode.val && compare(leftNode.right,rightNode.left) && compare(leftNode.left,rightNode.right)
        }
    };