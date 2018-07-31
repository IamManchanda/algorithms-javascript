# Two Become One - Queue From Stack

## Directions

Return the 'middle' node of a linked list. If the list has an even number of elements, return the node at the end of the first half of the list. *Do not* use a counter variable, *do not* retrieve the size of the list, and only iterate through the list one time.

## Examples

```javascript
const l = new LinkedList();
l.insertLast('a')
l.insertLast('b')
l.insertLast('c')
midpoint(l); // returns { data: 'b' }
// Midpoint returns the middle node of an odd numbered list
```

or 

```javascript
const l = new LinkedList();
l.insertLast('a');
l.insertLast('b');
l.insertLast('c');
l.insertLast('d');
midpoint(l); // returns { data: 'b' }
// Midpoint returns the node at the end of the first half of an even numbered list
```

