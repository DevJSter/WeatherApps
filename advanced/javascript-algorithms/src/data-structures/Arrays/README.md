
# Arrays

This data structure organizes data in memory in a sequential manner where data is stored in consecutive memory locations. Because Arrays are mostly used data structures they come inbuilt in many programming languages.In JavaScript, arrays are objects which makes then reference types because they are not primitive types, they are created by the programmer. Arrays are stored in adjucent blocks of memory.

## Operations:

### Lookup/Access:

`Iet arr[2]` has time complexity of O(1) because the comp know exactly where the data is (at index 2)

### Push(adding elements at the end of the array):

`Arr.push(“z”)` has time complexity of O(1) because the computer knows the last index.
Can be O(n) for static arrays(has fixed size to add to this array the entire array is copied to a new location with more memory) even with dynamic arrays at rear times.

### Pop(removing elements at the end of the array):

`Arr.pop(“z”)` has time complexity of O(1) because the computer knows the last index

### Insert:

Insertion with arrays has bigO of O(n) because it has to loop through the rest of the array elements to change there indices

### Unshift/shift(adding and removing elements at the beginning of the array):

Adding and removing elements at the beginning of the array has bigO of O(n) because it has to loop through the rest of the array elements to change there indices

### Deletion:

Deleting elements from an array has bigO(n) because it has to loop through the rest of the array elements to change there indices.
So arrays are good for access and adding elements at the end.

## References

- [Medium](https://medium.com/@tonyjemba/the-array-data-structure-in-javascript-6dbbe30c2138)