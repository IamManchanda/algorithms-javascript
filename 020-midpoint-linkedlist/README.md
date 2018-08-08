# Midpoint of a Linked List

## Directions

Return the 'middle' node of a linked list. If the list has an even number of elements, return the node at the end of the first half of the list. *Do not* use a counter variable, *do not* retrieve the size of the list, and only iterate through the list one time.

## Examples

```javascript
const list = new LinkedList();
list.insertLast('a')
list.insertLast('b')
list.insertLast('c')
midpoint(list); // returns { data: 'b' }
// Midpoint returns the middle node of an odd numbered list
```

or 

```javascript
const list = new LinkedList();
list.insertLast('a');
list.insertLast('b');
list.insertLast('c');
list.insertLast('d');
midpoint(list); // returns { data: 'b' }
// Midpoint returns the node at the end of the first half of an even numbered list
```

