# Circular Linked List

## Directions

Given a linked list, return true if the list is circular, false if it is not.

## Examples

```javascript
const list = new LinkedList();
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
list.head = a;
a.next = b;
b.next = c;
c.next = b;
circular(list) // true
```
