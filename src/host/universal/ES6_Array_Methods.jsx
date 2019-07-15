// Support for filter()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//
Array.prototype.filter = function(param) {
  var filtered = [];
  for (let i = 0; i < this.length; i++)
    if (param(this[i], i, this)) filtered.push(this[i]);
  return filtered;
};
