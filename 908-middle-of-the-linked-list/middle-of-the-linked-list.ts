

function middleNode(head: ListNode | null): ListNode | null {
  let node = head;
  let counter = 1;
  while (node !== null) {
    node = node.next;
    counter++;
  }
  let id = counter % 2 === 0 ? counter / 2 : counter / 2 + 0.5;
  node = head;
  counter = 1;
  console.log(id);
  const result = [];
  while (node !== null) {
    if (counter === id) {
      return node;
    }
    counter++;
    node = node.next
  }
  return null;
}