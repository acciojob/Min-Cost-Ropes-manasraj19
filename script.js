function mincost(arr) {
  const heap = [...arr];
  heap.sort((a, b) => a - b);

  let totalCost = 0;

  while (heap.length > 1) {
    const firstMin = heap.shift();
    const secondMin = heap.shift();

    const currentCost = firstMin + secondMin;
    totalCost += currentCost;

    heap.push(currentCost);
    heap.sort((a, b) => a - b);
  }

  return totalCost;
}

module.exports = mincost;

// Examples
console.log(mincost([4, 3, 2, 6]));  // Output: 29
console.log(mincost([1, 2, 3, 4, 5]));  // Output: 33