var myFunctions = {

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  first :function(array, n) {
    return n === undefined ? array[0] : array.slice(0, n);
  },

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  last: function(array, n) {
    return n === undefined ? array[array.length-1] : n > array.length ? array : array.splice(array.length-n, n);
  },

  // Produce a duplicate-free version of the array.
  uniq: function(array) {
    var dupFreeArray = [];
    array.forEach(function(item){
      if (dupFreeArray.indexOf(item) === -1) {
        dupFreeArray.push(item);
      }
    });
    return dupFreeArray;
  },

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people objects
  // (which have a name and an age) and return an array of just their ages
  pluck: function(array, key) {
    return collection.map(function(item){
      return item[key];
    });
  },

 // Determine if the array contains a given value (using `===`).
 // TIP: There are multiple solutions to this problem, ranging from one line to using reduce();
  contains: function(array, target) {
    return collection.reduce(function(wasFound, item) {
      if(wasFound) {
        return true;
      }
      return item === target;
    }, false);
  },

  // Turns a multidimensional array into a single array
  // flatten([1,2,[3,4,[5,6]]]) returns [1,2,3,4,5,6]
  // Hint: Use Array.isArray to check if something is an array
  // Also, you will need to use recursion
  // when you find an array inside of an array
  flatten: function(array) {
    var flatArray = [];
    function addItems(arr) {
      arr.forEach(function(item) {
        return Array.isArray(item) ? addItems(item) : flatArray.push(item);
      });
    }
    addItems(nestedArray);
    return flatArray;
  }
};
module.exports = myFunctions;
