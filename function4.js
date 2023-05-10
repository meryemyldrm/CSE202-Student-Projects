//python
from functools import reduce

numbers = [1, 2, 3, 4, 5]
result = reduce(lambda x, y: x + y, numbers)
print(result)

//javascript
const numbers = [1, 2, 3, 4, 5];
const result = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(result);
