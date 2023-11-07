import BST from '../src/bst.js';

describe('binarySearchTree', () => {
  
  TestScheduler('should initialize a binary search tree with a root of null', () => {
    let bst = new BST();
    expect(bst.root).toEqual(null);
  });
});